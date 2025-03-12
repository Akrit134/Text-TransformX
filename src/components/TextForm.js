/*
React hook-- Hooks helps in using features of class without making class
initially we set the state by using this.state in class but in function we set the state using react hooks
*/ 

//concept of array destructuring is usesd
import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase", "success!");

    }
    const handleLowClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase","success!");

    }
    const handleClearClick =()=>{
        console.log(" Uppercase was clicked" + text);
        let newText= '';
        setText(newText);
        
        props.showAlert(" Text Cleared","success!");
    }

    const handleOnChange =(event)=>{
        
        setText(event.target.value);
        

        
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert(" Copied to Clipboard","success!");
      }

    const handleExtraSpaces = ()=>{
       let newText = text.split(/[ ]+/);
        
        setText(newText.join(" "));
        props.showAlert(" Extra spaces removed","success!");
    }

    const [text,setText] = useState(' ');

    // text="new text"; // wrong way to set the state
    // setText('new text');

  return (
    <>
    <header>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black' }} id="myBox" rows="13"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="box">
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
        <h2><u>Your Text Summary </u></h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2><u>Preview</u></h2>
        <p>{text.length >0 ? text :"Enter something in the textbox above to preview it here"}</p>

    </div>
    </div>
    </header>
    </>
  );
}
