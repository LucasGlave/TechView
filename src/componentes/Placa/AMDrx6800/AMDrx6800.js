import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas6800 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la AMD Radeon RX 6800?',
      respuesta: ' La AMD Radeon RX 6800 es una tarjeta gráfica de alta gama que cuenta con 60 unidades de cómputo y una velocidad de reloj base de 1700 MHz. Esta tarjeta viene con 16 GB de memoria GDDR6 y un ancho de banda de memoria de 512 GB/s, lo que la hace adecuada para juegos y tareas computacionales exigentes.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cómo se compara el rendimiento de la AMD Radeon RX 6800 con otras tarjetas gráficas de su segmento?',
      respuesta: 'La AMD Radeon RX 6800 ofrece un rendimiento excepcional en juegos de alta demanda y tareas computacionales intensivas. En comparación con tarjetas gráficas de la competencia en el mismo segmento, la RX 6800 se encuentra entre las mejores opciones en términos de relación precio-rendimiento.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Es compatible la AMD Radeon RX 6800 con la tecnología de trazado de rayos (ray tracing)?',
      respuesta: 'Sí, la AMD Radeon RX 6800 es compatible con la tecnología de trazado de rayos. El trazado de rayos permite efectos visuales más realistas y una iluminación más precisa en juegos compatibles, lo que mejora la calidad gráfica y la inmersión en el mundo virtual.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Cuántos monitores puedo conectar a la AMD Radeon RX 6800?',
      respuesta: ' La AMD Radeon RX 6800 es capaz de admitir hasta cuatro monitores simultáneamente. Dispone de múltiples puertos de visualización, incluidos DisplayPort 1.4 y HDMI 2.1, que permiten conectar monitores de alta resolución y disfrutar de configuraciones de múltiples pantallas.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Cuál es la potencia de alimentación requerida para la AMD Radeon RX 6800?',
      respuesta: 'Se recomienda una fuente de alimentación de calidad de al menos 650 vatios para alimentar adecuadamente la AMD Radeon RX 6800. Además, es importante que la fuente de alimentación cuente con los conectores de alimentación PCIe necesarios, como conectores de 8 pines y 6 pines.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Es compatible la AMD Radeon RX 6800 con tecnologías de sincronización como FreeSync o G-Sync?',
      respuesta: 'La RX 6800 XT es compatible con FreeSync, la tecnología de sincronización adaptable de AMD. Sin embargo, no es compatible oficialmente con G-Sync, la tecnología de sincronización de NVIDIA, aunque algunos usuarios han informado que puede funcionar de manera adecuada.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuál es la temperatura de funcionamiento normal de la AMD Radeon RX 6800?',
      respuesta: 'La temperatura de funcionamiento normal de la AMD Radeon RX 6800 puede variar según el diseño específico del fabricante y las condiciones ambientales. En general, se espera que la tarjeta gráfica opere dentro de un rango de temperatura de 60-80 grados Celsius bajo cargas intensas. Es recomendable contar con una adecuada ventilación en el chasis de la computadora para mantener las temperaturas bajo control.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Necesito actualizar mi fuente de alimentación para usar la AMD Radeon RX 6800?',
      respuesta: 'Sí, para garantizar un rendimiento óptimo y estable, se recomienda contar con una fuente de alimentación de calidad con una capacidad de al menos 650 vatios. Es importante asegurarse de que la fuente de alimentación cuente con los conectores de alimentación PCIe necesarios y pueda suministrar la potencia necesaria para la tarjeta gráfica.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la AMD Radeon RX 6800 y la RX 6800 XT?',
      respuesta: 'La AMD Radeon RX 6800 XT es la versión de gama alta de la serie RX 6800 de AMD. La principal diferencia entre ambas radica en el rendimiento. La RX 6800 XT cuenta con un mayor número de unidades de cómputo y velocidades de reloj más altas, lo que la hace ligeramente más potente y capaz de ofrecer un mejor rendimiento en juegos y tareas intensivas en comparación con la RX 6800. Sin embargo, la RX 6800 sigue siendo una opción sólida para los jugadores y usuarios exigentes.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es el precio aproximado de la AMD Radeon RX 6800?',
      respuesta: 'El precio de la AMD Radeon RX 6800 puede variar según el fabricante, la ubicación geográfica y la disponibilidad en el mercado. En general, la RX 6800 se encuentra en un rango de precios de gama alta, oscilando alrededor de los 600-700 dólares estadounidenses. Es importante tener en cuenta que los precios pueden cambiar con el tiempo debido a factores como la demanda y la disponibilidad, por lo que siempre es recomendable verificar los precios actualizados en tiendas y distribuidores autorizados.',
    }
  ];

export const Pregunta6800 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntas6800.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntas6800.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntas6800[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntas6800.length - 1 ? preguntas6800[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/placas-de-video/rx-6800/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/placas-de-video/rx-6800/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/placas-de-video/rx-6800`}>
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

const Preguntas6800 = () => {
    return (
      <div className='preguntas'>
        <img src='/img/AMD.png' alt='AMD' width={300} height={200}/>
        {preguntas6800.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/rx-6800/${pregunta.id}`}>{pregunta.titulo}</Link>
          </li>
        ))}
        <div className='volverEntrar' style={{margin:'30px'}}>
          <div className='volver'>
            <Link to={`/placas-de-video`}>
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
  const AMDrx6800 = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <Preguntas6800 />
            <hr />
            <Routes>
                {preguntas6800.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta6800 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AMDrx6800;