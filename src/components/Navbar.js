import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/infin-8.svg'

const Navbar = () => {

    const [username,setUsername] = useState("")

    useEffect(()=>{
        let userName = localStorage.getItem('username')
        setUsername(userName)
    })

    const clearLocalStorage = () =>{
        localStorage.clear()
    }
    return (
            // <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-bg">
            //     <div className="container-fluid">
            //         <NavLink className="navbar-brand brand-cont" to="/user/home">
            //             <img className="logo" src={Logo} alt="#" />
            //             <div className="brand-name">Infin-8</div>
            //         </NavLink>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            //         <div className="navbar-nav">
            //             <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/user/mypolls">My Polls</NavLink>
            //             <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/user/newpoll">Create Poll</NavLink>
            //             <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/" onClick={()=>{clearLocalStorage()}}>Log out</NavLink>
            //             <div className="user-name">@{username}</div>
            //         </div>
            //         </div>
            //     </div>
            // </nav>
            <div class="fixed-top navbar-expand-lg navbar-light nav-bg nav">
                <input type="checkbox" id="nav-check"/>
                <NavLink className="navbar-brand brand-cont" to="/user/home">
                    <img className="logo" src={Logo} alt="#" />
                    <div className="brand-name">Infin-8</div>
                </NavLink>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/user/mypolls">My Polls</NavLink>
                    <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/user/newpoll">Create Poll</NavLink>
                    <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/" onClick={()=>{clearLocalStorage()}}>Log out</NavLink>
                    <div className="user-name">@{username}</div>
                </div>
            </div>
    )
}

export default Navbar
