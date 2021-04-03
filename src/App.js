import logo from './logo.svg';
import './App.css';
import myImage from "./imageInSrc.png"
import "./style.css"
function App() {
  return (

    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 className="titleRed">Your name here</h1>
   
    <br />
   
    <img src={myImage}/>
   
    <br/ >
   
    <img src="/imageInPublic.png" />

   
   </div>
   
  
  );
}

export default App;
