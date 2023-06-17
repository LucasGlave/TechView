import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const preguntasZG14 = [
    {
      id: 'pregunta1',
      titulo: '¿Qué características hacen destacar a la ASUS ROG Zephyrus G14?',
      respuesta: 'La ASUS ROG Zephyrus G14 es conocida por ser una notebook gaming de alto rendimiento y portátil. Estas son algunas de sus características destacadas: \r Procesador: Está equipada con los procesadores AMD Ryzen serie 5000, que ofrecen un rendimiento excepcional y eficiencia energética para juegos y tareas intensivas. \t Tarjeta gráfica: Cuenta con una tarjeta gráfica NVIDIA GeForce RTX 30 Series, que ofrece un rendimiento gráfico de vanguardia para juegos de alta calidad y aplicaciones de edición de video. \r Pantalla: Presenta una pantalla de 14 pulgadas con opciones de resolución Full HD o QHD, y una alta tasa de refresco de hasta 120 Hz. Esto proporciona imágenes nítidas y suaves durante el juego. \r Almacenamiento: Ofrece opciones de almacenamiento rápido, como unidades SSD NVMe de alta capacidad, que permiten una carga rápida de juegos y un acceso rápido a los archivos. \r Memoria RAM: Puede configurarse con hasta 32 GB de memoria RAM de alta velocidad, lo que permite una multitarea fluida y un rendimiento rápido en aplicaciones exigentes.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué tipo de teclado tiene la ASUS ROG Zephyrus G14?',
      respuesta: 'La ASUS ROG Zephyrus G14 presenta un teclado retroiluminado con tecnología RGB. Esto permite personalizar el color y los efectos de iluminación del teclado según tus preferencias. Además, cuenta con una distribución de teclado ergonómica y teclas de función adicionales para facilitar la experiencia de juego.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuáles son las opciones de conectividad disponibles en la ASUS ROG Zephyrus G14?',
      respuesta: 'La ASUS ROG Zephyrus G14 ofrece una variedad de opciones de conectividad. Estas pueden incluir puertos USB-C, puertos USB-A, HDMI, un lector de tarjetas SD y una toma de audio. Además, cuenta con conectividad inalámbrica Wi-Fi 6 y Bluetooth 5.0 para una conexión rápida y estable con dispositivos periféricos y redes.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuánto pesa la ASUS ROG Zephyrus G14 y cuál es su duración de batería?',
      respuesta: 'La ASUS ROG Zephyrus G14 tiene un peso aproximado de 1.6 kg, lo que la hace bastante portátil para una notebook gaming. En cuanto a la duración de la batería, puede variar según el uso, pero generalmente puede durar hasta 8 horas con un uso moderado.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La ASUS ROG Zephyrus G14 tiene un sistema de enfriamiento eficiente?',
      respuesta: 'Sí, la ASUS ROG Zephyrus G14 cuenta con un sistema de enfriamiento eficiente que ayuda a mantener la temperatura bajo control durante sesiones de juego intensivas. Utiliza tecnologías de refrigeración avanzadas, como ventiladores de alto rendimiento, tubos de calor y disipadores térmicos para mantener los componentes internos frescos y funcionando de manera óptima.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Puedo actualizar la RAM y el almacenamiento en la ASUS ROG Zephyrus G14?',
      respuesta: 'Sí, la ASUS ROG Zephyrus G14 permite actualizar tanto la memoria RAM como el almacenamiento. Tiene ranuras de expansión para agregar más módulos de RAM o reemplazar el almacenamiento existente con unidades de mayor capacidad.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Qué sistema operativo viene preinstalado en la ASUS ROG Zephyrus G14?',
      respuesta: 'La ASUS ROG Zephyrus G14 generalmente viene preinstalada con el sistema operativo Windows 10. Sin embargo, es posible que haya modelos que ofrezcan diferentes opciones de sistema operativo.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La ASUS ROG Zephyrus G14 tiene una cámara web integrada?',
      respuesta: 'Sí, la ASUS ROG Zephyrus G14 cuenta con una cámara web integrada. Esto te permite realizar videollamadas y participar en conferencias en línea sin necesidad de dispositivos externos.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La ASUS ROG Zephyrus G14 es compatible con tecnología de ray tracing?',
      respuesta: 'Sí, la ASUS ROG Zephyrus G14 cuenta con una tarjeta gráfica NVIDIA GeForce RTX, que es compatible con tecnología de ray tracing. Esto permite una representación más realista de la iluminación, las sombras y los reflejos en los juegos que admiten esta tecnología.',
    },
    {
      id: 'pregunta10',
      titulo: '¿La ASUS ROG Zephyrus G14 tiene opciones de personalización de software?',
      respuesta: 'Sí, la ASUS ROG Zephyrus G14 viene con software de personalización que te permite ajustar la configuración de rendimiento, la iluminación del teclado y otros aspectos relacionados con la experiencia de juego. El software ROG Armoury Crate es una herramienta útil para personalizar y optimizar tu notebook según tus preferencias.',
    }
  ];

export const PreguntaZG14 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasZG14.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasZG14.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasZG14[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasZG14.length - 1 ? preguntasZG14[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/asus-rog-g14/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/asus-rog-g14/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/asus-rog-g14`}>
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

const PreguntasZG14 = () => {
    return (
      <div className='preguntas'>
        {preguntasZG14.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li key={pregunta.id}>
              <Link to={`/notebooks/asus-rog-g14/${pregunta.id}`}>{pregunta.titulo}</Link>
            </li>
          </Card>
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
  const AsusROGZephyrusG14 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasZG14 />
            <hr />
            <Routes>
                {preguntasZG14.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasZG14 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AsusROGZephyrusG14;