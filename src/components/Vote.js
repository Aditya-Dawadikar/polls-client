import React,{useState,useEffect} from 'react'

const Vote = (props) => {

    const [optionIndex,setOptionIndex] = useState(-1)

    const castVote = (index)=>{
        setOptionIndex(index)
        let votedCandidate = props.poll.options[index]
        votedCandidate.count++;
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
