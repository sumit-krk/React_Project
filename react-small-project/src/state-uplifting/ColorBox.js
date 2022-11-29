import React from 'react';
import { useState } from 'react';
import InputBox from "./InputBox";

const ColorBox=()=>{
    const [color,setColorName]=useState()
    const PickColorName=(colorName)=>{
        console.log(colorName);
        setColorName(colorName);
    }
    return(
        <>
            <div style={{height:'100px', width:'100px',border:'1px solid black',margin:'auto',backgroundColor:`${color}`}}></div>
            <InputBox PickColorName={PickColorName} />
        </>
    )
}
export default ColorBox;