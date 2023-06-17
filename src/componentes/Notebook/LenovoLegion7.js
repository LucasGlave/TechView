import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const preguntasLEGION7 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son los aspectos destacados de la Lenovo Legion 7?',
      respuesta: 'La Lenovo Legion 7 es una notebook gaming de alta gama que ofrece un rendimiento excepcional y características de vanguardia. Algunos de sus aspectos destacados son: \n Potencia de procesamiento: La notebook está equipada con procesadores Intel Core de última generación y tarjetas gráficas NVIDIA GeForce RTX, lo que brinda un rendimiento superior para juegos y tareas exigentes. \n Pantalla de alta calidad: La Legion 7 cuenta con una pantalla de alta resolución y alta frecuencia de actualización, lo que ofrece una experiencia visual envolvente y fluida con colores vibrantes y detalles nítidos. \n Sistema de refrigeración avanzado: La notebook utiliza un sistema de refrigeración eficiente con ventiladores duales, tubos de calor y conductos de aire para mantener el rendimiento óptimo y evitar el sobrecalentamiento durante largas sesiones de juego. \n Teclado retroiluminado personalizable: El teclado de la Legion 7 es retroiluminado y permite la personalización de la iluminación de las teclas, lo que brinda una experiencia de juego inmersiva y facilita la visibilidad en entornos con poca luz. \n Diseño premium: La notebook presenta un diseño elegante y sofisticado con materiales de alta calidad, como aluminio y fibra de carbono, que brindan durabilidad y resistencia.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué tipo de procesadores se ofrecen en la Lenovo Legion 7?',
      respuesta: 'La Lenovo Legion 7 generalmente ofrece opciones de procesadores Intel Core de última generación, como los modelos Core i7 y Core i9. Estos procesadores ofrecen un alto rendimiento y capacidades multitarea para satisfacer las necesidades de los usuarios exigentes.',
    },
    {
      id: 'pregunta3',
      titulo: '¿La Lenovo Legion 7 es compatible con la realidad virtual (VR)?',
      respuesta: 'Sí, la Lenovo Legion 7 es compatible con la realidad virtual. Gracias a su potente hardware, incluyendo tarjetas gráficas NVIDIA GeForce RTX, puede brindar un rendimiento adecuado para experiencias de realidad virtual inmersivas. Sin embargo, es recomendable verificar los requisitos específicos del dispositivo de realidad virtual que planeas utilizar para garantizar la compatibilidad completa.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuánta RAM y almacenamiento ofrece la Lenovo Legion 7?',
      respuesta: 'La cantidad de RAM y almacenamiento puede variar según la configuración y las opciones seleccionadas al adquirir la Lenovo Legion 7. Sin embargo, generalmente se ofrece una capacidad de RAM de hasta 32 GB o incluso más, y opciones de almacenamiento que incluyen unidades de estado sólido (SSD) de alta velocidad con capacidades de varios terabytes.',
    },
    {
      id: 'pregunta5',
      titulo: '¿La Lenovo Legion 7 ofrece opciones de actualización de hardware?',
      respuesta: 'Sí, la Lenovo Legion 7 generalmente ofrece opciones de actualización de hardware. Puedes ampliar la RAM, cambiar o agregar unidades de almacenamiento adicionales e incluso actualizar la tarjeta gráfica en algunos modelos, dependiendo de la configuración específica y las opciones disponibles.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Qué tipo de puertos y conectividad ofrece la Lenovo Legion 7?',
      respuesta: 'La Lenovo Legion 7 suele ofrecer una variedad de puertos y opciones de conectividad para satisfacer las necesidades de los usuarios. Estos pueden incluir puertos USB de alta velocidad, puertos HDMI, puertos Thunderbolt, puertos de audio, conectividad Wi-Fi y Bluetooth, entre otros.',
    },
    {
      id: 'pregunta7',
      titulo: '¿La Lenovo Legion 7 tiene una buena duración de batería?',
      respuesta: 'La duración de la batería puede variar según el uso y la configuración de la Lenovo Legion 7. Dado que es una notebook gaming de alto rendimiento, es probable que la duración de la batería sea limitada en comparación con las notebooks convencionales. En promedio, puedes esperar alrededor de 4 a 6 horas de duración de la batería en un uso ligero y menor tiempo en juegos intensivos.',
    },
    {
      id: 'pregunta8',
      titulo: '¿La Lenovo Legion 7 tiene un sistema de enfriamiento eficiente?',
      respuesta: 'Sí, la Lenovo Legion 7 cuenta con un sistema de enfriamiento avanzado que utiliza ventiladores de alta velocidad, disipadores de calor y conductos de aire para mantener las temperaturas bajo control durante largas sesiones de juego. Esto ayuda a prevenir el sobrecalentamiento y asegura un rendimiento óptimo y una vida útil prolongada de los componentes.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Qué características de conectividad inalámbrica ofrece la Lenovo Legion 7?',
      respuesta: 'La Lenovo Legion 7 cuenta con varias opciones de conectividad inalámbrica para garantizar una conectividad rápida y estable. Estas características pueden variar según la configuración específica y las opciones seleccionadas al adquirir la notebook. Algunas de las características de conectividad inalámbrica comunes que se encuentran en la Lenovo Legion 7 son: \n Conexión Wi-Fi: La notebook está equipada con un adaptador de red inalámbrica compatible con Wi-Fi. Esto te permite conectarte a redes inalámbricas domésticas, redes Wi-Fi públicas y puntos de acceso Wi-Fi en lugares como cafeterías, aeropuertos, hoteles, etc. Dependiendo de la configuración, la Lenovo Legion 7 puede ser compatible con los últimos estándares Wi-Fi, como Wi-Fi 6 (802.11ax), lo que brinda una conexión más rápida y confiable. \n Bluetooth: La Lenovo Legion 7 también ofrece conectividad Bluetooth, lo que te permite conectar dispositivos periféricos inalámbricos, como auriculares, altavoces, teclados y ratones, sin necesidad de cables. El Bluetooth permite una conexión fácil y rápida entre la notebook y los dispositivos compatibles dentro de su rango de alcance.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Qué características de diseño y construcción distinguen a la Lenovo Legion 7 de otros portátiles gaming?',
      respuesta: 'La Lenovo Legion 7 se destaca por su diseño elegante y robusto, con un chasis de aluminio de alta calidad que proporciona durabilidad y resistencia. Además, cuenta con detalles de iluminación RGB personalizable en el teclado y en el logotipo de Legion en la tapa, lo que permite a los usuarios personalizar la apariencia del portátil según sus preferencias. El teclado también está diseñado para ofrecer una experiencia de juego cómoda, con retroiluminación, teclas de respuesta rápida y un recorrido adecuado. Estos aspectos de diseño y construcción hacen que la Lenovo Legion 7 sea atractiva tanto estéticamente como en términos de durabilidad y funcionalidad.',
    }
  ];

export const PreguntaLEGION7 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasLEGION7.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasLEGION7.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasLEGION7[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasLEGION7.length - 1 ? preguntasLEGION7[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuestaNotebook'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/notebooks/lenovo-legion-7/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/notebooks/lenovo-legion-7/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/notebooks/lenovo-legion-7`}>
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

const PreguntasLEGION7 = () => {
    return (
      <div className='preguntas'>
        {preguntasLEGION7.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li>
              <Link to={`/notebooks/lenovo-legion-7/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const LenovoLegion7 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasLEGION7 />
            <hr />
            <Routes>
                {preguntasLEGION7.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<PreguntasLEGION7 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default LenovoLegion7;