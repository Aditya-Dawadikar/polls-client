import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/infin-8.svg'

const Navbar = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-bg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand brand-cont" to="/user/home">
                        <img className="logo" src={Logo} alt="#" />
                        <div className="brand-name">Infin-8</div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/user/mypolls">My Polls</NavLink>
                        <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/user/newpoll">Create Poll</NavLink>
                        <NavLink className="nav-link text-black fw-bold active" aria-current="page" to="/">Log out</NavLink>
                        <div className="user-name">@Aditya</div>
                    </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
