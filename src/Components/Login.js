import React, {useState} from 'react';
import usuarios from '../data/usuarios';
import { Box, Text, Center,
  } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'

const Login = (props) =>{
  const setIniciarSesion = props.setIniciarSesion;
  const setusuarioActivo = props.setusuarioActivo;
  
  
  const [InputUsuario, setInputUsuario]= useState('');
  const [InputContraseña, setInputContraseña]= useState('');
  const [InputCorreo,setInputCorreo]= useState('');
  const [InputRegistro,setInputRegistro]=useState(false);
  const handleOnSubmitLogin = (e) => {
    e.preventDefault();

    if(InputUsuario.trim() !== '' && InputContraseña.trim() !== '' && InputCorreo.trim() !==''){
     const sesion = usuarios.find((usuario) => { 
      if(usuario.usuario === InputUsuario && usuario.contraseña === InputContraseña){
        return usuario
      }
     });
     
     if(!sesion){
     usuarios.push({id:4,usuario: InputUsuario, contraseña:InputContraseña})
     setInputUsuario('');
     setInputContraseña('');
     setInputCorreo('');
     setInputRegistro(false);
     alert('el usuario fue registrado exitosamente') 
    }else{
       alert('el nombre del usuario ya esta registrado')
     }
    }else{
      if(InputUsuario.trim() !== '' && InputContraseña.trim() !== ''){
        const sesion = usuarios.find((usuario) => {
         if(usuario.usuario === InputUsuario && usuario.contraseña === InputContraseña){
           return usuario
         }
        })
        console.log(sesion);
        if(!sesion){
          alert("Usuario o Password Incorrecta")
        }else{
          setusuarioActivo(sesion.usuario);
          setIniciarSesion(true);
          alert("Iniciaste Sesion")
   
        }
       }
    }
    
    
  };
  return (
  <Center> 
  <Box>
    <div>
      <hr/>
      <div className="container">
       <div className ="row">
        <div className ="bg-primary" >
        <Center><h1>INGRESA TU USUARIO</h1> </Center>
        <br/>
        <form onSubmit={handleOnSubmitLogin}>
          <span>Usuario</span>
          <input 
            type ="text"
            placeholder="Ingrese Usuario"
            value={InputUsuario}
            onChange={(e) => setInputUsuario(e.target.value)}
          />
          {
          InputRegistro &&( <input 
            type ="text"
            placeholder="Correo"
            value ={InputCorreo}
            onChange={(e) => setInputCorreo(e.target.value)}
          />
          )}

          </form>
          <form onSubmit={handleOnSubmitLogin} >
          <br/>
          <span>Contraseña</span>
          <input 
            type ="password"
            placeholder="Ingrese Contraseña"
            value ={InputContraseña}
            onChange={(e) => setInputContraseña(e.target.value)}
          />
          <Center>
          <input type = 'submit' value ={InputRegistro ? 'Crear Cliente':'Ingresar'} className='btn btn-dark' />
        <br/>
        <br/>
        {
          InputRegistro ? '' :
          <button type = 'button'onClick={()=> setInputRegistro(!InputRegistro)} className='btn btn-dark' >Registrarse {<AddIcon />}</button>
        }
        </Center>
        </form>
        
         </div>
        </div>
       </div>
  
      </div>
      </Box>
     </Center> 
  );
}

export default Login;

