import { ComponentProps } from 'react'

type Props = 
  {
    media: string
    srcSet: string
	} & ComponentProps<'source'>

export const SourceComponent = ({ media, srcSet, ...rest }: Props) => (
	<source media={media} srcSet={srcSet} {...rest} />
)
