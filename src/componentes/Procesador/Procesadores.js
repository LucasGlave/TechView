import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';




export const Procesadores = () => {
    return (
        <div className='Container'>
            <HelmetProvider>
                <Helmet>
                    <title>Tech View</title>
                    <meta name="description" content="Aprende todo sobre procesadores en nuestra página de preguntas y respuestas. Encuentra información sobre potencia de procesamiento, compatibilidad y más para elegir el procesador adecuado para tus necesidades." />
                </Helmet>
            </HelmetProvider>
            <div className='placa'>
            <div className='cardH2'>
                    <h2>PROCESADORES</h2>
                </div>
                <div className='Placa'>
                    <div className='card'>
                        <div className='card__content'>
                        <img src="./img/AMD.png" alt='logo' width="50%" height="80%"/>
                            
                            <h6>AMD Ryzen 5 5600X</h6>
                            <div className='volverEntrar'>
                                <Link to="/procesadores/amd-ryzen-5-5600x"><button>
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
                            
                            <h6>AMD Ryzen 7 5800X</h6>
                            <div className='volverEntrar'>
                                <Link to="/procesadores/amd-ryzen-7-5800x"><button>
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
                            
                                <h6>AMD Ryzen 9 5900X</h6>
                                <div className='volverEntrar'>
                                    <Link to="/procesadores/amd-ryzen-9-5900x"><button>
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
                            
                                <h6>AMD Ryzen 9 5950X</h6>
                                <div className='volverEntrar'>
                                    <Link to="/procesadores/amd-ryzen-9-5950x"><button>
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
                        <img src="./img/APPLE.png" alt='logo' width="55%" height="40%"/>
                            
                                <h6>Apple M1 Pro</h6>
                                <div className='volverEntrar'>
                                    <Link to="/procesadores/apple-m1-pro"><button>
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
                        <img src="./img/INTEL.png" alt='logo' width="30%" height="40%" style={{marginTop:"10px"}}/>
                            
                                <h6>Intel Core i5-11600K</h6>
                                <div className='volverEntrar'>
                                    <Link to="/procesadores/intel-core-i5-11600k"><button>
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
                        <img src="./img/INTEL.png" alt='logo' width="30%" height="40%" style={{marginTop:"10px"}}/>
                            <h6>Intel Core i7-11700K</h6>
                                <div className='volverEntrar'>
                                    <Link to="/procesadores/intel-core-i7-11700k"><button>
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
                        <img src="./img/INTEL.png" alt='logo' width="30%" height="40%" style={{marginTop:"10px"}}/>
                            
                                <h6>Intel Core i9-10900K</h6>
                                <div className='volverEntrar'>
                                    <Link to="/procesadores/intel-core-i9-10900k">
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
                        <img src="./img/INTEL.png" alt='logo' width="30%" height="40%" style={{marginTop:"10px"}}/>
                            
                                <h6>Intel Core i9-11900K</h6>
                                <div className='volverEntrar'>
                                    <Link to="/procesadores/intel-core-i9-11900k"><button>
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
  
export default Procesadores;