
import "./App.css"
import Navbar from "./Components/NavBar";
import UserList from "./Pages/Userlist";
import Error from "./Pages/Error"
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import { Route, Switch } from "react-router";


function App(){

      return (

      <div className="App">
            <Navbar/>
       <Switch>
       <Route  exact path="/userlist" component= {UserList} />
       <Route  excat path="/home" component = {Home} />
       <Route  exact path="/error" component  ={Error} />
       <Route  exact path="/admin "component = {Admin}/>
     

      </Switch> 

     
     
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
      </div>
      </div>
      
    

    );
  
    }
   
   export default App;