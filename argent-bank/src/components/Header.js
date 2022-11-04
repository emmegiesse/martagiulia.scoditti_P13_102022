import React from 'react'; //React
import { useNavigate } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/argentBankLogo.png';

const Header = () => {
    const navigate = useNavigate()

    const goToSignUp = () => {
        navigate('/login')
    }

    const goToHome = () => {
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <div className="main-nav-logo" onClick = {goToHome}>
                <img
                    className="main-nav-logo-image"
                    src= {logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </div>
            <div className="main-nav-item" onClick = {goToSignUp}>
                <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
                <p className="main-nav-item-p"> Sign In </p>
            </div>
        </nav>
    );
}

export default Header;