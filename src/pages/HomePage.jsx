import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Controls } from '../components/Controls'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { ALL_COUNTRIES } from '../config'

export const HomePage = ({ setCountries, countries }) => {
	const [filterCountries, setFilterCountries] = useState([])
	const navigate = useNavigate()

	const handleSearch = (search, region) => {
		let data = [...countries]

		if (region) {
			data = data.filter(c => c.region.includes(region))
		}
		if (search) {
			data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
		}
		setFilterCountries(data)
	}

	useEffect(() => {
		if (!countries.length) {
			axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
		}
	}, [countries, setCountries])

	useEffect(() => {
		handleSearch()
		//eslint-disable-next-line
	}, [countries])

	return (
		<>
			<Controls onSearch={handleSearch} />
			<List>
				{filterCountries.map(c => {
					const countryInfo = {
						image: c.flags.png,
						name: c.name.common,
						info: [
							{
								title: 'Population',
								description: c.population.toLocaleString()
							},
							{
								title: 'Region',
								description: c.region
							},
							{
								title: 'Capital',
								description: c.capital
							}
						]
					}
					return <Card key={c.name.official} onClick={() => navigate(`/country/${c.name.official}`)} {...countryInfo} />
				})}
			</List>
		</>
	)
}
