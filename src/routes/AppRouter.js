import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Procesadores from '../componentes/Procesador/Procesadores';
import Placa from '../componentes/Placa/Placa';
import CuelloDeBotella from '../componentes/CuelloDeBotella/CuelloDeBotella';
import Notebook from '../componentes/Notebook/Notebook';
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';
import NavBar from '../componentes/NavBar/NavBar'; 
import Footer from '../componentes/Footer/Footer';

import Nvidia3090, { Pregunta3090 } from '../componentes/Placa/Nvidia3090/Nvidia3090';
import Nvidia3080, { Pregunta3080 } from '../componentes/Placa/Nvidia3080/Nvidia3080';
import Nvidia3070, { Pregunta3070 } from '../componentes/Placa/Nvidia3070/Nvidia3070';
import Nvidia3060, { Pregunta3060 } from '../componentes/Placa/Nvidia3060/Nvidia3060';
import Nvidia1660Ti, { Pregunta1660Ti } from '../componentes/Placa/Nvidia1660Ti/Nvidia1660Ti';
import Nvidia1650Super, { Pregunta1650Super } from '../componentes/Placa/Nvidia1650Super/Nvidia1650Super';
import AMDrx6900XT, { Pregunta6900XT } from '../componentes/Placa/AMDrx6900XT/AMDrx6900XT';
import AMDrx6800XT, { Pregunta6800XT } from '../componentes/Placa/AMDrx6800XT/AMDrx6800XT';
import AMDrx6800, { Pregunta6800 } from '../componentes/Placa/AMDrx6800/AMDrx6800';

import AMDRyzen55600X, {PreguntaR55600} from '../componentes/Procesador/AMDRyzen55600X/AMDRyzen55600X';
import AMDRyzen75800X, {PreguntaR75800} from '../componentes/Procesador/AMDRyzen75800X/AMDRyzen75800X';
import AMDRyzen95900X, {PreguntaR95900} from '../componentes/Procesador/AMDRyzen95900X/AMDRyzen95900X';
import AMDRyzen95950X, {PreguntaR95950} from '../componentes/Procesador/AMDRyzen95950X/AMDRyzen95950X';
import AppleM1Pro, { PreguntaAM1PRO } from '../componentes/Procesador/AppleM1Pro/AppleM1Pro';
import IntelI511600K, { PreguntaI511600 } from '../componentes/Procesador/IntelI511600K/IntelI511600K';
import IntelI711700K, { PreguntaI711700 } from '../componentes/Procesador/IntelI711700K/IntelI711700K';
import IntelI910900, { PreguntaI910900 } from '../componentes/Procesador/IntelI910900K/IntelI910900K';
import IntelI911900, { PreguntaI911900 } from '../componentes/Procesador/IntelI911900k/IntelI911900k';

import AcerPredatorHelios300, { PreguntaH300 } from '../componentes/Notebook/AcerPredatorHelios300';
import AsusROGZephyrusG14, { PreguntaZG14 } from '../componentes/Notebook/AsusROGZephyrusG14';
import DellXPS13, { PreguntaXPS13 } from '../componentes/Notebook/DellXPS13';
import HPSpectrex360, { PreguntaX360 } from '../componentes/Notebook/HPSpectrex360';
import LenovoThinkPadX1Carbon, { PreguntaTPC } from '../componentes/Notebook/LenovoThinkPadX1Carbon';
import LenovoLegion7, {  PreguntaLEGION7 } from '../componentes/Notebook/LenovoLegion7';
import MicrosoftSurfaceLaptop4, { PreguntaSL4 } from '../componentes/Notebook/MicrosoftSurfaceLaptop4';
import MSIGS66Stealth, { Pregunta66S } from '../componentes/Notebook/MSIGS66Stealth';
import RazerBlade15, { PreguntaB15 } from '../componentes/Notebook/RazerBlade15';
import CuelloPlaca from '../componentes/CuelloDeBotella/CuelloPlaca';
import CuelloProcesador from '../componentes/CuelloDeBotella/CuelloProcesador';
import { useEffect } from 'react';





export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}




