import React from 'react'
import "./Navbar.css"

const Navbar = () =>{

    return(
      <div>
      <nav className="indigo darken-1">
      <div className="nav-wrapper">
   <div className="row">
   <div className="col s12">
     <div className="row">
       <div className="input-field col s12">
         <i className="material-icons prefix">search</i>
        <a href="#" className="brand-logo right">StoreFront DOO</a>
         <input type="text" id="autocomplete-input" className="autocomplete" placeholder="search"/>
       </div>
     </div>
   </div>
 </div>
      </div>
    </nav>
    {/* sub nav */}
    <nav className="sub-nav">
    <div className="nav-wrapper">
      <ul className="tabs tabs-transparent">
      <li className='tab'>Item 1</li>
      <li className='tab'>Item 2</li>
      <li className='tab'>Item 3</li>
      <li className='tab'>Item 4</li>
      <li className='tab'>Item 5</li>

      </ul>
    </div>
  </nav>
  </div>
 
          
        
    )
}

export default Navbar;

