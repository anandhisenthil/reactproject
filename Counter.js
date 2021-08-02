
//use state example
import { useState } from "react";

import React from 'react';
import '../components/Counter.css';
const Counter = () =>{

   const [count,setCount] =useState(0);
   const [name1,setName1] =useState('Anandhi');
   const [flag,setFlag] =useState(true);
   const [names,setNames] =useState([]);
   

   const nameHandler=()=>{
        return setFlag(!flag);
        //return setName1('Senthil');
   }
   const increment=()=>{
       return setCount(count + 1);
   }
   const decrement=()=>{
    return setCount(count - 1);
  }
 
  const submitHandler=(e)=>{
      console.log("submitted");
        e.preventDefault();
        setNames([...names,{id:names.length,name1}])
       
        setName1("");
  }

    return(
        <div>
           <div>
               <h3>useState of all types of values</h3>
               <span>Your name is :{flag ? name1 : ""}</span> 
               <button onClick={nameHandler}>Click me</button>
            </div>      
            <hr/>
            <div>
                <p>Count Value is : {count}</p>
               <button onClick={increment}>Increment</button>
               <button onClick={decrement}>Decrement</button>
            </div>           
            <hr/>     
   
            <form onSubmit={submitHandler}>
               
                <input type="text" value={name1} placeholder="add names" onChange={(e)=>setName1(e.target.value)}/>
                <button>Submit</button>
            </form>
            <hr/>
            <ul>
               
                    {names.map((item)=>(
                        <li key={item.id}>{item.name1}</li>
                    ))}
          
            </ul>
        </div>
 
    );
}
export default Counter;