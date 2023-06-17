import './Placa.scss';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';




export const Placa = () => {
    return (
        <div className='Container'>
        <HelmetProvider>
            <Helmet>
                <title>Tech View</title>
                <meta name="description" content="Obtén soluciones y recomendaciones sobre placas de video en nuestra sección de preguntas y respuestas. Maximiza el rendimiento de tus juegos y proyectos de diseño con los consejos de nuestra comunidad." />
            </Helmet>
        </HelmetProvider>
            <div className='placa'>
                <div className='cardH2'>
                    <h2>PLACAS DE VIDEO</h2>
                </div>
                <div className='Placa'>
                    <div className='card'>
                        <div className='card__content'>
                            <img src="./img/NVIDIA.png" alt='logo' width="80%" height="100%"/>
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
                        <img src="./img/NVIDIA.png" alt='logo' width="80%" height="100%"/>
                            
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
                        <img src="./img/NVIDIA.png" alt='logo' width="80%" height="100%"/>
                            
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
                        <img src="./img/NVIDIA.png" alt='logo' width="80%" height="100%"/>
                            
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
                        <img src="./img/AMD.png" alt='logo' width="50%" height="80%"/>
                            
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
                        <img src="./img/AMD.png" alt='logo' width="50%" height="80%"/>
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
                        <img src="./img/AMD.png" alt='logo' width="50%" height="80%"/>
                            
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
                        <img src="./img/NVIDIA.png" alt='logo' width="80%" height="100%"/>
                            
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
                        <img src="./img/NVIDIA.png" alt='logo' width="80%" height="100%"/>
                            
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
            {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4820714602088067"
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
            </script> */}
        </div>
        
    );
  }
  
export default Placa;