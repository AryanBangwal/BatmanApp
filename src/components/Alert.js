import React from 'react'

const Alert = (props)=> {
  const capitalize = (word) =>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
    // return word.toUpperCase();
  }
  return (

      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">   {/*------> props.alert && -> isme agr props.alert null hai toh wahi ruk jaega aur Null nahi hai toh && ke ridht wala dekha jaega fir */}
             <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
             {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}  {/* This was a button to cross alert*/} 
      </div>
    
  )
}

export default Alert;