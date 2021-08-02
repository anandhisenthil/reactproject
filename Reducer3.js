import { useReducer } from "react";
const Reducer3=()=>{
    const initial ={name:"",
                    email:"",
                    password:""};
    const reducer=(state,action)=>{
            switch(action.type)
            {
                case 'input_text_alter':
                    return{
                        ...state,
                        [action.field]:action.payload
                    }
                default:
                    return state;    
            }
    }   
    const handleTextChange=(e)=>{
        dispatch({type:'input_text_alter',
        field:e.target.name,
        payload:e.target.value
        })
    }             
    const[state,dispatch] = useReducer(reducer,initial);
    return(
        <div>
            <hr>
            </hr>
            <p>useReducer Practice</p>
            <form>
               <div><input type="text" name="username" value={state.username} onChange={(e)=>handleTextChange(e)}/>{state.username}
               </div><div><input type="email" name="email" value={state.email} onChange={(e)=>handleTextChange(e)}/>{state.email}
               </div><div><input type="password" name="password" value={state.password} onChange={(e)=>handleTextChange(e)}/>{state.password}
               </div></form>
        </div>
    );
}
export default Reducer3;