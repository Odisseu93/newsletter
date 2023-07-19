import { useId } from 'react'

import { className as cls } from './styles'

import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/typography/Label'
import { Span } from '../../atoms/typography/Span'

type Props = {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	invalid : boolean
}


export const InputEmailWithLabel = ({ onChange, invalid }: Props) => {
	const id = useId()

	return (
		<div className={cls.container}>
			<header className={cls.header}>
				<Label text='Email address' htmlFor={id} />
				<Span
					className={`${cls.span} ${!invalid ? 'invisible' : 'visible'}`}
					role='alert'
					aria-hidden={!invalid ? true : false}
					aria-invalid={!invalid ? false : true}
					text='Valid email required'
				/>
			</header>
			<Input
				id={id}
				type={'email'}
				additionalClassNames={`${cls.input} ${
					!invalid ? '' : cls['invalid-input']
				}`}
				onChange={onChange && onChange}
				placeholder={!invalid ? 'email@company.com' : 'ash#loremcompany.com'}
			/>
		</div>
	)
}
