import { ComponentProps, ReactNode } from 'react'
import { className as cls } from './styles'

type Props = {
	children: ReactNode
} & ComponentProps<'footer'>

export const Footer = ({ children, ...rest }: Props) => (
	<footer className={cls} {...rest}>{children}</footer>
)