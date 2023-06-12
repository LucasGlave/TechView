import { Route, Link, useParams, Routes } from 'react-router-dom';


const preguntasH300 = [
    {
      id: 'pregunta1',
      titulo: '¿Qué características hacen destacar a la Acer Predator Helios 300?',
      respuesta: 'La Acer Predator Helios 300 es conocida por ser una notebook gaming de alto rendimiento a un precio asequible. Estas son algunas de sus características destacadas: \n Procesador y tarjeta gráfica: Viene equipada con un potente procesador Intel Core i7 o i9 de última generación y una tarjeta gráfica NVIDIA GeForce RTX para ofrecer un rendimiento excepcional en juegos y aplicaciones exigentes. \n Pantalla de alta frecuencia de actualización: Presenta una pantalla de alta frecuencia de actualización, generalmente de 144 Hz o 240 Hz, que permite una experiencia de juego suave y sin problemas con imágenes más nítidas y menos desenfoques de movimiento. \n Sistema de enfriamiento: Cuenta con un sistema de enfriamiento avanzado que incluye ventiladores duales, tubos de calor y múltiples salidas de aire para mantener las temperaturas bajo control durante largas sesiones de juego. \n Almacenamiento y memoria: Ofrece opciones de almacenamiento rápido, como unidades de estado sólido (SSD) de alta capacidad, que proporcionan un acceso rápido a los juegos y archivos. Además, cuenta con suficiente memoria RAM para una multitarea fluida y un rendimiento rápido en aplicaciones exigentes.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué tipo de teclado tiene la Acer Predator Helios 300?',
      respuesta: 'La Acer Predator Helios 300 presenta un teclado retroiluminado con tecnología RGB. Esto permite personalizar el color y los efectos de iluminación del teclado según tus preferencias. Además, puede contar con funciones adicionales, como teclas programables o teclas de acceso rápido para funciones de juego.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuáles son las opciones de conectividad disponibles en la Acer Predator Helios 300?',
      respuesta: 'La Acer Predator Helios 300 ofrece una variedad de opciones de conectividad. Esto puede incluir puertos USB-C, puertos USB-A, HDMI, DisplayPort, un lector de tarjetas SD y una toma de audio. Además, cuenta con conectividad inalámbrica Wi-Fi y Bluetooth para una conexión rápida y estable con dispositivos y redes periféricas.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuánto pesa la Acer Predator Helios 300 y cuál es su duración de batería?',
      respuesta: 'El peso de la Acer Predator Helios 300 puede variar según la configuración específica, pero generalmente ronda los 2,5 kg. En cuanto a la duración de la batería, puede variar según el uso, pero en condiciones normales puede durar alrededor de 4 a 6 horas, aunque este número puede reducirse durante el juego intensivo.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La Acer Predator Helios 300 tiene opciones de actualización?',
      respuesta: 'Sí, la Acer Predator Helios 300 ofrece opciones de actualización. Puedes expandir la memoria RAM y el almacenamiento, reemplazando o agregando módulos de memoria y unidades de almacenamiento adicionales, como SSD o discos duros.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Qué sistema operativo viene preinstalado en la Acer Predator Helios 300?',
      respuesta: 'La Acer Predator Helios 300 generalmente viene preinstalada con el sistema operativo Windows 10. Sin embargo, es posible que haya variantes que ofrezcan diferentes opciones de sistema operativo o incluso la posibilidad de elegir un sistema operativo específico al realizar la compra.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuáles son las opciones de conectividad disponibles en la Acer Predator Helios 300?',
      respuesta: 'La Acer Predator Helios 300 ofrece una amplia gama de opciones de conectividad. Estas pueden incluir puertos USB 3.0, puertos USB 2.0, puertos HDMI, puertos DisplayPort, un lector de tarjetas SD, una toma de audio para auriculares y micrófono, e incluso un puerto Ethernet para conexiones por cable. También cuenta con conectividad inalámbrica Wi-Fi y Bluetooth, lo que te permite conectarte a redes inalámbricas y utilizar dispositivos compatibles sin problemas.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La Acer Predator Helios 300 permite actualizaciones de hardware?',
      respuesta: 'Sí, la Acer Predator Helios 300 ofrece opciones de actualización de hardware. Por ejemplo, puedes ampliar la memoria RAM de la notebook si deseas tener más capacidad para multitarea o ejecutar aplicaciones y juegos exigentes. Además, es posible actualizar el almacenamiento interno, reemplazando el disco duro por una unidad de estado sólido (SSD) de mayor capacidad o más rápida para un rendimiento de almacenamiento mejorado. Es importante tener en cuenta las especificaciones y limitaciones de la notebook antes de realizar cualquier actualización para garantizar la compatibilidad adecuada de los componentes.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La Acer Predator Helios 300 tiene iluminación RGB en el teclado?',
      respuesta: 'Sí, la Acer Predator Helios 300 cuenta con retroiluminación RGB en su teclado. Esto te permite personalizar la apariencia y el color de la iluminación según tus preferencias. Puedes seleccionar entre diferentes efectos de iluminación, ajustar el brillo y, en algunos modelos, incluso asignar colores diferentes a zonas específicas del teclado para una experiencia visual más personalizada durante tus sesiones de juego o trabajo.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es la capacidad de almacenamiento de la Acer Predator Helios 300?',
      respuesta: 'La Acer Predator Helios 300 generalmente viene con opciones de almacenamiento que van desde discos duros tradicionales (HDD) de alta capacidad hasta unidades de estado sólido (SSD) más rápidas. Las capacidades de almacenamiento pueden variar según el modelo y la configuración específica, pero suelen oscilar entre 256 GB y 1 TB para las opciones de SSD, y hasta 2 TB o más para los discos duros. La elección de la capacidad de almacenamiento depende de tus necesidades personales, como la cantidad de juegos, aplicaciones y archivos multimedia que planeas almacenar en la notebook. Además, algunas variantes de la Acer Predator Helios 300 pueden ofrecer configuraciones de almacenamiento híbrido, que combinan un SSD más pequeño para un inicio rápido del sistema operativo y aplicaciones, junto con un disco duro más grande para almacenamiento adicional.',
    }
  ];

export const PreguntaH300 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasH300.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasH300.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasH300[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasH300.length - 1 ? preguntasH300[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/helios-300/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/helios-300/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/helios-300`}>
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

const PreguntasH300 = () => {
    return (
      <div className='preguntas'>
        {preguntasH300.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/notebooks/helios-300/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const AcerPredatorHelios300 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasH300 />
            <hr />
            <Routes>
                {preguntasH300.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasH300 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AcerPredatorHelios300;