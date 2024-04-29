import './App.css';
import React from 'react';
import logo from '../src/SENAI.png'


function NavBar() {
  return (

    <div className='nav'>

        <div className='logo'>
           <img src={logo}/> 
        </div>
        
    
    <ul>
        <nav className='menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Contato</a></li>
            <li><a href='#'>Quem Somos</a></li>
        </nav>
    </ul> 

    </div>
    
       
    
  );
}

export default NavBar;