import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntasI511600 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave del procesador Intel Core i5-11600K?',
      respuesta: 'El Intel Core i5-11600K es un procesador de la 11ª generación de la serie Intel Core. Cuenta con 6 núcleos y 12 hilos, una frecuencia base de 3.9 GHz y una frecuencia máxima turbo de 4.9 GHz. Además, tiene una caché inteligente de 12 MB y es compatible con la tecnología Hyper-Threading, que permite manejar múltiples hilos de ejecución simultáneamente.',
    },
    {
      id: 'pregunta2',
      titulo: '¿En qué tecnología de fabricación se basa el Intel Core i5-11600K?',
      respuesta: 'El Intel Core i5-11600K se basa en la tecnología de fabricación de 10 nanómetros de Intel. Esta tecnología avanzada permite una mayor densidad de transistores, lo que se traduce en un mejor rendimiento y una mayor eficiencia energética en comparación con las generaciones anteriores.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es la arquitectura del Intel Core i5-11600K?',
      respuesta: 'El Intel Core i5-11600K pertenece a la arquitectura de la serie Rocket Lake de Intel. Esta arquitectura introduce mejoras significativas en términos de rendimiento y eficiencia en comparación con la generación anterior. Ofrece una mayor capacidad de procesamiento y mejoras en la tecnología de núcleo y en la capacidad de overclocking.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuál es la ventaja del Intel Core i5-11600K en términos de rendimiento para juegos?',
      respuesta: 'El Intel Core i5-11600K ofrece un rendimiento sólido para juegos. Con sus 6 núcleos y 12 hilos, es capaz de manejar juegos modernos de manera fluida y proporcionar una experiencia de juego satisfactoria. Además, con una frecuencia máxima turbo de 4.9 GHz, puede ofrecer un aumento adicional de rendimiento cuando sea necesario.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Qué tipo de memoria RAM es compatible con el Intel Core i5-11600K?',
      respuesta: 'El Intel Core i5-11600K es compatible con memoria RAM DDR4. Admite velocidades de memoria de hasta 3200 MHz de forma nativa, pero también puede admitir velocidades más altas con perfiles de overclocking habilitados en la placa base compatible.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Qué características de overclocking ofrece el Intel Core i5-11600K?',
      respuesta: 'El Intel Core i5-11600K está diseñado para el overclocking y ofrece varias características para ajustar y optimizar su rendimiento. Está desbloqueado, lo que significa que los usuarios pueden ajustar la frecuencia del reloj y el voltaje para obtener un rendimiento adicional. Además, cuenta con la tecnología Intel Performance Maximizer, que proporciona una forma sencilla de realizar el overclocking de manera automatizada y segura.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuáles son las características de conectividad del Intel Core i5-11600K?',
      respuesta: 'El Intel Core i5-11600K es compatible con la tecnología PCIe 4.0, lo que permite una mayor velocidad de transferencia de datos con dispositivos de almacenamiento y tarjetas gráficas compatibles. También cuenta con soporte para USB 3.2 Gen 2, que proporciona velocidades de transferencia rápidas para periféricos y dispositivos de almacenamiento externo.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Qué tipo de refrigeración se recomienda para el Intel Core i5-11600K?',
      respuesta: 'Dado que el Intel Core i5-11600K es un procesador desbloqueado y puede alcanzar altas frecuencias de reloj, se recomienda utilizar una solución de refrigeración adecuada. Se recomienda el uso de sistemas de refrigeración líquida o de refrigeración por aire de alta gama para garantizar un rendimiento óptimo y mantener las temperaturas bajo control durante el overclocking o las cargas de trabajo intensivas.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la compatibilidad de socket del Intel Core i5-11600K?',
      respuesta: 'El Intel Core i5-11600K utiliza el socket LGA 1200, que es el mismo socket utilizado por los procesadores de la serie Intel Core de 10ª y 11ª generación. Si planeas utilizar el i5-11600K, asegúrate de tener una placa base compatible con el socket LGA 1200.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la ventaja del Intel Core i5-11600K en términos de relación precio-rendimiento?',
      respuesta: 'El Intel Core i5-11600K ofrece una buena relación precio-rendimiento para usuarios que buscan un procesador potente pero no necesitan el rendimiento extremo de los modelos de gama alta. Su combinación de núcleos y frecuencia de reloj, junto con su capacidad de overclocking, lo convierten en una opción atractiva para jugadores y usuarios generales que buscan un equilibrio entre rendimiento y presupuesto.',
    }
  ];

export const PreguntaI511600 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasI511600.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasI511600.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasI511600[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasI511600.length - 1 ? preguntasI511600[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/procesadores/intel-core-i5-11600k/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/procesadores/intel-core-i5-11600k/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/procesadores/intel-core-i5-11600k`}>
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

const PreguntasI511600 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/AMD.png' alt='AMD' width={300} height={200}/>
        {preguntasI511600.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/procesadores/intel-core-i5-11600k/${pregunta.id}`}>{pregunta.titulo}</Link>
          </li>
        ))}
        <div className='volverEntrar' style={{margin:'30px'}}>
          <div className='volver'>
            <Link to={`/procesadores`}>
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
  const IntelI511600K = () => {
    return (
      <div className='1600'>
        <div className='Container'>
            <PreguntasI511600 />
            <hr />
            <Routes>
                {preguntasI511600.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<preguntasI511600 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default IntelI511600K;