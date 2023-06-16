import { Route, Link, useParams, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const preguntas1650Super = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Nvidia GeForce GTX 1650 Super?',
      respuesta: 'La Nvidia GeForce GTX 1650 Super es una tarjeta gráfica de gama media que cuenta con 1280 núcleos CUDA y una velocidad de reloj base de 1530 MHz. Esta tarjeta viene con 4 GB de memoria GDDR6 y un ancho de banda de memoria de 192 GB/s, lo que la hace adecuada para juegos y tareas computacionales de nivel medio.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cómo se compara el rendimiento de la Nvidia GeForce GTX 1650 Super con otras tarjetas gráficas de su segmento?',
      respuesta: 'La Nvidia GeForce GTX 1650 Super ofrece un buen rendimiento en juegos de nivel medio y es capaz de ejecutar la mayoría de los juegos modernos a resoluciones 1080p con configuraciones gráficas decentes. Si bien no es la tarjeta más potente en su segmento, proporciona un equilibrio sólido entre rendimiento y precio.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Es compatible la Nvidia GeForce GTX 1650 Super con la tecnología de trazado de rayos (ray tracing)?',
      respuesta: 'No, la Nvidia GeForce GTX 1650 Super no es compatible con la tecnología de trazado de rayos. Esta tarjeta no cuenta con los núcleos RT necesarios para realizar el trazado de rayos en tiempo real. Sin embargo, sigue siendo capaz de ofrecer un buen rendimiento en juegos sin ray tracing.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la Nvidia GeForce GTX 1650 Super?',
      respuesta: 'La Nvidia GeForce GTX 1650 Super es capaz de admitir hasta tres monitores simultáneamente. Dispone de múltiples puertos de visualización, incluidos DisplayPort, HDMI y DVI, lo que permite una conexión versátil y configuraciones de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la Nvidia GeForce GTX 1650 Super?',
      respuesta: 'La Nvidia GeForce GTX 1650 Super tiene un consumo de energía bastante bajo en comparación con tarjetas gráficas más potentes. Se recomienda una fuente de alimentación de al menos 350 vatios de calidad para alimentar adecuadamente la tarjeta. Además, esta tarjeta no requiere conectores de alimentación PCIe adicionales, lo que facilita su instalación en sistemas con fuentes de alimentación limitadas.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Es compatible la Nvidia GeForce GTX 1650 Super con tecnologías de sincronización como G-Sync?',
      respuesta: 'Sí, la Nvidia GeForce GTX 1650 Super es compatible con la tecnología G-Sync de NVIDIA. G-Sync sincroniza la frecuencia de actualización del monitor con la velocidad de fotogramas generada por la tarjeta gráfica, eliminando el desgarro de pantalla y proporcionando una experiencia de juego más suave.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuál es la temperatura de funcionamiento normal de la Nvidia GeForce GTX 1650 Super?',
      respuesta: 'La temperatura de funcionamiento normal de la Nvidia GeForce GTX 1650 Super puede variar según el diseño específico del fabricante y las condiciones ambientales. En general, se espera que la tarjeta gráfica opere dentro de un rango de temperatura seguro, alrededor de los 60-70 grados Celsius bajo cargas intensas. Es importante asegurarse de que la caja de la computadora tenga una buena ventilación para mantener las temperaturas bajo control.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Necesito actualizar mi fuente de alimentación para usar la Nvidia GeForce GTX 1650 Super?',
      respuesta: 'La Nvidia GeForce GTX 1650 Super tiene un consumo de energía moderado y puede funcionar correctamente con una fuente de alimentación de calidad de 350 vatios. No debería ser necesario actualizar la fuente de alimentación en la mayoría de los casos, a menos que ya esté operando cerca de su capacidad máxima o se planee agregar otros componentes de alto consumo de energía al sistema.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es el precio aproximado de la Nvidia GeForce GTX 1650 Super?',
      respuesta: 'El precio de la Nvidia GeForce GTX 1650 Super puede variar dependiendo del fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, se encuentra en el rango de precios de gama media, oscilando alrededor de los 200-250 dólares estadounidenses. Es importante verificar los precios actualizados en tiendas y distribuidores autorizados, ya que pueden cambiar con el tiempo debido a la demanda y la disponibilidad.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Qué juegos puedo jugar con la Nvidia GeForce GTX 1650 Super?',
      respuesta: 'La Nvidia GeForce GTX 1650 Super es capaz de manejar una amplia gama de juegos populares y actuales. Puede ejecutar la mayoría de los juegos modernos en resolución 1080p con configuraciones gráficas medias a altas, ofreciendo una experiencia de juego suave y fluida. Algunos ejemplos de juegos que puedes jugar con esta tarjeta incluyen Fortnite, Apex Legends, Counter-Strike: Global Offensive, League of Legends, Overwatch, Valorant y muchos otros. Sin embargo, para juegos más exigentes en términos de gráficos, es posible que debas ajustar las configuraciones gráficas para obtener un rendimiento óptimo.',
    }
  ];

export const Pregunta1650Super = () => {
  const { preguntaId } = useParams();
  const preguntaActual = preguntas1650Super.find((pregunta) => pregunta.id === preguntaId);
  const currentIndex = preguntas1650Super.findIndex((pregunta) => pregunta.id === preguntaId);
  const previousQuestionId = currentIndex > 0 ? preguntas1650Super[currentIndex - 1].id : null;
  const nextQuestionId = currentIndex < preguntas1650Super.length - 1 ? preguntas1650Super[currentIndex + 1].id : null;


  return (
      
      <div className='Container'>
        <HelmetProvider>
            <Helmet>
                <title>Tech View</title>
                <meta name="description" content={preguntaActual.titulo} />
            </Helmet>
        </HelmetProvider>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
        <div className='adelanteAtras'>
        {previousQuestionId && (
          <Link to={`/placas-de-video/nvidia-1650-super/${previousQuestionId}`}>
            <button className='atras'>
              <i className="atrasI bi bi-arrow-left"></i>
              <span>Anterior pregunta</span>
            </button>
          </Link> )}
          {nextQuestionId && (
          <Link to={`/placas-de-video/nvidia-1650-super/${nextQuestionId}`}>
            <button className='adelante'>
              <span>Siguiente pregunta</span>
              <i className="adelanteI bi bi-arrow-right"></i>
            </button>
          </Link>)}
        </div>
        <div className='volverEntrar'>
          <div className='volver'>
            <Link to={`/placas-de-video/nvidia-1650-super`}>
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

const Preguntas1650Super = () => {
    return (
      <div className='preguntas'>
        {preguntas1650Super.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/nvidia-1650-super/${pregunta.id}`}>{pregunta.titulo}</Link>
          </li>
        ))}
        <div className='volverEntrar' style={{margin:'30px'}}>
          <div className='volver'>
            <Link to={`/placas-de-video`}>
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

  const Nvidia1650Super = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <Preguntas1650Super />
            <hr />
            <Routes>
                {preguntas1650Super.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta1650Super />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default Nvidia1650Super;