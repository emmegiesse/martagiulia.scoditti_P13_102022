// import REACT
import React from 'react';

// import COMPONENTS
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';
import Header from '../components/Header';

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
            <Header />
            <Hero />
			<Features />
        </main>
    )
}

export default HomePage;