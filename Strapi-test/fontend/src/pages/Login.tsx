import '../styles/login.scss'
import { useState } from 'react'
import {userLogin} from '../axios/axiosProvider'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const [identifier,setIdentifier] = useState('');
    const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

    const handleLogin = () => {
		if (identifier && password) {
			const user = {identifier,password};
			userLogin(user, dispatch, navigate);
		} else {
			window.alert('Vui lòng nhập email và password!')
		}
    }

    return (
        <div className='container'>
				<div className="login-box">
                    <span id='title'>Welcome to my website!</span>
					<div className='input-field'>
						<span>Email</span>
						<input type="text" name='email' value={identifier} placeholder='Enter Email...' 
                        onChange={(event)=>setIdentifier(event.target.value)}/>
					</div>
					<div className='input-field'>
						<span>Password</span>
						<input type="text" value={password} placeholder='Enter Password...' 
                        onChange={(event)=>setPassword(event.target.value)}/>
					</div>
					<div className='action'>
						<div><span id='register'>You don't have an account?</span><Link to='/register'><span>Register</span></Link></div>
						<div><button onClick={()=> handleLogin()}>Login</button></div>
					</div>
				</div>
		</div>
    )
}

export default Login