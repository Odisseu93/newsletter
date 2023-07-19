import { ComponentProps } from 'react'
import { className as cls } from './styles'

type Props = {
	text: string
	additionalClassNames?: string
} & ComponentProps<'label'>

export const Label = ({ text, additionalClassNames, ...rest }: Props) => (
	<label
		className={`${cls.label} ${!additionalClassNames ? '' : additionalClassNames}`}
		{...rest}
	>
		{text}
	</label>
)
