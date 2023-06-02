import './AMDrx6800XT.scss';
import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas6800XT = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la AMD Radeon RX 6800 XT?',
      respuesta: 'La AMD Radeon RX 6800 XT es una potente tarjeta gráfica que cuenta con 72 unidades de cómputo y una velocidad de reloj base de 2015 MHz, lo que le permite ofrecer un rendimiento excepcional en juegos de alta demanda. Además, está equipada con 16 GB de memoria GDDR6, que proporciona un ancho de banda rápido y eficiente para el procesamiento de gráficos intensivos.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué tipo de rendimiento puedo esperar de la AMD Radeon RX 6800 XT en juegos?',
      respuesta: 'La AMD Radeon RX 6800 XT ofrece un rendimiento sobresaliente en juegos de última generación. Gracias a su gran cantidad de unidades de cómputo y su alta velocidad de reloj, esta tarjeta gráfica es capaz de proporcionar una experiencia de juego fluida y sin problemas, incluso en resoluciones 1440p y 4K. Los jugadores pueden esperar altos niveles de cuadros por segundo y gráficos detallados en juegos exigentes.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Es compatible la AMD Radeon RX 6800 XT con la tecnología de trazado de rayos (ray tracing)?',
      respuesta: 'Sí, la AMD Radeon RX 6800 XT es compatible con la tecnología de trazado de rayos. Esta tecnología permite una representación más realista de la iluminación y los efectos visuales en los juegos, creando sombras y reflejos más precisos. Con el trazado de rayos habilitado, los juegos pueden alcanzar un nivel de inmersión visual impresionante, brindando una experiencia más envolvente a los jugadores.',
    },
    {
      id: 'pregunta4',
      titulo: ' ¿Cuántos monitores puedo conectar a la AMD Radeon RX 6800 XT?',
      respuesta: 'La AMD Radeon RX 6800 XT es capaz de admitir hasta cuatro monitores simultáneamente. Esto es posible gracias a los puertos de conectividad que ofrece, como DisplayPort 1.4 y HDMI 2.1. Estos puertos permiten una conexión sencilla y de alta calidad con monitores modernos, lo que brinda a los usuarios la posibilidad de disfrutar de una configuración de múltiples pantallas y aprovechar al máximo su experiencia de visualización.',
    },
    {
      id: 'pregunta5',
      titulo: ' ¿Requiere la AMD Radeon RX 6800 XT una fuente de alimentación especial?',
      respuesta: 'Sí, la AMD Radeon RX 6800 XT requiere una fuente de alimentación adecuada para garantizar un funcionamiento óptimo y estable. Se recomienda utilizar una fuente de alimentación de alta calidad con una capacidad de al menos 750 vatios. Además, es importante asegurarse de que la fuente de alimentación cuente con los conectores de alimentación PCIe necesarios, como conectores de 8 pines y 6 pines, para proporcionar una alimentación adecuada a la tarjeta gráfica.',
    },
    {
      id: 'pregunta6',
      titulo: ' ¿Es compatible la AMD Radeon RX 6800 XT con tecnologías de sincronización como FreeSync o G-Sync?',
      respuesta: 'La AMD Radeon RX 6800 XT es compatible con FreeSync, la tecnología de sincronización adaptable de AMD. Esto permite una experiencia de juego más suave y sin problemas al sincronizar la frecuencia de actualización del monitor con la velocidad de fotogramas generada por la tarjeta gráfica. Sin embargo, es importante tener en cuenta que la RX 6800 XT no es compatible oficialmente con G-Sync, la tecnología de sincronización de NVIDIA. Algunos usuarios han informado que han logrado hacerla funcionar en ciertas configuraciones, pero no se garantiza una compatibilidad total.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuál es la temperatura de funcionamiento normal de la AMD Radeon RX 6800 XT?',
      respuesta: ' La temperatura de funcionamiento normal de la AMD Radeon RX 6800 XT puede variar según varios factores, como el diseño y la configuración del sistema, así como las condiciones ambientales. En general, se espera que la tarjeta gráfica alcance temperaturas entre los 60 y 80 grados Celsius bajo carga intensa. Es importante asegurarse de que el sistema de enfriamiento de la tarjeta gráfica esté adecuadamente diseñado y que haya una buena circulación de aire dentro del chasis de la computadora para mantener las temperaturas bajo control.',
    },
    {
      id: 'pregunta8',
      titulo: ' ¿Necesito actualizar mi fuente de alimentación para usar la AMD Radeon RX 6800 XT?',
      respuesta: 'Sí, es posible que necesites actualizar tu fuente de alimentación si no cumple con los requisitos recomendados para la AMD Radeon RX 6800 XT. Dado que esta tarjeta gráfica es bastante potente y requiere una cantidad significativa de energía, se recomienda utilizar una fuente de alimentación de alta calidad con una capacidad de al menos 750 vatios. Además, asegúrate de que la fuente de alimentación tenga los conectores de alimentación necesarios para la tarjeta gráfica (como conectores PCIe de 8 pines y 6 pines) para garantizar un suministro de energía estable y adecuado.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la AMD Radeon RX 6800 XT y la RX 6900 XT?',
      respuesta: 'La principal diferencia entre la AMD Radeon RX 6800 XT y la RX 6900 XT es que esta última es la versión de gama alta de la serie RX 6000 de AMD. La RX 6900 XT cuenta con un mayor número de unidades de cómputo y una velocidad de reloj más alta en comparación con la RX 6800 XT. Como resultado, la RX 6900 XT ofrece un rendimiento ligeramente superior en juegos y aplicaciones intensivas. Sin embargo, es importante tener en cuenta que la RX 6900 XT también tiene un precio más elevado que la RX 6800 XT.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es el precio aproximado de la AMD Radeon RX 6800 XT?',
      respuesta: 'El precio de la AMD Radeon RX 6800 XT puede variar dependiendo del fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, la RX 6800 XT se encuentra en el rango de precios de gama alta, normalmente alrededor de los 700-800 dólares estadounidenses. Sin embargo, es importante tener en cuenta que los precios pueden cambiar con el tiempo debido a factores como la demanda y la oferta, por lo que es recomendable verificar los precios actualizados en tiendas y distribuidores autorizados antes de realizar una compra.',
    }
  ];

