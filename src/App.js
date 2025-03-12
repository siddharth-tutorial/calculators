
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import State from './State';
import Counter from './Counter';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Calculators from './Calculators';
import Calculator from './Calculator';








function App() {
  return (
   <>
   <Routes>
    <Route path='/'element={<Home/>} />
    <Route path='state' element={<State/>}/>
    <Route path='counter' element={<Counter/>}/>
    <Route path='calculators' element={<Calculators/>}/>
    <Route path='calculator' element={<Calculator/>}/>
 
   
    

  
   
    
   </Routes>
   </>
  );
}

export default App;
