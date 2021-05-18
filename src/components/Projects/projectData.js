// Images
import shoppingCart from '../../assets/shoppingCart.svg'
import postingProject from '../../assets/postingProject.svg'
import contactApp from '../../assets/contactApp.svg'
import exerciseApp from '../../assets/exerciseApp.svg'
import triviaGame from '../../assets/triviaGame.svg'
import immogram from "../../assets/Immogram.svg"

// Languages
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import redux from '../../assets/redux.svg'
import mongodb from '../../assets/mongodb.svg'
import node from '../../assets/node.svg'

export const data = [
	{
		id: 1,
		name: 'ImmoGram',
		nimi: 'ImmoGram',
		description: '',
		kuvaus: '',
		problem: '',
		ongelma: '',
		live: '',
		github: 'https://github.com/iMMoCodes/immogram',
		stacks: [react,node,mongodb,redux],
		image: immogram,
	},
	{
		id: 2,
		name: 'Posting App',
		description: '',
		kuvaus: '',
		problem: '',
		ongelma: '',
		live: 'https://post-project.netlify.app/',
		github: 'https://github.com/iMMoCodes/mern-project',
		stacks: [react,node,mongodb,redux],
		image: postingProject,
	},
	{
		id: 3,
		name: 'Exercise Tracker',
		description: '',
		kuvaus: '',
		problem: '',
		ongelma: '',
		live: 'https://immo-exercise.netlify.app/',
		github: 'https://github.com/iMMoCodes/mern-tracker',
		stacks: [react,node,mongodb],
		image: exerciseApp,
	},
	{
		id: 4,
		name: 'Trivia game',
		description: '',
		kuvaus: '',
		problem: '',
		ongelma: '',
		live: 'https://immocodes-trivia.netlify.app/',
		github: 'https://github.com/iMMoCodes/trivia',
		stacks: [react,js,css,html],
		image: triviaGame,
	},
	{
		id: 5,
		name: 'Contact App',
		description: '',
		kuvaus: '',
		problem: '',
		ongelma: '',
		live: 'https://immo-contacts.netlify.app/',
		github: 'https://github.com/iMMoCodes/contact',
		stacks: [react,js,css,html],
		image: contactApp,
	},
	{
		id: 6,
		name: 'Shopping Cart',
		nimi: 'Ostoskärry',
		description: 'One of my early practice projects using javascript. You can add to or remove items from shopping cart and it calculates total cost of your purchases.',
		kuvaus: 'Yksi ensimmäisistä harjoittelu projekteistani javascriptin avulla. Voit lisätä tai poistaa tavaroita ostoskärrystä ja näet ostostesi yhteishinnan.',
		problem: "This project was pretty much copied from youtube and was pretty long time ago. I don't really remember my biggest problem on this project.",
		ongelma: 'Tämä projekti on suurimmaksi osaksi kopioitu YouTube videon opastuksella ja tehty melko kauan sitten. En muista enää mikä oli suurin ongelmani tässä projektissa.',
		live: 'https://my-shopping-cart-app.netlify.app/',
		github: 'https://github.com/iMMoCodes/Shopping-Cart',
		stacks: [html, css, js],
		image: shoppingCart,
	},
]
