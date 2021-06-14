import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import PollsList from '../components/PollsList'
import AnalysePoll from '../components/AnalysePoll'
import axios from 'axios'

const MyPolls = () => {

    const [polls,setPolls] = useState([
        {
            name:"Poll 1",
            options:[
                {
                    name: "Aditya",
                    count: 10
                },{
                    name: "Chandler",
                    count: 11
                }
            ]
        }
    ])
    
    const [currPoll,setCurrPoll] = useState(polls[0])

    const handleSetPoll=(index)=>{
        setCurrPoll(polls[index])
    }

    useEffect(()=>{
        axios.get('http://localhost:3030/api/poll/mypolls/'+localStorage.getItem('userid'))
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
