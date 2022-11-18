// import REACT
import React from 'react';

// import COMPONENTS
import Header from '../components/Header';
import LoginForm from '../components/loginpage/LoginForm.js';

// import ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// import STYLE
import '../style/loginpageStyle.css';

/**
 * Login page
 * @name LoginPage
 * @returns {JSX} 
 * @component
*/

// JSX _____________________________________________________________________________

function LoginPage() {
    return (
        <div>
            <Header />
            <main class="sign-in-main">
                <div class="bg"></div>
                <section class="sign-in-content">
                    <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <LoginForm />
                </section>
            </main>
        </div>

    )
}
export default LoginPage;
