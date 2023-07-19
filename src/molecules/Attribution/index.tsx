import { Link } from '../../atoms/typography/Link'
import { Footer } from '../../atoms/Footer'
import { P } from '../../atoms/typography/P'

export const Attribution = () => (
	<Footer>
		<P>
			Challenge by{' '}
			{
				<Link
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
				>
					Frontend Mentor
				</Link>
			}
		</P>
		
		<P>
			Coded by{' '}
			{
				<Link href='https://github.com/Odisseu93' target='_blank'>
					Ulisses Silvério
				</Link>
			}
		</P>
	</Footer>
)
