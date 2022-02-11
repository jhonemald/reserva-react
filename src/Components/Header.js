import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    const setIniciarSesion = props.setIniciarSesion;
    const handleCerrarSesion =() =>{
        alert('Gracias por ingresar');
        setIniciarSesion(false);
    } 
  return (   
  <header>
   
      <nav>
      <NavLink to="/" className="btn btn-dark">
        Inicio
      </NavLink>

      <NavLink to="/formulario" className="btn btn-dark">
        Reserva Tu Bus
      </NavLink>
    
      <button className="btn btn-dark" onClick={handleCerrarSesion}>Cerrar Sesion  </button>
      </nav>
      
       
  </header>
  );
};

export default Header;
