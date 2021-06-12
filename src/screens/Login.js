import React from 'react'

const Login = () => {

    const signup=(e)=>{
        e.preventDefault()
    }

    const login=(e)=>{
        e.preventDefault()
        window.location.replace('/user/home')
    }

    return (
        <div>
            <div className="login-bg-left"></div>
            <div className="login-fg">
                <div className="login-form">
                    <form className="margin-20">
                        <div className="brand-name">Signup</div>
                        <br/><br/>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="********"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="********"/>
                        </div>
                        <button className="btn-primary" onClick={(e)=>{signup(e)}}>Signup</button>
                    </form>
                </div>
                <div className="login-form">
                    <form className="margin-20">
                        <div className="brand-name">Login</div>
                        <br/><br/>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="********"/>
                        </div>
                        <button className="btn-primary" onClick={(e)=>{login(e)}}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
