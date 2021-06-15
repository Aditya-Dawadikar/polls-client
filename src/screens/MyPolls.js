import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import PollsList from '../components/PollsList'
import AnalysePoll from '../components/AnalysePoll'
import axios from 'axios'
import secrets from '../secrets'

const MyPolls = () => {

    const [polls,setPolls] = useState([])
    
    const [currPoll,setCurrPoll] = useState()

    const handleSetPoll=(index)=>{
        setCurrPoll(polls[index])
    }

    let baseURL=secrets.baseAPIURL
    
    useEffect(()=>{
        console.log(localStorage.getItem('userid'))
        if(localStorage.getItem('userid')===null){
            localStorage.setItem('redirect','/user/mypolls')
            window.location.replace('/')
        }
    })

    useEffect(()=>{
        let url = baseURL+"/api/poll/mypolls/"
        axios.get(url+localStorage.getItem('userid'))
        .then(response=>{
            console.log(response.data)
            setPolls(response.data.polls)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <Navbar/>
            <div className="space"></div>
            <div className="margin-20 brand-name">My Polls</div>
            <div className="row">
                <div className="col">
                    <div className="side-bar"> 
                        <PollsList polls={polls} setPoll={(index)=>{handleSetPoll(index)}}/>
                    </div>
                </div>
                <div className="col">
                    <div className="canvas">
                        <AnalysePoll poll={currPoll}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyPolls
