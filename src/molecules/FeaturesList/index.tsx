import { className as cls } from './styles'

import { Image } from '../../atoms/Image'
import { P } from '../../atoms/typography/P'

type Props = {
	featuresTextContent: Array<string>
}

export const FeaturesList = ({ featuresTextContent }: Props) => (
	<ul className={cls.ul}>
		{featuresTextContent.map((text, index: number) => (
			<li className={cls.li} key={index}>
				<Image
					className={cls.img}
					src='assets/images/icon-list.svg'
					alt='list icon'
				/>
				<P>{text}</P>
			</li>
		))}
	</ul>
)
