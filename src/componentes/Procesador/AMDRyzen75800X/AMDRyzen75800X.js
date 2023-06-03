import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntasR75800 = [
  {
    id: 'pregunta1',
    titulo: '¿Cuáles son las especificaciones clave del procesador AMD Ryzen 7 5800X?',
    respuesta: 'El procesador AMD Ryzen 7 5800X es un chip de 8 núcleos y 16 hilos diseñado para ofrecer un rendimiento excepcional en tareas intensivas de computación. Con una frecuencia base de 3.8 GHz y una frecuencia de impulso de 4.7 GHz, este procesador es capaz de manejar fácilmente una amplia gama de aplicaciones exigentes, desde juegos hasta edición de video y diseño gráfico. Con 32 MB de caché inteligente y compatibilidad con el socket AM4, el Ryzen 7 5800X ofrece una combinación equilibrada de rendimiento y eficiencia energética.',
  },
  {
    id: 'pregunta2',
    titulo: '¿Cuál es la arquitectura del AMD Ryzen 7 5800X?',
    respuesta: 'El AMD Ryzen 7 5800X se basa en la arquitectura Zen 3 de AMD, que ofrece mejoras significativas en el rendimiento y la eficiencia en comparación con la generación anterior. La arquitectura Zen 3 presenta una mayor densidad de núcleos, mejor rendimiento por ciclo de reloj (IPC) y una caché más grande y de mayor velocidad. Estas mejoras se traducen en un aumento notable del rendimiento en una amplia variedad de aplicaciones y cargas de trabajo.',
  },
  {
    id: 'pregunta3',
    titulo: '¿Cuál es la ventaja del AMD Ryzen 7 5800X en juegos?',
    respuesta: 'El AMD Ryzen 7 5800X ofrece un rendimiento excepcional en juegos gracias a su alto número de núcleos y su arquitectura Zen 3 optimizada. Los juegos modernos están aprovechando cada vez más los múltiples núcleos de los procesadores, y el Ryzen 7 5800X brinda una experiencia de juego fluida y sin problemas. Además, su frecuencia de impulso de 4.7 GHz permite una mayor capacidad de respuesta y tasas de cuadros más altas en comparación con procesadores de generaciones anteriores.',
  },
  {
    id: 'pregunta4',
    titulo: '¿Qué tipo de memoria RAM es compatible con el AMD Ryzen 7 5800X?',
    respuesta: 'El AMD Ryzen 7 5800X es compatible con memoria DDR4. Se recomienda utilizar módulos de memoria de alta velocidad para aprovechar al máximo el rendimiento del procesador. Además, la arquitectura Zen 3 de AMD presenta una mayor compatibilidad con la memoria y una mejor gestión de latencia, lo que mejora el rendimiento general del sistema.',
  },
  {
    id: 'pregunta5',
    titulo: '¿Cuál es el consumo de energía del AMD Ryzen 7 5800X?',
    respuesta: 'El AMD Ryzen 7 5800X tiene una potencia de diseño térmico (TDP) de 105 vatios. Esto significa que es necesario contar con una solución de refrigeración adecuada para mantener temperaturas óptimas durante su funcionamiento. Se recomienda utilizar un disipador de calor de calidad para garantizar un rendimiento estable y una vida útil prolongada del procesador.',
  },
  {
    id: 'pregunta6',
    titulo: '¿Cuáles son las ventajas de la tecnología Precision Boost 2 de AMD en el Ryzen 7 5800X?',
    respuesta: 'La tecnología Precision Boost 2 es una función de AMD que ajusta dinámicamente la velocidad de reloj de los núcleos del procesador en función de la carga de trabajo. Esto significa que el Ryzen 7 5800X puede aumentar automáticamente su frecuencia de reloj en situaciones de alta demanda de rendimiento, lo que proporciona un impulso adicional en tareas exigentes y optimiza la eficiencia energética en cargas de trabajo más livianas.',
  },
  {
    id: 'pregunta7',
    titulo: '¿El AMD Ryzen 7 5800X es compatible con PCIe 4.0?',
    respuesta: 'Sí, el AMD Ryzen 7 5800X es compatible con la tecnología PCIe 4.0. Esto permite utilizar tarjetas gráficas y dispositivos de almacenamiento que admitan PCIe 4.0, lo que proporciona un mayor ancho de banda y un rendimiento mejorado en aplicaciones que aprovechan esta tecnología.',
  },
  {
    id: 'pregunta8',
    titulo: '¿Puedo realizar overclocking en el AMD Ryzen 7 5800X?',
    respuesta: 'Sí, el AMD Ryzen 7 5800X se puede overclockear para obtener un mayor rendimiento. AMD ha desbloqueado el multiplicador en sus procesadores Ryzen, lo que permite a los usuarios ajustar la frecuencia de reloj para obtener un rendimiento adicional. Sin embargo, es importante tener en cuenta que el grado de overclocking alcanzado puede variar según la calidad del chip y la configuración utilizada. Además, se recomienda utilizar un sistema de refrigeración adecuado y seguir las pautas de overclocking de forma segura para evitar daños al procesador.',
  },
  {
    id: 'pregunta9',
    titulo: '¿Cuál es la diferencia entre el AMD Ryzen 7 5800X y el Ryzen 5 5600X?',
    respuesta: 'La principal diferencia entre el AMD Ryzen 7 5800X y el Ryzen 5 5600X radica en el número de núcleos y hilos. Mientras que el Ryzen 5 5600X tiene 6 núcleos y 12 hilos, el Ryzen 7 5800X cuenta con 8 núcleos y 16 hilos. Esto significa que el Ryzen 7 5800X ofrece un rendimiento multihilo superior y es más adecuado para tareas intensivas de computación que requieren una mayor cantidad de núcleos.',
  },
  {
    id: 'pregunta10',
    titulo: '¿Cuál es la ventaja del AMD Ryzen 7 5800X en aplicaciones de productividad?',
    respuesta: 'El AMD Ryzen 7 5800X ofrece un rendimiento excepcional en aplicaciones de productividad, como edición de video, diseño gráfico y renderizado 3D. Sus 8 núcleos y 16 hilos, combinados con la arquitectura Zen 3 optimizada, permiten un procesamiento rápido y eficiente de tareas exigentes. Además, su frecuencia de impulso de 4.7 GHz garantiza una respuesta ágil y un rendimiento constante en aplicaciones intensivas.',
  }
];

export const PreguntaR75800 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasR75800.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasR75800.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasR75800[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasR75800.length - 1 ? preguntasR75800[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/procesadores/amd-ryzen-7-5800x/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/procesadores/amd-ryzen-7-5800x/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/procesadores/amd-ryzen-7-5800x`}>
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

const PreguntasR75800 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/AMD.png' alt='AMD' width={300} height={200}/>
        {preguntasR75800.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/procesadores/amd-ryzen-7-5800x/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const AMDRyzen75800X = () => {
    return (
      <div className='5800'>
        <div className='Container'>
            <PreguntasR75800 />
            <hr />
            <Routes>
                {preguntasR75800.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntaR75800 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AMDRyzen75800X;