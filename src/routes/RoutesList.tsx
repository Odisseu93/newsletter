import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom'

import { Subscribe } from '../pages/Subscribe'
import { Success } from '../pages/Success'

export const RoutesList = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Subscribe />} />
			<Route path='subscribe' element={<Outlet />}>
				<Route index element={<Subscribe />} />
				<Route path='success' element={<Success />} />
			</Route>
		</Routes>
	</Router>
)
