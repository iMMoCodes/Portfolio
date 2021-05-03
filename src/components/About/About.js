import React from 'react'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import sass from '../../assets/sass.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node.svg'
import mongodb from '../../assets/mongodb.svg'
import git from '../../assets/git.svg'
import redux from '../../assets/redux.svg'

import './styles.css'

const About = ({ language }) => {
	return (
		<div className='aboutContainer'>
			<h1 className='aboutTitle'>{language ? 'About' : 'Tietoa Minusta'}</h1>
			<div className='aboutArea'>
				<div className='aboutQuestion'>
					<h2>{language ? 'Who?' : 'Kuka?'}</h2>
					<h2>Matti Mäkelä</h2>
				</div>
				<div className='aboutQuestion'>
					<h2>{language ? 'What?' : 'Mikä?'}</h2>
					<h2>Web Developer</h2>
				</div>
				<div className='aboutQuestion'>
					<h2>{language ? 'When?' : 'Milloin?'}</h2>
					<h2>{language ? 'August 2020 -' : 'Elokuu 2020 -'}</h2>
				</div>
				<div className='aboutQuestion'>
					<h2>{language ? 'Where?' : 'Missä?'}</h2>
					<h2>Tampere</h2>
				</div>
			</div>
			<h1 className='aboutTitle'>{language ? 'Languages / Skills' : 'Ohjelmointikielet'}</h1>
			<div className='aboutStackContainer'>
				<div className='oneStack'>
					<img className='stackImage' src={html} alt='html' />
					<h2>HTML</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={css} alt='html' />
					<h2>CSS</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={sass} alt='html' />
					<h2>SASS</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={js} alt='html' />
					<h2>JS</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={react} alt='html' />
					<h2>REACT</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={node} alt='html' />
					<h2>NODE</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={mongodb} alt='html' />
					<h2>MongoDB</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={redux} alt='redux' />
					<h2>REDUX</h2>
				</div>
				<div className='oneStack'>
					<img className='stackImage' src={git} alt='redux' />
					<h2>GIT</h2>
				</div>
			</div>
		</div>
	)
}

export default About
