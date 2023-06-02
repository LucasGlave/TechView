import './Nvidia3060.scss';
import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas3060 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Nvidia GeForce RTX 3060?',
      respuesta: 'La Nvidia GeForce RTX 3060 cuenta con 3584 núcleos CUDA, una velocidad de reloj base de 1320 MHz y una velocidad de reloj de impulso de 1777 MHz. Esta tarjeta gráfica está equipada con 12 GB de memoria GDDR6 y tiene un ancho de banda de memoria de 360 GB/s, lo que la hace ideal para juegos de alta calidad, streaming y tareas de creación de contenido.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cuál es el rendimiento de la Nvidia GeForce RTX 3060 en comparación con otras tarjetas gráficas de su segmento?',
      respuesta: 'La Nvidia GeForce RTX 3060 ofrece un rendimiento sólido en juegos de 1080p y 1440p, así como en tareas de creación de contenido. Es capaz de manejar juegos modernos con configuraciones gráficas altas y también es compatible con tecnologías como el trazado de rayos y el DLSS, que mejoran la calidad visual y el rendimiento.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuáles son las tecnologías destacadas de la Nvidia GeForce RTX 3060?',
      respuesta: 'La Nvidia GeForce RTX 3060 incluye tecnologías destacadas como el trazado de rayos en tiempo real, que permite efectos de iluminación más realistas; DLSS (Deep Learning Super Sampling), que utiliza IA para mejorar la calidad de imagen y aumentar el rendimiento; y NVIDIA Broadcast, que ofrece mejoras en el streaming, como la cancelación de ruido de fondo y el seguimiento de la cámara.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la Nvidia GeForce RTX 3060?',
      respuesta: 'La Nvidia GeForce RTX 3060 es capaz de admitir hasta cuatro monitores simultáneamente. Dispone de puertos de visualización múltiple, como DisplayPort 1.4a y HDMI 2.1, lo que permite una configuración versátil de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la Nvidia GeForce RTX 3060?',
      respuesta: 'Se recomienda una fuente de alimentación de calidad de al menos 550 vatios para alimentar adecuadamente la Nvidia GeForce RTX 3060. También es importante verificar que la fuente de alimentación cuente con los conectores de alimentación PCIe necesarios, que en el caso de la RTX 3060 es un conector de 12 pines.',
    },
    {
      id: 'pregunta6',
      titulo: '¿La Nvidia GeForce RTX 3060 es compatible con tecnologías de sincronización como G-Sync y FreeSync?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3060 es compatible tanto con G-Sync de NVIDIA como con FreeSync de AMD. Esto significa que puedes aprovechar la sincronización adaptativa en monitores compatibles para evitar el desgarro de pantalla y obtener una experiencia de juego más fluida.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Nvidia GeForce RTX 3060 es compatible con VR (Realidad Virtual)?',
      respuesta: 'Sí, la Nvidia GeForce RTX 3060 es compatible con la mayoría de los sistemas de realidad virtual. Su rendimiento y capacidad de trazado de rayos la convierten en una opción atractiva para aquellos que desean experimentar juegos y aplicaciones de realidad virtual de alta calidad.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Cuál es el precio aproximado de la Nvidia GeForce RTX 3060?',
      respuesta: 'El precio de la Nvidia GeForce RTX 3060 puede variar según el fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, se encuentra en el rango de precios de gama media-alta, oscilando alrededor de los 400-500 dólares estadounidenses. Sin embargo, es importante verificar los precios actuales en tiendas y distribuidores autorizados, ya que pueden fluctuar debido a la demanda y la disponibilidad.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la Nvidia GeForce RTX 3060 y la Nvidia GeForce RTX 3060 Ti?',
      respuesta: 'La principal diferencia entre la Nvidia GeForce RTX 3060 y la Nvidia GeForce RTX 3060 Ti radica en su rendimiento y especificaciones. La RTX 3060 Ti es ligeramente más potente que la RTX 3060, con más núcleos CUDA y un rendimiento mejorado en juegos. Sin embargo, la RTX 3060 Ti también tiende a ser más cara que la RTX 3060. Ambas tarjetas ofrecen un rendimiento excelente en su segmento y son opciones populares para los jugadores y creadores de contenido.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la capacidad de VRAM de la Nvidia GeForce RTX 3060 y cómo afecta al rendimiento?',
      respuesta: 'La Nvidia GeForce RTX 3060 cuenta con 12 GB de memoria GDDR6. Esta cantidad de VRAM es suficiente para manejar juegos modernos y tareas de creación de contenido con alta demanda de memoria. Una mayor cantidad de VRAM permite cargar y renderizar texturas de mayor resolución y mantener múltiples aplicaciones y juegos abiertos sin problemas de rendimiento. Sin embargo, es importante tener en cuenta que el rendimiento no solo depende de la cantidad de VRAM, sino también de otros factores como el ancho de banda de memoria y el rendimiento general de la tarjeta gráfica.',
    }
  ];

export const Pregunta3060 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntas3060.find((pregunta) => pregunta.id === preguntaId);

    return (
        
      <div className='Container'>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
      </div>
    );
};

const Preguntas3060 = () => {
    return (
      <div>
        {preguntas3060.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/3060/${pregunta.id}`}>{pregunta.titulo}</Link>
          </li>
        ))}
      </div>
    );
  };

  const Nvidia3060 = () => {
    return (
      <div className='3060'>
        <div className='Container'>
            <Preguntas3060 />
            <hr />
            <Routes>
                {preguntas3060.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta3060 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default Nvidia3060;