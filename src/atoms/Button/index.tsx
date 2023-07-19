import { ComponentProps, ReactNode } from 'react'
import { className as cls } from './styles'

type Props = {
	type?: 'submit' | 'reset' | 'button'
	children: ReactNode
	additionalClassNames?: string
} & ComponentProps<'button'>

export const Button = ({
	type,
	children,
	additionalClassNames,
	...rest
}: Props) => (
	<button
		type={type}
		className={`${cls.button} ${
			!additionalClassNames ? '' : additionalClassNames
		}`}
		{...rest}
	>
		{children}
	</button>
)
