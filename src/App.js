import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import ViewAllvistor from './components/ViewAllvistor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/viewall' element={<ViewAllvistor/>}/>
   </Routes>
   </BrowserRouter>

  );
}

export default App;
