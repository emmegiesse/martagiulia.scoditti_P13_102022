// import REACT
import React from 'react';

// import DATA
import{ featuresData } from '../../data/featuresData.js';

// import COMPOSANT 
import FeatureCard from './FeatureCard.js';

// import STYLE
import '../../style/homepageStyle.css';

/**
    * Component to diplay Bank features
    * @name Features
    * @returns {?JSX}
    * @component
*/

// JSX _____________________________________________________________________________
const Features = () => {
    return (
        <section className="features-container">
            <h2 className="sr-only">Features</h2>
            {featuresData && featuresData.map((e, i) => (
              <FeatureCard 
                key={i} 
                src={e.imgSrc} 
                alt={e.alt} 
                title={e.title} 
                text={e.text} />
            ))}
        </section>
    )
}

export default Features