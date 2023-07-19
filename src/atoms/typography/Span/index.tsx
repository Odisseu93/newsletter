import { ComponentProps } from 'react'

type Props = {
	text: string
	additionalClassNames?: string
} & ComponentProps<'label'>

export const Span = ({ text, ...rest }: Props) => (
	<span {...rest}>{text}</span>
)
