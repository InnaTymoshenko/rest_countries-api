import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
	styles: {
		control: provided => ({
			...provided,
			backgroundColor: 'var(--color-ui-base)',
			color: 'var(--color-text)',
			borderRadius: 'var(--radii)',
			padding: '0.25rem',
			border: 'none',
			boxShadow: 'var(--shadow)',
			height: '50px'
		}),
		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			color: 'var(--color-text)',
			backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)'
		})
	}
})`
	width: 200px;
	border-radius: var(--radii);
	border: none;
	font-size: var(--fs-sm);

	& > * {
		box-shadow: var(--shadow);
	}
	& input {
		padding-left: 0.25rem;
	}
	& > div {
		background-color: var(--color-ui-base);
	}
	& * {
		color: var(--color-text) !important;
	}
`
