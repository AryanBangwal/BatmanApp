import React, {useState} from "react";
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // const [alert, setAlert] = useState(null); -----> iski error hatani hai

  const showAlert = (message, type)=>{
    setAlert({                              //object of alert
      msg: message,
      type: type 
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#1a1c3f';   //Sets background of body to dark
      showAlert("Dark mode enabled", "success");
      document.title="Batman - vengeance";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enabled", "success");
      document.title="Batman - Cutie";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title='React Practice' aboutOp="About" mode={mode} toggleMode={toggleMode}/>   {/*Using props*/}
      <Alert alert={alert}/>
      <div className="container my-2">                       {/*container is a class in bootstrap , my 3 class in bootstrap gives margin of 3*/}                                           
        {/* <Routes>                                             Setting up react router */}
              {/* <Route exact path="/about" element={<About/>} /> */}

             {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter Sexy Text Below' mode={mode}/>}/> */}
             <TextForm showAlert={showAlert} heading='Enter Sexy Text Below' mode={mode}/>
        {/* </Routes> */}
      </div>
      
    {/* </Router> */}
    </>
  );
}

export default App;
