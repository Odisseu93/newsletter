import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import { H1 } from '../atoms/typography/H1'
import { P } from '../atoms/typography/P'
import { B } from '../atoms/typography/B'

import { Generic } from '../templates/Generic'
import { useNavigate } from 'react-router-dom'

const cls = {
	'image-and-title':
		'flex flex-col gap-5' +
		' min-[768px]:flex-row min-[768px]:items-center min-[768px]:mb-4',

	image: 'mt-14 w-fit h-fit' + ' min-[768px]:my-auto',

	p: 'min-[768px]:max-w-2xl',

	button: 'mt-auto mx-auto mb-4' + ' min-[768px]:w-fit',
}

const img = {
	src: '/assets/images/icon-success.svg',
	alt: 'success icon',
}

const title = 'Thanks for subscribing!'

const buttonTextContent = 'Dismiss message'

export const Success = () => {
	const navigator = useNavigate()

	const handleClick = () => navigator('/subscribe')

	return (
		<Generic
			content={
				<>
					<div className={cls['image-and-title']}>
						<Image className={cls.image} src={img.src} alt={img.alt} />
						<H1>{title}</H1>
					</div>
					<P additionalClassNames={cls.p}>
						A confirmation email has been sent to {<B>ash@loremcompany.com</B>}.
						Please open it and click the button inside to confirm your
						subscription.
					</P>
					<Button
						type='button'
						additionalClassNames={cls.button}
						onClick={handleClick}
					>
						{buttonTextContent}
					</Button>
				</>
			}
		/>
	)
}
