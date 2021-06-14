import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NewPoll from '../components/NewPoll'

const CreatePoll = () => {

    const [created,createdSetter] = useState(false)
    const [sharableURL,createShareableURL] = useState('')


    const setCreated = (e)=>{
        createdSetter(true);
        let ownerid = localStorage.getItem('userid')
        let pollid = e 
        let url = "http://localhost:3000/vote/"+ownerid+"/"+pollid
        createShareableURL(url)
    }

    const TopOption = ()=>{
        if(created===true){
            return <div className="bg-success padding-10">
                        <div className="fw-bolder">Share link with friends:</div> <div className="text-white text-decoration-underline" style={{cursor:"pointer"}}>{sharableURL}</div>
                    </div>
        }else{
            return <div></div>
        }
    }

    return (
        <div>
            <Navbar/>
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
