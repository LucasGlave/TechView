import axios from 'axios';

const sendUrlForIndexing = async (url) => {
  const apiKey = process.env.REACT_APP_INDEXING_API_KEY;

  try {
    const response = await axios.post(
      `https://indexing.googleapis.com/v3/urlNotifications:publish`,
      {
        url,
        type: 'URL_UPDATED',
      },
      {
        params: {
          key: apiKey,
        },
      }
    );

    console.log('URL notification sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending URL notification:', error);
  }
};

export { sendUrlForIndexing };