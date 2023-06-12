import { Route, Link, useParams, Routes } from 'react-router-dom';


const preguntasSL4 = [
    {
      id: 'pregunta1',
      titulo: '¿Qué características destacan en la Microsoft Surface Laptop 4?',
      respuesta: 'La Microsoft Surface Laptop 4 destaca por su diseño elegante y construcción de alta calidad, junto con un rendimiento potente y una pantalla impresionante. Algunas de sus características clave incluyen: \n Pantalla táctil PixelSense: La Surface Laptop 4 cuenta con una pantalla táctil PixelSense de alta resolución y colores vibrantes, que ofrece una experiencia visual inmersiva y detallada. \n Rendimiento potente: Equipada con procesadores Intel Core de última generación o procesadores AMD Ryzen, y opciones de RAM y almacenamiento configurables, la Surface Laptop 4 ofrece un rendimiento sólido para tareas exigentes y multitarea. \nDuración de la batería: La notebook generalmente ofrece una buena duración de la batería, lo que te permite usarla durante horas sin tener que cargarla constantemente. \n Teclado cómodo: La Surface Laptop 4 cuenta con un teclado ergonómico y cómodo de usar, con retroiluminación para una escritura precisa incluso en entornos con poca iluminación. \n Conectividad versátil: La notebook ofrece una variedad de puertos, como puertos USB-A, puertos USB-C, un puerto Surface Connect y un conector para auriculares, lo que te permite conectar dispositivos y periféricos de manera fácil y conveniente.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué sistema operativo viene preinstalado en la Microsoft Surface Laptop 4?',
      respuesta: 'La Microsoft Surface Laptop 4 generalmente viene preinstalada con el sistema operativo Windows 10 Home o Windows 10 Pro, dependiendo de la variante y la configuración que elijas al comprarla. Esto significa que tendrás acceso a todas las características y funciones del sistema operativo de Microsoft, así como a la amplia gama de aplicaciones y programas compatibles disponibles en el ecosistema de Windows.',
    },
    {
      id: 'pregunta3',
      titulo: '¿La Microsoft Surface Laptop 4 es adecuada para juegos?',
      respuesta: 'Si bien la Microsoft Surface Laptop 4 no está específicamente diseñada como una notebook para juegos de alta gama, algunas variantes pueden ofrecer un rendimiento gráfico adecuado para juegos casuales o menos exigentes. Si eres un jugador entusiasta y buscas una experiencia de juego más intensiva, es posible que desees considerar opciones con tarjetas gráficas dedicadas o portátiles de juego especializadas que ofrezcan un rendimiento óptimo para juegos exigentes.',
    },
    {
      id: 'pregunta4',
      titulo: '¿La Microsoft Surface Laptop 4 tiene una cámara integrada?',
      respuesta: 'Sí, la Microsoft Surface Laptop 4 viene equipada con una cámara frontal HD integrada. Esto te permite realizar videollamadas, participar en conferencias en línea y capturar fotos y videos con calidad decente. La cámara también admite funciones de reconocimiento facial a través de Windows Hello para un inicio de sesión más rápido y seguro.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La Microsoft Surface Laptop 4 ofrece opciones de seguridad adicionales?',
      respuesta: 'Sí, la Microsoft Surface Laptop 4 ofrece varias opciones de seguridad adicionales para proteger tus datos y tu privacidad. Esto incluye características como Windows Hello, que utiliza el reconocimiento facial o la huella digital para autenticar y desbloquear la notebook de manera segura. También puedes utilizar funciones de cifrado de datos y configurar contraseñas seguras para proteger tus archivos y cuentas.',
    },
    {
      id: 'pregunta6',
      titulo: '¿La Microsoft Surface Laptop 4 tiene soporte para stylus o lápiz digital?',
      respuesta: 'Sí, la Microsoft Surface Laptop 4 es compatible con el lápiz digital Surface Pen, que se vende por separado. Con el lápiz, puedes tomar notas, dibujar, hacer bocetos y realizar otras tareas creativas o de productividad de manera precisa y natural en la pantalla táctil.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Microsoft Surface Laptop 4 es adecuada para tareas de edición de video y diseño gráfico?',
      respuesta: 'Sí, la Microsoft Surface Laptop 4 es capaz de manejar tareas de edición de video y diseño gráfico, especialmente en su configuración más potente. Con un procesador potente, una cantidad adecuada de RAM y opciones de almacenamiento rápido, puede ejecutar aplicaciones de edición de video y diseño gráfico de manera eficiente. Sin embargo, para proyectos muy intensivos o profesionales, es posible que desees considerar configuraciones más avanzadas o portátiles especializadas para un rendimiento óptimo.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La Microsoft Surface Laptop 4 tiene opciones de expansión de almacenamiento?',
      respuesta: 'La Microsoft Surface Laptop 4 generalmente ofrece opciones de almacenamiento integrado que varían según la configuración que elijas al comprarla. Sin embargo, ten en cuenta que muchas variantes de Surface Laptop 4 tienen almacenamiento soldado a la placa base, lo que significa que no se puede actualizar o reemplazar fácilmente. Por lo tanto, es importante considerar tus necesidades de almacenamiento a largo plazo al elegir la configuración adecuada al comprar la notebook.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La Microsoft Surface Laptop 4 tiene una pantalla táctil desmontable o convertible?',
      respuesta: 'No, la Microsoft Surface Laptop 4 no tiene una pantalla táctil desmontable o convertible. Su diseño se basa en una notebook tradicional con una pantalla fija. Sin embargo, si buscas una opción con una pantalla táctil desmontable o convertible, puedes considerar otros dispositivos de la misma línea Surface, como la Surface Pro o la Surface Book, que ofrecen esa funcionalidad.',
    },
    {
      id: 'pregunta10',
      titulo: '¿La Microsoft Surface Laptop 4 es compatible con aplicaciones de productividad como Microsoft Office?',
      respuesta: 'Sí, la Microsoft Surface Laptop 4 es totalmente compatible con aplicaciones de productividad, incluyendo Microsoft Office. Puedes instalar y utilizar programas como Word, Excel, PowerPoint y Outlook sin problemas en la notebook. Además, al ser una notebook con Windows 10, también tienes acceso a una amplia gama de aplicaciones adicionales disponibles en la tienda de Microsoft.',
    }
  ];

export const PreguntaSL4 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasSL4.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasSL4.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasSL4[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasSL4.length - 1 ? preguntasSL4[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/microsoft-surface-laptop4/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/microsoft-surface-laptop4/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/microsoft-surface-laptop4`}>
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

const PreguntasSL4 = () => {
    return (
      <div className='preguntas'>
        {preguntasSL4.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/notebooks/microsoft-surface-laptop4/${pregunta.id}`}>{pregunta.titulo}</Link>
          </li>
        ))}
        <div className='volverEntrar' style={{margin:'30px'}}>
          <div className='volver'>
            <Link to={`/notebooks`}>
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
  const MicrosoftSurfaceLaptop4 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasSL4 />
            <hr />
            <Routes>
                {preguntasSL4.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasSL4 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default MicrosoftSurfaceLaptop4;