export const Pregunta6800XT = () => {
  const { preguntaId } = useParams();
  const preguntaActual = preguntas6800XT.find((pregunta) => pregunta.id === preguntaId);
  const currentIndex = preguntas6800XT.findIndex((pregunta) => pregunta.id === preguntaId);
  const previousQuestionId = currentIndex > 0 ? preguntas6800XT[currentIndex - 1].id : null;
  const nextQuestionId = currentIndex < preguntas6800XT.length - 1 ? preguntas6800XT[currentIndex + 1].id : null;


  return (
      
      <div className='Container'>
        <div className='cardRespuesta'>
          <h3>{preguntaActual.titulo}</h3>
          <p>{preguntaActual.respuesta}</p>
        </div>
        <div className='adelanteAtras'>
        {previousQuestionId && (
          <Link to={`/placas-de-video/rx-6800-xt/${previousQuestionId}`}>
            <button className='atras'>
              <i className="atrasI bi bi-arrow-left"></i>
              <span>Anterior pregunta</span>
            </button>
          </Link> )}
          {nextQuestionId && (
          <Link to={`/placas-de-video/rx-6800-xt/${nextQuestionId}`}>
            <button className='adelante'>
              <span>Siguiente pregunta</span>
              <i className="adelanteI bi bi-arrow-right"></i>
            </button>
          </Link>)}
        </div>
        <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/placas-de-video/rx-6800-xt`}>
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

const Preguntas6800XT = () => {
    return (
      <div className='preguntas'>
        <img src='/img/AMD.png' alt='AMD' width={300} height={200}/>
        {preguntas6800XT.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/rx-6800-xt/${pregunta.id}`}>{pregunta.titulo}</Link>
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

  const AMDrx6800XT = () => {
    return (
      <div className='6800XT'>
        <div className='Container'>
            <Preguntas6800XT />
            <hr />
            <Routes>
                {preguntas6800XT.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta6800XT />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AMDrx6800XT;