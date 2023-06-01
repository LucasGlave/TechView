import './ItemListContainer.scss';
import { Link } from 'react-router-dom';

export const ItemListContainer = () => {
    return (
        <div className='Container'>
            <div className='inicio'>
                <div className='inicioIzq'>
                    <div className='techView'>
                        <h2 className='tech'>LA MEJOR INFORMACION SOBRE TECNOLOGIA DE ULTIMO MOMENTO ESTA EN</h2>
                        <h2 className='view'>TECH VIEW</h2>
                    </div>
                    <h4>Tech View es una plataforma informativa especializada en el mundo de la informática, donde podrás encontrar toda la información necesaria sobre hardware y dispositivos electrónicos, desde tarjetas gráficas hasta auriculares. Con un enfoque en la tecnología y la innovación, Tech View te ofrece análisis y revisiones detalladas sobre los últimos lanzamientos en el mercado, así como consejos y recomendaciones para ayudarte a tomar decisiones informadas sobre tus compras tecnológicas. Ya seas un aficionado o un experto en informática, Tech View es el lugar perfecto para mantenerte actualizado sobre las tendencias y novedades en el mundo de la tecnología.</h4>
                </div>
                <div className='inicioDer'>
                    <img src='./img/notebookInicio.png' alt='notebookInicio' width={800} height={570}/>
                    {/* <div className="animacion">
                        <div className="loader"></div>
                        <div className="loader"></div>
                        <div className="loader"></div>
                    </div> */}
                </div>
            </div>
            <div className='categorias'>
                <h3>SELECCIONE LA CATEGORIA QUE DESEA INVESTIGAR</h3>
                <div className="cards">
                    <Link to="/accesorio">
                        <div className='content-show'>
                            <div>
                                <img src='./img/teclado.jpg' alt='Accesorios'/>
                                <div className='title-box'></div>
                                <div className='name'>Accesorios</div>
                            </div>    
                        </div>
                    </Link>
                    <Link to="/procesador">
                        <div className='content-show'>
                            <div>
                                <img src='./img/cpu.jpg' alt='cpu'/>
                                <div className='title-box'></div>
                                <div className='name'>Procesadores</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/placas-de-video">
                        <div className='content-show'>
                            <div>
                                <img src='./img/placa.jpg' alt='notebook'/>
                                <div className='title-box'></div>
                                <div className='name'>Placas de video</div> 
                            </div> 
                        </div>
                    </Link>
                    <Link to="/notebook">
                        <div className='content-show'>
                            <div>
                                <img src='./img/notebook.jpg' alt='notebook'/>
                                <div className='title-box'></div>
                                <div className='name'>Notebooks</div> 
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}
  
export default ItemListContainer;