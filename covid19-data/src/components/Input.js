import React, { useState } from 'react'
import "./style.css"

function Input({setCountry}) {
    const[value,setValue]= useState("")
    
    function Change(e){
        setValue(e.target.value);
    }

    function Submit(e){
        e.preventDefault();
        setCountry(value);
        setValue("")
    }

  return (
    <form onSubmit={Submit}>
        <input className='input' value={value} onChange={Change} placeholder="Country" />
    </form>
  )
}

export default Input