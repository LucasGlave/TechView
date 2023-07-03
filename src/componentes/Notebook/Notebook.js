import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Notebook.scss';
import { ScrollToTop } from '../../routes/AppRouter';



export const Notebook = () => {
    return (
        <div className='Container'>
            <ScrollToTop/>
            <HelmetProvider>
                <Helmet>
                    <title>Tech View</title>
                    <meta name="description" content="Obtén soluciones y recomendaciones sobre placas de video en nuestra sección de preguntas y respuestas. Maximiza el rendimiento de tus juegos y proyectos de diseño con los consejos de nuestra comunidad." />
                </Helmet>
            </HelmetProvider>
            <div className='notebook'>
                <div className='placa'>
                    <div className='cardH2'>
                        <h2>NOTEBOOKS</h2>
                    </div>
                    <div className='Placa'>
                        <div className='card'>
                            <div className='card__content'>
                                <img src="./img/DELL.png" alt='logo' width="20%" height="38%"/>
                                    <h6>Dell XPS 13</h6>
                                    <div className='volverEntrar'>
                                        <Link to="/notebooks/dell-xps13"><button>
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
                            <img src="./img/HP.png" alt='logo' width="20%" height="35%"/>
                                
                                    <h6>HP Spectre x360</h6>
                                    <div className='volverEntrar'>
                                        <Link to="/notebooks/hp-spectre-x360"><button>
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
                            <img src="./img/LENOVO.png" alt='logo' width="40%" height="25%"/>
                                
                                    <h6>Lenovo ThinkPad X1 Carbon</h6>
                                    <div className='volverEntrar'>
                                        <Link to="/notebooks/lenovo-thinkpad-x1carbon"><button>
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
                            <img src="./img/ASUS.png" alt='logo' width="60%" height="40%"/>
                                
                                    <h6>Asus ROG Zephyrus G14</h6>
                                    <div className='volverEntrar'>
                                        <Link to="/notebooks/asus-rog-g14"><button>
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
                            <img src="./img/ACER.png" alt='logo' width="50%" height="25%"/>
                                
                                    <h6>Acer Predator Helios 300</h6>
                                    <div className='volverEntrar'>
                                        <Link to="/notebooks/helios-300"><button>
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
                            <img src="./img/MICROSOFT.png" alt='logo' width="50%" height="40%"/>
                                <h6>Microsoft Surface Laptop 4</h6>
                                    <div className='volverEntrar'>
                                        <Link to="/notebooks/microsoft-surface-laptop4"><button>
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
                            <img src="./img/RAZER.png" alt='logo' width="25%" height="35%"/>
                                <h6>Razer Blade 15</h6>
                                <div className='volverEntrar'>
                                    <Link to="/notebooks/razer-blade15">
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
                            <img src="./img/MSI.png" alt='logo' width="40%" height="40%"/>
                                <h6>MSI GS66 Stealth</h6>
                                <div className='volverEntrar'>
                                    <Link to="/notebooks/msi-gs66stealth"><button>
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
                            <img src="./img/LENOVO.png" alt='logo' width="40%" height="25%"/>
                                <h6>Lenovo Legion 7</h6>
                                <div className='volverEntrar'>
                                    <Link to="/notebooks/lenovo-legion-7"><button>
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
  
export default Notebook;