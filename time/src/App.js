import React,{useState,useEffect} from 'react'
import './App.css';

function App() {
const [dateState,setDateState] = useState(new Date());
const [time,setTime] = useState(0)


useEffect(()=>{
setInterval (()=> setDateState(new Date()),1000)
}, [15])

const [run,setrun] = useState(false);

useEffect (()=>{
let stopwatch;
if (run){
  stopwatch = setInterval(()=>{
    setTime((stop) => stop + 15)
  },15)
}else if (!run){
  clearInterval(stopwatch)
}
 return () => clearInterval(stopwatch)
},[run])

  return (
    <div className="App">
      <h1>Pomodoro, Where Focus Meets Time!</h1>
      <div className='clock'>
<div>
<h3 className='time'>DATE</h3>

<p>
{''}
{dateState.toLocaleDateString('en-GB',{

  day:'numeric',
  month: 'short',
  year: 'numeric',
}

)}
</p>

<h3 className='time'>TIME</h3>
</div>


<span>{("0" + Math.floor((time/6000))% 60).slice(-2)} </span>
<span>{("0" + Math.floor((time/1000))% 60).slice(-2)}</span>
<span>{("0" + Math.floor((time/100))% 60).slice(-2)}</span>
</div>
<br/>

<div>
<button className='btn'onClick={() => setrun(true)}> START </button>
<button className='btn' onClick= {() => setrun(false)}> STOP</button>
<button className='btn' onClick={() => setrun(0)}>RESET </button>
</div>

    </div>
  );
}

export default App;
