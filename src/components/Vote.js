import React,{useState,useEffect} from 'react'
import {Redirect} from 'react-router-dom'

const Vote = (props) => {

    const [optionIndex,setOptionIndex] = useState(0)

    const selectCandidate = (index)=>{
        setOptionIndex(index)
    }

    const castVote = ()=>{
        alert("Voted successfully")
        let votedCandidate = props.poll.options[optionIndex]
        votedCandidate.count++;
        console.log(votedCandidate)
        window.location.replace('/user/home')
    }

    return (
        <div className="ballot">
            <div className="brand-name">{props.poll.name}</div>
            <br/><br/>
            <div class="row">
                {
                    props.poll.options.map((option,index)=>{

                        if(index===optionIndex){
                            return <div class="col">
                                        <div className="grid-object text-center fw-bold text-white select" onClick={()=>{castVote(index)}}>{option.name}</div>
                                    </div>
                        }else{
                            return <div class="col">
                                    <div className="grid-object text-center fw-bold" onClick={()=>{selectCandidate(index)}}>{option.name}</div>
                                </div> 
                        }
                    })
                }
            </div>
            <br/><br/>
            <button className="btn-primary" onClick={()=>{castVote()}}>Vote</button>
        </div>
    )
}

export default Vote
