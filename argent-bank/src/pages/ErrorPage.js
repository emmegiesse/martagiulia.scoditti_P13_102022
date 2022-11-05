import React from 'react';
import { Link } from "react-router-dom"

const ErrorPage = () => {

    return (
        <div className="error-page">
            <h2 className="error-msg">Error page</h2>
            <p className="error-404"> 404 </p>
            <p> Oups! La page que vous demandez n'existe pas </p>
            <p className="error-redirect"><Link to="/">Retourner sur la page d'accueil</Link></p>
        </div>
    );
}

export default ErrorPage;
