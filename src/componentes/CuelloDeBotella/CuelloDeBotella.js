import './CuelloDeBotella.scss';
import { Link } from 'react-router-dom';

export const CuelloDeBotella = () => {
    return (

        <div className='Container'>
            <div className='CuelloDeBotella'>
                <div className='notebook'>
                    <div className='placa'>
                        <div className='cardH2'>
                            <h2>CUELLO DE BOTELLA</h2>
                        </div>
                        <div className='cuello'>
                            <h3>PROXIMAMENTE</h3>
                        </div>
                        <div className='volverEntrar' style={{marginTop:'21rem'}}>
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
            </div>
        </div>
            
        
    );
  }
  
export default CuelloDeBotella;