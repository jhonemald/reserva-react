import {useState}from 'react';
import {v4 as uuidv4}from 'uuid';
import { Box, Text, Center
  } from "@chakra-ui/react";
import {CheckIcon} from '@chakra-ui/icons'
const Formulario = (props)=> {
    
    const [inputTDocumento, setinputTDocumento]= useState ('');
    const [inputNDocumento, setinputNDocumento]= useState ('');
    const [inputNombre, setinputNombre]= useState('');
    const [inputApellido, setinputApellido]= useState('');
    const [inputEdad, setinputEdad]= useState ('');
    const [inputVacunado, setinputVacunado]= useState ('');
    const [inputSexo, setinputSexo]= useState ('');
    const [inputTelefono, setinputTelefono]= useState ('');
    const [ciudadorigen, setciudadorigen] = useState ('');
    const [ciudaddestino, setciudaddestino] = useState ('');
    const [fechaYhora, setfechaYhora] = useState ('');

    const tomarreserva = props.tomarreserva;
    const settomarreserva = props.settomarreserva;

    const handleOnSubmit = (e) => {
    e.preventDefault();
    const generarId = uuidv4();

    if(generarId.trim()!== ''&& 
    inputTDocumento.trim()!=='' &&
    inputNDocumento.trim()!=='' &&
    inputNombre.trim()!=='' &&
    inputApellido.trim()!=='' &&
    inputEdad.trim()!=='' &&
    inputVacunado.trim()!=='' &&
    inputSexo.trim()!=='' &&
    inputTelefono.trim()!=='' &&
    fechaYhora.trim()!=='' &&
    ciudadorigen.trim()!=='' &&
    ciudaddestino.trim()!==''){
    
      const reservatemp ={
      id:generarId,
      tipo_documento :inputTDocumento,
      numero_documento : inputNDocumento,
      nombre_pasajero : inputNombre,
      apellido_pasajero : inputApellido,
      edad : inputEdad,
      Esquema_vacunacion : inputVacunado,
      sexo : inputSexo,
      telefono : inputTelefono,
      fecha_hora_viaje :fechaYhora,
      ciudad_origen : ciudadorigen,
      ciudad_destino : ciudaddestino,
      }
      settomarreserva([...tomarreserva,reservatemp])

      setinputTDocumento('');
      setinputNDocumento ('');
      setinputNombre('');
      setinputApellido('');
      setinputEdad('');
      setinputVacunado('');
      setinputSexo('');
      setinputTelefono('');
      setciudadorigen('');
      setciudaddestino ('');
      setfechaYhora('');
      
      alert('Tu reserva ya quedo Registrada');
   
    } else{
      alert('Datos Incompletos')
    }
   
 }

    function handleAgregarTDocumento (e){
        setinputTDocumento(e.target.value)
    }
    function handleAgregarNDocumento (e){
        setinputNDocumento(e.target.value)
    }
   
    function handleAgregarNombre (e){
        setinputNombre(e.target.value)
    }
    function handleAgregarApellido (e){
        setinputApellido(e.target.value)
    }
    function handleAgregarEdad (e){
        setinputEdad(e.target.value)
    }
    function handleAgregarVacunado (e){
        setinputVacunado(e.target.value)
    }
    function handleAgregarSexo (e){
        setinputSexo(e.target.value)
    }
    function handleAgregarTelefono (e){
        setinputTelefono(e.target.value)
    }
    function handleAgregarfechaYhora (e){
        setfechaYhora(e.target.value)

    }
    function handleAgregarCiudadOrigen (e){
        setciudadorigen(e.target.value)
    }
    function handleAgregarCiudadDestino (e){
        setciudaddestino(e.target.value)
    }
    
    return( 
      <Center>
        <Box> 
    <div> 
      <div className="container">
       <div className ="row">
        <div className ="bg-primary">  
        <br/>
         <h1>Formulario</h1>
         <hr />
         <h2>RESERVA TU BUS EN COMPANYJEM</h2>
         <h3>INFORMACIÓN PASAJERO</h3>

         <form onSubmit={handleOnSubmit}>
              <span></span>
              <select value={inputTDocumento} onChange ={handleAgregarTDocumento}>
                <option value='Selecciona Tipo Documento'>Seleccina Tipo Documento</option>
                <option value='C.C'>C.C</option> 
                <option value='C Extranjeria'>C Extranjeria</option>
                <option value='Tarjeta Identidad'>Tarjeta Identidad</option>
              </select>
            <span> </span>
            <input
             type ='number'
             placeholder='Numero De Documento'
             value={inputNDocumento}
             onChange={handleAgregarNDocumento}
             />
             <br/>
             <br/>
             <input
             type ='text'
             placeholder='Ingresa Nombre'
             value={inputNombre}
             onChange={handleAgregarNombre}
             />
            <span> </span>
             <input
             type ='text'
             placeholder='Ingresa Apellido'
             value={inputApellido}
             onChange={handleAgregarApellido}
             />
             <br/>
             <br/>
             <input
             type ='number'
             placeholder='Ingresa Edad'
             value={inputEdad}
             onChange={handleAgregarEdad}
             />
             <span> </span>
              <select value={inputVacunado} onChange ={handleAgregarVacunado}>
                <option value='Seleccione Esquema Vacunacion'>Seleccione Esquema Vacunacion</option>
                <option value='1 Dosis'>1 Dosis</option> 
                <option value='2 Dosis'>2 Dosis</option>
                <option value='3 Dosis'>3 Dosis</option>
                <option value='Ninguna'>Ninguna</option>
              </select>
             <br/>
             <br/>
             <span> </span>
              <select value={inputSexo} onChange ={handleAgregarSexo}>
                <option value='Seleccione  Sexo '>Seleccine Sexo</option>
                <option value='Femenino'>Femenino</option> 
                <option value='Masculino'>Masculino</option>
              </select>
             <span> </span>
             <input
             type ='number'
             placeholder='Numero Contacto'
             value={inputTelefono}
             onChange={handleAgregarTelefono}
             />
             <br/>
             <br/>
             <span> Fecha de salida</span>
             <input 
             type ='datetime-local'
             placeholder='Fecha y hora de salida'
             value={fechaYhora}
             onChange={handleAgregarfechaYhora}
             />
             <br/>
             <br/>
              <select value={ciudadorigen} onChange ={handleAgregarCiudadOrigen}>
                <option value='Seleccione Ciudad Origen'>Seleccione Ciudad Origen</option>
                <option value='Bogota'>Bogota</option> 
                <option value='Cartagena'>Cartagena</option>
                <option value='Boyaca'>Boyaca</option>
                <option value='Barranquilla'>Barranquilla</option>
              </select>
              <span> </span>
              <select value={ciudaddestino} onChange ={handleAgregarCiudadDestino}>
                <option value='Seleccione Ciudad Destino'>Seleccione Ciudad Destino</option> 
                <option value='Barranquilla'>Barranquilla</option>
                <option value='Boyaca'>Boyaca</option>
                <option value='Cartagena'>Cartagena</option>
                <option value='Bogota'>Bogota</option>
              </select>
             <input type = 'submit'value ='Guardar'className='btn btn-dark' />
             
      <div className='container p-5'>
      <div className='row'>
      <div className= 'col-md-6'>
      <table className="table">
      <thead>
      <tr>
      <th scope="col">Documento</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Fecha</th>
      <th scope="col">Ciudad_Origen</th>
      <th scope="col">Ciudad_Destino</th>
    </tr>
    </thead>
    <tbody>
    {
     tomarreserva.map((tomarreserv) => {
     return(
    <tr key ={tomarreserv.id}>
      <th>{tomarreserv. numero_documento}</th>
      <td>{tomarreserv. nombre_pasajero}</td>
      <td>{tomarreserv. apellido_pasajero}</td>
      <td>{tomarreserv. fecha_hora_viaje }</td>
      <td>{tomarreserv. ciudad_origen }</td>
      <td>{tomarreserv. ciudad_destino }</td>
    </tr>
     );
     })
    }
    </tbody>
   </table>
          
          </div>
        </div>

      </div>

         </form>
         </div>
        </div>
      </div>
      
    </div>
    </Box> 
  </Center> 
 

    );
} 
export default Formulario;