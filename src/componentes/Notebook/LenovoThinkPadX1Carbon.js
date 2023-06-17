import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const preguntasTPC = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Lenovo ThinkPad X1 Carbon Gen 9?',
      respuesta: 'La Lenovo ThinkPad X1 Carbon Gen 9 es una notebook premium diseñada para profesionales y usuarios que buscan una combinación de rendimiento, portabilidad y durabilidad. Viene equipada con un chasis ultraligero de fibra de carbono que la hace resistente y fácil de transportar. Las especificaciones clave incluyen: \n Procesador: La Lenovo ThinkPad X1 Carbon Gen 9 utiliza procesadores Intel Core de última generación, como la serie Intel Core i5 o i7. Estos procesadores ofrecen un rendimiento potente y eficiente para manejar tareas exigentes y multitarea sin problemas. \n Memoria RAM: Puede configurarse con hasta 32 GB de memoria RAM, lo que permite ejecutar múltiples aplicaciones y realizar tareas intensivas sin problemas de rendimiento. \n Almacenamiento: Ofrece opciones de almacenamiento rápido en forma de unidades SSD de alta capacidad. Esto proporciona un acceso rápido a los archivos y un rendimiento general más ágil. \n pantalla: La Lenovo ThinkPad X1 Carbon Gen 9 cuenta con una pantalla de 14 pulgadas con opciones de resolución Full HD o 4K UHD. Estas pantallas ofrecen una calidad visual impresionante y colores vibrantes, lo que es ideal para trabajos creativos, visualización de contenido multimedia y productividad en general. \n conectividad: Dispone de una variedad de opciones de conectividad, como puertos USB-C/Thunderbolt, puertos USB-A, HDMI, lector de tarjetas SD y conectividad inalámbrica Wi-Fi 6. Esto garantiza la compatibilidad con una amplia gama de dispositivos y facilita la conexión a periféricos y redes. \n Duración de la batería: La Lenovo ThinkPad X1 Carbon Gen 9 ofrece una duración de batería impresionante, con modelos que pueden alcanzar hasta 15 horas de uso continuo. Esto permite a los usuarios trabajar durante largos períodos sin tener que preocuparse por la carga de la batería. \n Seguridad: La notebook viene con características de seguridad avanzadas, como lector de huellas dactilares, cámara IR para reconocimiento facial y chip de seguridad TPM 2.0. Estas características ayudan a proteger los datos y garantizar la privacidad del usuario.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cuál es el sistema operativo preinstalado en la Lenovo ThinkPad X1 Carbon Gen 9?',
      respuesta: 'La Lenovo ThinkPad X1 Carbon Gen 9 generalmente viene con el sistema operativo Windows 10 preinstalado. Sin embargo, algunos modelos pueden ofrecer opciones adicionales, como la posibilidad de elegir entre Windows 10 Pro o incluso una distribución Linux como Ubuntu.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Es posible ampliar la memoria RAM en la Lenovo ThinkPad X1 Carbon Gen 9?',
      respuesta: 'Sí, la Lenovo ThinkPad X1 Carbon Gen 9 permite la ampliación de la memoria RAM. Sin embargo, ten en cuenta que el proceso de actualización de la memoria RAM puede variar según el modelo específico y las limitaciones de diseño. Recomendamos consultar el manual del usuario o contactar con el soporte técnico de Lenovo para obtener instrucciones precisas sobre cómo ampliar la memoria RAM de tu modelo en particular.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuáles son las opciones de conectividad inalámbrica disponibles en la Lenovo ThinkPad X1 Carbon Gen 9?',
      respuesta: 'La Lenovo ThinkPad X1 Carbon Gen 9 ofrece conectividad inalámbrica Wi-Fi 6 (802.11ax), que es la última generación de estándares Wi-Fi. Esto proporciona velocidades de conexión más rápidas, mayor capacidad y una mejor eficiencia energética en comparación con las generaciones anteriores de Wi-Fi. También puede contar con conectividad Bluetooth 5.2 para emparejar dispositivos periféricos y transferir datos de manera inalámbrica.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La Lenovo ThinkPad X1 Carbon Gen 9 tiene una tarjeta gráfica dedicada?',
      respuesta: 'La Lenovo ThinkPad X1 Carbon Gen 9 no tiene una tarjeta gráfica dedicada independiente. En cambio, utiliza la solución gráfica integrada en el procesador Intel, que ofrece un rendimiento adecuado para tareas de productividad, visualización de contenido multimedia y edición de fotos y videos básicos. Sin embargo, si necesitas un rendimiento gráfico más potente para juegos o aplicaciones exigentes, puede ser recomendable considerar otras opciones con tarjetas gráficas dedicadas.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Cuáles son las características de seguridad adicionales de la Lenovo ThinkPad X1 Carbon Gen 9?',
      respuesta: 'Además de las características estándar de seguridad, la Lenovo ThinkPad X1 Carbon Gen 9 ofrece funciones de seguridad avanzadas. Esto incluye un chip de seguridad TPM 2.0, que ayuda a proteger los datos almacenados en el dispositivo mediante el cifrado y la autenticación segura. También cuenta con una cámara de infrarrojos (IR) para el reconocimiento facial, lo que permite un inicio de sesión biométrico seguro. Además, tiene un lector de huellas dactilares integrado para una autenticación rápida y conveniente.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Lenovo ThinkPad X1 Carbon Gen 9 tiene una pantalla táctil?',
      respuesta: 'Sí, algunos modelos de la Lenovo ThinkPad X1 Carbon Gen 9 vienen con una pantalla táctil opcional. Esto permite una interacción intuitiva con el sistema operativo y las aplicaciones, brindando una experiencia más versátil. Sin embargo, ten en cuenta que no todos los modelos tienen una pantalla táctil, por lo que es importante verificar las especificaciones del modelo específico al realizar una compra.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La Lenovo ThinkPad X1 Carbon Gen 9 admite la carga rápida?',
      respuesta: 'Sí, la Lenovo ThinkPad X1 Carbon Gen 9 es compatible con la tecnología de carga rápida. Con el adaptador de corriente adecuado, puedes cargar rápidamente la batería de la notebook para obtener una carga rápida y eficiente. Esto es especialmente útil cuando necesitas cargar rápidamente el dispositivo antes de salir o cuando tienes poco tiempo disponible.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La Lenovo ThinkPad X1 Carbon Gen 9 tiene un teclado retroiluminado?',
      respuesta: 'Sí, la Lenovo ThinkPad X1 Carbon Gen 9 cuenta con un teclado retroiluminado. Esto permite una escritura cómoda y precisa incluso en condiciones de poca luz. La retroiluminación del teclado se puede ajustar en varios niveles de brillo para adaptarse a tus preferencias y entorno de trabajo.',
    },
    {
      id: 'pregunta10',
      titulo: '¿La Lenovo ThinkPad X1 Carbon Gen 9 tiene una webcam integrada?',
      respuesta: 'Sí, la Lenovo ThinkPad X1 Carbon Gen 9 tiene una webcam integrada. La cámara web te permite realizar videollamadas, conferencias en línea y grabaciones de video. Además, algunos modelos de la serie pueden incluir una cámara IR adicional para el reconocimiento facial y una mayor seguridad.',
    }
  ];

export const PreguntaTPC = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasTPC.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasTPC.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasTPC[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasTPC.length - 1 ? preguntasTPC[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/lenovo-thinkpad-x1carbon/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/lenovo-thinkpad-x1carbon/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/lenovo-thinkpad-x1carbon`}>
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

const PreguntasTPC = () => {
    return (
      <div className='preguntas'>
        {preguntasTPC.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li key={pregunta.id}>
              <Link to={`/notebooks/lenovo-thinkpad-x1carbon/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const LenovoThinkPadX1Carbon = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasTPC />
            <hr />
            <Routes>
                {preguntasTPC.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasTPC />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default LenovoThinkPadX1Carbon;