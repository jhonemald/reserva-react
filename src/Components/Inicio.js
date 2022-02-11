import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import Formulario from './Formulario';
import { Box,Center,
} from "@chakra-ui/react";

const Inicio = (props)=>{
 const  usuarioActivo = props.usuarioActivo;
 const setIniciarSesion = props.setIniciarSesion;
 const tomarreserva = props.tomarreserva;
 const settomarreserva = props.settomarreserva;
  return (
    <Center>
      <Box>
    <div>
    
      <Header  setIniciarSesion={setIniciarSesion}/>
      

    <h1>Bienvenido {usuarioActivo}</h1>
   
    <p><b>Reserva tu Bus</b></p>
    
 
   
    <ul>
      <li>No importa a dónde vayas, ni que tan lejos sea tu destino, con CompanyJEM viajas con todas las comodidades</li>
      <li>Pioneros y líderes desde 2000 en el bienestar total y la seguridad terrestre.</li>
      <li>Con CompayJEM puedes viajar con total seguridad, la tuya y la de tus acompañantes.</li>


    </ul>
    <Routes>
      <Route path={'/formulario'} element = 
      {<Formulario  tomarreserva={tomarreserva} settomarreserva={settomarreserva}/>}/> 
    </Routes>
  
    </div>
    </Box>
  </Center>
  );
};

export default Inicio;
