import classes from './Login.module.css'
// import './Login.css';
import logo from '../../assets/images/logo.svg'
import { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth'
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // useEffect callback and signIn
    const login = () => {
        fetch(`${process.env.REACT_APP_API_URL}users/login`, {
            method: 'post',
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            response.json().then((json) => {
                // json data
                if (json.success) {
                    signIn(json.token, json.data)
                    navigate('/')
                } else {
                    alert('Invalid Credentials')
                }
            })
        }).catch((e) => {
            console.log(e)
        })
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className={`${classes.register} my-5 p-5`}>
                        <div className={`${classes.logo} mb-4`}>
                            <img src={logo} alt='' />
                        </div>
                        <h1 className={`${classes.title} mb-4`}>Login</h1>
                        <div className='form-field mb-3'>
                            <label htmlFor='email' className='mb-2'>Email Address</label>
                            <input type='email' ref={emailRef} id="email" className='form-control' />
                        </div>
                        <div className='form-field mb-3'>
                            <label htmlFor='password' className='mb-2'>Password</label>
                            <input type='password' ref={passwordRef} id="password" className='form-control' />
                        </div>
                        <div className='row mt-5 align-items-center'>
                            <div className='col-5'>
                                <Link className='' to='/register'>Register</Link>
                            </div>
                            <div className='col-7'>
                                <button
                                    onClick={login}
                                    type='button'
                                    className='btn btn-primary w-100'
                                    disabled={loading}>
                                        {loading ? 'Please Wait' : 'Login'}
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login