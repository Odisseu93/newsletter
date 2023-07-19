import { ComponentProps } from 'react'
import { SourceComponent } from '../../atoms/SourceComponent'
import { Image } from '../../atoms/Image'

type SourceType = {
	media: string
	srcSet: string
}

type ImageType = {
	src: string
	alt: string
}

type Props = {
	sourceList: SourceType[]
	image: ImageType
} & ComponentProps<'picture'>

export const Picture = ({ sourceList, image, ...rest }: Props) => (
	<picture {...rest}>
		{sourceList.map(({ media, srcSet }, index: number) => (
			<SourceComponent key={index} media={media} srcSet={srcSet} />
		))}{' '}
		<Image src={image.src} alt={image.alt} />
	</picture>
)
