import { className as cls } from './styles'

import { Button } from '../../atoms/Button'
import { InputEmailWithLabel } from '../../molecules/InputEmailWithLabel'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { isValidEmail } from '../../helpers/validations'
import { lastSegment } from '../../utils/lastSegment'

type Props = {
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}

export const Form = ({ onSubmit }: Props) => {
	const [isInvalid, setIsInvalid] = useState<boolean>(false)
	const navigate = useNavigate()

	const handleClick = () => {
		const email = document.querySelector(
			'input[type=email]'
		) as HTMLInputElement
		setIsInvalid(!isValidEmail(email.value))


		console.log(lastSegment())
		if (isValidEmail(email.value)) {
			lastSegment() === 'subscribe'
				? navigate('success')
				: navigate('subscribe/success')
			console.log(lastSegment())
		}
		email.value = ''
		setTimeout(() => {
			setIsInvalid(false)
		}, 1500)
	}

	// useEffect(() => {
	// 	console.log(lastSegment)
	// }, [])

	return (
		<form className={cls.form} onSubmit={onSubmit}>
			<InputEmailWithLabel invalid={isInvalid} />
			<Button type='submit' onClick={handleClick}>
				Subscribe to monthly newsletter
			</Button>
		</form>
	)
}
