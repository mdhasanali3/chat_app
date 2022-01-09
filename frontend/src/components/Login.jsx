import React from "react";
import { Link } from "react-router-dom";

const login = () =>{
    return(
        <div className="login">
        <div className="card">
            <div className="card-header">
                <h3>Login</h3>
            </div>
            <div className="card-body">
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input  type="email" placeholder="email"  id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn" />
                    </div>
                    <div className="form-group">
                        <span><Link to="/chatapp/register">Register Your Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}



export default login
