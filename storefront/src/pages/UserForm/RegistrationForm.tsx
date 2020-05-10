import React,{useRef} from 'react';
import "./UserForm.css"

const RegistrationForm = () =>{
    return(
        <div className="container ">
            <div className="card-panel indigo darken-1 center">
            <h4 className="white-text">Store Registration</h4>
            </div>
            <form action="POST">
            <input type="text" name="store-name" id="store-name"/>
            <label htmlFor="store-name" className="form-lable">Store name</label>
            <input type="text" name="" id=""/>
            <label htmlFor="store-name" className="form-lable">Admin User Name</label>
            <input type="password" name="" id=""/>
            <label htmlFor="store-name" className="form-lable">Password</label>
            <input type="password" name="" id=""/>
            <label htmlFor="store-name" className="form-lable">Confirm Password</label>
        
  <p>
    <label>
      <input className="with-gap" name="group3" type="radio" checked />
      <span>Clasic E-shop</span>
    </label>
  </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Subscription plan</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
    </p>

            </form>


        </div>
    )
}


export default RegistrationForm;