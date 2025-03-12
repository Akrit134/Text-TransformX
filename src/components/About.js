import React, { useState } from "react";

export default function About() {


    const [myStyle, setMyStyle] =useState({
        color : 'black',
        backgroundColor : 'white'
    })
 
    const [btntext , setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }

        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'

            })
            setBtnText("Enable Dark Mode");
        }
    }


  return (
    
    <div className="container " style ={myStyle}>
        <h1 className="my-2">About</h1>
        
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Text TransformX
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text TransformX</strong>  is a versatile web tool designed to enhance text manipulation tasks. It allows users to quickly count the number of words and characters in any given text. Additionally, it offers features for converting text to uppercase or lowercase, making formatting easier. The tool also simplifies text cleanup by removing any extra spaces, providing a neat and well-formatted output. This makes Text TransformX a handy solution for both everyday users and professionals needing quick text transformations.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How the tool works
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>How to Use Text TransformX:</strong>Simply paste or type your text into the input box provided. Once the text is entered, you can select from various functions depending on your needs. Choose to either count the words or characters, convert the text to uppercase or lowercase, or remove any unnecessary spaces. Each function is activated by clicking the corresponding button, and the results are displayed instantly, offering a fast and efficient way to manipulate your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              About the Creator
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong><i>Pratiksha Gupta</i></strong> 
            </div>
          </div>
        </div>
        </div>
     
      
      <div className="container my-3" > 
        <button  onClick={toggleStyle} type = "button" className="btn btn-primary " >{btntext}</button>
      </div>
    </div>
    
  );
}
