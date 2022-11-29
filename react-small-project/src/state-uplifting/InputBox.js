import React from "react"
import { useState } from "react"
const InputBox=({PickColorName})=>{
    const [color,setColor]=useState();
    const ColorChange=(e)=>{
        setColor(e.target.value)
    }
    PickColorName(color);
    return(
        <div>
            <input onChange={ColorChange}></input>
        </div>
    )
}
export default InputBox;