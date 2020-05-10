import React from 'react';
import UserForm from './pages/UserForm/UserForm';
import "materialize-css/dist/css/materialize.css";
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Homepage/Home';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
function App() {
  return (
  <Router>
      <div>
      <Navbar />
      <Home />
    </div>
  </Router>
  );
}

export default App;
