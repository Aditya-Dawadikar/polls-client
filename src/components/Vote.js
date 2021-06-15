import axios from 'axios'
import React,{useState,useEffect} from 'react'
import secrets from '../secrets'

const Vote = (props) => {

    const [optionIndex,setOptionIndex] = useState(-1)

    let baseURL=secrets.baseAPIURL

    const castVote = (index)=>{
        setOptionIndex(index)
        let votedCandidate = props.poll.options[index]
        votedCandidate.count++;

        let currURL = window.location.href
        let tokens= currURL.split('/')

        let ownerId = tokens[4]
        let pollId  = tokens[5]
        let candidateId = votedCandidate._id

        let url = baseURL+"/api/poll/vote"

        axios.post(url,{
            userid:ownerId,
            poll:pollId,
            candidate:candidateId,
            voter:localStorage.getItem('userid')
        })
        .then(response=>{
            console.log("voted successfully")
        })
        .catch(err=>{
            console.log("voted successfully")
        })

        props.setViewState()

    }

    return (
        <div className="ballot">
            <div className="brand-name">{props.poll.name}</div>
            <br/><br/>
            <div class="row">
                {
                    props.poll.options.map((option,index)=>{
                        if(optionIndex===index){
                            return  <div class="col">
                                        <div className="grid-object text-center fw-bold select" onClick={()=>{castVote(index)}}>{option.name}</div>
                                    </div> 
                        }else{
                            return  <div class="col">
                                        <div className="grid-object text-center fw-bold" onClick={()=>{castVote(index)}}>{option.name}</div>
                                    </div> 
                        }
                    })
                }
            </div>
            <br/><br/>
        </div>
    )
}

export default Vote
