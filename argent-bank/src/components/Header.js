// import REACT
import React from 'react'; //React
import { Link, useNavigate } from 'react-router-dom';

// import REDUX
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectFirstName } from '../redux/selectors.js';
import { logOut } from '../redux/reducers.js';

// import ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

// import IMAGES
import logo from '../assets/img/argentBankLogo.png';

// JS____________________________________________
function Header() {
    const connected = useSelector(selectUserLogin)
    const firstName = useSelector(selectFirstName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    const goToHome = () => {
        navigate('/')
    }

    const SignOut = () => {
        dispatch(logOut())
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

            {
                connected 
                ?
                <div className="nav-icons">
                    <div className="main-nav-item">
                        <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
                        <Link className="main-nav-item-p" to={'/user'}> {firstName} </Link>
                    </div>
                    <div className="main-nav-item" onClick = {SignOut}>
                        <FontAwesomeIcon className = "fa fa-sign-out " icon={faSignOut} />
                        <p className="main-nav-item-p"> Sign Out </p>
                    </div>
                </div>
                :
                <div className="main-nav-item" onClick = {goToLogin}>
                    <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
                    <p className="main-nav-item-p"> Sign In </p>
                </div>
            }
        </nav>
    );
}

export default Header;