import React, { useState } from 'react';

const SearchHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
        const section = getSectionFromQuery(searchQuery);
        if (section) {
          window.location.href = `/${section}`;
        } else {
            setNoResults(true);
        }
      }
    };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const getSectionFromQuery = (query) => {
    if (query.includes('accesorios')||query.includes('accesorio')||query.includes('Accesorio')||query.includes('Accesorios')) {
      return 'accesorios';
    } else if (query.includes('procesadores')||query.includes('cpu')||query.includes('procesador')||query.includes('Procesadores')||query.includes('Cpu')||query.includes('Procesador')) {
      return 'procesadores';
    } else if (query.includes('placas de video')||query.includes('gpu')||query.includes('placa de video')||query.includes('Placas de video') ||query.includes('tarjeta grafica')||query.includes('tarjetas graficas')||query.includes('Tarjeta grafica')||query.includes('Tarjetas graficas')||query.includes('tarjetas gráficas') ||query.includes('Tarjetas gráficas')||query.includes( 'Tarjeta gráfica')||query.includes( 'tarjetas gráfica')) {
      return 'placas-de-video';
    } else if (query.includes('notebooks')||query.includes( 'notebook')||query.includes ('Notebook')||query.includes ('Notebooks')) {
      return 'notebooks';
    } else {
      return null;
    }
  };

  return (
    <div>
        <div className='navbar'>
            <div className='buscador'>
                <input placeholder="Buscar categoría" className="input" name="text" type="text" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}/>
                <button onClick={handleSearch}> Buscar </button>
            {noResults && <svg style={{position:"absolute",marginRight:"70px",marginTop:"5px", width:"30px",height:"30px"}} className="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e262c" ><path d="M13.414 12l4.293-4.293a1 1 0 1 0-1.414-1.414L12 10.586 7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 0 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 0 0 1.414-1.414L13.414 12z" /> </svg>}
            {/* // <span style={{position:"absolute",marginRight:"70px",marginTop:"5px"}} className="error-icon">&#10060;</span>} */}
            </div>
        </div>
    </div>
  );
};

export default SearchHome;