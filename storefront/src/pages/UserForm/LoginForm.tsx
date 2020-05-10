import React,{useRef} from 'react';

const LoginForm = () =>{

    return(
        <div className="container ">
            <div className="card-panel indigo darken-1 center">
            <h4 className="white-text">
                    Store Login
                </h4>
            </div>
            <form action="POST">
            <input type="text" name="store-name" id="store-name"/>
            <label htmlFor="store-name" className="form-lable">Store Name</label>
            <input type="text" name="" id=""/>
            <label htmlFor="store-name" className="form-lable">Admin User Name</label>
            <input type="password" name="" id=""/>
            <label htmlFor="store-name" className="form-lable">Password</label>
            <input type="password" name="" id=""/>
            <label htmlFor="store-name" className="form-lable">Confirm Password</label>
            </form>


        </div>
    )
}


export default LoginForm;