import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Register from './pages/Register'

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/product' element={<Product/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/register' element={<Register/>}/>
			</Routes>
		</>
	)
}

export default App
