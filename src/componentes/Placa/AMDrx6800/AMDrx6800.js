import './AMDrx6800.scss';
import { useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';

export const AMDrx6800 = () => {
  const { productoId, preguntaId } = useParams();

  // Supongamos que tienes un arreglo de productos con la siguiente estructura
  const productos = [
    {
      id: 'placas-de-video',
      nombre: 'Placas de video',
      preguntas: [
        {
            id: 'pregunta1',
            titulo: 'Pregunta 1',
            respuesta: 'Respuesta 1',
        },
        {
            id: 'pregunta2',
            titulo: 'Pregunta 2',
            respuesta: 'Respuesta 2',
        },
        {
            id: 'pregunta3',
            titulo: 'Pregunta 1',
            respuesta: 'Respuesta 1',
        },
        {
            id: 'pregunta4',
            titulo: 'Pregunta 2',
            respuesta: 'Respuesta 2',
        },
        {
            id: 'pregunta5',
            titulo: 'Pregunta 1',
            respuesta: 'Respuesta 1',
        },
        {
            id: 'pregunta6',
            titulo: 'Pregunta 2',
            respuesta: 'Respuesta 2',
        },
        {
            id: 'pregunta7',
            titulo: 'Pregunta 1',
            respuesta: 'Respuesta 1',
        },
        {
            id: 'pregunta8',
            titulo: 'Pregunta 2',
            respuesta: 'Respuesta 2',
        },
        {
            id: 'pregunta9',
            titulo: 'Pregunta 1',
            respuesta: 'Respuesta 1',
        },
        {
            id: 'pregunta10',
            titulo: 'Pregunta 2',
            respuesta: 'Respuesta 2',
        },
        {
            id: 'pregunta11',
            titulo: 'Pregunta 1',
            respuesta: 'Respuesta 1',
        },
        {
            id: 'pregunta12',
            titulo: 'Pregunta 2',
            respuesta: 'Respuesta 2',
        },
        
      ],
    },
    // Otros productos...
  ];

  // Buscar el producto en base al ID
  const producto = productos.find((p) => p.id === productoId);
  const pregunta = producto?.preguntas.find((p) => p.id === preguntaId);

  return (
    <div className='Container'> 
        <h2>{producto?.nombre}</h2>
            {pregunta && (
                <div>
                <h3>{pregunta.titulo}</h3>
                <p>{pregunta.respuesta}</p>
                </div>
            )}
                {producto?.preguntas.map((pregunta) => (
                <Route
                    key={pregunta.id}
                    path={`/productos/${productoId}/${pregunta.id}`}
                    render={() => (
                    <div>
                        <h3>{pregunta.titulo}</h3>
                        <p>{pregunta.respuesta}</p>
                    </div>
                    )}
                />
                ))}
    </div>
      
  );
}

export default AMDrx6800;
