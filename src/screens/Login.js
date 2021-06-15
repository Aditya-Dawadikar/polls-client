import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/infin-8.svg'
import secrets from '../secrets'

const Login = () => {

    const [loginObject,setLoginObject]=useState({username:"",password:""})
    const [signupObject,setSignupObject]=useState({username:"",password:"",confirmpassword:""})
    const [redirect,setRedirect] = useState('/user/home')

    let baseURL=secrets.baseAPIURL

    useEffect(()=>{
        if(localStorage.getItem('redirect')!=null){
            setRedirect(localStorage.getItem('redirect'))
        }
    })

    const signup=(e)=>{
        e.preventDefault()
        setLoginObject({username:"",password:"",confirmpassword:""})

        let url = baseURL+"/api/poll/signup"

        if(signupObject.username!=="" && signupObject.password!=="" && signupObject.confirmpassword!==""){
            if(signupObject.password===signupObject.confirmpassword){
                axios.post(url, signupObject)
                .then(function (response) {
                    if (response.status === 200){
                        localStorage.setItem('userid',response.data.user.userid)
                        localStorage.setItem('username',response.data.user.username)
                        window.location.replace(redirect)
                        setLoginObject({username:"",password:"",confirmpassword:""})
                    }
                })
                .catch(error=>{
                    console.log(error);
                })
            }else{
                alert("Password and Confirmation Password does not match")
            }
                        
        }else{
            alert("Please enter details to signup")
        }

    }

    const login=(e)=>{
        e.preventDefault()
        setLoginObject({username:"",password:""})

        let url = baseURL+"/api/poll/login"

        if(loginObject.username!=="" && loginObject.password!==""){
            axios.post(url, loginObject)
            .then(function (response) {
                if (response.status === 200){
                    localStorage.setItem('userid',response.data.user.userid)
                    localStorage.setItem('username',response.data.user.username)
                    window.location.replace(redirect)
                    
                }
            })
            .catch(error=>{
                console.log(error);
                alert("user not found")
            })
        }else{
            alert("Please enter details to signup")
        }
        
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
            <div class="fixed-top navbar-expand-lg navbar-light nav-bg nav">
                <input type="checkbox" id="nav-check"/>
                <NavLink className="navbar-brand brand-cont" to="/user/home">
                    <img className="logo" src={Logo} alt="#" />
                    <div className="brand-name">Infin-8</div>
                </NavLink>
            </div>
            <div className="login-bg-left"></div>
            <div className="d-flex justify-content-center">
                <div className="row login-fg" style={{margin:"10px",position:"absolute",top:"calc(100vh - 75%)"}}>
                        <div className="col login-form">
                            <form className="margin-20">
                                <div className="brand-name">Signup</div>
                                <br/><br/>
                                <div className="mb-3">
                                    <label className="form-label">Enter Username</label>
                                    <input type="text" className="form-control" placeholder="eg: john doe" onChange={(e)=>{handleUserNameSignupChange(e)}} value={signupObject.username}/>
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
                                    <input type="text" className="form-control" placeholder="eg: john doe" onChange={(e)=>{handleUserNameLoginChange(e)}} value={loginObject.username}/>
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
