import React from 'react'
import './Login.css'

export const Login = () =>{
    return(
        <div className='loginCard'>

        <h3>Sign In to inTouch</h3>
        <form className = 'login'>
          <label >Username</label>
            <input name ="username" />
          <label>Password</label>
            <input type = 'password' name ="password" />
            <button id='signIn' type="login">Sign In</button>
            <button id='createAccount' type="login">Create Account</button>
            <button id='browseWithoutAccount' type="login">Browse Without Account</button>
        </form>

        </div>
        
    )
}


