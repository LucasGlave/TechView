import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const preguntasXPS13 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la Dell XPS 13?',
      respuesta: 'La Dell XPS 13 cuenta con una serie de especificaciones impresionantes. Está equipada con un procesador Intel Core de última generación, que ofrece un rendimiento rápido y eficiente para satisfacer las necesidades de los usuarios más exigentes. También ofrece opciones de memoria RAM de alta velocidad, almacenamiento SSD rápido y una batería de larga duración para mantener la productividad durante todo el día.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué tipo de procesador utiliza la Dell XPS 13?',
      respuesta: ' La Dell XPS 13 utiliza procesadores Intel de última generación, como la serie Intel Core i5 o i7. Estos procesadores están diseñados para brindar un rendimiento excepcional en aplicaciones exigentes y permiten una experiencia de usuario fluida y sin problemas. Además, aprovechan la tecnología de múltiples núcleos para una mayor capacidad multitarea y un rendimiento general más rápido.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es el tamaño de pantalla de la Dell XPS 13?',
      respuesta: 'La Dell XPS 13 presenta una pantalla de 13.3 pulgadas. Lo que hace que esta pantalla sea especial es su diseño InfinityEdge, que minimiza los bordes alrededor de la pantalla y maximiza la relación de pantalla a cuerpo. Esto resulta en una experiencia de visualización envolvente y una mayor portabilidad gracias a un factor de forma más compacto.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Qué tipo de resolución ofrece la pantalla de la Dell XPS 13?',
      respuesta: 'La pantalla de la Dell XPS 13 ofrece una resolución de alta definición (Full HD) o incluso una resolución 4K Ultra HD, según la configuración elegida. La resolución más alta proporciona una claridad y detalle excepcionales, lo cual es especialmente beneficioso para profesionales creativos o usuarios que trabajan con contenido multimedia de alta calidad.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Qué opciones de conectividad ofrece la Dell XPS 13?',
      respuesta: 'La Dell XPS 13 está equipada con una variedad de puertos y opciones de conectividad para satisfacer las necesidades de los usuarios. Estos pueden incluir puertos USB, puertos Thunderbolt 4, lector de tarjetas SD y conectividad inalámbrica a través de Bluetooth y Wi-Fi. Además, algunos modelos también pueden ofrecer la opción de conectividad LTE para una conectividad móvil siempre activa.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Qué características de seguridad ofrece la Dell XPS 13?',
      respuesta: 'La Dell XPS 13 se ha diseñado con varias características de seguridad para proteger la privacidad y los datos del usuario. Esto puede incluir tecnologías como un lector de huellas dactilares integrado para un inicio de sesión seguro, un chip de seguridad TPM para proteger los datos almacenados y opciones de cifrado de disco para garantizar que los datos confidenciales estén protegidos.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Qué tipo de sistema operativo se ejecuta en la Dell XPS 13?',
      respuesta: 'La Dell XPS 13 suele venir con el sistema operativo Windows 10 preinstalado. Sin embargo, también es posible encontrar modelos que ejecutan otros sistemas operativos, como algunas variantes que ofrecen Ubuntu Linux. Esto permite a los usuarios elegir la opción que mejor se adapte a sus necesidades y preferencias.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Cuál es la duración de la batería de la Dell XPS 13?',
      respuesta: 'La duración de la batería de la Dell XPS 13 puede variar según el modelo y las configuraciones específicas. Sin embargo, en general, la Dell XPS 13 se destaca por su excelente duración de la batería. Con una sola carga, los usuarios pueden esperar varias horas de uso continuo, lo que es ideal para usuarios móviles y aquellos que necesitan trabajar sin estar cerca de una toma de corriente. Con un uso normal, que incluye navegación por Internet, reproducción de videos en streaming, edición de documentos y otras tareas diarias, la Dell XPS 13 puede ofrecer una duración de batería de alrededor de 8 a 12 horas. Esto puede variar dependiendo de la configuración específica y la optimización del sistema. El uso de videojuegos es una tarea más intensiva en términos de recursos y energía. En este caso, la duración de la batería de la Dell XPS 13 se verá significativamente reducida. Con juegos gráficamente intensivos, es posible que la batería dure aproximadamente de 2 a 4 horas, aunque esto puede variar según el juego específico y la configuración gráfica utilizada.',
    },
    {
      id: 'pregunta9',
      titulo: '¿La Dell XPS 13 es adecuada para juegos o tareas intensivas en gráficos?',
      respuesta: 'Si bien la Dell XPS 13 no está diseñada específicamente para juegos o tareas intensivas en gráficos, algunos modelos pueden ofrecer opciones de tarjeta gráfica dedicada que mejoran el rendimiento en juegos y aplicaciones gráficas. Sin embargo, para un rendimiento óptimo en juegos o aplicaciones profesionales intensivas en gráficos, es posible que los usuarios deseen considerar una laptop enfocada en el rendimiento gráfico, como una laptop de la serie Dell Alienware.',
    },
    {
      id: 'pregunta10',
      titulo: '¿La Dell XPS 13 es adecuada para profesionales o usuarios empresariales?',
      respuesta: 'Sí, la Dell XPS 13 es una opción popular para profesionales y usuarios empresariales debido a su rendimiento confiable, diseño elegante y características de seguridad. Además, Dell ofrece servicios adicionales, como opciones de soporte y administración empresarial, para satisfacer las necesidades específicas de los usuarios empresariales.',
    }
  ];

export const PreguntaXPS13 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasXPS13.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasXPS13.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasXPS13[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasXPS13.length - 1 ? preguntasXPS13[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/dell-xps13/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/dell-xps13/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/dell-xps13`}>
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

const PreguntasXPS13 = () => {
    return (
      <div className='preguntas'>
        {preguntasXPS13.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li>
              <Link to={`/notebooks/dell-xps13/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const DellXPS13 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasXPS13 />
            <hr />
            <Routes>
                {preguntasXPS13.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasXPS13 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default DellXPS13;