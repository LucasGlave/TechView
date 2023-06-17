import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const preguntas66S = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son los principales aspectos destacados de la MSI GS66 Stealth?',
      respuesta: 'La MSI GS66 Stealth es una notebook gaming de alto rendimiento que combina potencia, portabilidad y un diseño elegante. Algunos de sus aspectos destacados son: \n Rendimiento superior: La notebook está equipada con potentes procesadores Intel Core de última generación, tarjetas gráficas NVIDIA GeForce RTX, opciones de memoria RAM de alta velocidad y almacenamiento SSD rápido, lo que la hace ideal para juegos y tareas intensivas. \n Pantalla de alta calidad: La GS66 Stealth cuenta con una pantalla de alta resolución y alta frecuencia de actualización, lo que ofrece una experiencia visual inmersiva y fluida para juegos y contenido multimedia. \n Diseño delgado y portátil: A pesar de su potencia, la notebook tiene un diseño delgado y ligero, lo que la hace fácil de transportar y adecuada para usuarios que necesitan movilidad sin comprometer el rendimiento. \n Sistema de refrigeración avanzado: La GS66 Stealth utiliza un sistema de refrigeración eficiente con múltiples ventiladores y conductos de aire, que ayuda a mantener la temperatura bajo control incluso durante largas sesiones de juego. \n Teclado retroiluminado y personalizable: El teclado de la notebook es retroiluminado y permite la personalización de la iluminación de las teclas a través del software de MSI, lo que mejora la experiencia de juego y permite una mayor productividad en entornos con poca luz.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué sistema operativo viene preinstalado en la MSI GS66 Stealth?',
      respuesta: 'La MSI GS66 Stealth generalmente viene con el sistema operativo Windows 10 preinstalado. Esto te proporcionará acceso a todas las características y funcionalidades del sistema operativo de Microsoft, así como a una amplia gama de aplicaciones y programas compatibles.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuáles son los requisitos de alimentación de la MSI GS66 Stealth?',
      respuesta: 'La MSI GS66 Stealth requiere una fuente de alimentación externa para funcionar. El adaptador de corriente suministrado debe tener una potencia adecuada para soportar el hardware de alto rendimiento de la notebook. Generalmente, se incluye un adaptador de corriente específico en la caja al adquirir la notebook.',
    },
    {
      id: 'pregunta4',
      titulo: '¿La MSI GS66 Stealth ofrece opciones de actualización de RAM y almacenamiento?',
      respuesta: 'Sí, la MSI GS66 Stealth generalmente ofrece opciones de actualización de RAM y almacenamiento. Puedes consultar las especificaciones y opciones disponibles al comprar la notebook para determinar qué configuración se ajusta mejor a tus necesidades. Algunos modelos pueden tener componentes soldados o limitaciones de actualización, por lo que es recomendable verificar la información antes de realizar la compra.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La MSI GS66 Stealth es compatible con la realidad virtual (VR)?',
      respuesta: 'Sí, la MSI GS66 Stealth es compatible con la realidad virtual. Gracias a su potente hardware, incluyendo tarjetas gráficas NVIDIA GeForce RTX, puede ofrecer un rendimiento adecuado para experiencias de realidad virtual inmersivas. Sin embargo, es posible que debas verificar los requisitos específicos del dispositivo de realidad virtual que planeas utilizar para garantizar la compatibilidad completa.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Cuánto pesa y cuán portátil es la MSI GS66 Stealth?',
      respuesta: 'La MSI GS66 Stealth tiene un diseño delgado y ligero, lo que la hace relativamente portátil para una notebook gaming de alto rendimiento. El peso puede variar según la configuración exacta y las opciones de hardware, pero generalmente oscila entre 2 y 2.3 kilogramos. Esto la hace adecuada para llevarla contigo en una mochila o bolsa de transporte sin dificultades.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La MSI GS66 Stealth tiene una cámara web incorporada?',
      respuesta: 'Sí, la MSI GS66 Stealth generalmente incluye una cámara web integrada en la parte superior de la pantalla. Esta cámara es útil para videollamadas, conferencias en línea y otras aplicaciones que requieren una cámara web. Sin embargo, al igual que con otras notebooks, la calidad de la cámara puede variar y es posible que desees considerar una cámara externa si necesitas una mayor calidad de imagen.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La MSI GS66 Stealth tiene opciones de conectividad inalámbrica?',
      respuesta: 'Sí, la MSI GS66 Stealth ofrece conectividad inalámbrica a través de Wi-Fi y Bluetooth. Puedes conectarte a redes Wi-Fi para acceder a internet de alta velocidad y utilizar dispositivos Bluetooth, como auriculares o altavoces, para una experiencia inalámbrica conveniente.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La MSI GS66 Stealth tiene un sistema de enfriamiento eficiente?',
      respuesta: 'Sí, la MSI GS66 Stealth cuenta con un sistema de enfriamiento avanzado para mantener las temperaturas bajo control durante el uso intensivo. Utiliza ventiladores de alta velocidad, disipadores de calor y conductos de aire estratégicamente ubicados para evacuar el calor generado por el hardware interno. Esto ayuda a prevenir el sobrecalentamiento y asegura un rendimiento óptimo y una vida útil prolongada de los componentes.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Qué tipo de garantía se ofrece con la MSI GS66 Stealth?',
      respuesta: 'La garantía específica puede variar según el país y el fabricante, pero la MSI GS66 Stealth generalmente viene con una garantía estándar de un año. Algunos fabricantes también ofrecen la opción de ampliar la garantía por un período adicional a un costo adicional. Es recomendable verificar los términos y condiciones de la garantía al adquirir la notebook para obtener información precisa sobre la cobertura y los servicios de soporte ofrecidos.',
    }
  ];

export const Pregunta66S = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntas66S.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntas66S.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntas66S[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntas66S.length - 1 ? preguntas66S[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/msi-gs66stealth/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/msi-gs66stealth/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/msi-gs66stealth`}>
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

const Preguntas66S = () => {
    return (
      <div className='preguntas'>
        {preguntas66S.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li>
              <Link to={`/notebooks/msi-gs66stealth/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const MSIGS66Stealth = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <Preguntas66S />
            <hr />
            <Routes>
                {preguntas66S.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Preguntas66S />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default MSIGS66Stealth;