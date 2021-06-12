import React from 'react'
import Navbar from '../components/Navbar'
import Vote from '../components/Vote'

const VotingScreen = () => {
    let poll = {
        name:"p1",
        options:[
            {
                name:"c1agkefuaugfaekgi",
                count: 1
            },{
                name:"c2afleaicebl ibaioea",
                count: 1
            },{
                name:"c3alebaw,vcueawu vcuvau",
                count: 1
            },{
                name:"c4alvuw lavucvwau",
                count: 1
            }
        ]
    }
    return (
        <div>
            <Navbar/>
            <div className="space"></div> 
            <div className="bg-danger text-white padding-10">
                Note: A vote can only be casted once. After voting a candidate you will be redirected to home screen
            </div>
            <div className="space"></div> 
            <Vote poll={poll}/>           
        </div>
    )
}

export default VotingScreen
