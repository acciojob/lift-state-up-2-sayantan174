import React, { useState } from 'react'

const Child = ()=>{
    const [value,setValue]=useState("");
    return (
        <div className='child'>
        <h2>Child Component</h2>
        <input type="text" value={value} onChange={(e)=>{
            setValue(e.target.value);
            setInput(e.target.value);
        }}/>
        </div>
    )
}

export default Child;