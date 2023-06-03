import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntasR95900 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave del procesador AMD Ryzen 9 5900X?',
      respuesta: 'El AMD Ryzen 9 5900X es un procesador de la serie Ryzen 5000 de AMD. Cuenta con 12 núcleos y 24 hilos, una velocidad de reloj base de 3.7 GHz y una velocidad de reloj de impulso de 4.8 GHz. Además, tiene 64 MB de caché y es compatible con el socket AM4.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué ventajas ofrece el AMD Ryzen 9 5900X en términos de rendimiento?',
      respuesta: 'El AMD Ryzen 9 5900X ofrece un rendimiento excepcional en una amplia gama de tareas, desde juegos hasta aplicaciones de productividad intensivas. Con sus 12 núcleos y 24 hilos, es capaz de manejar fácilmente cargas de trabajo pesadas y multitarea intensiva. Su arquitectura Zen 3 y altas frecuencias de reloj garantizan un rendimiento rápido y eficiente en aplicaciones de un solo hilo y en tareas multihilo.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es la arquitectura del AMD Ryzen 9 5900X?',
      respuesta: 'El AMD Ryzen 9 5900X se basa en la arquitectura Zen 3 de AMD. Esta arquitectura presenta mejoras significativas en el rendimiento por ciclo de reloj (IPC) en comparación con la generación anterior. La arquitectura Zen 3 ofrece una mayor eficiencia energética, una mayor densidad de núcleos y una mayor caché, lo que se traduce en un rendimiento general superior en comparación con los procesadores anteriores.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuál es la diferencia entre el AMD Ryzen 9 5900X y el Ryzen 7 5800X?',
      respuesta: 'La principal diferencia entre el AMD Ryzen 9 5900X y el Ryzen 7 5800X es el número de núcleos y hilos. Mientras que el Ryzen 7 5800X tiene 8 núcleos y 16 hilos, el Ryzen 9 5900X cuenta con 12 núcleos y 24 hilos. Esto significa que el Ryzen 9 5900X ofrece un rendimiento multihilo aún mayor y es más adecuado para tareas intensivas de computación que requieren un mayor número de núcleos.      ',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la ventaja del AMD Ryzen 9 5900X en juegos?',
      respuesta: 'El AMD Ryzen 9 5900X ofrece un rendimiento excepcional en juegos gracias a su alto número de núcleos y su arquitectura Zen 3 optimizada. Los juegos modernos están aprovechando cada vez más los múltiples núcleos de los procesadores, y el Ryzen 9 5900X brinda una experiencia de juego fluida y sin cuellos de botella. Su alta frecuencia de reloj y su capacidad para manejar tareas en segundo plano aseguran una experiencia de juego rápida y sin interrupciones.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Cuál es la eficiencia energética del AMD Ryzen 9 5900X?',
      respuesta: 'El AMD Ryzen 9 5900X es conocido por su eficiencia energética. A pesar de tener 12 núcleos y 24 hilos, AMD ha logrado optimizar la arquitectura Zen 3 para ofrecer un rendimiento excepcional con un consumo de energía relativamente bajo. Esto significa que puedes disfrutar de un rendimiento potente sin preocuparte por un consumo excesivo de energía o altas temperaturas.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Qué tipo de memoria RAM es compatible con el AMD Ryzen 9 5900X?',
      respuesta: 'El AMD Ryzen 9 5900X es compatible con memoria DDR4. Se recomienda utilizar módulos de memoria de alta velocidad y baja latencia para aprovechar al máximo el rendimiento del procesador. La arquitectura Zen 3 de AMD presenta mejoras en la administración de la memoria y la latencia, lo que garantiza un rendimiento óptimo en aplicaciones y juegos exigentes.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Qué características de seguridad ofrece el AMD Ryzen 9 5900X?',
      respuesta: 'El AMD Ryzen 9 5900X cuenta con características de seguridad integradas, incluyendo AMD Secure Processor, que ayuda a proteger el sistema contra amenazas de seguridad y ataques. Además, está equipado con las últimas protecciones contra vulnerabilidades, como Spectre y Meltdown, mediante parches y actualizaciones de firmware.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Es posible realizar overclocking en el AMD Ryzen 9 5900X?',
      respuesta: 'Sí, el AMD Ryzen 9 5900X se puede overclockear para obtener un mayor rendimiento. AMD ha desbloqueado el multiplicador en sus procesadores Ryzen, lo que permite a los usuarios ajustar la frecuencia de reloj para obtener un rendimiento adicional. Sin embargo, es importante tener en cuenta que el grado de overclocking alcanzado puede variar según la calidad del chip y la configuración utilizada. También se recomienda contar con una solución de refrigeración adecuada para mantener temperaturas óptimas durante el overclocking.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la ventaja del AMD Ryzen 9 5900X en aplicaciones de productividad?',
      respuesta: 'El AMD Ryzen 9 5900X es una opción ideal para aplicaciones de productividad intensivas, como edición de video, diseño gráfico y renderizado 3D. Gracias a sus 12 núcleos y 24 hilos, puede manejar sin problemas tareas exigentes y multitarea intensiva. Además, la arquitectura Zen 3 optimizada y las altas frecuencias de reloj garantizan un rendimiento rápido y eficiente en estas aplicaciones, mejorando la productividad y reduciendo los tiempos de renderizado.',
    }
  ];

export const PreguntaR95900 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasR95900.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasR95900.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasR95900[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasR95900.length - 1 ? preguntasR95900[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/procesadores/amd-ryzen-9-5900x/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/procesadores/amd-ryzen-9-5900x/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/procesadores/amd-ryzen-9-5900x`}>
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

const PreguntasR95900 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/AMD.png' alt='AMD' width={300} height={200}/>
        {preguntasR95900.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/procesadores/amd-ryzen-9-5900x/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const AMDRyzen95900X = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasR95900 />
            <hr />
            <Routes>
                {preguntasR95900.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<preguntasR95900 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AMDRyzen95900X;