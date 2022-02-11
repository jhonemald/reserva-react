import 
{BrowserRouter as Router,
Routes,
Route,
Link,
NavLink
}
from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Inicio from "./Components/Inicio";

import { Box, Text, Center, Heading,VStack, useColorMode,
useColorModeValue,
} from "@chakra-ui/react";
import bus2 from "./assets/img/bus2.jpg";

function App() {
 
  const [IniciarSesion, setIniciarSesion] = useState(false);
  const [usuarioActivo, setusuarioActivo] = useState('');
  const [tomarreserva, settomarreserva] = useState ([]);
  const colorText = useColorModeValue("white");
  return (
    <Router>
    <div style={{
        backgroundImage: `url(${bus2})`,
        height: "100vh",
        width: "100%",
        margin: 0,
        backgroundSize: "cover",
      }} > 
    <div className="App"> 
    <br/>   
    <hr/>
    <div>
    </div>
   <center> 
     <Text color ={"white"}>CompanyJEM </Text>
   
     <Text color ={"white"}>Viaja y Disfruta, Reserva ya...</Text></center>
    </div>

    {
      !IniciarSesion ?
      <Login setIniciarSesion={setIniciarSesion} setusuarioActivo={setusuarioActivo}/>
    :
    <Inicio  usuarioActivo={usuarioActivo} setIniciarSesion={setIniciarSesion}
              tomarreserva={tomarreserva} settomarreserva={settomarreserva}/>
    }

    
 
    </div>
   
    
  </Router> 
  );
}

export default App;