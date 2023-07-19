import { SubscribeTemplate } from '../templates/SubscribeTemplate'

const title = 'Stay Upadated!'

const paragraph = 'Join 60,000+ product managers receiving monthly updates on:'

const featuresTextContent = [
	'Product discovery and building what matters',
	'Measuring to ensure updates are a success',
	'And much more!',
]

const sourceImageList = [
	{
		media: '(max-width: 768px)',
		srcSet: 'assets/images/illustration-sign-up-mobile.svg',
	},
	{
		media: '(min-width: 769px)',
		srcSet: 'assets/images/illustration-sign-up-desktop.svg',
	},
]
const image = {
	src: 'assets/images/illustration-sign-up-mobile.svg',
	alt: 'illustration sign up',
}

const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
	e.preventDefault()
}

export const Subscribe = () => (
	<SubscribeTemplate
		title={title}
		paragraph={paragraph}
		features={featuresTextContent}
		sourceImageList={sourceImageList}
		image={image}
		onSubmit={handleSubmit}
	/>
)
