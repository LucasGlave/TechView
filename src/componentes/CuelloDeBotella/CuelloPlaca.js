// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

// class CuelloPlaca extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       placaVideoSeleccionada: '', // Establecer un valor inicial válido
//       procesadoresRecomendados: [],
//       procesadorSeleccionado: null,
//     };
//   }

//   handleChangePlacaVideo = (event) => {
//     const placaVideo = event.target.getAttribute('value');
//     this.setState({ placaVideoSeleccionada: placaVideo });
//     this.obtenerProcesadoresRecomendados(placaVideo);
//   };

//   obtenerProcesadoresRecomendados = (placaVideo) => {
//     // Realiza aquí la lógica para obtener las recomendaciones de procesadores
//     // basado en la placa de video seleccionada y actualiza el estado
//     // de procesadoresRecomendados con los resultados.
//     let procesadoresRecomendados = [];
  
//     switch (placaVideo) {
//       case 'Nvidia GTX 1080':
//         procesadoresRecomendados = [
//           { nombre: 'Intel i7-8700K', info: 'Información sobre Intel i7-8700K' },
//           { nombre: 'AMD Ryzen 7 3700X', info: 'Información sobre AMD Ryzen 7 3700X' },
//           { nombre: 'Intel i9-9900K', info: 'Información sobre Intel i9-9900K' },
//           { nombre: 'AMD Ryzen 9 3900X', info: 'Información sobre AMD Ryzen 9 3900X' },
//         ];
//         break;
//       case 'AMD Radeon RX 580':
//         procesadoresRecomendados = [
//           { nombre: 'AMD Ryzen 5 3600', info: 'Información sobre AMD Ryzen 5 3600' },
//           { nombre: 'Intel i5-9600K', info: 'Información sobre Intel i5-9600K' },
//           { nombre: 'AMD Ryzen 7 2700X', info: 'Información sobre AMD Ryzen 7 2700X' },
//           { nombre: 'Intel i7-9700K', info: 'Información sobre Intel i7-9700K' },
//         ];
//         break;
//       // Agrega más casos según tus necesidades
//       default:
//         procesadoresRecomendados = [];
//     }
  
//     this.setState({ procesadoresRecomendados });
//   };

//   handleClickInfo = (procesador) => {
//     this.setState({ procesadorSeleccionado: procesador });
//   };

//   render() {
//     const { placaVideoSeleccionada, procesadoresRecomendados, procesadorSeleccionado } = this.state;
  
//     return (
//       <div className='Container'>
//         <div className='CuelloBotellaProd'>
//           <div className='notebook'>
//             <div className='placa'>
//               <div className='cardH2'>
//                 <h2>CUELLO DE BOTELLA</h2>
//               </div>
//               <h3>PLACAS DE VIDEO</h3>
//               <div>
//                 <select id="placaVideo" value={placaVideoSeleccionada} onChange={this.handleChangePlacaVideo}>
//                   <option value=""></option>
//                   <option value="Nvidia GTX 1080">Nvidia GTX 1080</option>
//                   <option value="AMD Radeon RX 580">AMD Radeon RX 580</option>
//                 </select>
//               </div>
//               {procesadoresRecomendados.length > 0 && (
//                 <div>
//                   <h3>Procesadores recomendados:</h3>
//                   <ul>
//                     {procesadoresRecomendados.map((procesador, index) => (
//                       <li key={index}>
//                         {procesador.nombre}{' '}
//                         <button onClick={() => this.handleClickInfo(procesador)}>Info</button>
//                         {procesadorSeleccionado === procesador && <p>{procesador.info}</p>}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
            
//           </div>
//         </div>
//       </div>
//     );
//   }
// }  

// export default CuelloPlaca;

import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

class CuelloPlaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placaVideoSeleccionada: '',
      procesadoresRecomendados: [],
      procesadorSeleccionado: null,
    };
  }

  handleChangePlacaVideo = (placaVideo) => {
    this.setState({ placaVideoSeleccionada: placaVideo });
    this.obtenerProcesadoresRecomendados(placaVideo);
  };

  obtenerProcesadoresRecomendados = (placaVideo) => {
    // Aquí debes implementar la lógica para obtener los procesadores recomendados
    // en función de la placa de video seleccionada
    let procesadores = [];

    if (placaVideo === 'Nvidia GTX 1080') {
      procesadores = [
        { nombre: 'Procesador 1', info: 'Información del procesador 1' },
        { nombre: 'Procesador 2', info: 'Información del procesador 2' },
      ];
    } else if (placaVideo === 'AMD Radeon RX 580') {
      procesadores = [
        { nombre: 'Procesador 3', info: 'Información del procesador 3' },
        { nombre: 'Procesador 4', info: 'Información del procesador 4' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 570') {
      procesadores = [
        { nombre: 'Procesador 3', info: 'Información del procesador 3' },
        { nombre: 'Procesador 4', info: 'Información del procesador 4' },
      ];
    }
    else if (placaVideo === 'AMD Radeon RX 560') {
      procesadores = [
        { nombre: 'Procesador 3', info: 'Información del procesador 3' },
        { nombre: 'Procesador 4', info: 'Información del procesador 4' },
      ];
    }

    this.setState({ procesadoresRecomendados: procesadores });
  };

  handleClickInfo = (procesador) => {
    this.setState({ procesadorSeleccionado: procesador });
  };

  render() {
    const { placaVideoSeleccionada, procesadoresRecomendados, procesadorSeleccionado } = this.state;

    return (
      <div className="Container">
        <div className="CuelloBotellaProd">
          <div className="notebook">
            <div className="placa">
              <div className="cardH2">
                <h2>CUELLO DE BOTELLA</h2>
              </div>
              <h3>PLACAS DE VIDEO</h3>
              <Dropdown className='todo'>
                <Dropdown.Toggle className='dropdown'>
                  {placaVideoSeleccionada || 'Seleccione'}
                </Dropdown.Toggle>
                <Dropdown.Menu className='menu'>
                  <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('Nvidia GTX 1080')}>
                    Nvidia GTX 1080
                  </Dropdown.Item>
                  <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 580')}>
                    AMD Radeon RX 580
                  </Dropdown.Item>
                  <Dropdown.Item className='drop' onClick={() => this.handleChangePlacaVideo('AMD Radeon RX 570')}>
                    AMD Radeon RX 570
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {procesadoresRecomendados.length > 0 && (
                <div>
                  <h3>Procesadores recomendados:</h3>
                  <ul>
                    {procesadoresRecomendados.map((procesador, index) => (
                      <li key={index}>
                        {procesador.nombre}{' '}
                        <button onClick={() => this.handleClickInfo(procesador)}>Info</button>
                        {procesadorSeleccionado === procesador && (
                          <div>{procesador.info}</div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className='volverEntrar'>
                <div className='volver'>
                  <Link to="/cuello-de-botella">
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
          </div>
        </div>
      </div>
    );
  }
}

export default CuelloPlaca;
