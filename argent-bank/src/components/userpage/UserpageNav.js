// import REACT
import React from 'react'; //React
import { useNavigate } from 'react-router-dom'; 

// import REDUX 
import { useSelector } from 'react-redux';
import { selectFirstName } from '../../redux/selectors';

// import ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

// import IMAGES
import logo from '../../assets/img/argentBankLogo.png';

// JS____________________________________________
function UserpageNav ({ title, amount, description }) {
    const navigate = useNavigate()
    let firstName = useSelector(selectFirstName)

    const goToHome = () => {
        navigate('/')
    }

    const SignOut = () => {
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

            <div className="nav-icons">
                <div className="main-nav-item">
                    <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
                    <p className="main-nav-item-p"> {firstName} </p>
                </div>
                <div className="main-nav-item" onClick = {SignOut}>
                    <FontAwesomeIcon className = "fa fa-sign-out " icon={faSignOut} />
                    <p className="main-nav-item-p"> Sign Out </p>
                </div>
            </div>
        </nav>
    );
}

export default UserpageNav;