import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas3070 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Nvidia GeForce RTX 3070?',
      respuesta: ' La Nvidia GeForce RTX 3070 cuenta con 5888 núcleos CUDA, una velocidad de reloj base de 1500 MHz y una velocidad de reloj de impulso de 1725 MHz. Esta tarjeta gráfica está equipada con 8 GB de memoria GDDR6 y tiene un ancho de banda de memoria de 448 GB/s, lo que la hace ideal para juegos de alta calidad, tareas de creación de contenido y aplicaciones de realidad virtual.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cuál es el rendimiento de la Nvidia GeForce RTX 3070 en comparación con otras tarjetas gráficas de su segmento?',
      respuesta: 'La Nvidia GeForce RTX 3070 ofrece un rendimiento excepcional en juegos de 1440p y también es capaz de manejar juegos en resoluciones 4K con configuraciones gráficas altas. Además, su arquitectura Ampere y características como el trazado de rayos y DLSS mejoran significativamente la calidad visual y el rendimiento en juegos compatibles.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuáles son las tecnologías destacadas de la Nvidia GeForce RTX 3070?',
      respuesta: 'La Nvidia GeForce RTX 3070 cuenta con tecnologías destacadas como el trazado de rayos en tiempo real, que permite efectos de iluminación más realistas; DLSS (Deep Learning Super Sampling), que utiliza IA para mejorar la calidad de imagen y aumentar el rendimiento; y NVIDIA Broadcast, que ofrece mejoras en el streaming y la transmisión en vivo, como la cancelación de ruido de fondo y el seguimiento de la cámara.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la Nvidia GeForce RTX 3070?',
      respuesta: 'La Nvidia GeForce RTX 3070 es capaz de admitir hasta cuatro monitores simultáneamente. Dispone de puertos de visualización múltiple, como DisplayPort 1.4a y HDMI 2.1, lo que permite una configuración versátil de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la Nvidia GeForce RTX 3070?',
      respuesta: 'Se recomienda una fuente de alimentación de calidad de al menos 650 vatios para alimentar adecuadamente la Nvidia GeForce RTX 3070. También es importante verificar que la fuente de alimentación cuente con los conectores de alimentación PCIe necesarios, que en el caso de la RTX 3070 son dos conectores de 8 pines.',
    },
    {
      id: 'pregunta6',
      titulo: '¿La Nvidia GeForce RTX 3070 es compatible con tecnologías de sincronización como G-Sync y FreeSync?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3070 es compatible tanto con G-Sync de NVIDIA como con FreeSync de AMD. Esto significa que puedes aprovechar la sincronización adaptativa en monitores compatibles para evitar el desgarro de pantalla y obtener una experiencia de juego más fluida.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Nvidia GeForce RTX 3070 es compatible con VR (Realidad Virtual)?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3070 es compatible con la mayoría de los sistemas de realidad virtual. Su rendimiento y capacidad de trazado de rayos la convierten en una excelente opción para disfrutar de juegos y aplicaciones de realidad virtual inmersivos.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Cuál es el precio aproximado de la Nvidia GeForce RTX 3070?',
      respuesta: 'El precio de la Nvidia GeForce RTX 3070 puede variar según el fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, se encuentra en el rango de precios de gama alta, oscilando alrededor de los 500-600 dólares estadounidenses. Sin embargo, es importante verificar los precios actuales en tiendas y distribuidores autorizados, ya que pueden fluctuar debido a la demanda y la disponibilidad.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la Nvidia GeForce RTX 3070 y la Nvidia GeForce RTX 3060 Ti?',
      respuesta: 'La principal diferencia entre la Nvidia GeForce RTX 3070 y la Nvidia GeForce RTX 3060 Ti radica en su rendimiento y especificaciones. La RTX 3070 es ligeramente más potente que la RTX 3060 Ti, con más núcleos CUDA y un rendimiento mejorado en juegos. Esto la convierte en una excelente opción para aquellos que buscan un mayor rendimiento en resoluciones más altas y una experiencia de juego más fluida. Sin embargo, la RTX 3070 también tiende a ser más cara que la RTX 3060 Ti. Ambas tarjetas ofrecen un rendimiento excepcional en su segmento y son opciones populares para los jugadores y creadores de contenido.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la capacidad de VRAM de la Nvidia GeForce RTX 3070 y cómo afecta al rendimiento?',
      respuesta: 'La Nvidia GeForce RTX 3070 cuenta con 8 GB de memoria GDDR6. Esta cantidad de VRAM es suficiente para manejar juegos modernos y tareas de creación de contenido con alta demanda de memoria. La capacidad de VRAM afecta directamente al rendimiento, especialmente en juegos con configuraciones gráficas más altas y resoluciones más altas. Una mayor capacidad de VRAM permite cargar y renderizar texturas de mayor resolución, lo que resulta en una mejor calidad visual y rendimiento en general. Sin embargo, es importante destacar que el rendimiento no solo depende de la cantidad de VRAM, sino también de otros factores como el ancho de banda de memoria y el rendimiento general de la tarjeta gráfica.',
    }
  ];

export const Pregunta3070 = () => {
  const { preguntaId } = useParams();
  const preguntaActual = preguntas3070.find((pregunta) => pregunta.id === preguntaId);
  const currentIndex = preguntas3070.findIndex((pregunta) => pregunta.id === preguntaId);
  const previousQuestionId = currentIndex > 0 ? preguntas3070[currentIndex - 1].id : null;
  const nextQuestionId = currentIndex < preguntas3070.length - 1 ? preguntas3070[currentIndex + 1].id : null;


  return (
      
      <div className='Container'>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
        <div className='adelanteAtras'>
        {previousQuestionId && (
          <Link to={`/placas-de-video/nvidia-3070/${previousQuestionId}`}>
            <button className='atras'>
              <i className="atrasI bi bi-arrow-left"></i>
              <span>Anterior pregunta</span>
            </button>
          </Link> )}
          {nextQuestionId && (
          <Link to={`/placas-de-video/nvidia-3070/${nextQuestionId}`}>
            <button className='adelante'>
              <span>Siguiente pregunta</span>
              <i className="adelanteI bi bi-arrow-right"></i>
            </button>
          </Link>)}
        </div>
        <div className='volverEntrar'>
          <div className='volver'>
            <Link to={`/placas-de-video/nvidia-3070`}>
              <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span> VOLVER
              </button>
            </Link>
          </div>
        </div>
        <amp-auto-ads type="adsense"
          data-ad-client="ca-pub-4820714602088067">
        </amp-auto-ads>
      </div>
  );
};

const Preguntas3070 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/NVIDIA.png' alt='NVIDIA' width={300} height={150}/>
        {preguntas3070.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/nvidia-3070/${pregunta.id}`}>{pregunta.titulo}</Link>
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

  const Nvidia3070 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <Preguntas3070 />
            <hr />
            <Routes>
                {preguntas3070.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta3070 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default Nvidia3070;