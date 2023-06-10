"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
};

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="text-sm text-[#F7AB0A]">
        Sign up to join!
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex items-center justify-center w-[300px] h-[500px] bg-[#f1f7fe] overflow-hidden rounded-md text-[#010101]">
              <form className="relative flex flex-col py-5 px-5 gap-y-5">
                <span className="title font-semibold text-3xl">Sign up</span>
                <p className="mt-4 md:mt-2 text-gray-400 max-w-sm">
                  Updates for every event | Any important steelers news
                </p>
                <div className="form-container overflow-hidden rounded-md bg-[#fff] m-1 w-full">
                  <input
                    type="text"
                    className="input bg-none border-none h-[40px] text-md px-2 outline-none"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="input bg-none border-none h-[40px] text-md px-2 outline-none"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="input bg-none border-none h-[40px] text-md px-2 outline-none"
                    placeholder="Phone Number"
                  />
                </div>
                <button className="bg-[#F7AB0A] text-[#fff] border-none rounded-full py-2 text-md font-light cursor-pointer ">
                  Sign up
                </button>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
