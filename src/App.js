import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'

const App = () => {
	// TRUE -> ENG || FALSE -> FIN
	const [language, setLanguage] = useState(true)
	return (
		<>
			<Navbar language={language} setLanguage={setLanguage} />
		</>
	)
}

export default App
