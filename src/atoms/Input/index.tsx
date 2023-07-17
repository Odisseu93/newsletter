import { ComponentProps } from 'react'
import { className as cls } from './styles'

type Props = {
	type: 'email' /* is it possible to add pass types */
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	additionalClassNames?: string
} & ComponentProps<'input'>

export const Input = ({ additionalClassNames, type, onChange, ...rest}: Props) => (
	<input
		type={type}
		className={`${cls.input} ${cls[`input-${type}`]} ${
			!additionalClassNames ? '' : additionalClassNames
		}`}
		onChange={onChange}
		{...rest}
	/>
)
