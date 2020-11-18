import './App.css';
import Formview from "./Views/Formview"
import Displayview from "./Views/Displayview"
import { Router, navigate } from "@reach/router";
import DataContextProvider from "./Contexts/dataContext"

function App() {

  const gotDate = localStorage.getItem("myValueInLocalStorage")
console.log (gotDate)

function GoDate() {
  
    navigate("/displayview");
  }
  
  return (
    <div className="App">
{gotDate && GoDate()  }


<DataContextProvider>
     <Router >
     
     <Formview path="/" />
     <Displayview path= "/displayview" />
      
                    
                </Router>
      
     
                </DataContextProvider>
      
    </div>
  );
}

export default App;
