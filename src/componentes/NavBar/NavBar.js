import Navbar from 'react-bootstrap/Navbar';
// import './NavBar.scss'
// 

// export const NavBar = () => {
//   const handleCategoriesClick = (event) => {
//     event.preventDefault();

//     const scrollToBottom = () => {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     };

//     if (window.location.pathname === '/') {
//       scrollToBottom();
//     } else {
//       window.location.href = '/';
//       // Agrega un id="inicio" en la sección del inicio para que el scroll funcione correctamente
//       window.addEventListener('DOMContentLoaded', scrollToBottom);
//     }
//   };
//   return (
//     <div className='Header'>
//       <Navbar expand="lg" variant="dark" bg="dark">
//         <div className='imagen'>
//           <Link to="/"><img src="/img/logo2.png" alt='logo' width="270" height="220"></img></Link>
//         </div>
//         <div className='nav'>
//           <a href="#categorias" onClick={handleNavClick}>{getNavText()}</a>
//           <a href='https://www.instagram.com/techview_0/'>CONTACTO</a>
//         </div>
//       </Navbar>
//     </div>
//   );
// }
// export default NavBar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const handleNavClick = (event) => {
    event.preventDefault();

    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };

    if (location.pathname === '/') {
      scrollToBottom();
    } else {
      window.location.href = '/';
    }
  };

  const getNavText = () => {
    if (location.pathname === '/') {
      return 'CATEGORIAS';
    } else {
      return 'INICIO';
    }
  };

  return (
      <div className='Header'>
        <Navbar expand="lg" variant="dark" bg="dark">
          <div className='imagen'>
            <Link to="/"><img src="/img/logo2.png" alt='logo' width="270" height="220"></img></Link>
          </div>
          <div className='nav'>
            <a href="#categorias" onClick={handleNavClick}>{getNavText()}</a>
            <a href='https://www.instagram.com/techview_0/'>CONTACTO</a>
          </div>
        </Navbar>
      </div>
    );
  }

export default NavBar;










