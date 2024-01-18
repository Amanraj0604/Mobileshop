import React from 'react'
import "./Login.css"
const Login = () => {
    return (
        <div>
          <div className="login">
            <div>
              <img className="login-left" src="https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?size=626&ext=jpg&ga=GA1.1.1716895637.1704373990&semt=sph" alt="" />
            </div>
            <div className="login-right">
              {/* {isFetching && <span className='notification'>Login Successfully</span>} */}
              <h1>Login</h1>
              <p>
                Don't have an account? <span className='span-text'>
                  Sign up
                </span>
              </p>
              
              <form >
                <label className="label1" htmlFor="Email">Email Address</label>
                <input className='input-data' type="text"  />
                <label className="label1" htmlFor="Password">Password</label>
                <input className='input-data' type="password" />
                <button className='user-but'  >
                  Login
                </button>
               
              </form>
            </div>
          </div>
        </div>
    )
}

export default Login
