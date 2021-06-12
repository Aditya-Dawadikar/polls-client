import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import PollsList from '../components/PollsList'
import AnalysePoll from '../components/AnalysePoll'

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
                },{
                    name: "Geekgod",
                    count: 31
                },{
                    name: "Geekdev",
                    count: 27
                },{
                    name: "Geekbhagwan",
                    count: 18
                },{
                    name: "Still single",
                    count: 22
                },
            ]
        },{
            name:"Poll 2",
            options:[
                {
                    name: "Aditya",
                    count: 301
                },{
                    name: "Chandler",
                    count: 167
                },{
                    name: "Geekgod",
                    count: 189
                }
            ]
        },{
            name:"Poll 3",
            options:[
                {
                    name: "Geekbhagwan",
                    count: 50
                },{
                    name: "Still single",
                    count: 55
                },
            ]
        },{
            name:"Poll 4",
            options:[
                {
                    name: "Geekgod",
                    count: 80
                },{
                    name: "Geekdev",
                    count: 97
                },{
                    name: "Geekbhagwan",
                    count: 54
                },{
                    name: "Still single",
                    count: 67
                },
            ]
        },
    ])
    
    const [currPoll,setCurrPoll] = useState(polls[0])

    const handleSetPoll=(index)=>{
        setCurrPoll(polls[index])
    }

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
