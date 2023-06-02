import './Nvidia1660Ti.scss';
import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas1660Ti = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Nvidia GeForce GTX 1660 Ti?',
      respuesta: 'La Nvidia GeForce GTX 1660 Ti cuenta con 1536 núcleos CUDA, una velocidad de reloj base de 1500 MHz y una velocidad de reloj de impulso de 1770 MHz. Esta tarjeta gráfica está equipada con 6 GB de memoria GDDR6 y tiene un ancho de banda de memoria de 288 GB/s, lo que la hace ideal para juegos de alta calidad y tareas de computación general.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cuál es el rendimiento de la Nvidia GeForce GTX 1660 Ti en comparación con otras tarjetas gráficas de su segmento?',
      respuesta: 'La Nvidia GeForce GTX 1660 Ti ofrece un rendimiento sólido en juegos de 1080p y también es capaz de manejar algunos juegos en resoluciones más altas. Si bien no es tan potente como las tarjetas de gama alta, proporciona un buen equilibrio entre rendimiento y precio, siendo una opción popular para aquellos que buscan un rendimiento sólido sin gastar demasiado.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Es compatible la Nvidia GeForce GTX 1660 Ti con la tecnología de trazado de rayos (ray tracing)?',
      respuesta: 'No, la Nvidia GeForce GTX 1660 Ti no es compatible con la tecnología de trazado de rayos. A diferencia de las tarjetas gráficas de la serie RTX de Nvidia, la GTX 1660 Ti no cuenta con núcleos RT dedicados, lo que limita su capacidad para renderizar efectos de iluminación avanzados mediante trazado de rayos en tiempo real.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la Nvidia GeForce GTX 1660 Ti?',
      respuesta: 'La Nvidia GeForce GTX 1660 Ti es capaz de admitir hasta tres monitores simultáneamente. Dispone de puertos de visualización múltiple, como DisplayPort, HDMI y DVI, lo que permite una configuración versátil de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la Nvidia GeForce GTX 1660 Ti?',
      respuesta: ' La Nvidia GeForce GTX 1660 Ti tiene un consumo de energía relativamente bajo en comparación con tarjetas gráficas más potentes. Se recomienda una fuente de alimentación de calidad de al menos 450 vatios para alimentar adecuadamente la tarjeta. Además, la GTX 1660 Ti no requiere conectores de alimentación PCIe adicionales, lo que facilita su instalación en sistemas con fuentes de alimentación limitadas.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Es compatible la Nvidia GeForce GTX 1660 Ti con tecnologías de sincronización como G-Sync?',
      respuesta: 'Sí, la Nvidia GeForce GTX 1660 Ti es compatible con la tecnología G-Sync de NVIDIA. G-Sync sincroniza la frecuencia de actualización del monitor con la velocidad de fotogramas generada por la tarjeta gráfica, eliminando el desgarro de pantalla y ofreciendo una experiencia de juego más suave.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuál es la temperatura de funcionamiento normal de la Nvidia GeForce GTX 1660 Ti?',
      respuesta: 'La temperatura de funcionamiento normal de la Nvidia GeForce GTX 1660 Ti puede variar dependiendo del diseño de enfriamiento específico del fabricante y las condiciones ambientales. En general, se espera que la tarjeta opere dentro de un rango de temperatura seguro, alrededor de los 60-75 grados Celsius bajo cargas intensas. Es importante asegurarse de que la carcasa de la computadora tenga una buena ventilación para mantener las temperaturas bajo control.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Qué juegos puedo jugar con la Nvidia GeForce GTX 1660 Ti?',
      respuesta: 'La Nvidia GeForce GTX 1660 Ti es capaz de manejar una amplia gama de juegos modernos en resolución 1080p con configuraciones gráficas altas. Puedes disfrutar de títulos populares como Fortnite, Apex Legends, Overwatch, PUBG, Call of Duty: Warzone, y muchos otros con un rendimiento suave y fluido. Sin embargo, para juegos más exigentes en términos de gráficos, es posible que debas ajustar algunas configuraciones para obtener un rendimiento óptimo.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es el precio aproximado de la Nvidia GeForce GTX 1660 Ti?',
      respuesta: 'El precio de la Nvidia GeForce GTX 1660 Ti puede variar según el fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, se encuentra en el rango de precios de gama media, oscilando alrededor de los 250-300 dólares estadounidenses. Sin embargo, es importante verificar los precios actuales en tiendas y distribuidores autorizados, ya que pueden fluctuar debido a la demanda y la disponibilidad.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la diferencia entre la Nvidia GeForce GTX 1660 Ti y la Nvidia GeForce RTX 2060?',
      respuesta: 'La principal diferencia entre la Nvidia GeForce GTX 1660 Ti y la Nvidia GeForce RTX 2060 radica en su capacidad para el trazado de rayos. Mientras que la GTX 1660 Ti no cuenta con núcleos RT dedicados para el trazado de rayos en tiempo real, la RTX 2060 sí los tiene, lo que le permite renderizar efectos de iluminación avanzados. Además, la RTX 2060 suele ofrecer un rendimiento ligeramente superior en juegos gracias a sus núcleos CUDA adicionales. Sin embargo, la GTX 1660 Ti suele ser más asequible en términos de precio, lo que la convierte en una opción popular para aquellos que buscan un buen rendimiento sin gastar demasiado.',
    }
  ];

export const Pregunta1660Ti = () => {
  const { preguntaId } = useParams();
  const preguntaActual = preguntas1660Ti.find((pregunta) => pregunta.id === preguntaId);
  const currentIndex = preguntas1660Ti.findIndex((pregunta) => pregunta.id === preguntaId);
  const previousQuestionId = currentIndex > 0 ? preguntas1660Ti[currentIndex - 1].id : null;
  const nextQuestionId = currentIndex < preguntas1660Ti.length - 1 ? preguntas1660Ti[currentIndex + 1].id : null;


  return (
      
      <div className='Container'>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
        <div className='adelanteAtras'>
        {previousQuestionId && (
          <Link to={`/placas-de-video/nvidia-1660-ti/${previousQuestionId}`}>
            <button className='atras'>
              <i className="atrasI bi bi-arrow-left"></i>
              <span>Anterior pregunta</span>
            </button>
          </Link> )}
          {nextQuestionId && (
          <Link to={`/placas-de-video/nvidia-1660-ti/${nextQuestionId}`}>
            <button className='adelante'>
              <span>Siguiente pregunta</span>
              <i className="adelanteI bi bi-arrow-right"></i>
            </button>
          </Link>)}
        </div>
        <Link to={`/placas-de-video/nvidia-1660-ti`}>
          <button className='volver'>
            Volver
          </button>
        </Link>
      </div>
)};

const Preguntas1660Ti = () => {
    return (
      <div className='preguntas'>
        <img src='/img/NVIDIA.png' alt='NVIDIA' width={300} height={150}/>
        {preguntas1660Ti.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/nvidia-1660-ti/${pregunta.id}`}>{pregunta.titulo}</Link>
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

  const Nvidia1660Ti = () => {
    return (
      <div className='1660Ti'>
        <div className='Container'>
            <Preguntas1660Ti />
            <hr />
            <Routes>
                {preguntas1660Ti.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta1660Ti />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default Nvidia1660Ti;