import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas3090 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Nvidia GeForce RTX 3090?',
      respuesta: 'La Nvidia GeForce RTX 3090 cuenta con 10496 núcleos CUDA, una velocidad de reloj base de 1400 MHz y una velocidad de reloj de impulso de 1700 MHz. Esta tarjeta gráfica está equipada con 24 GB de memoria GDDR6X y tiene un ancho de banda de memoria de 936 GB/s, lo que la convierte en una opción poderosa para juegos en 4K, creación de contenido y aplicaciones de inteligencia artificial.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cuál es el rendimiento de la Nvidia GeForce RTX 3090 en comparación con otras tarjetas gráficas de su segmento?',
      respuesta: 'La Nvidia GeForce RTX 3090 es una de las tarjetas gráficas más potentes del mercado. Ofrece un rendimiento excepcional en juegos en resolución 4K y es capaz de manejar tareas intensivas en cuanto a gráficos y cálculos. Su arquitectura Ampere, junto con características como el trazado de rayos y el DLSS, proporciona una calidad visual y un rendimiento superiores en juegos y aplicaciones compatibles.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es la capacidad de memoria de la NVIDIA GeForce RTX 3090?',
      respuesta: 'La NVIDIA GeForce RTX 3090 cuenta con una impresionante capacidad de memoria de 24 gigabytes (GB) de tipo GDDR6X. Esta amplia capacidad de memoria permite un rendimiento excepcional en tareas que requieren un uso intensivo de memoria, como renderizado en 3D, edición de video y juegos con resoluciones ultraaltas. La amplia capacidad de memoria de la RTX 3090 también la convierte en una opción ideal para profesionales creativos y entusiastas que buscan un rendimiento de vanguardia en sus aplicaciones y proyectos.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la Nvidia GeForce RTX 3090?',
      respuesta: 'La Nvidia GeForce RTX 3090 es capaz de admitir hasta cuatro monitores simultáneamente. Dispone de múltiples puertos de visualización, como HDMI 2.1 y DisplayPort 1.4a, lo que permite una configuración flexible de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la Nvidia GeForce RTX 3090?',
      respuesta: 'Se recomienda una fuente de alimentación de alta calidad de al menos 750 vatios para alimentar adecuadamente la Nvidia GeForce RTX 3090. Además, la tarjeta gráfica requiere dos conectores de alimentación PCIe de 8 pines. Es importante asegurarse de que la fuente de alimentación cumpla con estos requisitos para un funcionamiento óptimo.',
    },
    {
      id: 'pregunta6',
      titulo: '¿La Nvidia GeForce RTX 3090 es adecuada para la realidad virtual (VR)?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3090 es una excelente opción para la realidad virtual. Su potencia y capacidad de trazado de rayos la hacen ideal para experiencias de realidad virtual inmersivas y exigentes. Ofrece un rendimiento excepcional en juegos y aplicaciones de realidad virtual de alta calidad.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Nvidia GeForce RTX 3090 es compatible con tecnologías de sincronización como G-Sync y FreeSync?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3090 es compatible tanto con G-Sync de NVIDIA como con FreeSync de AMD. Esto permite aprovechar la sincronización adaptativa en monitores compatibles para evitar el desgarro de pantalla y obtener una experiencia de juego más fluida y sin interrupciones.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Cuál es el precio aproximado de la Nvidia GeForce RTX 3090?',
      respuesta: 'El precio de la Nvidia GeForce RTX 3090 puede variar según el fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, la RTX 3090 es una tarjeta gráfica de gama alta y su precio puede superar los 1.000 dólares estadounidenses. Sin embargo, es importante verificar los precios actuales en tiendas y distribuidores autorizados, ya que pueden fluctuar debido a la demanda y la disponibilidad.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la Nvidia GeForce RTX 3090 y la Nvidia GeForce RTX 3080?',
      respuesta: 'La Nvidia GeForce RTX 3090 es la opción más potente de la serie RTX 30 de Nvidia. En comparación con la RTX 3080, la RTX 3090 cuenta con más núcleos CUDA, una mayor cantidad de VRAM y un rendimiento general mejorado. Esto la convierte en una opción premium para aquellos que buscan el máximo rendimiento en juegos, creación de contenido y tareas de inteligencia artificial. Sin embargo, la RTX 3090 también tiende a ser más cara que la RTX 3080.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Qué tipo de refrigeración utiliza la Nvidia GeForce RTX 3090 y cómo afecta al rendimiento y la temperatura?',
      respuesta: 'La Nvidia GeForce RTX 3090 utiliza sistemas de refrigeración avanzados, como el diseño de ventilador axial y cámaras de vapor, para mantener la temperatura bajo control durante las cargas de trabajo intensas. Estos sistemas de refrigeración eficientes ayudan a disipar el calor generado por la GPU y aseguran un funcionamiento estable y una temperatura óptima. Una mejor refrigeración contribuye a un rendimiento constante y evita problemas relacionados con el sobrecalentamiento, lo que garantiza una experiencia de juego fluida y confiable.',
    }
  ];

export const Pregunta3090 = () => {
  const { preguntaId } = useParams();
  const preguntaActual = preguntas3090.find((pregunta) => pregunta.id === preguntaId);
  const currentIndex = preguntas3090.findIndex((pregunta) => pregunta.id === preguntaId);
  const previousQuestionId = currentIndex > 0 ? preguntas3090[currentIndex - 1].id : null;
  const nextQuestionId = currentIndex < preguntas3090.length - 1 ? preguntas3090[currentIndex + 1].id : null;


  return (
      
      <div className='Container'>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
        <div className='adelanteAtras'>
        {previousQuestionId && (
          <Link to={`/placas-de-video/nvidia-3090/${previousQuestionId}`}>
            <button className='atras'>
              <i className="atrasI bi bi-arrow-left"></i>
              <span>Anterior pregunta</span>
            </button>
          </Link> )}
          {nextQuestionId && (
          <Link to={`/placas-de-video/nvidia-3090/${nextQuestionId}`}>
            <button className='adelante'>
              <span>Siguiente pregunta</span>
              <i className="adelanteI bi bi-arrow-right"></i>
            </button>
          </Link>)}
        </div>
        <div className='volverEntrar'>
          <div className='volver'>
            <Link to={`/placas-de-video/nvidia-3090`}>
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

const Preguntas3090 = () => {
    return (
      <div className='preguntas'>
        {preguntas3090.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/nvidia-3090/${pregunta.id}`}>{pregunta.titulo}</Link>
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

  const Nvidia3090 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <Preguntas3090 />
            <hr />
            <Routes>
                {preguntas3090.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta3090 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default Nvidia3090;