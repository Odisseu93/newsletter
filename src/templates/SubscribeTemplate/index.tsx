import { className as cls } from './styles'

import { H1 } from '../../atoms/typography/H1'
import { P } from '../../atoms/typography/P'
import { FeaturesList } from '../../molecules/FeaturesList'
import { Form } from '../../organisms/Form'
import { Picture } from '../../molecules/Picture'

type SourceType = {
	media: string
	srcSet: string
}

type ImageType = {
	src: string
	alt: string
}

interface SubscribeTemplateProps {
	title: string
	paragraph: string
	features?: Array<string>
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
	sourceImageList: SourceType[]
	image: ImageType
}

export const SubscribeTemplate = ({
	title,
	paragraph,
	features,
	onSubmit,
	sourceImageList,
	image,
}: SubscribeTemplateProps) => (
	<main className={cls.main}>
		<Picture className={cls.picture} sourceList={sourceImageList} image={image} />

		<section className={cls.section}>
			<H1>{title}</H1>

			<P>{paragraph}</P>

			{features && features.length > 0 && (
				<FeaturesList featuresTextContent={features} />
			)}

			<Form onSubmit={onSubmit} />
		</section>
	</main>
)
