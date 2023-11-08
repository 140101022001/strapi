import { useState } from 'react';
import '../styles/login.scss'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../axios/axiosProvider';

const vlderr = {
    email: '',
    password: '',
    passwordConfirm: ''
}
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errVal, setErrVal] = useState(vlderr);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handRegister = () => {
        let username = '';
        for  (let i= 0; i < 20; i++) {
            username += String(Math.floor(Math.random() * 10))
        }
        if (!email) {
            setErrVal(prev => {
                const mess = 'Vui lòng nhập email!'
                return {...prev, email: mess}
            })
        } else {
            setErrVal(prev => {
                return {...prev, email: ''}
            })
        }
        if (!password) {
            setErrVal(prev => {
                const mess = 'Vui lòng nhập password!'
                return {...prev, password: mess}
            })
        } else {
            setErrVal(prev => {
                return {...prev, password: ''}
            })
        }
        if (!passwordConfirm) {
            setErrVal(prev => {
                const mess = 'Vui lòng nhập xác nhận password!'
                return {...prev, passwordConfirm: mess}
            })
        } else {
            setErrVal(prev => {
                return {...prev, passwordConfirm: ''}
            })
        }
        if (email && password && passwordConfirm) {
            const user = { username, email, password };
            userRegister(user, dispatch, navigate)
        }
    }
    return (
        <div className='container'>
            <div className="login-box">
                <span id='title'>Welcome to my website!</span>
                <div className='input-field'>
                    <span>Email</span>
                    <input type="text" name='email' value={email} placeholder='Enter Email...'
                        onChange={(event) => setEmail(event.target.value)} />
                    {errVal.email && <span className='error-mess'>{errVal.email}</span>}
                </div>
                <div className='input-field'>
                    <span>Password</span>
                    <input type="password" value={password} placeholder='Enter Password...'
                        onChange={(event) => setPassword(event.target.value)} />
                    {errVal.password && <span className='error-mess'>{errVal.password}</span>}
                </div>
                <div className='input-field'>
                    <span>Password Confirmation</span>
                    <input type="password" value={passwordConfirm} placeholder='Enter Password...'
                        onChange={(event) => setPasswordConfirm(event.target.value)} />
                    {errVal.passwordConfirm && <span className='error-mess'>{errVal.passwordConfirm}</span>}
                </div>
                <div className='action'>
                    <div><span id='register'>You already have an account?</span><Link to='/login'><span>Login</span></Link></div>
                    <div><button onClick={() => handRegister()}>Register</button></div>
                </div>
            </div>
        </div>
    )
}

export default Register