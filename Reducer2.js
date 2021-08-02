import {useState} from 'react';
const Reducer2 = ()=>{
    const [counter,setCounter] =useState(0);
    const [showdata,setShowdata] =useState(false);
    const incrementHandler=()=>{
        setCounter(counter + 1);
    }
    const decrementHandler=()=>{
        setCounter(counter - 1);
    }
    const showData=()=>{
        setShowdata(!showdata);
    }
    return(
        <div>
            <hr></hr>
            <p>State practice</p>
            <div>{counter}</div>
            <div><button onClick={incrementHandler}>Increment</button></div>
            <div><button onClick={decrementHandler}>Decrement</button></div>
            <a href="##" onClick={showData}>Click Link</a>
            {showdata && <p>Here is my COntact Number:99 99 99 99 99</p>}
        </div>
    );

}
export default Reducer2;