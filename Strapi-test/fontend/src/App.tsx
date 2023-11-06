import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './main/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/product' element={<Product/>}/>
				<Route path='/login' element={<Login/>}/>
			</Routes>
		</>
	)
}

export default App
