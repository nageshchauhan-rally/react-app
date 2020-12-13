import React from 'react';
import './Login.css';

function Login() {
  return (
      <div className="main">
          <p className="sign">LOGIN</p>
          <form className="form1">
              <input className="tb" type="text"  placeholder="ID"/>
              <input className="tb" type="text"  placeholder="Email"/>
              <input className="tb" type="password"  placeholder="Password"/>
              <a className="submit" href="/search" >Login</a>
          </form>
      </div>
  );
}
export default Login;
