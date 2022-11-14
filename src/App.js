
import './App.css';
import PlaceToStay from "./components/PlaceToStay";
import Airbnb from  "./components/Airbnb";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
function App() {
  return(
        <HashRouter>
        <Routes>
        <Route path="/" element={<Airbnb/>}/>
        <Route path="/placetostay" element={<PlaceToStay/>}/>
        </Routes>
        </HashRouter>
    )
   
  
}

export default App;
