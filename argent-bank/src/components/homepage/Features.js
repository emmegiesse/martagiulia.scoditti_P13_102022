// import REACT
import React from 'react';

// import DATA
import{ featuresData } from '../../data/featuresData.js';

// import COMPOSANT 
import FeatureCard from './FeatureCard.js';

// import STYLE 
import styled from 'styled-components';

/**
    * Component to diplay Bank features
    * @name Features
    * @returns {?JSX}
    * @component
*/

// JSX _____________________________________________________________________________

const Features = () => { 

    return (
        <FeaturesContainer>
            <h2 className="sr-only">Features</h2>
            {featuresData && featuresData.map((e, i) => (
              <FeatureCard 
                key={i} 
                src={e.imgSrc} 
                alt={e.alt} 
                title={e.title} 
                text={e.text} />
            ))}
        </FeaturesContainer>
    )
}

export default Features

//_____________________________________________________________________________

// STYLE
const FeaturesContainer = styled.section`
	display: flex;
	img {
		width: 100px;
		border: 10px solid #00bc77;
		border-radius: 50%;
		padding: 1rem;
		box-sizing: content-box;
	}
	@media screen and (max-width: 920px) {
		flex-direction: column;
	}
`


