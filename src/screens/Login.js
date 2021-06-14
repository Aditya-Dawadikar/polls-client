import React,{useState} from 'react'
import axios from 'axios'

const Login = () => {

    const [loginObject,setLoginObject]=useState({username:"",password:""})
    const [signupObject,setSignupObject]=useState({username:"",password:"",confirmpassword:""})

    const signup=(e)=>{
        e.preventDefault()
        setLoginObject({username:"",password:"",confirmpassword:""})
        axios.post("http://localhost:3030/api/poll/signup", signupObject)
        .then(function (response) {
            if (response.status === 200){
                alert("registered user successfully, you may now log in")
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const login=(e)=>{
        e.preventDefault()
        setLoginObject({username:"",password:""})
        axios.post("http://localhost:3030/api/poll/login", loginObject)
        .then(function (response) {
            if (response.status === 200){
                localStorage.setItem('userid',response.data.user.userid)
                localStorage.setItem('username',response.data.user.username)
                window.location.replace('/user/home')
            }
        })
        .catch(error=>{
            console.log(error);
        })
        
    }


    const handleUserNameLoginChange=(e)=>{
        e.preventDefault()
        setLoginObject({...loginObject,username:e.target.value})
    }

    const handlePasswordLoginChange=(e)=>{
        e.preventDefault()
        setLoginObject({...loginObject,password:e.target.value})
    }

    const handleUserNameSignupChange=(e)=>{
        e.preventDefault()
        setSignupObject({...signupObject,username:e.target.value})
    }

    const handlePasswordSignupChange=(e)=>{
        e.preventDefault()
        setSignupObject({...signupObject,password:e.target.value})
    }

    const handleConfirmPasswordSignupChange=(e)=>{
        e.preventDefault()
        setSignupObject({...signupObject,confirmpassword:e.target.value})
    }

    return (
        <div>
            <div className="login-bg-left"></div>
            <div className="d-flex justify-content-center">
                <div className="row login-fg">
                        <div className="col login-form">
                            <form className="margin-20">
                                <div className="brand-name">Signup</div>
                                <br/><br/>
                                <div className="mb-3">
                                    <label className="form-label">Enter Username</label>
                                    <input type="text" className="form-control" placeholder="john doe" onChange={(e)=>{handleUserNameSignupChange(e)}} value={signupObject.username}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Password</label>
                                    <input type="password" className="form-control" placeholder="********" onChange={(e)=>{handlePasswordSignupChange(e)}} value={signupObject.password}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="********" onChange={(e)=>{handleConfirmPasswordSignupChange(e)}} value={signupObject.confirmpassword}/>
                                </div>
                                <button className="btn-primary" onClick={(e)=>{signup(e)}}>Signup</button>
                            </form>
                        </div>
                        <div className="col login-form">
                            <form className="margin-20">
                                <div className="brand-name">Login</div>
                                <br/><br/>
                                <div className="mb-3">
                                    <label className="form-label">Enter Username</label>
                                    <input type="text" className="form-control" placeholder="john doe" onChange={(e)=>{handleUserNameLoginChange(e)}} value={loginObject.username}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Password</label>
                                    <input type="password" className="form-control" placeholder="********" onChange={(e)=>{handlePasswordLoginChange(e)}} value={loginObject.password}/>
                                </div>
                                <button className="btn-primary" onClick={(e)=>{login(e)}}>Login</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login
