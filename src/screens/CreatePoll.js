import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NewPoll from '../components/NewPoll'
import secrets from '../secrets'

const CreatePoll = () => {

    const [created,createdSetter] = useState(false)
    const [sharableURL,createShareableURL] = useState('')
    const [miniURL,createMiniURL] = useState('')

    let baseURL=secrets.baseAPIURL

    useEffect(()=>{
        if(localStorage.getItem('userid')===null){
            localStorage.setItem('redirect','/user/newpoll')
            window.location.replace('/')
        }
    })

    const setCreated = (e)=>{
        createdSetter(true);
        let ownerid = localStorage.getItem('userid')
        let pollid = e 
        let url = baseURL+"/vote/"+ownerid+"/"+pollid
        let urlMini = '/vote/'+ownerid+"/"+pollid
        createShareableURL(url)
        createMiniURL(urlMini)
    }

    const TopOption = ()=>{
        if(created===true){
            return <div className="bg-success padding-10">
                        <div className="fw-bolder">Share link with friends:</div> <Link to={miniURL} className="text-white text-decoration-underline" style={{cursor:"pointer"}}>{sharableURL}</Link>
                    </div>
        }else{
            return <div></div>
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="space"></div>
            <div className="space"></div>
            <TopOption/>
            <div className="space"></div>
            <div className="form">
                <NewPoll setCreated={(e)=>{setCreated(e)}}/>
            </div>
        </div>
    )
}

export default CreatePoll
