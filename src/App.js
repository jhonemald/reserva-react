import {
BrowserRouter as Router,
Routes,
Route,
Link
}
from "react-router-dom";
import Formulario from "./Components/Formulario";
import LinkItem from "./Components/LinkItem";
import Login from "./Components/Login";
import Inicio from "./Components/Inicio";
import bus from './assets/img/bus2.jpg';

function App() {
  return (
    <div className="App">
     <Router>
       <div className="container mt-5 bg-primary">
       <Link to="/Inicio" className="btn btn-dark">
       <LinkItem name={"Inicio"} />
       </Link>
       <Link to= "/Login"className="btn btn-dark">
        <LinkItem name ={"Login"} />
       </Link>
       < Link to= "/Formulario" className="btn btn-dark">
       <LinkItem name ={"Formulario"} />
       </Link>
       <Routes>
         <Route path ={"/"}>
         <Route path = {"/Login"} element = {<Login/>}/>
         <Route path = {"/Formulario"} element = {<Formulario/>}/>
         <Route path = {"/inicio"} element = {<Inicio />}/>
         <Route index element={<h1>RAIZ</h1>}/>
         <Route path = {"/*"} element= {<h1>ERROR NO FUNCIONA</h1>}/>
        </Route>
      </Routes>
      <hr/>
      <img src={bus} alt ="" height="200 rem"/>
      </div>
    </Router> 
    </div>
  );
}

export default App;