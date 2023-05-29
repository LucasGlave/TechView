import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Procesador from '../componentes/Procesador/Procesador';
import Placa from '../componentes/Placa/Placa';
import Accesorio from '../componentes/Accesorio/Accesorio';
import Notebook from '../componentes/Notebook/Notebook';
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';
import NavBar from '../componentes/NavBar/NavBar'; 
import Footer from '../componentes/Footer/Footer';
import Nvidia3090 from '../componentes/Placa/Nvidia3090/Nvidia3090';
import Nvidia3080 from '../componentes/Placa/Nvidia3080/Nvidia3080';
import Nvidia3070 from '../componentes/Placa/Nvidia3070/Nvidia3070';
import Nvidia3060 from '../componentes/Placa/Nvidia3060/Nvidia3060';
import Nvidia1660Ti from '../componentes/Placa/Nvidia1660Ti/Nvidia1660Ti';
import Nvidia1650Super from '../componentes/Placa/Nvidia1650Super/Nvidia1650Super';
import AMDrx6900XT from '../componentes/Placa/AMDrx6900XT/AMDrx6900XT';
import AMDrx6800XT from '../componentes/Placa/AMDrx6800XT/AMDrx6800XT';
import { Pregunta6800XT } from '../componentes/Placa/AMDrx6800XT/AMDrx6800XT';
import AMDrx6800 from '../componentes/Placa/AMDrx6800/AMDrx6800';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/procesador' element={<Procesador/>}/>
                <Route path='/placa' element={<Placa/>}/>
                <Route path='/accesorio' element={<Accesorio/>}/>
                <Route path='/notebook' element={<Notebook/>}/>
                <Route path='/Nvidia3090' element={<Nvidia3090/>}/>
                <Route path='/Nvidia3080' element={<Nvidia3080/>}/>
                <Route path='/Nvidia3070' element={<Nvidia3070/>}/>
                <Route path='/Nvidia3060' element={<Nvidia3060/>}/>
                <Route path='/Nvidia1660Ti' element={<Nvidia1660Ti/>}/>
                <Route path='/Nvidia1650Super' element={<Nvidia1650Super/>}/>
                <Route path='/AMDrx6900XT' element={<AMDrx6900XT/>}/>
                <Route path='/AMDrx6800' element={<AMDrx6800/>}/>
                <Route path='/AMDrx6800XT/*' element={<AMDrx6800XT/>}/>
                <Route path="/placas-de-video/rx-6800-xt" element={<AMDrx6800XT />} />
                <Route path="/placas-de-video/rx-6800-xt/:preguntaId" element={<Pregunta6800XT />} />
                <Route path='*' element={<Navigate to= "/"/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    );
  }
  
export default AppRouter;