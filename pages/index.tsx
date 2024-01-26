import type { NextApiRequest, NextPage } from "next";
import { useCallback , useRef} from "react";
import { Button, TextField } from "@mui/material";
 import {sendTextInput} from "../hooks/input";
import DisplayText from "../Components/DisplayText";
import { NextApiResponse } from "next";

//import SendIcon from '@mui/icons-material/Send';




//------------------------------------------------------------------------------------------------------------------

interface GenText {
  Text:string
}


var GeneratedText = 'Press the Generate Button to get the Collated Summary!';
const myInit = {
  method: "GET",
  
};

async function GeneratorHandler (req:NextApiRequest,res:NextApiResponse<GenText>) {
  
 var data = await fetch(`/api/gptSummary` , myInit)
  
   console.log(data)  //.body.message.content

   return GeneratedText = data.body

 }

// console.log(process.env.AIRTABLE_READ_TOKEN)


const FrameComponent: NextPage = () => {
  const onFrameTextareaClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameTextarea']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const valueRef = useRef('');
  let inputValue: string = "GAlle";
  const sendValue = (e : React.KeyboardEvent<HTMLDivElement>) => {
    
      if(e.key === 'Enter'){
        inputValue= valueRef.current.valueOf(); // to display <p>...</p> below text field
        sendTextInput(inputValue);
      }
  }

  return (
    <div className="relative bg-khaki w-full overflow-hidden text-left text-[64px] text-black font-inter lg:w-full lg:h-full p-10">
      <h5 className="m-0  text-[inherit] font-normal font-inherit flex items-center w-[1302px] h-[397px] lg:w-full">
        Input Thoughts about Collective Conscious!
      </h5>
      <TextField
        className="[border:none] bg-[transparent] "
        fullWidth
        color="primary"
        variant="outlined"
        type="text"
        label="Type your thoughts here"
        placeholder="Placeholder"
        size="medium"
        margin="none"
        inputRef={valueRef}
        onKeyUp={sendValue}
      />
      <section><Button variant="contained" //endIcon={<SendIcon />}
      fullWidth
        className="justify-center box-border p-10"
        onClick={GeneratorHandler} //GET function here
        >Generate Output</Button></section>
      
      <DisplayText text={GeneratedText}/>
      
    </div>
  );
};

export default FrameComponent;





// DEPRECATED TO BE MOVED TO DEPRECATED FOLDER



// <TextField
//         className=" cursor-pointer m-5"
//         color="primary"
//         variant="outlined"
//         multiline
//         rows={12}
//         label="AI output summary"
//         placeholder="This is a place holder text"
//         margin="none"
//         fullWidth
//         data-scroll-to="frameTextarea"
//         onClick={onFrameTextareaClick}
//       >{GeneratedText}</TextField>