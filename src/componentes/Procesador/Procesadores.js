import { Link } from 'react-router-dom';


export const Procesadores = () => {
    return (
        <div className='Container'>
            
            <div className='placa'>
            <h5>PROCESADORES</h5>
                <div className='Placa'>
                    <div className='card'>
                        <div className='card__content'>
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
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
                            {/* <img src="./img/Placas/3090.jpg" alt='logo' width="180" height="150"/> */}
                            
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
                            {/* <img src="./img/Placas/3080.jpg" alt='logo' width="180" height="150"/> */}
                            
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
                            {/* <img src="./img/Placas/3070.jpg" alt='logo' width="180" height="150"/> */}
                            
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
                            {/* <img src="./img/Placas/3060ti.jpg" alt='logo'/> */}
                            
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
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
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
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
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
                            {/* <img src="./img/logo2.png" alt='logo' width="180" height="150"/> */}
                            
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
            <amp-auto-ads type="adsense"
                data-ad-client="ca-pub-4820714602088067">
            </amp-auto-ads>
        </div>
        
    );
  }
  
export default Procesadores;