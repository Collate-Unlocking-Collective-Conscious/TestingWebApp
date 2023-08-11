import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField } from "@mui/material";

const FrameComponent: NextPage = () => {
  const onFrameTextareaClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameTextarea']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-khaki w-full h-[1083px] overflow-hidden text-left text-[64px] text-black font-inter lg:w-full lg:h-full">
      <TextField
        className="absolute top-[716px] left-[0px] cursor-pointer"
        color="primary"
        variant="outlined"
        multiline
        rows={16}
        label="AI output summary"
        placeholder="Textarea placeholder"
        margin="none"
        fullWidth
        data-scroll-to="frameTextarea"
        onClick={onFrameTextareaClick}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[469px] left-[0px]"
        fullWidth
        color="primary"
        variant="outlined"
        type="text"
        label="Type your thoughts here"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <h5 className="m-0 absolute top-[0px] left-[76px] text-[inherit] font-normal font-inherit flex items-center w-[1302px] h-[397px] lg:w-full">
        Input Thoughts about Collective Conscious!
      </h5>
    </div>
  );
};

export default FrameComponent;
