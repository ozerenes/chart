import './App.css';
import SingleLineChart from './components/SingleLineChart'
import MultipleLineChart from "./components/MultipleLineChart";
import {useState} from 'react'

function App() {
    const [active, setActive] = useState(false)

    const changeChart = () =>{
        if(active) {
            setActive(false)
        }else{
            setActive(true)
        }
    }
    return (
        <div className="App">
            <div style={{padding: 20}}>
                <button style={{marginBottom: 20, cursor: "pointer"}} onClick={()=>changeChart()}>Change Chart</button>
                {
                    active ? <MultipleLineChart/> : <SingleLineChart/>
                }
            </div>
        </div>
    );
}

export default App;
