
import React,{useEffect} from 'react';

function User(props){
    useEffect(()=>{
        console.log('useEffect() of   USer component ran')
        
          alert('Count:'+props.count1)
    })
        return (
            <div>
            <div>User Component</div>
            <div>Count1: {props.count1}</div>
            <div>Count2: {props.count2}</div>
            <div>Count3: {props.count3}</div>
            </div>
        )
    
}

export default User;