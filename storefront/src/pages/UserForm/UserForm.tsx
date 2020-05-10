import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import "./UserForm.css";

const UserForm = ()=>{

    return(
        <div className="form-container">
            <RegistrationForm />
            {/* <LoginForm /> */}
        </div>
    )
}

export default UserForm;