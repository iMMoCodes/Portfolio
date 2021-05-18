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
		nimi: 'Posting App',
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
		nimi: 'Harjoituskalenteri',
		description: 'An exercise tracker where you can create a user and an exercise. You can add user, description, duration and a date to your exercise. This project also has my own created backend that uses MongoDB.',
		kuvaus: 'Harjoitus kalenteri jossa voit luoda käyttäjän ja harjoituksen. Pystyt lisäämään harjoitukseen käyttäjän, kuvaksen, keston ja päivänmäärän. Tein projektiin myös itse backend osuuden hyödyntämällä MongoDB:tä.',
		problem: 'You had to refresh the page in order to see the created exercise or changes to it. I fixed the problem by creating variable that changes when creating or editing exercise and re-renders the exercises.',
		ongelma: 'Sivu piti päivittää luodessasi uutta harjoitusta tai päivittäessä olemassa olevaa. Korjasin ongelman luomalla muuttujan joka muuttuu luodessa tai muuttaessa harjoitusta ja lataa harjoitukset uudestaan.',
		live: 'https://immo-exercise.netlify.app/',
		github: 'https://github.com/iMMoCodes/mern-tracker',
		stacks: [react,node,mongodb],
		image: exerciseApp,
	},
	{
		id: 4,
		name: 'Trivia Game',
		nimi: 'Tietovisa',
		description: 'A trivia game for four players. In game you can change category or difficulty of the questions.',
		kuvaus: 'Tietovisa neljälle pelaajalle. Pelissä voit vaihtaa aihealuetta tai kysymysten vaikeustasoa.',
		problem: "My biggest problem in this project was that question and answers re-rendered immediately when answer was clicked and you couldn't see what you answered. I fixed this by setting up the questions earlier in the code so that clicking answers didn't affect the rendering of questions.",
		ongelma: 'Projektin suuring ongelma oli kysymysten ja vastausten latautuminen uudelleen heti vastauksen painamisen jälkeen ja ei ollut mahdollista nähdä mitä vastasi. Korjasin ongelman asettamalla kysymykset aikaisemmin koodissa, jotta vastausten painaminen ei enää ladannut kysymyksiä uudelleen.',
		live: 'https://immocodes-trivia.netlify.app/',
		github: 'https://github.com/iMMoCodes/trivia',
		stacks: [react,js,css,html],
		image: triviaGame,
	},
	{
		id: 5,
		name: 'Contact App',
		nimi:'Kontaktilista',
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
