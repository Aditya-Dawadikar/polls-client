import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Vote from '../components/Vote'
import AnalysePoll from '../components/AnalysePoll'
import {Link} from 'react-router-dom'

const VotingScreen = () => {

    const [voted,setVoteStatus] = useState(false)
    const [poll,setPoll] = useState({
        name:"p1",
        options:[
            {
                name:"c1",
                count: 10
            },{
                name:"c2",
                count: 55
            },{
                name:"c3",
                count: 32
            },{
                name:"c4",
                count: 25
            }
        ]
    })

    const View=()=>{
        
        const setViewState=()=>{
            setVoteStatus(true);
        }

        if(voted===true){
            return (
                <div className="row">
                    <div className="fs-3 fw-bold">You have voted successfully! check out the results here</div>
                    <br/><br/>
                    <AnalysePoll poll={poll}/> 
                </div>
            )
        }else{
            return (
                <div className="row">
                <div className="fs-1 fw-bold">Select a candidate for {poll.name}</div>
                    <div className="col">
                        <Vote setViewState={()=>{setViewState()}} poll={poll}/>
                    </div>
                </div>
            )
        }
    }

    const TopOption = ()=>{
        if(voted===true){
            return <div className="bg-success padding-10">
                        <Link to="/user/home" className="text-white link">Click here to go Home</Link>
                    </div>
        }else{
            return <div className="bg-warning text-white padding-10">
                        Note: A vote can only be casted once. After voting a candidate you will be shown the results
                    </div>
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="space"></div>
            <br/> 
            <TopOption/>
            <div className="space"></div> 
            <div className="container">
                <View/>
            </div>
            <div className="space"></div>
        </div>
    )
}

export default VotingScreen
