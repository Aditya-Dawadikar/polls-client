import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

    useEffect(()=>{
        if(localStorage.getItem('userid')===null){
            localStorage.setItem('redirect','/user/home')
            window.location.replace('/')
        }
    })

    return (
        <div>
            <Navbar/>
            <div className="space"></div> 
        </div>
    )
}

export default Home
