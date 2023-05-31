import './css/main.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home';
import Instruction from './pages/Instruction'
import Projects from './pages/Projects';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [isActiveCalc, setIsActiveCalc] = useState(false)
  return (
    <div class="wrapper">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<Home isActive={isActive} setIsActive={setIsActive} isActiveCalc={isActiveCalc} setIsActiveCalc={setIsActiveCalc}/>} />
          <Route path='/projects' element={<Projects isActive={isActive} setIsActive={setIsActive} isActiveCalc={isActiveCalc} setIsActiveCalc={setIsActiveCalc}/>}/>
          <Route path='/instruction' element={<Instruction isActive={isActive} setIsActive={setIsActive} isActiveCalc={isActiveCalc} setIsActiveCalc={setIsActiveCalc}/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
