 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 

import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom" 
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Products from './Components/Products';
import NotificationsState from './context/NotificationsState';
import Login from './Components/Login'
function App() {
  return (
   
      <NotificationsState>
      <Router>
        <NavigationBar />
        
        <Routes>
        <Route path ='/about' element = {<About />} />
          <Route path ='/' element = {<Home />} />
       
          <Route path ='/contact' element = {<Contact />} />
          <Route path ='/login' element = {<Login />} />
          <Route path = '/products/:productName' element = {<Products />} />          
        </Routes> 
              
      </Router>
      </NotificationsState>
       
    
  );
}

export default App;