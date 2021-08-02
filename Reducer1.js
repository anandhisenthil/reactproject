//import react from 'react';
import { useReducer} from 'react';
const Reducer1=()=>{
    const initialState={username:"",
                        email:"",
                        password:""};
                        
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'handle_input_text':
                return{
                    ...state,
                    [action.field]:action.payload
                }
            default:
                return state;    
        }
    }                    
    const handleTextChange=(e)=>{
        dispatch({
            type:"handle_input_text",
            field:e.target.name,
            payload:e.target.value
        })
    }
    const [state,dispatch]=useReducer(reducer,initialState);
    
    return(
        <div>
            <hr></hr>
            <p>This is from Reducer1 Component</p>
            <form>
                Username : <input type="text" name="username" value={state.username} onChange={(e)=>handleTextChange(e)}/>{state.username}<br/>
                Email : <input type="text" name="email" value={state.email} onChange={(e)=>handleTextChange(e)}/>{state.email}<br/>
                Password : <input type="text" name="password" value={state.password} onChange={(e)=>handleTextChange(e)}/>{state.password}<br/>
             
            </form>
        </div>
    );
}
export default Reducer1;