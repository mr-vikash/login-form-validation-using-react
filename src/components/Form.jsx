import React from 'react'
import { useReducer,useState } from 'react'
const Form = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const reducer=(state,action)=>{
        if(action.type==="submit")
        {
            if(email==="vikash@gmail.com" && password === "00000000")
            {
                window.alert("login successfully")
                return state;
            }
            else{
                window.alert("You have wrong email and wrong password")
                setEmail("")
                setPassword("")
                return state;
            }
        }
        return state;
    }


    const [state,dispatcher] = useReducer(reducer,"")
    

   
  return (
    <div className='form'>
      <form>
        <table>
            <tbody>
                <td><label>Name:</label></td>
                <td><input type='email' 
               
                name="email" onChange={(e)=>setEmail(e.target.value)} /></td>
            </tbody>
            <tbody>
                <td><label>Password:</label></td>
                <td><input type='passord' onChange={(e)=>setPassword(e.target.value)} name="password"/></td>
            </tbody>
            <tbody>
                <td><button type='submit'  onClick={()=>dispatcher({type:"submit"})} >Submit</button></td>
            </tbody>
        </table>
      </form>
      
    </div>
  )
}

export default Form
