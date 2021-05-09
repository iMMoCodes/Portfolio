import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from "./components/Contact/Contact"
import './App.css'

const App = () => {
	// TRUE -> ENG || FALSE -> FIN
	const [language, setLanguage] = useState(true)
	return (
		<>
			<Navbar language={language} setLanguage={setLanguage} />
			<Home />
			<About language={language} />
			<Projects language={language} />
			<Contact language={language}/>
		</>
	)
}

export default App
