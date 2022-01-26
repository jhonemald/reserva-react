import {useState}from 'react';
function Formulario(){
    const [inputDocumento, setinputDocumento]= useState ('');
    const [inputNDocumento, setinputNDocumento]= useState ('');
    const [inputNombre, setinputNombre]= useState('');
    const [inputApellido, setinputApellido]= useState('');
    const [inputEdad, setinputEdad]= useState ('');
    const [inputVacunado, setinputVacunado]= useState ('');
    const [inputSexo, setinputSexo]= useState ('');
    const [inputTelefono, setinputTelefono]= useState ('');
    
    function handleAgregarDocumento (e){
        setinputDocumento(e.target.value)
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
    return(    
    <div>
         <h1>Formulario</h1>
         <hr />
         <h2>RESERVA TU BUS EN COMPANYJEM</h2>
         <h3>INFORMACIÓN PASAJERO</h3>

         <form>
             <input
             type ='text'
             placeholder='Ingresa Tipo Documento'
             value={inputDocumento}
             onChange={handleAgregarDocumento}
             />
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
            <input
             type ='text'
             placeholder='Esquema De Vacunación'
             value={inputVacunado}
             onChange={handleAgregarVacunado}
             />
             <br/>
             <br/>
             <input
             type ='text'
             placeholder='Sexo'
             value={inputSexo}
             onChange={handleAgregarSexo}
             />
             <input
             type ='number'
             placeholder='Numero Contacto'
             value={inputTelefono}
             onChange={handleAgregarTelefono}
             />
             <input type = 'submit' value ='Guardar'className='btn btn-dark'/>
         </form>
    </div>
    );
} 
export default Formulario;