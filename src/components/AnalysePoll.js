import React,{useState,useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import Stats from './Stats'

const AnalysePoll = (props) => {

    const colors=['rgb(255, 84, 71)','rgb(54, 218, 255)','rgb(54, 255, 161)','rgb(71, 255, 54)','rgb(255, 218, 54)','rgb(255, 114, 54)','rgb(54, 104, 255)','rgb(118, 54, 255)','rgb(195, 54, 255)','rgb(255, 54, 114)','rgb(54, 255, 134)']

    const [poll,setPoll] = useState()

    const [data,setData] = useState()

    const [options,setOption] = useState()
    
    const getBackgroundColors=(count)=>{
        let bgcolors = []

        if(count<colors.length){
            let set = new Set()
            while(set.size!==count){
                let num=Math.floor(Math.random()*11)
                set.add(colors[num])
            }
            bgcolors = Array.from(set)
        }
        else{
            for(let i=0;i<count;i++){
                let num=Math.floor(Math.random()*11)
                bgcolors.push(colors[num])
            }
        }
        return bgcolors
    }

    const getLabels=()=>{
        return props.poll.options.map((option)=>{
            return option.name
        })
    }
    const getData=()=>{
        return props.poll.options.map((option)=>{
            return option.count
        })
    }


    const createDataSet=()=>{
        const data = {
            labels: getLabels(),
            datasets: [
              {
                label: 'votes',
                data: getData(),
                backgroundColor: getBackgroundColors(props.poll.options.length)
              },
            ],
          };
          setData(data)
    }

    const createOptions=()=>{
        const opt = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },plugins: {
                title: {
                    display: true,
                    text: props.poll.name,
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                },
                legend:{
                    display:false,
                }
            }
          };

          setOption(opt)
    }

    const ShowAnalysis=()=>{
        if(props.poll===undefined){
            return <div></div>
        }else{
            return <div className="poll-result">
                        <div className="row">
                            <div className="col"><Bar data={data} options={options} /></div>
                            <div className="col"><Stats poll={props.poll}/></div>
                        </div>
                    </div>
        }
    }

    useEffect(() => {
        if(props.poll!==undefined){
            setPoll(props.poll)
            createDataSet()
            createOptions()
        }
    }, [props])

    return ShowAnalysis()
}

export default AnalysePoll
