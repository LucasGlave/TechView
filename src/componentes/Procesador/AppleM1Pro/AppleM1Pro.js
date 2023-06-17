import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const preguntasAM1PRO = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave del procesador Apple M1 Pro?',
      respuesta: 'El Apple M1 Pro es un procesador diseñado por Apple para sus dispositivos Mac. Cuenta con una arquitectura de 10 núcleos, que incluye 8 núcleos de CPU de alto rendimiento y 2 núcleos de eficiencia energética. También tiene una GPU de hasta 32 núcleos y un motor neuronal de 16 núcleos. Además, ofrece un rendimiento excepcional en términos de velocidad de CPU, rendimiento gráfico y capacidades de aprendizaje automático.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué tecnología de fabricación se utiliza en el Apple M1 Pro?',
      respuesta: 'El Apple M1 Pro se fabrica utilizando el proceso de fabricación de 5 nanómetros. Esta tecnología avanzada permite empaquetar más transistores en un espacio más pequeño, lo que resulta en un mayor rendimiento y eficiencia energética.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es la arquitectura del Apple M1 Pro?',
      respuesta: 'El Apple M1 Pro se basa en la arquitectura ARM. Esta arquitectura ofrece ventajas significativas en términos de rendimiento y eficiencia energética. Los procesadores ARM son conocidos por su capacidad para manejar tareas intensivas y su eficiencia en términos de consumo de energía.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuál es la ventaja del Apple M1 Pro en términos de rendimiento gráfico?',
      respuesta: 'El Apple M1 Pro viene con una GPU integrada de alto rendimiento que cuenta con hasta 32 núcleos. Esto proporciona un rendimiento gráfico excepcional para aplicaciones intensivas en gráficos, como juegos, diseño gráfico y edición de video. La arquitectura de GPU personalizada de Apple ofrece un rendimiento sorprendente en comparación con las generaciones anteriores de procesadores de Apple.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Qué capacidades de aprendizaje automático ofrece el Apple M1 Pro?',
      respuesta: 'El Apple M1 Pro está equipado con un motor neuronal de 16 núcleos que proporciona un rendimiento acelerado en tareas de aprendizaje automático. Esto permite ejecutar algoritmos de inteligencia artificial y aplicaciones de aprendizaje automático de manera eficiente y rápida. El M1 Pro es capaz de realizar tareas de procesamiento de imágenes, reconocimiento de voz y análisis de datos con una gran eficiencia.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Cuál es la eficiencia energética del Apple M1 Pro?',
      respuesta: 'Una de las características destacadas del Apple M1 Pro es su eficiencia energética. Gracias a su arquitectura ARM y su proceso de fabricación de 5 nm, el M1 Pro ofrece un rendimiento potente con un consumo de energía relativamente bajo. Esto significa que los dispositivos equipados con el M1 Pro pueden ofrecer una duración de batería impresionante, lo que es especialmente beneficioso para usuarios móviles.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Qué tipo de memoria RAM es compatible con el Apple M1 Pro?',
      respuesta: 'El Apple M1 Pro utiliza una memoria unificada de alta velocidad llamada memoria unificada M1 (M1 Unified Memory). Esta memoria está integrada en el propio procesador y está diseñada para ofrecer un rendimiento optimizado y una latencia reducida. El M1 Pro está disponible en diferentes configuraciones de memoria, lo que permite a los usuarios elegir la capacidad que mejor se adapte a sus necesidades.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Qué características de seguridad ofrece el Apple M1 Pro?',
      respuesta: 'El Apple M1 Pro incluye varias características de seguridad integradas. Esto incluye el Secure Enclave, que proporciona un entorno seguro para almacenar y proteger datos sensibles, y la tecnología de arranque seguro, que garantiza que solo se cargue y ejecute software confiable en el dispositivo. Además, el M1 Pro aprovecha el cifrado de hardware y otras medidas de seguridad para proteger la privacidad y la integridad de los datos.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la ventaja del Apple M1 Pro en términos de compatibilidad de aplicaciones?',
      respuesta: 'El Apple M1 Pro es compatible con la tecnología de virtualización Rosetta, que permite ejecutar aplicaciones desarrolladas originalmente para procesadores Intel en dispositivos con arquitectura ARM. Esto significa que la mayoría de las aplicaciones diseñadas para Mac funcionarán sin problemas en el M1 Pro, incluso si no se han actualizado específicamente para la nueva arquitectura.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuáles son los dispositivos que utilizan el Apple M1 Pro?',
      respuesta: 'El Apple M1 Pro se encuentra en la nueva generación de computadoras portátiles MacBook Pro de Apple. Estas computadoras portátiles ofrecen un rendimiento excepcional gracias al potente procesador M1 Pro y están diseñadas para satisfacer las necesidades de usuarios profesionales y creativos que requieren un alto rendimiento en sus tareas diarias.',
    }
  ];

export const PreguntaAM1PRO = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasAM1PRO.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasAM1PRO.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasAM1PRO[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasAM1PRO.length - 1 ? preguntasAM1PRO[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/procesadores/apple-m1-pro/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/procesadores/apple-m1-pro/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/procesadores/apple-m1-pro`}>
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

const PreguntasAM1PRO = () => {
    return (
      <div className='preguntas'>
        {preguntasAM1PRO.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li>
              <Link to={`/procesadores/apple-m1-pro/${pregunta.id}`}>{pregunta.titulo}</Link>
            </li>
          </Card>
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
  const AppleM1Pro = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasAM1PRO />
            <hr />
            <Routes>
                {preguntasAM1PRO.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<preguntasAM1PRO />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AppleM1Pro;