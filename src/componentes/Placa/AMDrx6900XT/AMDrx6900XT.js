import './AMDrx6900XT.scss';
import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas6900XT = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la AMD Radeon RX 6900 XT?',
      respuesta: 'La AMD Radeon RX 6900 XT es una tarjeta gráfica de alta gama que cuenta con 80 unidades de cómputo y una velocidad de reloj base de 2015 MHz. Esta tarjeta viene con 16 GB de memoria GDDR6 y un ancho de banda de memoria de 512 GB/s, lo que la hace adecuada para juegos y tareas computacionales exigentes.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cómo se compara el rendimiento de la AMD Radeon RX 6900 XT con otras tarjetas gráficas de su segmento?',
      respuesta: ' La AMD Radeon RX 6900 XT ofrece un rendimiento excepcional y se encuentra entre las tarjetas gráficas más potentes del mercado. Su alto número de unidades de cómputo y velocidad de reloj le permiten superar a muchas otras tarjetas gráficas en términos de rendimiento en juegos y aplicaciones intensivas.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Es compatible la AMD Radeon RX 6900 XT con la tecnología de trazado de rayos (ray tracing)?',
      respuesta: 'Sí, la AMD Radeon RX 6900 XT es compatible con la tecnología de trazado de rayos. Esta tecnología permite una representación más realista de la iluminación y los efectos visuales en los juegos, creando sombras y reflejos más precisos. Con el trazado de rayos habilitado, los juegos pueden alcanzar un nivel de inmersión visual impresionante, brindando una experiencia más envolvente a los jugadores.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la AMD Radeon RX 6900 XT?',
      respuesta: 'La AMD Radeon RX 6900 XT es capaz de admitir hasta seis monitores simultáneamente. Dispone de múltiples puertos de visualización, incluidos DisplayPort 1.4 y HDMI 2.1, que permiten conectar monitores de alta resolución y disfrutar de configuraciones de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la AMD Radeon RX 6900 XT?',
      respuesta: 'Se recomienda una fuente de alimentación de calidad de al menos 850 vatios para alimentar adecuadamente la AMD Radeon RX 6900 XT. Debido a su alto rendimiento y consumo de energía, es importante contar con una fuente de alimentación robusta y que proporcione suficiente potencia para la tarjeta gráfica.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Es compatible la AMD Radeon RX 6900 XT con tecnologías de sincronización como FreeSync o G-Sync?',
      respuesta: 'La AMD Radeon RX 6900 XT es compatible con la tecnología FreeSync de AMD, que sincroniza la frecuencia de actualización del monitor con la velocidad de fotogramas generada por la tarjeta gráfica, brindando una experiencia de juego más suave y sin desgarros de pantalla. En cuanto a G-Sync de NVIDIA, aunque no es compatible oficialmente, algunos usuarios han informado de cierta compatibilidad mediante configuraciones personalizadas.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuál es la temperatura de funcionamiento normal de la AMD Radeon RX 6900 XT?',
      respuesta: 'La temperatura de funcionamiento normal de la AMD Radeon RX 6900 XT puede variar según el diseño específico del fabricante y las condiciones ambientales. En general, se espera que la tarjeta gráfica opere dentro de un rango de temperatura similar a la RX 6800 XT, alrededor de los 60-80 grados Celsius bajo cargas intensas. Es recomendable contar con una adecuada ventilación en el chasis de la computadora para mantener las temperaturas bajo control.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Necesito actualizar mi fuente de alimentación para usar la AMD Radeon RX 6900 XT?',
      respuesta: 'Sí, debido al alto rendimiento y consumo de energía de la AMD Radeon RX 6900 XT, se recomienda contar con una fuente de alimentación de calidad con una capacidad de al menos 850 vatios. Además, es importante asegurarse de que la fuente de alimentación cuente con los conectores de alimentación PCIe necesarios y pueda suministrar la potencia necesaria para la tarjeta gráfica.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la AMD Radeon RX 6900 XT y la RX 6800 XT?',
      respuesta: 'La principal diferencia entre la AMD Radeon RX 6900 XT y la RX 6800 XT es el rendimiento. La RX 6900 XT cuenta con un mayor número de unidades de cómputo y velocidades de reloj más altas, lo que la hace aún más potente que la RX 6800 XT. Esto se traduce en un rendimiento superior en juegos y aplicaciones intensivas. Sin embargo, la RX 6900 XT también tiene un precio más elevado en comparación con la RX 6800 XT.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es el precio aproximado de la AMD Radeon RX 6900 XT?',
      respuesta: 'El precio de la AMD Radeon RX 6900 XT puede variar dependiendo del fabricante, la ubicación geográfica y la disponibilidad en el mercado. Debido a su rendimiento de gama alta, la RX 6900 XT se encuentra en el rango de precios más alto de las tarjetas gráficas, normalmente alrededor de los 1000-1200 dólares estadounidenses. Sin embargo, es importante tener en cuenta que los precios pueden cambiar con el tiempo debido a factores como la demanda y la disponibilidad, por lo que siempre es recomendable verificar los precios actualizados en tiendas y distribuidores autorizados.',
    }
  ];

export const Pregunta6900XT = () => {
  const { preguntaId } = useParams();
  const preguntaActual = preguntas6900XT.find((pregunta) => pregunta.id === preguntaId);
  const currentIndex = preguntas6900XT.findIndex((pregunta) => pregunta.id === preguntaId);
  const previousQuestionId = currentIndex > 0 ? preguntas6900XT[currentIndex - 1].id : null;
  const nextQuestionId = currentIndex < preguntas6900XT.length - 1 ? preguntas6900XT[currentIndex + 1].id : null;


  return (
      
      <div className='Container'>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
        <div className='adelanteAtras'>
        {previousQuestionId && (
          <Link to={`/placas-de-video/rx-6900-xt/${previousQuestionId}`}>
            <button className='atras'>
              <i className="atrasI bi bi-arrow-left"></i>
              <span>Anterior pregunta</span>
            </button>
          </Link> )}
          {nextQuestionId && (
          <Link to={`/placas-de-video/rx-6900-xt/${nextQuestionId}`}>
            <button className='adelante'>
              <span>Siguiente pregunta</span>
              <i className="adelanteI bi bi-arrow-right"></i>
            </button>
          </Link>)}
        </div>
        <Link to={`/placas-de-video/rx-6900-xt`}>
          <button className='volver'>
            Volver
          </button>
        </Link>
      </div>
  );
};

const Preguntas6900XT = () => {
    return (
      <div className='preguntas'>
        <img src='/img/AMD.png' alt='AMD' width={300} height={200}/>
        {preguntas6900XT.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/rx-6900-xt/${pregunta.id}`}>{pregunta.titulo}</Link>
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

  const AMDrx6900XT = () => {
    return (
      <div className='6900XT'>
        <div className='Container'>
            <Preguntas6900XT />
            <hr />
            <Routes>
                {preguntas6900XT.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta6900XT />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AMDrx6900XT;