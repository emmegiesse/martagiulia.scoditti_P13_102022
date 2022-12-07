// import REACT
import React from 'react';

// import IMAGES
import homepageImage from '../../assets/img/bank-tree.jpeg'

// import STYLE
import '../../style/homepageStyle.css';

/**
 * Component to display homepage's hero
 * @name Hero
 * @returns {?JSX}
*/

// JSX _____________________________________________________________________________
const Hero = () => {
    return (
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}
        
export default Hero