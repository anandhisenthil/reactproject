import React from 'react';
import './App.css';
//import StudentList from './components/StudentList';
//import Counter from './components/Counter';

import {useState, useMemo} from 'react';
// import {useEffect} from 'react';


function Memos() {
    const [counter,setCounter] =useState(1);
    const result = useMemo(()=>{
      return factorial(counter);
    },[counter])
    const [name,setName] = useState("");
    const incrementHandler =()=>{
      return setCounter(counter + 1);
    }
    const decrementHandler=()=>{
      return setCounter(counter - 1);
    }
  return(
    <div>
      <div>
      <h2>Factorial of{counter} is : {result} </h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <hr/>
      <div>
        <h2>Enter Name :</h2>
        <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
        <hr/>
        <DisplayName name={name}></DisplayName>
    
      </div>
    </div>
  );
}
const DisplayName=React.memo (({name})=>{
  console.log("Rendered");
  return <p>My name is: {name}</p>
   
  
});
function factorial(n)
{
  
  let i = 0;
  while(i < 200000000)
  {
    i++;
  }
  if(n < 0 )
  {
    return -1;
  }
  if(n === 0)
  {
    return 1;
  }
  return n * factorial(n - 1);
}
export default Memos;
