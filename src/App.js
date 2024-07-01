import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'

function App() {
	const [countries, setCountries] = useState([])

	return (
		<React.Fragment>
			<Header />
			<Main>
				<Routes>
					<Route exact path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
					<Route path="/country/:name" element={<Details />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Main>
		</React.Fragment>
	)
}

export default App
