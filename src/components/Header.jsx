import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Container } from './Container'

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--color-ui-base);
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`

const Title = styled(Link).attrs({
	to: '/'
})`
	color: var(--color-text);
	font-size: var(--fs-lg);
	text-decoration: none;
	font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
	color: var(--color-text);
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
	cursor: pointer;
	text-transform: capitalize;
`

export const Header = () => {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ModeSwitcher onClick={toggleTheme}>
						{theme === 'light' ? <IoMoonOutline size={'20px'} /> : <IoMoon size={'20px'} />}

						<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
					</ModeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}
