import React,{useState} from "react";  //use state is a hook - Bina class banae class ke features use kar skte hai


export default function TextForm(props) {
    const HandleUpperClick = ()=>{
        // console.log("Upper click button was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPER CASE","success");
    }
    const HandleLowerClick = ()=>{
        // console.log("Upper click button was clicked " + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value); // Purana text update ho jaega agr kuch naya type karenge onChange={handleOnChange} ki wjah se . Isme -> 'event.target.value me' 'event' woh naya text hai jo aara hai kuch type karne me
    }
    const HandleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const HandleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const HandleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);      //jaha pe space hogi [ ] woh split ho jaegi aur ek array ban jaega 
        setText(newText.join(" "));           //uske baad join se merge ho jaega
        props.showAlert("Extra spaces removed","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
    // const HandleBoldClick =()=>{
    //     setIsBold(!isBold);  
    // }
    const [text, setText] = useState('Enter text here'); // 'text' is a variable inside which value is - Enter text here | Whenever we are going to update text we will use function 'setText'                                             
    // text ="Enter text new ";        //Wrong way to change the State - it will give error   
    // setText ="Enter text new ";     //Correct way to change the State
    
    // const [isBold, setIsBold] = useState(false);

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
         <h1>{props.heading}</h1>       {/*<h1>{props.heading} - {text}</h1>  ----->  usage of 'text' variable*/}
            <div className="mb-3" >
                {/* used 'text' variable below */}
                
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}} 
                id="myBox" rows="8" ></textarea>   {/*Using value = state(which is 'text') , used on change event handler (required or error comes)*/}  {/*1st {} in style is for js and wnd {} inseide style is for object*/}  {/*This was used when the text was converted to bold -> style={{ display: isBold ? 'none' : 'block' }}*/} 

            </div>

                {/* <div
                        className="form-control"
                        style={{
                            fontWeight: isBold ? 'bold' : 'normal',
                            display: isBold ? 'block' : 'none',
                            minHeight: '150px',
                            padding: '10px',
                            border: '1px solid #ced4da',
                            borderRadius: '.25rem',
                            backgroundColor: '#fff',
                        }}
                >
                        {text}
                </div> */}

            <button className="btn btn-primary mx-1" onClick={HandleUpperClick}>Convert to UpperCase</button>           {/*mx-2 -> class in bootstrap which gives margin*/}
            <button className="btn btn-primary mx-1" onClick={HandleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={HandleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={HandleCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>Remove Spaces</button>
            <button className="btn btn-danger mx-1" onClick={speak}>Speak</button>
            {/* <button className="btn btn-primary mx-1" onClick={HandleBoldClick}> {isBold ? 'Remove Bold' : 'Make Bold'}</button> */}
         </div>
         <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p><em>{text.split(" ").length} words and {text.length} characters</em></p>      {/*text.split(" ").length --> gives array and count words*/}
            <p><em>{0.008 * text.split("").length} Minutes to read </em></p> {/* just basic maths from google (time to read one word = 0.008)*/} 
            <h2>Preview</h2> 
            <p>{text.length>0?text:"Enter Some Text Above In The Text Box Above To Preview It Here"}</p>
         </div>
        </>
    );
}
 