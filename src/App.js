import React,{ useEffect ,useState} from 'react';
import User from './User';

function App(){
  const[count1,setCount1] = useState(0);
  const[count2,setCount2] = useState(0);
  const[count3,setCount3] = useState(0);
  useEffect(()=>{
    console.log('useEffect1 ran!')
  },[count1,count2,count3])
  
  return(
    <div>
      <User count1={count1} count2={count2} count3={count3} />
      <button onClick={()=>setCount1(count1+1)}>change</button>
      <button onClick={()=>setCount2(count2+1)}>change</button>
      <button onClick={()=>setCount3(count3+1)}>change</button>
      </div>
  );
  }


export default App;