import './Placa.scss';
import { Link } from 'react-router-dom';


export const Placa = () => {
    return (
        <div className='Container'>
            
            <div className='placa'>
            <h5>PLACAS DE VIDEO</h5>
                <div className='Placa'>
                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/Placas/3090.jpg" alt='logo' width="180" height="150"/> */}
                            
                                <h6>NVIDIA GeForce RTX 3090</h6>
                                <div className='volverEntrar'>
                                    <Link to="/placas-de-video/nvidia-3090"><button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> ENTRAR
                                        </button></Link>
                                </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/Placas/3080.jpg" alt='logo' width="180" height="150"/> */}
                            
                                <h6>NVIDIA GeForce RTX 3080</h6>
                                <div className='volverEntrar'>
                                    <Link to="/placas-de-video/nvidia-3080"><button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> ENTRAR
                                        </button></Link>
                                </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/Placas/3070.jpg" alt='logo' width="180" height="150"/> */}
                            
                                <h6>NVIDIA GeForce RTX 3070</h6>
                                <div className='volverEntrar'>
                                    <Link to="/placas-de-video/nvidia-3070"><button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> ENTRAR
                                        </button></Link>
                                </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/Placas/3060ti.jpg" alt='logo'/> */}
                            
                                <h6>NVIDIA GeForce RTX 3060 Ti</h6>
                                <div className='volverEntrar'>
                                    <Link to="/placas-de-video/nvidia-3060"><button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> ENTRAR
                                        </button></Link>
                                </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
                                <h6>AMD Radeon RX 6900 XT</h6>
                                <div className='volverEntrar'>
                                    <Link to="/placas-de-video/rx-6900-xt"><button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> ENTRAR
                                        </button></Link>
                                </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            <h6>AMD Radeon RX 6800 XT</h6>
                                <div className='volverEntrar'>
                                    <Link to="/placas-de-video/rx-6800-xt"><button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> ENTRAR
                                        </button></Link>
                                </div>    
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
                                <h6>AMD Radeon RX 6800</h6>
                                <div className='volverEntrar'>
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
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
                                <h6>NVIDIA GeForce GTX 1660 Ti</h6>
                                <div className='volverEntrar'>
                                    <Link to="/placas-de-video/nvidia-1660-ti"><button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span> ENTRAR
                                        </button></Link>
                                </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
                                <h6>NVIDIA GeForce GTX 1650 Super</h6>
                                <div className='volverEntrar'>
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
                <div className='volverEntrar' style={{margin:'30px'}}>
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
  }
  
export default Placa;