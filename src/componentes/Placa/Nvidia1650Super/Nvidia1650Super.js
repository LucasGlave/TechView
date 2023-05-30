import './Nvidia1650Super.scss';
import { Route, Link, useParams, Routes } from 'react-router-dom';

const preguntas1650Super = [
    {
      id: 'pregunta1',
      titulo: '¿Cuáles son las especificaciones clave de la AMD Radeon RX 6800 XT?',
      respuesta: ' La AMD Radeon RX 6800 XT cuenta con 72 unidades de cómputo, 16 GB de memoria GDDR6, una velocidad de reloj base de 2015 MHz y una velocidad de reloj de impulso de 2250 MHz.',
    },
    {
      id: 'pregunta2',
      titulo: '¿Qué tipo de rendimiento puedo esperar de la AMD Radeon RX 6800 XT en juegos?',
      respuesta: ' La RX 6800 XT ofrece un rendimiento excelente en juegos de alta demanda, proporcionando un alto número de cuadros por segundo y una experiencia de juego fluida en resoluciones 1440p y 4K.',
    },
    {
      id: 'pregunta3',
      titulo: '¿Es compatible la AMD Radeon RX 6800 XT con la tecnología de trazado de rayos (ray tracing)?',
      respuesta: 'Sí, la RX 6800 XT es compatible con la tecnología de trazado de rayos. Puede ofrecer efectos visuales mejorados y una iluminación más realista en juegos compatibles con ray tracing.',
    },
    {
      id: 'pregunta4',
      titulo: ' ¿Cuántos monitores puedo conectar a la AMD Radeon RX 6800 XT?',
      respuesta: 'La RX 6800 XT admite hasta cuatro monitores simultáneamente. Puedes conectarlos utilizando los puertos DisplayPort 1.4 y HDMI 2.1.',
    },
    {
      id: 'pregunta5',
      titulo: ' ¿Requiere la AMD Radeon RX 6800 XT una fuente de alimentación especial?',
      respuesta: 'Sí, la RX 6800 XT requiere una fuente de alimentación sólida. Se recomienda una fuente de alimentación de al menos 750 vatios con conectores de alimentación PCIe de 8 pines y 6 pines.',
    },
    {
      id: 'pregunta6',
      titulo: ' ¿Es compatible la AMD Radeon RX 6800 XT con tecnologías de sincronización como FreeSync o G-Sync?',
      respuesta: 'La RX 6800 XT es compatible con FreeSync, la tecnología de sincronización adaptable de AMD. Sin embargo, no es compatible oficialmente con G-Sync, la tecnología de sincronización de NVIDIA, aunque algunos usuarios han informado que puede funcionar de manera adecuada.',
    },
    {
      id: 'pregunta7',
      titulo: '¿Cuál es la temperatura de funcionamiento normal de la AMD Radeon RX 6800 XT?',
      respuesta: 'La temperatura de funcionamiento normal de la RX 6800 XT puede variar según el diseño del fabricante y las condiciones ambientales, pero típicamente se mantiene entre los 60 y 80 grados Celsius bajo carga intensa.',
    },
    {
      id: 'pregunta8',
      titulo: ' ¿Necesito actualizar mi fuente de alimentación para usar la AMD Radeon RX 6800 XT?',
      respuesta: 'Si tu fuente de alimentación actual no cumple con los requisitos recomendados, es posible que necesites actualizarla para alimentar adecuadamente la RX 6800 XT y evitar problemas de estabilidad.',
    },
    {
      id: 'pregunta9',
      titulo: '¿Cuál es la diferencia entre la AMD Radeon RX 6800 XT y la RX 6900 XT?',
      respuesta: 'La RX 6900 XT es la versión de gama alta de la serie RX 6000 de AMD, ofreciendo un mayor número de unidades de cómputo y un rendimiento ligeramente superior en comparación con la RX',
    },
    {
      id: 'pregunta10',
      titulo: '¿Cuál es el precio aproximado de la AMD Radeon RX 6800 XT?',
      respuesta: 'El precio de la AMD Radeon RX 6800 XT puede variar según el fabricante y el país, pero en general, se encuentra en un rango de precios de gama alta, normalmente alrededor de los 700-800 dólares estadounidenses.',
    }
  ];

export const Pregunta1650Super = () => {
    const { preguntaId } = useParams();
    const preguntaActual = preguntas1650Super.find((pregunta) => pregunta.id === preguntaId);

    return (
        
        <div className='Container'>
            <h3>{preguntaActual.titulo}</h3>
            <p>{preguntaActual.respuesta}</p>
        </div>
    );
};

const Preguntas1650Super = () => {
    return (
      <div>
        {preguntas1650Super.map((pregunta) => (
          <li key={pregunta.id}>
            <Link to={`/placas-de-video/1650Super/${pregunta.id}`}>{pregunta.titulo}</Link>
          </li>
        ))}
      </div>
    );
  };

  const Nvidia1650Super = () => {
    return (
      <div className='1650Super'>
        <div className='Container'>
            <Preguntas1650Super />
            <hr />
            <Routes>
                {preguntas1650Super.map((pregunta) => (
                <Route key={pregunta.id} path={`/${pregunta.id}`} element={<Pregunta1650Super />} />
                ))}
            </Routes>
        </div>
      </div>
    );
  };
  
export default Nvidia1650Super;