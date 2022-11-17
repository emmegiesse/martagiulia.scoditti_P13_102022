// import REACT
import React from 'react';

// import IMAGES
import homepageImage from '../../assets/img/bank-tree.jpeg'

// import STYLE
import styled from 'styled-components';

/**
 * Component to display homepage's hero
 * @name Hero
 * @returns {?JSX}
*/

// JSX _____________________________________________________________________________

const Hero = () => {
    return (
        <HeroContrainer>
            <HeroContent>
                <h2 className="sr-only">Promoted Content</h2>
                    <Subtitle>No fees.</Subtitle>
                    <Subtitle>No minimum deposit.</Subtitle>
                    <Subtitle>High interest rates.</Subtitle>
                    <Text>Open a savings account with Argent Bank today!</Text>
            </HeroContent>
        </HeroContrainer>
    )
}
    
export default Hero

//_____________________________________________________________________________
    

// STYLE
const HeroContrainer = styled.section`
	color: black;
	position: relative;
	background-image: url(${homepageImage});
	background-size: cover;
	background-repeat: no-repeat;
	height: 400px;
	background-position: 0% 33%;
	@media screen and (max-width: 920px) {
		height: 400px;
		background-position: 0% 33%;
	}

`
const HeroContent = styled.article`
	background: white;
	position: absolute;
	top: 50px;
	right: 50px;
	width: 300px;
	margin: 2rem;
	padding: 2rem;
	text-align: left;
	box-sizing: content-box;
	@media screen and (max-width: 920px) {
		position: relative;
		top: 2rem;
		right: 0;
		width: 200px;
		margin: 0 auto;
	}
}
`

const Subtitle = styled.p`
	font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
	@media screen and (max-width: 920px) {
		font-size: 1rem;
	}
`

const Text = styled.p`
	margin-top: 1rem;
	font-size: 1.2rem;
	@media screen and (max-width: 920px) {
		font-size: 0.9rem;
	}
`
