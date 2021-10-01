import React,{ useState } from 'react';

function Login(){
    const[user,setUser] = useState(false);
    const[pass,setPass] = useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    function loginHandle(e){
        if(user.length<3 || pass.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault(e);
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<4)
         {
            setUserErr(true);
         }
         else
         {
             setUserErr(false);
         }
         setUser(item);
    }
    function passHandler(e){
        let item=e.target.value;
        if(item.length<4)
         {
            setPassErr(true);
         }
         else
         {
             setPassErr(false);
         }
         setPass(item)

    }
    return(
        <div>
            <h1>LOGIN COMPONENT</h1>   
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter USER ID" onChange={userHandler} />{userErr?<span>INVALID</span>:""}
            <br />
            <input type="password" placeholder="Enter USER PASSWORD" onChange={passHandler} />{passErr?<span>Password too short</span>:""}
            <br />
            <button type="submit">LOGIN</button>   
            </form>  
        </div>
    );
}

export default Login;