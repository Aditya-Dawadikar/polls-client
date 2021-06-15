import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Vote from '../components/Vote'
import AnalysePoll from '../components/AnalysePoll'
import {Link} from 'react-router-dom'
import axios from 'axios'
import secrets from '../secrets'

const VotingScreen = () => {

    const [voted,setVoteStatus] = useState(false)
    const [poll,setPoll] = useState({
        name:"",
        options:[
            {
                name:"",
                count: 0
            }
        ],
        voters:[]
    })

    let baseURL=secrets.baseAPIURL

    useEffect(()=>{
        if(localStorage.getItem('userid')===null){
            let currURL = window.location.href
            let token = currURL.split('/')
            let redirect=currURL
            // let redirect = '/vote/'+token[4]+"/"+token[5]
            localStorage.setItem('redirect',redirect)
            window.location.replace('/')
        }
    })

    useEffect(()=>{
        let currURL
        let tokens
        let ownerId
        let pollId
        
        if(localStorage.getItem('userid')!==null){
            currURL = window.location.href
            tokens= currURL.split('/')
            ownerId = tokens[4]
            pollId = tokens[5]
        }

        let url=baseURL+"/api/poll/getpoll/"+ownerId+"/"+pollId
        console.log(url)
        axios.get(url)
        .then(response=>{
            console.log(response.data)
            setPoll(response.data.poll)
            let votersList=response.data.poll.voters.map(voter=>{
                return String(voter)
            })
            if(votersList.includes(localStorage.getItem('userid'))){
                setVoteStatus(true)
            }
        }).catch(err=>{
            console.log(err)
        })

    },[])

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
            <div className="space"></div>
            <br/> 
            <TopOption/>
            <div className="space"></div> 
            <div>
                <View/>
            </div>
            <div className="space"></div>
        </div>
    )
}

export default VotingScreen
