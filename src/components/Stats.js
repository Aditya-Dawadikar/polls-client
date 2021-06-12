import React,{useState,useEffect} from 'react'
import SortUp from '../assets/sort-up.png'
import SortDown from '../assets/sort-down.png'

const Stats = (props) => {

    const [mean,setMean] = useState()

    const getMean = ()=>{
        let sum=0
        for(let i=0;i<props.poll.options.length;i++){
            sum+=props.poll.options[i].count
        }
        return (sum/props.poll.options.length)
    }

    useEffect(() => {
        setMean(getMean())
    }, [props.poll])

    const SortIcon=(props)=>{
        if(props.diff>0){
            return <img className="sort-icon" src={SortUp} alt="#"/>
        }else{
            return <img className="sort-icon" src={SortDown} alt="#"/>
        }
    }

    return (
        <div className="Details">
                <div className="poll-title brand-name">{props.poll.name}</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Candidate</th>
                            <th scope="col">Votes</th>
                            <th scope="col">Lead</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.poll.options.map((option,index)=>{
                                let diff = Math.round(option.count - mean)
                                let str=""
                                if(diff<0){
                                    str=diff
                                }else{
                                    str+="+"+diff
                                }
                                return (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{option.name}</td>
                                        <td>{option.count}</td>
                                        <td>{str}</td>
                                        <td><SortIcon diff={diff}/></td>
                                    </tr>
                                )
                            })    
                        }
                    </tbody>
                </table>
               
        </div>
    )
}

export default Stats
