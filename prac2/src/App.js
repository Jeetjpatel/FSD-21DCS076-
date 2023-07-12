import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Contact" element={<Contact /> }/>
          <Route exact path="/About" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
