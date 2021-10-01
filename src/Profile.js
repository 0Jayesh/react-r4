import React,{ useState } from 'react';

function Profile(){
    const [login,setLogin] = useState(true);
    return(
        <div>
         <h3>Profile component</h3>
         {
             login?
             <div onClick={()=>setLogin(!login)}>
                Hello USER!!
             </div>:
             <div onClick={()=>setLogin(!login)}>
                Hello GUEST!!
             </div>
         }
        </div>
    );
}

export default Profile