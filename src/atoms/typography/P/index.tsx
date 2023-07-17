import { ComponentProps, ReactNode } from 'react'
import { className as cls } from './styles'

type Props = {
	children: ReactNode
	additionalClassNames: string
} & ComponentProps<'p'>

export const P: React.FC<Props> = (
	{ children, additionalClassNames },
	...rest
) => (
	<p
		className={`${cls.p} ${!additionalClassNames ? '' : additionalClassNames}`}
		{...rest}
	>
		{children}
	</p>
)
