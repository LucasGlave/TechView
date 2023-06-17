import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const preguntasX360 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones técnicas de la HP Spectre x360?',
      respuesta: 'La HP Spectre x360 viene con una variedad de configuraciones, pero en general, ofrece procesadores Intel Core de última generación, opciones de memoria RAM de hasta 16 GB o más, almacenamiento en unidades de estado sólido (SSD) de alta velocidad y pantallas táctiles de alta resolución. También puede incluir características como lector de huellas digitales, webcam integrada y puertos USB-C.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cuál es la duración de la batería de la HP Spectre x360?',
      respuesta: 'La duración de la batería de la HP Spectre x360 puede variar según la configuración y el uso. En promedio, puedes esperar alrededor de 8 a 12 horas de duración de la batería con un uso ligero y menos tiempo con tareas intensivas, como juegos o edición de video. Sin embargo, ten en cuenta que estos números son aproximados y pueden variar según las condiciones y la configuración específica de tu dispositivo.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuáles son las opciones de conectividad de la HP Spectre x360?',
      respuesta: 'La HP Spectre x360 generalmente viene con una amplia gama de opciones de conectividad. Esto puede incluir puertos USB-C con soporte para Thunderbolt, puertos USB-A, salida HDMI, lector de tarjetas SD, conector de audio y conectividad inalámbrica a través de Wi-Fi y Bluetooth.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Qué sistema operativo se incluye con la HP Spectre x360?',
      respuesta: 'La HP Spectre x360 generalmente se ofrece con el sistema operativo Windows preinstalado, como Windows 10. Sin embargo, también puede haber opciones disponibles con otros sistemas operativos, como Linux. Asegúrate de verificar las opciones disponibles al adquirir la notebook.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La HP Spectre x360 tiene una pantalla táctil?',
      respuesta: 'Sí, la HP Spectre x360 generalmente viene con una pantalla táctil que permite una interacción táctil intuitiva con el sistema operativo y las aplicaciones. Esto facilita la navegación, el uso de gestos y la utilización de aplicaciones optimizadas para pantallas táctiles.',
    },
    {
      id: 'pregunta6',
      titulo: '¿La HP Spectre x360 tiene una cámara web de alta calidad?',
      respuesta: 'Sí, la HP Spectre x360 suele estar equipada con una cámara web de alta definición. Esto te permite realizar videollamadas y conferencias con una calidad de imagen nítida y clara. Algunos modelos incluso pueden tener características adicionales, como la capacidad de desactivar físicamente la cámara para mayor privacidad.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La HP Spectre x360 es adecuada para juegos?',
      respuesta: 'Si bien la HP Spectre x360 no está diseñada específicamente para juegos intensivos, algunos modelos pueden ofrecer un rendimiento suficiente para juegos casuales y menos exigentes. Sin embargo, si eres un jugador ávido, es posible que desees considerar una notebook con una tarjeta gráfica dedicada y un procesador más potente.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La HP Spectre x360 es adecuada para tareas de edición de video y diseño gráfico?',
      respuesta: 'Sí, la HP Spectre x360 puede ser adecuada para tareas de edición de video y diseño gráfico moderadas. Con su potente procesador y opciones de memoria RAM, puede manejar aplicaciones de edición de video y diseño gráfico, aunque es posible que no sea tan potente como una estación de trabajo dedicada.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La HP Spectre x360 ofrece opciones de actualización de hardware?',
      respuesta: 'Las opciones de actualización de hardware pueden variar según el modelo específico de la HP Spectre x360. Algunas configuraciones permiten la ampliación de la memoria RAM o el almacenamiento, mientras que otras pueden tener componentes soldados o no actualizables. Antes de realizar una compra, es recomendable verificar las opciones de actualización disponibles para el modelo en particular que estás considerando.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es el diseño y construcción de la HP Spectre x360?',
      respuesta: 'La HP Spectre x360 destaca por su elegante diseño y construcción de alta calidad. Por lo general, cuenta con un chasis de aluminio o magnesio que le brinda una apariencia sofisticada y durabilidad. Además, su diseño convertible permite que la pantalla se pueda girar 360 grados, lo que te brinda la flexibilidad de utilizarla como una notebook tradicional, una tableta o en modos intermedios como tienda de campaña o presentación. La bisagra es sólida y suave, lo que te permite ajustar la posición de la pantalla con facilidad. En cuanto al teclado, la HP Spectre x360 suele ofrecer una experiencia de escritura cómoda y precisa, con retroiluminación opcional para trabajar en entornos con poca luz. El panel táctil también es sensible y preciso, lo que facilita la navegación y la interacción con el sistema operativo. En resumen, la HP Spectre x360 combina un diseño elegante y moderno con una construcción robusta para brindar una experiencia premium tanto en términos de apariencia como de durabilidad.',
    }
  ];

export const PreguntaX360 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasX360.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasX360.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasX360[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasX360.length - 1 ? preguntasX360[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/hp-spectre-x360/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/hp-spectre-x360/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/hp-spectre-x360`}>
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span> VOLVER
                </button>
              </Link>
            </div>
          </div>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4820714602088067"
                crossOrigin="anonymous"></script>
            <ins className="adsbygoogle"
                style={{
                    display:"block", 
                    textAlign:'center'
                }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4820714602088067"
                data-ad-slot="4951345015">
            </ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
    );
};

const PreguntasX360 = () => {
    return (
      <div className='preguntas'>
        {preguntasX360.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li>
              <Link to={`/notebooks/hp-spectre-x360/${pregunta.id}`}>{pregunta.titulo}</Link>
            </li>
          </Card>
        ))}
        <div className='volverEntrar' style={{margin:'30px'}}>
          <div className='volver'>
            <Link to={`/notebooks`}>
              <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span> VOLVER
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const HPSpectrex360 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasX360 />
            <hr />
            <Routes>
                {preguntasX360.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasX360 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default HPSpectrex360;