export const AppRouter = () => {
    
    
    return (
        <BrowserRouter>
            
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/procesadores' element={<Procesadores/>}/>
                <Route path='/placas-de-video' element={<Placa/>}/>
                <Route path='/cuello-de-botella' element={<CuelloDeBotella/>}/>
                <Route path='/notebooks' element={<Notebook/>}/>
                <Route path='/cuello-de-botella/placas-de-video' element={<CuelloPlaca/>}/>
                <Route path='/cuello-de-botella/procesadores' element={<CuelloProcesador/>}/>
                {/* <Route path='/Nvidia3090' element={<Nvidia3090/>}/> */}
                <Route path="/placas-de-video/nvidia-3090/*" element={<Nvidia3090 />} />
                <Route path="/placas-de-video/nvidia-3090/:preguntaId" element={<Pregunta3090 />} />
                {/* <Route path='/Nvidia3080' element={<Nvidia3080/>}/> */}
                <Route path="/placas-de-video/nvidia-3080/*" element={<Nvidia3080 />} />
                <Route path="/placas-de-video/nvidia-3080/:preguntaId" element={<Pregunta3080 />} />
                {/* <Route path='/Nvidia3070' element={<Nvidia3070/>}/> */}
                <Route path="/placas-de-video/nvidia-3070/*" element={<Nvidia3070 />} />
                <Route path="/placas-de-video/nvidia-3070/:preguntaId" element={<Pregunta3070 />} />
                {/* <Route path='/Nvidia3060' element={<Nvidia3060/>}/> */}
                <Route path="/placas-de-video/nvidia-3060/*" element={<Nvidia3060 />} />
                <Route path="/placas-de-video/nvidia-3060/:preguntaId" element={<Pregunta3060 />} />
                {/* <Route path='/Nvidia1660Ti' element={<Nvidia1660Ti/>}/> */}
                <Route path="/placas-de-video/nvidia-1660-ti/*" element={<Nvidia1660Ti />} />
                <Route path="/placas-de-video/nvidia-1660-ti/:preguntaId" element={<Pregunta1660Ti />} />
                {/* <Route path='/Nvidia1650Super' element={<Nvidia1650Super/>}/> */}
                <Route path="/placas-de-video/nvidia-1650-super/*" element={<Nvidia1650Super />} />
                <Route path="/placas-de-video/nvidia-1650-super/:preguntaId" element={<Pregunta1650Super />} />
                {/* <Route path='/AMDrx6900XT' element={<AMDrx6900XT/>}/> */}
                <Route path="/placas-de-video/rx-6900-xt/*" element={<AMDrx6900XT />} />
                <Route path="/placas-de-video/rx-6900-xt/:preguntaId" element={<Pregunta6900XT />} />
                {/* <Route path='/AMDrx6800' element={<AMDrx6800/>}/> */}
                <Route path="/placas-de-video/rx-6800/*" element={<AMDrx6800 />} />
                <Route path="/placas-de-video/rx-6800/:preguntaId" element={<Pregunta6800 />} />
                {/* <Route path='/AMDrx6800XT/*' element={<AMDrx6800XT/>}/> */}
                <Route path="/placas-de-video/rx-6800-xt/*" element={<AMDrx6800XT />} />
                <Route path="/placas-de-video/rx-6800-xt/:preguntaId" element={<Pregunta6800XT />} />

                <Route path="/procesadores/amd-ryzen-7-5800x/*" element={<AMDRyzen75800X />} />
                <Route path="/procesadores/amd-ryzen-7-5800x/:preguntaId" element={<PreguntaR75800 />} />

                <Route path="/procesadores/amd-ryzen-5-5600x/*" element={<AMDRyzen55600X />} />
                <Route path="/procesadores/amd-ryzen-5-5600x/:preguntaId" element={<PreguntaR55600 />} />

                <Route path="/procesadores/amd-ryzen-9-5900x/*" element={<AMDRyzen95900X />} />
                <Route path="/procesadores/amd-ryzen-9-5900x/:preguntaId" element={<PreguntaR95900 />} />

                <Route path="/procesadores/amd-ryzen-9-5950x/*" element={<AMDRyzen95950X />} />
                <Route path="/procesadores/amd-ryzen-9-5950x/:preguntaId" element={<PreguntaR95950 />} />

                <Route path="/procesadores/apple-m1-pro/*" element={<AppleM1Pro />} />
                <Route path="/procesadores/apple-m1-pro/:preguntaId" element={<PreguntaAM1PRO />} />

                <Route path="/procesadores/intel-core-i5-11600k/*" element={<IntelI511600K />} />
                <Route path="/procesadores/intel-core-i5-11600k/:preguntaId" element={<PreguntaI511600 />} />

                <Route path="/procesadores/intel-core-i7-11700k/*" element={<IntelI711700K />} />
                <Route path="/procesadores/intel-core-i7-11700k/:preguntaId" element={<PreguntaI711700 />} />

                <Route path="/procesadores/intel-core-i9-10900k/*" element={<IntelI910900 />} />
                <Route path="/procesadores/intel-core-i9-10900k/:preguntaId" element={<PreguntaI910900 />} />

                <Route path="/procesadores/intel-core-i9-11900k/*" element={<IntelI911900 />} />
                <Route path="/procesadores/intel-core-i9-11900k/:preguntaId" element={<PreguntaI911900 />} />


                <Route path="/notebooks/helios-300/*" element={<AcerPredatorHelios300 />} />
                <Route path="/notebooks/helios-300/:preguntaId" element={<PreguntaH300 />} />

                <Route path="/notebooks/asus-rog-g14/*" element={<AsusROGZephyrusG14 />} />
                <Route path="/notebooks/asus-rog-g14/:preguntaId" element={<PreguntaZG14 />} />

                <Route path="/notebooks/dell-xps13/*" element={<DellXPS13 />} />
                <Route path="/notebooks/dell-xps13/:preguntaId" element={<PreguntaXPS13 />} />

                <Route path="/notebooks/hp-spectre-x360/*" element={<HPSpectrex360 />} />
                <Route path="/notebooks/hp-spectre-x360/:preguntaId" element={<PreguntaX360 />} />

                <Route path="/notebooks/lenovo-thinkpad-x1carbon/*" element={<LenovoThinkPadX1Carbon />} />
                <Route path="/notebooks/lenovo-thinkpad-x1carbon/:preguntaId" element={<PreguntaTPC />} />

                <Route path="/notebooks/lenovo-legion-7/*" element={<LenovoLegion7 />} />
                <Route path="/notebooks/lenovo-legion-7/:preguntaId" element={<PreguntaLEGION7 />} />

                <Route path="/notebooks/microsoft-surface-laptop4/*" element={<MicrosoftSurfaceLaptop4 />} />
                <Route path="/notebooks/microsoft-surface-laptop4/:preguntaId" element={<PreguntaSL4 />} />
                
                <Route path="/notebooks/msi-gs66stealth/*" element={<MSIGS66Stealth />} />
                <Route path="/notebooks/msi-gs66stealth/:preguntaId" element={<Pregunta66S />} />
                
                <Route path="/notebooks/razer-blade15/*" element={<RazerBlade15 />} />
                <Route path="/notebooks/razer-blade15/:preguntaId" element={<PreguntaB15 />} />

                <Route path='*' element={<Navigate to= "/"/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    );
  }
  
export default AppRouter;