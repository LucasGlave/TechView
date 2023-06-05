import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntasI911900 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave del procesador Intel Core i9-11900K?',
      respuesta: 'El Intel Core i9-11900K es un procesador de la 11ª generación de la serie Intel Core. Cuenta con 8 núcleos y 16 hilos, una frecuencia base de 3.5 GHz y una frecuencia máxima turbo de 5.3 GHz. Además, tiene una caché inteligente de 16 MB y es compatible con la tecnología Hyper-Threading, lo que permite manejar múltiples hilos de ejecución simultáneamente.',
    },
    {
      id: 'pregunta2',
      titulo: '¿En qué tecnología de fabricación se basa el Intel Core i9-11900K?',
      respuesta: 'El Intel Core i9-11900K se basa en la tecnología de fabricación de 10 nanómetros SuperFin de Intel. Esta tecnología permite una mayor densidad de transistores y mejor eficiencia energética en comparación con las generaciones anteriores.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es la arquitectura del Intel Core i9-11900K?',
      respuesta: 'El Intel Core i9-11900K pertenece a la arquitectura Cypress Cove de Intel. Esta arquitectura es una mejora significativa en comparación con la generación anterior y ofrece un mayor rendimiento y eficiencia energética. Incluye mejoras en la tecnología de caché, la capacidad de ejecución y la predicción de ramas, entre otras características.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuál es la ventaja del Intel Core i9-11900K en términos de rendimiento para juegos?',
      respuesta: 'El Intel Core i9-11900K ofrece un rendimiento excepcional para juegos. Con sus 8 núcleos y 16 hilos, es capaz de manejar juegos modernos de manera fluida y proporcionar una experiencia de juego altamente inmersiva. Además, su frecuencia máxima turbo de 5.3 GHz y las mejoras en la arquitectura brindan un rendimiento rápido y receptivo incluso en situaciones de carga intensa.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Qué tipo de memoria RAM es compatible con el Intel Core i9-11900K?',
      respuesta: 'El Intel Core i9-11900K es compatible con memoria RAM DDR4. Admite velocidades de memoria de hasta 3200 MHz de forma nativa, pero también puede admitir velocidades más altas mediante perfiles de overclocking habilitados en la placa base compatible.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Qué características de overclocking ofrece el Intel Core i9-11900K?',
      respuesta: 'El Intel Core i9-11900K está diseñado para el overclocking y ofrece varias características para ajustar y optimizar su rendimiento. Está desbloqueado, lo que significa que los usuarios pueden ajustar la frecuencia del reloj y el voltaje para obtener un rendimiento adicional. Además, cuenta con tecnologías como Intel Turbo Boost Max 3.0 y Thermal Velocity Boost, que mejoran aún más el rendimiento en situaciones de carga pesada.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuáles son las características de conectividad del Intel Core i9-11900K?',
      respuesta: 'El Intel Core i9-11900K es compatible con la tecnología PCIe 4.0, que ofrece una mayor velocidad de transferencia de datos con dispositivos de almacenamiento y tarjetas gráficas compatibles. También cuenta con soporte para USB 3.2 Gen 2x2, que proporciona velocidades de transferencia ultrarrápidas para periféricos y dispositivos de almacenamiento externo.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Qué tipo de refrigeración se recomienda para el Intel Core i9-11900K?',
      respuesta: 'Dado que el Intel Core i9-11900K es un procesador de alto rendimiento, se recomienda utilizar una solución de refrigeración adecuada. Se recomienda el uso de sistemas de refrigeración líquida de alta gama o de refrigeración por aire de alta capacidad para mantener las temperaturas bajo control y garantizar un rendimiento óptimo, especialmente durante el overclocking.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la compatibilidad de socket del Intel Core i9-11900K?',
      respuesta: 'El Intel Core i9-11900K utiliza el socket LGA 1200, que es específico para los procesadores de la 11ª generación de la serie Intel Core. Si planeas utilizar el i9-11900K, asegúrate de tener una placa base compatible con el socket LGA 1200.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la ventaja del Intel Core i9-11900K en términos de relación precio-rendimiento?',
      respuesta: 'El Intel Core i9-11900K ofrece un rendimiento excepcional y una relación precio-rendimiento sólida para aquellos que buscan un procesador de alta gama. Con su arquitectura mejorada y sus características de overclocking, es capaz de manejar tareas intensivas en CPU, aplicaciones creativas y juegos exigentes sin problemas. Su compatibilidad con tecnologías modernas y su eficiencia energética lo convierten en una opción atractiva para entusiastas y usuarios exigentes.',
    }
  ];

export const PreguntaI911900 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasI911900.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasI911900.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasI911900[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasI911900.length - 1 ? preguntasI911900[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/procesadores/intel-core-i9-11900k/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/procesadores/intel-core-i9-11900k/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/procesadores/intel-core-i9-11900k`}>
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

const PreguntasI911900 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/INTEL.png' alt='AMD' width={180} height={130}/>
        {preguntasI911900.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/procesadores/intel-core-i9-11900k/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const IntelI911900 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasI911900 />
            <hr />
            <Routes>
                {preguntasI911900.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<preguntasI911900 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default IntelI911900;