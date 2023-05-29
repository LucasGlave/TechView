import './App.css';
// import { NavBar } from './componentes/NavBar/NavBar';
// import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
// import { Footer } from './componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/NavBar/NavBar.scss'
import AppRouter from './routes/AppRouter';


function App() {

  
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
