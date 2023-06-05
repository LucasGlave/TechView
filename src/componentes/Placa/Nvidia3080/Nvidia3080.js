import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas3080 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Nvidia GeForce RTX 3080?',
      respuesta: 'La Nvidia GeForce RTX 3080 cuenta con 8704 núcleos CUDA, una velocidad de reloj base de 1440 MHz y una velocidad de reloj de impulso de 1710 MHz. Esta tarjeta gráfica está equipada con 10 GB de memoria GDDR6X y tiene un ancho de banda de memoria de 760 GB/s, lo que la hace ideal para juegos de alta calidad, tareas de creación de contenido y aplicaciones de realidad virtual.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cuál es el rendimiento de la Nvidia GeForce RTX 3080 en comparación con otras tarjetas gráficas de su segmento?',
      respuesta: 'La Nvidia GeForce RTX 3080 ofrece un rendimiento excepcional en juegos de 1440p y 4K. Es capaz de manejar juegos exigentes con configuraciones gráficas altas y proporciona una experiencia de juego fluida y envolvente. Su arquitectura Ampere y características como el trazado de rayos y DLSS mejoran significativamente la calidad visual y el rendimiento en juegos compatibles.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuáles son las tecnologías destacadas de la Nvidia GeForce RTX 3080?',
      respuesta: 'La Nvidia GeForce RTX 3080 cuenta con tecnologías destacadas como el trazado de rayos en tiempo real, que permite efectos de iluminación más realistas; DLSS (Deep Learning Super Sampling), que utiliza IA para mejorar la calidad de imagen y aumentar el rendimiento; y NVIDIA Reflex, que reduce la latencia para una mayor capacidad de respuesta en juegos competitivos.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la Nvidia GeForce RTX 3080?',
      respuesta: 'La Nvidia GeForce RTX 3080 es capaz de admitir hasta cuatro monitores simultáneamente. Dispone de puertos de visualización múltiple, como DisplayPort 1.4a y HDMI 2.1, lo que permite una configuración versátil de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la Nvidia GeForce RTX 3080?',
      respuesta: ' Se recomienda una fuente de alimentación de calidad de al menos 750 vatios para alimentar adecuadamente la Nvidia GeForce RTX 3080. También es importante verificar que la fuente de alimentación cuente con los conectores de alimentación PCIe necesarios, que en el caso de la RTX 3080 son dos conectores de 8 pines.',
    },
    {
      id: 'pregunta6',
      titulo: '¿La Nvidia GeForce RTX 3080 es compatible con tecnologías de sincronización como G-Sync y FreeSync?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3080 es compatible tanto con G-Sync de NVIDIA como con FreeSync de AMD. Esto significa que puedes aprovechar la sincronización adaptativa en monitores compatibles para evitar el desgarro de pantalla y obtener una experiencia de juego más fluida.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Nvidia GeForce RTX 3080 es compatible con VR (Realidad Virtual)?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3080 es compatible con la mayoría de los sistemas de realidad virtual. Su potencia y capacidad de trazado de rayos la convierten en una excelente opción para disfrutar de juegos y aplicaciones de realidad virtual inmersivos.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Cuál es el precio aproximado de la Nvidia GeForce RTX 3080?',
      respuesta: 'El precio de la Nvidia GeForce RTX 3080 puede variar según el fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, se encuentra en el rango de precios de gama alta, oscilando alrededor de los 700-800 dólares estadounidenses. Sin embargo, es importante verificar los precios actuales en tiendas y distribuidores autorizados, ya que pueden fluctuar debido a la demanda y la disponibilidad.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la Nvidia GeForce RTX 3080 y la Nvidia GeForce RTX 3070?',
      respuesta: 'La principal diferencia entre la Nvidia GeForce RTX 3080 y la Nvidia GeForce RTX 3070 radica en su rendimiento y especificaciones. La RTX 3080 es más potente que la RTX 3070, con más núcleos CUDA, una mayor cantidad de VRAM y un rendimiento mejorado en juegos. Esto la convierte en una opción de gama alta para aquellos que buscan un rendimiento excepcional en resoluciones 4K y una experiencia de juego de alta calidad. Sin embargo, la RTX 3080 también tiende a ser más cara que la RTX 3070. Ambas tarjetas ofrecen un rendimiento impresionante en su segmento y son opciones populares para los jugadores y creadores de contenido.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Qué tipo de refrigeración utiliza la Nvidia GeForce RTX 3080 y cómo afecta al rendimiento y la temperatura?',
      respuesta: 'La Nvidia GeForce RTX 3080 utiliza sistemas de refrigeración avanzados, como el diseño de ventilador axial y cámaras de vapor, para mantener la tarjeta gráfica fresca durante sesiones de juego intensas. Estos sistemas de refrigeración eficientes ayudan a disipar el calor generado por la GPU y aseguran un funcionamiento estable y una temperatura óptima. Una mejor refrigeración contribuye a un rendimiento constante y evita problemas relacionados con el sobrecalentamiento, lo que garantiza una experiencia de juego suave y confiable.',
    }
  ];

export const Pregunta3080 = () => {
  const { preguntaId } = useParams();
  const preguntaActual = preguntas3080.find((pregunta) => pregunta.id === preguntaId);
  const currentIndex = preguntas3080.findIndex((pregunta) => pregunta.id === preguntaId);
  const previousQuestionId = currentIndex > 0 ? preguntas3080[currentIndex - 1].id : null;
  const nextQuestionId = currentIndex < preguntas3080.length - 1 ? preguntas3080[currentIndex + 1].id : null;


  return (
      
      <div className='Container'>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
        <div className='adelanteAtras'>
        {previousQuestionId && (
          <Link to={`/placas-de-video/nvidia-3080/${previousQuestionId}`}>
            <button className='atras'>
              <i className="atrasI bi bi-arrow-left"></i>
              <span>Anterior pregunta</span>
            </button>
          </Link> )}
          {nextQuestionId && (
          <Link to={`/placas-de-video/nvidia-3080/${nextQuestionId}`}>
            <button className='adelante'>
              <span>Siguiente pregunta</span>
              <i className="adelanteI bi bi-arrow-right"></i>
            </button>
          </Link>)}
        </div>
        <div className='volverEntrar'>
          <div className='volver'>
            <Link to={`/placas-de-video/nvidia-3080`}>
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

const Preguntas3080 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/NVIDIA.png' alt='NVIDIA' width={300} height={150}/>
        {preguntas3080.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/nvidia-3080/${pregunta.id}`}>{pregunta.titulo}</Link>
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

  const Nvidia3080 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <Preguntas3080 />
            <hr />
            <Routes>
                {preguntas3080.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta3080 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default Nvidia3080;