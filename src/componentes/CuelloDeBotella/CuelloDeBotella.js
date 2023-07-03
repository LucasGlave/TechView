import React from 'react';
import { Link } from 'react-router-dom';
import './CuelloDeBotella.scss';
import { ScrollToTop } from '../../routes/AppRouter';



export const CuelloDeBotella = () => {
    
    return (
        <div className='Container'>
            <ScrollToTop/>
            <div className='CuelloDeBotella'>
                {/* <div className='notebook'> */}
                    <div className='placa'>
                        <div className='cardH2'>
                            <h2>CUELLO DE BOTELLA</h2>
                        </div>
                        <div className='cuello'>
                            <h4>El cuello de botella en las placas de video y procesadores sucede cuando uno de los componentes limita el rendimiento del otro, lo que reduce el rendimiento del sistema. Es importante buscar un equilibrio entre la potencia de la placa de video y el procesador para aprovechar al máximo sus capacidades y que tengan el mejor rendimiento. Estamos aqui para ayudarte a elegir tus componentes ideales, asegurarte que sean compatibles y esten equilibrados, para evitar el cuello de botella y que disfrutes al maximo el rendimiento de tu equipo.</h4>
                            <h5>Seleccione sobre que componente desea recibir recomendaciones</h5>
                            <div className='productCuello'>
                                <div className='card'>
                                    <div className='card__content'>
                                        <img src="./img/PlacaCuello.jpg" alt='logo' width="100%" height="100%"/>
                                        <h6>PLACAS DE VIDEO</h6>
                                        <div className='volverEntrar'>
                                            <Link to="/cuello-de-botella/placas-de-video"><button>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span> ENTRAR
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='card__content'>
                                        <img src="./img/ProcesadorCuello.jpg" alt='logo' width="100%" height="100%"/>
                                        <h6>PROCESADORES</h6>
                                        <div className='volverEntrar'>
                                            <Link to="/cuello-de-botella/procesadores"><button>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span> ENTRAR
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='volverEntrar' style={{marginTop:'5rem'}}>
                        <div className='volver'>
                            <Link to="/"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> VOLVER
                                </button></Link>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default CuelloDeBotella;




//     -PROXIMAMENTE-

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './CuelloDeBotella.scss';


// export const CuelloDeBotella = () => {
    
//     return (
//         <div className='Container'>
//             <div className='CuelloDeBotella'>
//                 <div className='notebook'>
//                     <div className='placa'>
//                         <div className='cardH2'>
//                             <h2>CUELLO DE BOTELLA</h2>
//                         </div>
//                         <h5>PROXIMAMENTE</h5>
//                         <div className='volverEntrar' style={{marginTop:'5rem'}}>
//                             <div className='volver'>
//                                 <Link to="/"><button>
//                                     <span></span>
//                                     <span></span>
//                                     <span></span>
//                                     <span></span> VOLVER
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CuelloDeBotella;