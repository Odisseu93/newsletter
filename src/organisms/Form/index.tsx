import { className as cls } from './styles'

import { Button } from '../../atoms/Button'
import { InputEmailWithLabel } from '../../molecules/InputEmailWithLabel'

import { isValidEmail } from '../../helpers/validations'
import { useState } from 'react'

type Props = {
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}

export const Form = ({ onSubmit }: Props) => {
	const [isInvalid, setIsInvalid] = useState<boolean>(false)

	const handleClick = () => {
		const email = document.querySelector(
			'input[type=email]'
		) as HTMLInputElement

		setIsInvalid(!isValidEmail(email.value))
		email.value = ''

		setTimeout(() => {
			setIsInvalid(false)
		}, 1500)
	}

	return (
		<form className={cls.form} onSubmit={onSubmit}>
			<InputEmailWithLabel invalid={isInvalid} />
			<Button type='submit' onClick={handleClick}>
				Subscribe to monthly newsletter
			</Button>
		</form>
	)
}
