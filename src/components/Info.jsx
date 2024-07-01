import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { filterByCode } from '../config'

const Wrapper = styled.section`
	margin-top: 3rem;
	width: 100%;
	height: 40vh;
	display: grid;
	grid-template-columns: 100%;
	gap: 2rem;

	@media (min-width: 767px) {
		grid-template-columns: minmax(100px, 400px) 1fr;
		align-items: center;
		gap: 5rem;
	}
	@media (min-width: 1024px) {
		grid-template-columns: minmax(400px, 600px) 1fr;
	}
`

const InfoImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;

	// @media (min-width: 1150px) {
	// 	object-fit: cover;
	// }
`

const InfoTitle = styled.h1`
	margin: 0 0 2rem;
	font-weight: var(--fw-bold);
`

const ListGroup = styled.div`
	display: grid;
	grid-template-columns: 100%;
	gap: 2rem;

	@media (min-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 4rem;
	}
`

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`

const ListItem = styled.li`
	line-height: 1.8;
`

const Meta = styled.div`
	margin-top: 3rem;
	margin-bottom: 3rem;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
	align-items: flex-start;

	@media(min-width:767px){
		flex-direction: row;
    	align-items: center;
	})
`

const TagGroup = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
`

const Tag = styled.span`
	padding: 0 1rem;
	background-color: var(--color-ui-base);
	box-shadow: var(--shadow);
	line-height: 1.5;
	cursor: pointer;
`

export const Info = props => {
	const navigate = useNavigate()
	const {
		name,
		flags,
		capital,
		population,
		region,
		subregion,
		tld,
		currencies = [],
		languages = [],
		borders = []
	} = props

	const [neighbors, setNeighbors] = useState([])

	useEffect(() => {
		if (borders.length) {
			axios.get(filterByCode(borders)).then(({ data }) => setNeighbors(data.map(c => c.name.common)))
		}
	}, [borders])

	return (
		<Wrapper>
			<InfoImage src={flags.png} alt={name?.official} />
			<div>
				<InfoTitle>{name.official}</InfoTitle>
				<ListGroup>
					<List>
						<ListItem>
							<b>Native Name:</b> {Object.values(name.nativeName)[0].common}
						</ListItem>
						<ListItem>
							<b>Population:</b> {population}
						</ListItem>
						<ListItem>
							<b>Region:</b> {region}
						</ListItem>
						<ListItem>
							<b>Sub Region:</b> {subregion}
						</ListItem>
						<ListItem>
							<b>Capital:</b> {capital}
						</ListItem>
					</List>
					<List>
						<ListItem>
							<b>Top Level Domain:</b>{' '}
							{tld.map(d => (
								<span key={d} style={{ paddingLeft: '0.25rem' }}>
									{d}
								</span>
							))}
						</ListItem>
						<ListItem>
							<b>Currencies:</b>
							{Object.values(currencies)?.map(c => (
								<span key={c} style={{ paddingLeft: '0.25rem' }}>
									{c.name}
								</span>
							))}
						</ListItem>
						<ListItem>
							<b>Languages:</b>
							{Object.values(languages)?.map(l => (
								<span key={l} style={{ paddingLeft: '0.25rem' }}>
									{l}
								</span>
							))}
						</ListItem>
					</List>
				</ListGroup>
				<Meta>
					<b>Border countries:</b>
					{!borders.length ? (
						<span>There is no border countries</span>
					) : (
						<TagGroup>
							{neighbors.map(b => (
								<Tag key={b} onClick={() => navigate(`/country/${b}`)}>
									{b}
								</Tag>
							))}
						</TagGroup>
					)}
				</Meta>
			</div>
		</Wrapper>
	)
}
