import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntasI910900 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave del procesador Intel Core i9-10900K?',
      respuesta: 'El Intel Core i9-10900K es un procesador de la 10ª generación de la serie Intel Core. Cuenta con 10 núcleos y 20 hilos, una frecuencia base de 3.7 GHz y una frecuencia máxima turbo de 5.3 GHz. Además, tiene una caché inteligente de 20 MB y es compatible con la tecnología Hyper-Threading, lo que permite manejar múltiples hilos de ejecución simultáneamente.',
    },
    {
      id: 'pregunta2',
      titulo: '¿En qué tecnología de fabricación se basa el Intel Core i9-10900K?',
      respuesta: 'El Intel Core i9-10900K se basa en la tecnología de fabricación de 14 nanómetros de Intel. Aunque no es la tecnología más avanzada en comparación con las generaciones más recientes, Intel ha realizado mejoras en esta tecnología para maximizar el rendimiento y la eficiencia del procesador.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es la arquitectura del Intel Core i9-10900K?',
      respuesta: 'El Intel Core i9-10900K pertenece a la arquitectura Comet Lake de Intel. Esta arquitectura ofrece un rendimiento sólido y mejoras en comparación con la generación anterior. Incluye optimizaciones en términos de velocidad, eficiencia energética y capacidad de overclocking.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuál es la ventaja del Intel Core i9-10900K en términos de rendimiento para juegos?',
      respuesta: 'El Intel Core i9-10900K ofrece un rendimiento excepcional para juegos. Con sus 10 núcleos y 20 hilos, es capaz de manejar juegos modernos de manera fluida y proporcionar una experiencia de juego altamente inmersiva. Además, su frecuencia máxima turbo de 5.3 GHz le permite ofrecer un rendimiento rápido y receptivo incluso en situaciones de carga intensa.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Qué tipo de memoria RAM es compatible con el Intel Core i9-10900K?',
      respuesta: 'El Intel Core i9-10900K es compatible con memoria RAM DDR4. Admite velocidades de memoria de hasta 2933 MHz de forma nativa, pero también puede admitir velocidades más altas mediante perfiles de overclocking habilitados en la placa base compatible.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Qué características de overclocking ofrece el Intel Core i9-10900K?',
      respuesta: 'El Intel Core i9-10900K está diseñado para el overclocking y ofrece varias características para ajustar y optimizar su rendimiento. Está desbloqueado, lo que significa que los usuarios pueden ajustar la frecuencia del reloj y el voltaje para obtener un rendimiento adicional. Además, cuenta con tecnologías como Turbo Boost Max 3.0 y Thermal Velocity Boost, que mejoran aún más el rendimiento en situaciones de carga pesada.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuáles son las características de conectividad del Intel Core i9-10900K?',
      respuesta: 'El Intel Core i9-10900K es compatible con la tecnología PCIe 3.0, que permite una alta velocidad de transferencia de datos con dispositivos de almacenamiento y tarjetas gráficas compatibles. También cuenta con soporte para USB 3.2 Gen 2, que proporciona velocidades de transferencia rápidas para periféricos y dispositivos de almacenamiento externo.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Qué tipo de refrigeración se recomienda para el Intel Core i9-10900K?',
      respuesta: 'Dado que el Intel Core i9-10900K es un procesador de alta gama y puede generar calor significativo durante el uso intensivo, se recomienda utilizar una solución de refrigeración adecuada. Se recomienda el uso de sistemas de refrigeración líquida de alta gama o de refrigeración por aire de alta capacidad para mantener las temperaturas bajo control y garantizar un rendimiento óptimo, especialmente durante el overclocking.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la compatibilidad de socket del Intel Core i9-10900K?',
      respuesta: 'El Intel Core i9-10900K utiliza el socket LGA 1200, que es específico para los procesadores de la 10ª generación de la serie Intel Core. Si planeas utilizar el i9-10900K, asegúrate de tener una placa base compatible con el socket LGA 1200.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la ventaja del Intel Core i9-10900K en términos de relación precio-rendimiento?',
      respuesta: 'El Intel Core i9-10900K ofrece un rendimiento excepcional y una relación precio-rendimiento sólida para aquellos que buscan un procesador de alta gama. Con sus 10 núcleos y 20 hilos, es capaz de manejar tareas intensivas en CPU, aplicaciones creativas y juegos exigentes sin problemas. Su capacidad de overclocking y su compatibilidad con tecnologías modernas lo convierten en una opción atractiva para entusiastas y usuarios exigentes.',
    }
  ];

export const PreguntaI910900 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasI910900.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasI910900.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasI910900[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasI910900.length - 1 ? preguntasI910900[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/procesadores/intel-core-i9-10900k/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/procesadores/intel-core-i9-10900k/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/procesadores/intel-core-i9-10900k`}>
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

const PreguntasI910900 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/INTEL.png' alt='AMD' width={300} height={200}/>
        {preguntasI910900.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/procesadores/intel-core-i9-10900k/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const IntelI910900 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasI910900 />
            <hr />
            <Routes>
                {preguntasI910900.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<preguntasI910900 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default IntelI910900;