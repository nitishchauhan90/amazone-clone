import React, { useState } from 'react'
import "../login.css"
import { Link } from "react-router-dom";
import {auth}  from "./firebase";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    } 
    const register= e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // Signed in
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error=> alert(error.message))
    }
    return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png'></img>
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' className='login_signButton' onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in agree to the AMAZON FAKE CLONE Conditions of use & safe. Please see our cookies Notice, our cookies Notice and our Interest-Based ads Notice.
            </p>
            <button type='submit' className='login_registerButton' onClick={register}>Create your Amazon Account</button>
        </div>

    </div>
  )
}

export default Login
