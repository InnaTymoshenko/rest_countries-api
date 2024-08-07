import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.div`
	background-color: var(--color-ui-base);
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	border-radius: var(--radii);
	box-shadow: var(--shadow);
	width: 100%;
	margin-bottom: 1.5rem;

	@media (min-width: 767px) {
		width: 400px;
		margin-bottom: 0;
	}
`

const Input = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...'
})`
	margin-left: 2rem;
	border: none;
	outline: none;
	background-color: var(--color-ui-base);
	color: var(--color-text);
`

export const Search = ({ search, setSearch }) => {
	return (
		<InputContainer>
			<IoSearch size={'20px'} />
			<Input onChange={e => setSearch(e.target.value)} value={search} />
		</InputContainer>
	)
}
