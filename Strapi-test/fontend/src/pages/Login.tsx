import '../styles/login.scss'
import { useState } from 'react'
import {userLogin} from '../axios/axiosProvider'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [identifier,setIdentifier] = useState('');
    const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

    const handleLogin = () => {
		const user = {identifier,password};
		userLogin(user, dispatch, navigate);
    }

    return (
        <div className='container'>
				<div className="login-box">
                    <span id='title'>Welcome to my website!</span>
					<div className='input-field'>
						<span>UserName</span>
						<input type="text" value={identifier} placeholder='Enter UserName...' 
                        onChange={(event)=>setIdentifier(event.target.value)}/>
					</div>
					<div className='input-field'>
						<span>Password</span>
						<input type="text" value={password} placeholder='Enter Password...' 
                        onChange={(event)=>setPassword(event.target.value)}/>
					</div>
					<div className='action'>
						<a href=""><span id='register'>You don't have an account?</span><span>Register</span></a>
						<button onClick={()=> handleLogin()}>Login</button>
					</div>
				</div>
		</div>
    )
}

export default Login