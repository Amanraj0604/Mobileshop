import React from 'react'
import "../Login/Login.css"
const Register = () => {
  return (
        <div>
          <div className="login">
            <div>
              <img className="login-left" src="https://img.freepik.com/free-psd/three-dimensional-image-mobile-phone_53876-1606.jpg?size=626&ext=jpg&ga=GA1.1.1716895637.1704373990&semt=ais" alt="" />
            </div>
            <div className="login-right">
              {/* {isFetching && <span className='notification'>Login Successfully</span>} */}
              <h1>Register</h1>
              <p>
                 Have an account? <span className='span-text'>
                  Login
                </span>
              </p>
              
              <form >
              <label className="label1" htmlFor="Email">Name</label>
                <input className='input-data' type="text"  />
                <label className="label1" htmlFor="Email">Email Address</label>
                <input className='input-data' type="text"  />
                <label className="label1" htmlFor="Email">Phone</label>
                <input className='input-data' type="text"  />
                <label className="label1" htmlFor="Password">Password</label>
                <input className='input-data' type="password" />
                <button className='user-but'  >
                  Register
                </button>
               
              </form>
            </div>
          </div>
        </div>
    
  )
}

export default Register
