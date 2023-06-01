import './Placa.scss';
import { Link } from 'react-router-dom';


export const Placa = () => {
    return (
        <div className='Container'>
            <h5>PLACAS DE VIDEO</h5>
            <div className='Placa'>
                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/Placas/3090.jpg" alt='logo' width="180" height="150"/> */}
                        
                            <h6>NVIDIA GeForce RTX 3090</h6>
                            <Link to="/placas-de-video/Nvidia3090"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                        
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/Placas/3080.jpg" alt='logo' width="180" height="150"/> */}
                        
                            <h6>NVIDIA GeForce RTX 3080</h6>
                            <Link to="/placas-de-video/nvidia-3080"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                        
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/Placas/3070.jpg" alt='logo' width="180" height="150"/> */}
                        
                            <h6>NVIDIA GeForce RTX 3070</h6>
                            <Link to="/placas-de-video/nvidia-3070"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                        
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/Placas/3060ti.jpg" alt='logo'/> */}
                        
                            <h6>NVIDIA GeForce RTX 3060 Ti</h6>
                            <Link to="/placas-de-video/nvidia-3060"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                        
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                        
                            <h6>AMD Radeon RX 6900 XT</h6>
                            <Link to="/placas-de-video/rx-6900-xt"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                        
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                            <h6>AMD Radeon RX 6800 XT</h6>
                            <Link to="/placas-de-video/rx-6800-xt"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                        
                            <h6>AMD Radeon RX 6800</h6>
                            <Link to="/placas-de-video/rx-6800">
                                <button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button>
                            </Link>
                          
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                        
                            <h6>NVIDIA GeForce GTX 1660 Ti</h6>
                            <Link to="/placas-de-video/nvidia-1660-ti"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                        
                    </div>
                </div>

                <div className='card'>
                    <div className='card__content'>
                        {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                        
                            <h6>NVIDIA GeForce GTX 1650 Super</h6>
                            <Link to="/placas-de-video/nvidia-1650-super"><button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> ENTRAR
                                </button></Link>
                          
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
  
export default Placa;