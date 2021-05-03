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
import age from '../../assets/age.svg'
import message from '../../assets/message.svg'
import hearts from '../../assets/hearts.svg'
import avatar from '../../assets/avatar.svg'
import champion from '../../assets/champion.svg'

import './styles.css'

const About = ({ language }) => {
	return (
		<main className='aboutContainer'>
			<h1 className='aboutTitle'>{language ? 'About' : 'Tietoa Minusta'}</h1>
			<section className='aboutArea'>
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
			</section>
			<h1 className='aboutTitle'>{language ? 'Description' : 'Kuvaus'}</h1>
			<section className='descriptionContainer'>
				<p className='summaryText'>
					{language
						? "I love challenges, problem solving and I'm always eager to learn new things and to improve. I think these are the reasons why I enjoy coding so much. I started my coding career at freeCodeCamp in August from scratch and really fell in love with it and things escalated pretty quickly from there. After I understood the theory parts of language I started to write code by following YouTube tutorials. Now I have reached a point where I believe in my own skills and can create projects by myself. Currently I'm looking for a chance to put my skills to a test and improve even more in an actual work enviroment."
						: 'Rakastan haasteita, ongelmanratkaisua ja olen aina innokas oppimaan uusia asioita ja kehittämään itseäni. Pidänkin ohjelmoinnista varmasti näistä syistä. Aloitin ohjelmointiurani freeCodeCamp nettisivulla elokuussa. Aloitin alkeista ja asiat kehittyivät siitä melko nopeasti. Kun ymmärsin teoriaosuuden kielestä, aloin kirjoittamaan koodia seuraamalla YouTube videoita. Olen nyt saavuttanut pisteen jossa olen luottavainen omiin taitoihini ja osaan tehdä projekteja itsenäisesti. Nyt etsin mahdollisuutta päästä testaamaan taitojani ja kehittämään itseäni lisää oikeassa työympäristössä.'}
				</p>
			</section>
			<h1 className='aboutTitle'>{language ? 'Summary' : 'Tiivistelmä'}</h1>
			<section className='summaryContainer'>
				<div className='singleSummary'>
					<img className='summaryImage' src={age} alt='age' />
					<p className='summaryText'>{language ? "I'm 28 years old." : '28-vuotias.'}</p>
				</div>
				<div className='singleSummary'>
					<img className='summaryImage' src={message} alt='language' />
					<p className='summaryText'>{language ? 'My native language is Finnish.' : 'Äidinkieleni on suomi.'}</p>
				</div>
				<div className='singleSummary'>
					<img className='summaryImage' src={hearts} alt='heart' />
					<p className='summaryText'>{language ? 'I love music, sports, games and challenges.' : 'Rakastan musiikkia, urheilua, pelejä ja haasteita.'}</p>
				</div>
				<div className='singleSummary'>
					<img className='summaryImage' src={avatar} alt='person' />
					<p className='summaryText'>
						{language
							? 'I have good communication skills and I work well by myself but also as a member of a team.'
							: 'Minulla on hyvät viestintätaidot ja osaan työskennellä hyvin itsenäisesti mutta myös osana ryhmää.'}
					</p>
				</div>
				<div className='singleSummary'>
					<img className='summaryImage' src={avatar} alt='person' />
					<p className='summaryText'>
						{language
							? "By nature I'm friendly and positive person. I'm also really competitive and constantly try to improve myself in everything I do."
							: 'Luonteeltani olen ystävällinen ja positiivinen. Olen myös erittäin kilpailuhenkinen ja yritän aina kehittää itseäni kaikessa mitä teen.'}
					</p>
				</div>
				<div className='singleSummary'>
					<img className='summaryImage' src={champion} alt='trophy' />
					<p className='summaryText'>{language ? 'I was participant in four-time Finnish championship medal team.' : 'Olen ollut osallisena voittamassa neljä suomenmestaruus mitalia.'}</p>
				</div>
			</section>
			<h1 className='aboutTitle'>{language ? 'Languages / Skills' : 'Ohjelmointikielet'}</h1>
			<section className='aboutStackContainer'>
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
			</section>
		</main>
	)
}

export default About
