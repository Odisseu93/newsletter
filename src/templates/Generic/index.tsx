import { ReactNode } from 'react'
import { className as cls } from './styles'

export const Generic = ({ content }: { content: ReactNode }) => (
	<main className={cls.main}>
		<div className={cls.container}>{content}</div>
	</main>
)
