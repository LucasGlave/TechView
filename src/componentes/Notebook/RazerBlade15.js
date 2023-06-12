import { Route, Link, useParams, Routes } from 'react-router-dom';


const preguntasB15 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son los principales aspectos destacados de la Razer Blade 15?',
      respuesta: 'La Razer Blade 15 es conocida por ser una notebook gaming de alto rendimiento con un diseño elegante y delgado. Algunos de sus aspectos destacados son: \nPotencia de juego: La Razer Blade 15 viene equipada con potentes procesadores Intel Core i7 o i9, tarjetas gráficas NVIDIA GeForce RTX, y opciones de memoria RAM y almacenamiento rápido, lo que la hace adecuada para juegos exigentes y tareas intensivas. \n Pantalla de alta calidad: La notebook cuenta con una pantalla de alta resolución y alta frecuencia de actualización, lo que proporciona una experiencia visual nítida y fluida para juegos y contenido multimedia. \n Construcción premium: La Razer Blade 15 está construida con materiales de alta calidad y ofrece una excelente calidad de construcción. Su diseño delgado y elegante la convierte en una opción atractiva tanto para jugadores como para profesionales creativos. \n Teclado retroiluminado: La notebook presenta un teclado retroiluminado con teclas programables y una experiencia de escritura cómoda, lo que facilita la jugabilidad y el trabajo en entornos con poca luz. \n Conectividad versátil: La Razer Blade 15 incluye una variedad de puertos, como USB-A, USB-C, HDMI y Ethernet, lo que permite una fácil conexión de periféricos y dispositivos externos.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué sistema operativo viene preinstalado en la Razer Blade 15?',
      respuesta: 'La Razer Blade 15 generalmente viene con el sistema operativo Windows 10 preinstalado. Esto significa que tendrás acceso a todas las características y funciones del sistema operativo de Microsoft, así como a una amplia gama de aplicaciones y programas compatibles.',
    },
    {
      id: 'pregunta3',
      titulo: '¿La Razer Blade 15 ofrece opciones de actualización de RAM y almacenamiento?',
      respuesta: 'Sí, en la mayoría de los casos, la Razer Blade 15 ofrece opciones de actualización de RAM y almacenamiento. Puedes consultar las especificaciones y opciones disponibles al comprar la notebook para determinar qué configuración se ajusta mejor a tus necesidades. Algunos modelos pueden tener componentes soldados o limitaciones de actualización, por lo que es recomendable verificar la información antes de realizar la compra.',
    },
    {
      id: 'pregunta4',
      titulo: '¿La Razer Blade 15 es compatible con la realidad virtual (VR)?',
      respuesta: 'Sí, la Razer Blade 15 es compatible con la realidad virtual. Gracias a su potente hardware, incluyendo tarjetas gráficas NVIDIA GeForce RTX, puede ofrecer un rendimiento adecuado para experiencias de realidad virtual inmersivas. Sin embargo, es posible que debas verificar los requisitos específicos del dispositivo de realidad virtual que deseas utilizar para asegurarte de que sean compatibles con la notebook.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La Razer Blade 15 tiene problemas de sobrecalentamiento?',
      respuesta: 'Al igual que con cualquier notebook gaming de alto rendimiento, la Razer Blade 15 puede experimentar un calentamiento considerable durante sesiones de juego intensivas. Sin embargo, Razer ha diseñado la notebook con un sistema de refrigeración avanzado que utiliza ventiladores y disipadores de calor para mantener las temperaturas bajo control. Además, es recomendable utilizar la notebook en superficies planas y evitar bloquear las rejillas de ventilación para garantizar un flujo de aire adecuado.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Cuánto tiempo dura la batería de la Razer Blade 15?',
      respuesta: 'La duración de la batería de la Razer Blade 15 puede variar dependiendo de varios factores, como la configuración de hardware, el brillo de la pantalla y las tareas en ejecución. En general, la notebook está diseñada principalmente para un rendimiento máximo durante sesiones de juego y tareas intensivas, por lo que la duración de la batería puede ser relativamente corta en comparación con notebooks convencionales. En promedio, puedes esperar alrededor de 4 a 6 horas de duración de la batería en un uso ligero y hasta 2-3 horas en tareas más exigentes.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Razer Blade 15 tiene un teclado personalizable?',
      respuesta: 'Sí, la Razer Blade 15 cuenta con un teclado retroiluminado personalizable mediante el software Razer Synapse. Puedes ajustar la iluminación de cada tecla, crear efectos de iluminación personalizados y asignar macros a teclas programables para adaptar el teclado a tus preferencias y necesidades.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La Razer Blade 15 tiene una webcam incorporada?',
      respuesta: 'Sí, la Razer Blade 15 incluye una cámara web integrada en la parte superior de la pantalla. Esta cámara es útil para videollamadas, conferencias en línea y otras aplicaciones que requieren una cámara web. Sin embargo, ten en cuenta que la calidad de la cámara puede variar y es posible que desees considerar una cámara externa si necesitas una mayor calidad de imagen.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La Razer Blade 15 es compatible con actualizaciones de firmware y controladores?',
      respuesta: 'Sí, Razer proporciona actualizaciones de firmware y controladores para la Razer Blade 15 de forma regular. Estas actualizaciones suelen incluir mejoras de rendimiento, correcciones de errores y nuevas características. Es recomendable visitar el sitio web de soporte de Razer para mantener tu notebook actualizada con las últimas actualizaciones disponibles.',
    },
    {
      id: 'pregunta10',
      titulo: '¿La Razer Blade 15 tiene opciones de conectividad inalámbrica?',
      respuesta: 'Sí, la Razer Blade 15 ofrece conectividad inalámbrica a través de Wi-Fi y Bluetooth. Puedes conectarte a redes Wi-Fi para acceder a internet de alta velocidad y utilizar dispositivos Bluetooth, como auriculares o altavoces, para una experiencia inalámbrica conveniente.',
    }
  ];

export const PreguntaB15 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasB15.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasB15.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasB15[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasB15.length - 1 ? preguntasB15[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/razer-blade15/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/razer-blade15/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/razer-blade15`}>
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

const PreguntasB15 = () => {
    return (
      <div className='preguntas'>
        {preguntasB15.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/notebooks/razer-blade15/${pregunta.id}`}>{pregunta.titulo}</Link>
          </li>
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
  const RazerBlade15 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasB15 />
            <hr />
            <Routes>
                {preguntasB15.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasB15 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default RazerBlade15;