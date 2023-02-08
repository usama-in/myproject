
import './App.css';
import NavBar from './components/NavBAr';
import {Routes , Route} from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import OurServing from './Pages/OurServing';



function App() {
  return (
  <>
  <NavBar />
  
  
  <Routes>
  <Route  path='/' element={<Home />}></Route>
  <Route  path='/AboutUs' element={<AboutUs />}></Route>
  <Route  path='/ContactUs' element={<ContactUs />}></Route>
  <Route  path='/OurServing' element={<OurServing />}></Route>
  </Routes>
  
  
  
  </>
 

    
  
  
   
    
  );
}

export default App;
