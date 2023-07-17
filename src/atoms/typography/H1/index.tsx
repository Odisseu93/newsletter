import { ComponentProps, ReactNode } from 'react'
import { className as cls } from './styles'

type Props = {
	children: ReactNode
	additionalClassNames?: string
} & ComponentProps<'h1'>

export const H1 = ({ children, additionalClassNames, ...rest }: Props) => (
	<h1
		className={`${cls.h1} ${!additionalClassNames ? '' : additionalClassNames}`}
		{...rest}
	>
		{children}
	</h1>
)
