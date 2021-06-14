import axios from 'axios'
import React,{useState,useEffect} from 'react'

const PollsList = (props) => {

    const [polls,setPolls] = useState([])

    useEffect(() => {
        setPolls(props.polls)
    }, [props])

    useEffect(()=>{
        if(polls.length==0){
            props.setPoll(-1)
        }
    },[polls])

    const deletePoll=(e,index)=>{
        e.preventDefault()

        // console.log(polls[index]._id);

        axios.post('http://localhost:3030/api/poll/deletepoll',{
            userid:localStorage.getItem('userid'),
            poll:polls[index]._id
        })
        .then(response=>{
            if(response.status===200){
                alert("poll deleted successfully")
            }
        })
        .catch(err=>{
            console.log(err)
        })

        setPolls(polls.filter((elem,id)=>{
            if(index!==id){return elem}
        }))
    }

    const showResult=(e,index)=>{
        props.setPoll(index)
    }

    const ShowPolls=()=>{
        if(polls.length>0){
            return <div className="margin-20">
                <ul className="list-group">
                    {
                        polls.map((poll,index)=>{
                            return <li key={index} className="list-group-item">{poll.name}
                                        <button className="show-action" onClick={(e)=>{showResult(e,index)}}>Show Result</button>
                                        <button className="clear" onClick={(e)=>{deletePoll(e,index)}}>X</button>
                                    </li>
                        })
                    }
                </ul> 
            </div>
            
        }else{
            return <div className="margin-20 bg-danger text-white padding-10">Sorry! There are no polls to show yet</div>
        }
        
    }
    
    return <ShowPolls/>
}

export default PollsList
