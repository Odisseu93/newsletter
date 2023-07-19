import { ComponentProps, ReactNode } from 'react'

type Props = {
	href: string
	children: ReactNode
} & ComponentProps<'a'>

export const Link = ({ href, children, ...rest }: Props) => (
	<a className='text-[#3e52a3] hover:underline' href={href} {...rest}>{children}</a>
)
