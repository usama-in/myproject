import React from "react";
let styleApp={
color: "white",
backgroundColor :"blue",
margin:'0px',
padding : "0px",
width: "100vw",
};
let name="ali";
let age =18;
let isAdult = true;
const Abc = () =>{
    if (isAdult)
    return(
        <>
        <h1 style={styleApp} className="btn btm-primary md-1" >Congrats {name} your age is now {age}</h1>
       
        </>
    
      )
}
export default Abc;