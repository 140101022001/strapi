import '../styles/navbar.scss'
import {Link, NavLink} from 'react-router-dom'
import logo from '../img/logo.png'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {userLogout} from '../axios/axiosProvider'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const user = useSelector((state:RootState) => state.auth.login.currentUser.currentUser?.email);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		userLogout(dispatch, navigate);
	}

	return (
		<>
		<header>
			<Link to="/"><img id="logo" src={logo} alt="logo" /></Link>
			<nav>
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/product">Product</NavLink></li>
					<li><NavLink to="/">About us</NavLink></li>
					{user ? 
					<li><span>{user}</span></li>: 
					<li><NavLink to="/login">Login</NavLink></li>
					} 
					{user ? <li><span onClick={() => handleLogout()}>Logout</span></li>:
					''}
				</ul>
			</nav>
		</header>
		</>
	)
}

export default Navbar