import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import List from './component/List/List';
import Hotel from './component/Hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="hotel/" element={<List/>}/>
       <Route path ="hotel/:id" element ={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
