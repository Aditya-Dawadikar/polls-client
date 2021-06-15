import axios from 'axios'
import React,{useState,useEffect} from 'react'
import secrets from '../secrets'

const PollsList = (props) => {

    const [polls,setPolls] = useState([])

    let baseURL=secrets.baseAPIURL
    let baseClientURL = secrets.baseClientURL

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

        let url = baseURL+"/api/poll/deletepoll"
        axios.post(url,{
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

    function textToClipboard (text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    const copyLink = (e,index)=>{
        let url = baseClientURL+"/vote/"
        let ownerId = localStorage.getItem('userid')
        let pollId=polls[index]._id

        url+=ownerId+"/"+pollId
        
        textToClipboard(url)
    }

    const ShowPolls=()=>{
        if(polls.length>0){
            return <div className="margin-20">
                <ul className="list-group" style={{width:"325px"}}>
                    {
                        polls.map((poll,index)=>{
                            return <li key={index} className="list-group-item">{poll.name}
                                        <button className="clear" onClick={(e)=>{deletePoll(e,index)}}>X</button>
                                        <div className="row row-cols-2">
                                            <div className="col"><button className="action bg-success text-white" onClick={(e)=>{copyLink(e,index)}}>Copy Link to clickboard</button></div>
                                            <div className="col"><button className="action bg-info  text-white" onClick={(e)=>{showResult(e,index)}}>Show Result</button></div>
                                        </div>
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
