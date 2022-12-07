// import REACT
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// import REDUX
import { useDispatch } from 'react-redux';

// import API
import APICalls from '../../service/APIcall.js';

// import REDUX
import { logIn } from '../../redux/reducers.js';

/**
* Components to display website homepage
* @name LoginForm
* @returns {?JSX}
*/

// JSX _____________________________________________________________________________
const LoginForm = () => {
    //déclaration des constantes du formulaire 
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe ] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        console.log("username", userName)
        console.log("password",password)
        console.log("checkbox",rememberMe)
        e.preventDefault()
        setError("")

        // set response via APICall
        const response = await new APICalls().userLogIn(userName, password)
        if (response.status !== 200) {
            return setError("Username and/or password incorrect")
        }

        dispatch(logIn(response.data.body.token))
        navigate('/user')
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    value={userName}
                    autoComplete="current-username"
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className="input-wrapper">
            <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="input-remember">
                <input 
                    type="checkbox" 
                    id="remember-me"
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">Sign In</button>
            <p className="error-message">{error}</p>

        </form>
    )
}
        
export default LoginForm;

