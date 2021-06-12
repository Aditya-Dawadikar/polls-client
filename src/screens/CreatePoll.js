import React from 'react'
import Navbar from '../components/Navbar'
import NewPoll from '../components/NewPoll'

const CreatePoll = () => {
    return (
        <div>
            <Navbar/>
            <div className="space"></div>
            <div className="form">
                <NewPoll/>
            </div>
        </div>
    )
}

export default CreatePoll
