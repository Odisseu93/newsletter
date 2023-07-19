import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Subscribe } from './pages/Subscribe'

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Subscribe />} />
			<Route path='/subscribe' element={<Subscribe />} />
		</Routes>
	</Router>
)

export default App
