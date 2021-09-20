import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from '../store/index'


export default function LoginScreen() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const saveFormLogin = (evt) => {
        evt.preventDefault()
        const data = {
            email,
            password
        }
        dispatch(loginUser(data))
        history.push('/home')
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={saveFormLogin}>
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="email" className="form-control" onChange={handleEmailChange}/>
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" className="form-control" onChange={handlePasswordChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
        </div>
    </>
    )
}
