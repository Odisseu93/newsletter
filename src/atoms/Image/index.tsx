import { ComponentProps } from 'react'

type Props =
  {
    src: string
    alt: string
	} | ComponentProps<'img'>

export const Image = ({ src, alt, ...rest }: Props) => (
	<img src={src} alt={alt} {...rest} />
)
