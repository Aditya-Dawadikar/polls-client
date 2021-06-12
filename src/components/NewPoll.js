import React from 'react'
import { useState,useRef,useEffect } from 'react'

const NewPoll = () => {

    const [optionList,optionListSetter] = useState([]);
    const [pollName,pollNameSetter] = useState("")
    const [currInput,currInputSetter] = useState("")

    const optionBox = useRef();

    const setOption=(option)=>{
        currInputSetter(option)
    }

    const addOption = (e)=>{
        e.preventDefault()
        if(currInput!==""){
            optionListSetter([...optionList,currInput])
            optionBox.current.value=""
        }
    }

    const clearOption = (e,index)=>{
        e.preventDefault()
        optionListSetter(optionList.filter((elem,id)=>{
            if(id!==index){return elem}
        }))
    }

    const pubilshPoll=(e)=>{
        e.preventDefault()
        let optionsArray=[]
        for(let i=0;i<optionList.length;i++){
            let optionObject = {
                name: optionList[i],
                count:0
            }
            optionsArray.push(optionObject)
        }
        let newPoll = {
            name: pollName,
            options: optionsArray
        }

        let flag=0
        if(newPoll.name===""){
            alert("poll must have a name")
        }else{flag++}
        if(newPoll.options.length<2){
            alert("poll must have atleast 2 candidates")
        }else{flag++}

        if(flag==2){
            console.log(newPoll)
            alert("new poll created")
        }

    }

    return (
        <form className="margin-20">
            <div className="mb-3">
                <label className="form-label">Poll Name</label>
                <input onChange={(e)=>{pollNameSetter(e.target.value)}} type="text" className="form-control" id="poll-name" placeholder="My Poll"/>
            </div>
            <div className="mb-3 row g-3">
                <div className="col-auto">
                    <label className="visually-hidden">Poll Option</label>
                    <input type="text" readOnly className="form-control-plaintext" id="poll-option-name" value="Add Option"/>
                </div>
                <div className="col-auto">
                    <label className="visually-hidden">Option A</label>
                    <input ref={optionBox} type="text" className="form-control" id="option-input" placeholder="Option A" onChange={(e)=>{setOption(e.target.value)}}/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mb-3" onClick={(e)=>{addOption(e)}}>Add</button>
                </div>
            </div>
            <div>
            <ul className="list-group">
                {
                    optionList.map((option,index)=>{
                        return <li key={index} className="list-group-item">{option}
                                    <button className="clear" onClick={(e)=>{clearOption(e,index)}}>X</button>
                                </li>
                    })
                }
            </ul>
            <br/>
            </div>
            <button onClick={(e)=>{pubilshPoll(e)}} className="btn btn-primary mb-3">Create Poll</button>
        </form>
    )
}

export default NewPoll
