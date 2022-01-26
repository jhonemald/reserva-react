import React from 'react';

function Login (){
  return (
    <div>
      <hr/>
      <div className="container">
        <div class="row">
        <div class="col-sm4 bg primary" >
        <h2>REGISTRATE</h2>
        <form>
          <span>Nuevo Usuario</span>
          <input 
            type ="text"
            placeholder="Ingrese Usuario"
          />
        </form>
        <form>
          <span>Contraseña</span>
          <input 
            type ="text"
            placeholder="Ingrese Usuario"
          />
        </form>
        <input type = 'submit' value ='Aceptar'className='btn btn-dark'/>
        <input type = 'submit' value ='Cancelar' className='btn btn-dark'/>
        <hr/>
        <h1>INGRESA TU USUARIO</h1>
        <form>
          <span>Usuario</span>
          <input 
            type ="text"
            placeholder="Ingrese Usuario"
          />
        </form>
        <form>
          <span>Contraseña</span>
          <input 
            type ="text"
            placeholder="Ingrese Contraseña"
          />
        </form>
        <input type = 'submit' value ='Aceptar'className='btn btn-dark'/>
        <input type = 'submit' value ='Cancelar' className='btn btn-dark'/>
        
        </div>
        </div>
      </div>
  
    </div>
  );
}

export default Login;

