import { Route, Link, useParams, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const preguntasR55600 = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave del procesador AMD Ryzen 5 5600X?',
      respuesta: 'El AMD Ryzen 5 5600X es un procesador de la serie Ryzen 5000 de AMD. Cuenta con 6 núcleos y 12 hilos, una velocidad de reloj base de 3.7 GHz y una velocidad de reloj de impulso de 4.6 GHz. Además, cuenta con 35 MB de caché y es compatible con el socket AM4.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Cómo es el rendimiento del AMD Ryzen 5 5600X en comparación con otros procesadores de su segmento?',
      respuesta: 'El AMD Ryzen 5 5600X ofrece un rendimiento sólido en juegos y tareas de productividad. Su arquitectura Zen 3 proporciona mejoras significativas en el rendimiento en comparación con la generación anterior. En juegos, ofrece una experiencia fluida y un rendimiento competitivo, especialmente en combinación con una tarjeta gráfica potente.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Cuál es la diferencia entre el AMD Ryzen 5 5600X y su predecesor, el Ryzen 5 3600X?',
      respuesta: 'El AMD Ryzen 5 5600X es una mejora notable sobre el Ryzen 5 3600X. Presenta una arquitectura Zen 3 mejorada, lo que se traduce en un mayor rendimiento en juegos y aplicaciones de un solo hilo. También ofrece una mayor eficiencia energética y un mejor rendimiento multihilo.',
    },
    {
      id: 'pregunta4',
      titulo: '¿Es compatible el AMD Ryzen 5 5600X con la tecnología PCIe 4.0?',
      respuesta: 'Sí, el AMD Ryzen 5 5600X es compatible con la tecnología PCIe 4.0. Esto permite el uso de tarjetas gráficas y dispositivos de almacenamiento que admitan PCIe 4.0, lo que puede resultar en un mayor ancho de banda y un rendimiento mejorado en aplicaciones que lo aprovechen.',
    },
    {
      id: 'pregunta5',
      titulo: '¿Qué tipo de memoria RAM es compatible con el AMD Ryzen 5 5600X?',
      respuesta: 'El AMD Ryzen 5 5600X es compatible con memoria DDR4. Es importante tener en cuenta que la velocidad y la configuración de la memoria RAM pueden influir en el rendimiento del procesador. Se recomienda utilizar módulos de memoria de alta velocidad y configurarlos correctamente en la placa base para obtener el mejor rendimiento.',
    },
    {
      id: 'pregunta6',
      titulo: '¿Cuál es la potencia de consumo del AMD Ryzen 5 5600X?',
      respuesta: 'El AMD Ryzen 5 5600X tiene una potencia de diseño térmico (TDP) de 65 vatios. Esto significa que requiere una solución de refrigeración adecuada para mantener temperaturas óptimas durante su funcionamiento.',
    },
    {
      id: 'pregunta7',
      titulo: '¿El AMD Ryzen 5 5600X incluye un disipador de calor?',
      respuesta: 'Sí, el AMD Ryzen 5 5600X viene con el disipador de calor Wraith Stealth incluido en la caja. Este disipador es adecuado para el funcionamiento regular del procesador, pero si planeas realizar overclocking o exigir más al procesador, puede ser recomendable utilizar un disipador de calor más potente.',
    },
    {
      id: 'pregunta8',
      titulo: '¿Qué ventajas ofrece la arquitectura Zen 3 del AMD Ryzen 5 5600X?',
      respuesta: 'La arquitectura Zen 3 del AMD Ryzen 5 5600X ofrece mejoras significativas en el rendimiento por ciclo de reloj (IPC) en comparación con la generación anterior. Esto se traduce en un mejor rendimiento en aplicaciones de un solo hilo y en tareas multihilo. Además, la arquitectura Zen 3 también mejora la eficiencia energética del procesador.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuáles son las ventajas de utilizar el AMD Ryzen 5 5600X para juegos?',
      respuesta: 'El AMD Ryzen 5 5600X ofrece un excelente rendimiento en juegos, especialmente cuando se combina con una tarjeta gráfica potente. Sus altas velocidades de reloj y el buen manejo de hilos individuales aseguran una experiencia de juego fluida y sin cuellos de botella en la mayoría de los títulos actuales.',
    },
    {
      id: 'pregunta10',
      titulo: '¿Es posible realizar overclocking en el AMD Ryzen 5 5600X?',
      respuesta: 'Sí, el AMD Ryzen 5 5600X se puede overclockear para obtener un mayor rendimiento. Sin embargo, ten en cuenta que el grado de overclocking alcanzado puede variar según la calidad del chip y la configuración utilizada. Es importante realizar overclocking de manera segura y garantizar una adecuada refrigeración para evitar problemas de estabilidad y daños al procesador.',
    }
  ];

export const PreguntaR55600 = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntasR55600.find((pregunta) => pregunta.id === preguntaId);
    const currentIndex = preguntasR55600.findIndex((pregunta) => pregunta.id === preguntaId);
    const previousQuestionId = currentIndex > 0 ? preguntasR55600[currentIndex - 1].id : null;
    const nextQuestionId = currentIndex < preguntasR55600.length - 1 ? preguntasR55600[currentIndex + 1].id : null;

    return (
        
        <div className='Container'>
          <div className='cardRespuesta'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
          </div>
          <div className='adelanteAtras'>
            {previousQuestionId && (
            <Link to={`/procesadores/amd-ryzen-5-5600x/${previousQuestionId}`}>
              <button className='atras'>
                <i className="atrasI bi bi-arrow-left"></i>
                <span>Anterior pregunta</span>
              </button>
            </Link> )}
            {nextQuestionId && (
            <Link to={`/procesadores/amd-ryzen-5-5600x/${nextQuestionId}`}>
              <button className='adelante'>
                <span>Siguiente pregunta</span>
                <i className="adelanteI bi bi-arrow-right"></i>
              </button>
            </Link>)}
          </div>
          <div className='volverEntrar'>
            <div className='volver'>
              <Link to={`/procesadores/amd-ryzen-5-5600x`}>
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

const PreguntasR55600 = () => {
    return (
      <div className='preguntas'>
        {preguntasR55600.map((pregunta) => (
          <Card className='preguntasCard' key={pregunta.id}>
            <li>
              <Link to={`/procesadores/amd-ryzen-5-5600x/${pregunta.id}`}>{pregunta.titulo}</Link>
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
  const AMDRyzen55600X = () => {
    return (
      <div className='Container'>
        <div className='placa'>
            <PreguntasR55600 />
            <hr />
            <Routes>
                {preguntasR55600.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<preguntasR55600 />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default AMDRyzen55600X;