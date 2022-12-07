// import REACT
import React from 'react';

// import COMPONENTS
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';

// import STYLE
import '../style/homepageStyle.css';

/**
 * Home page
 * @name HomePage
 * @returns {JSX} 
 * @component
*/

// JSX ____________________________________________
function HomePage() {
    return (
        <main> 
            <Hero />
			<Features />
        </main>
    )
}

export default HomePage;
