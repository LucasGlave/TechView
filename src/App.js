import './App.css';
import Loader from './Loader';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/NavBar/NavBar.scss'
import AppRouter from './routes/AppRouter';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga inicial
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AppRouter/>
        </>
      )}

      
    </div>
  );
}

export default App;
