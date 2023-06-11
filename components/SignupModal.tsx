"use client";

import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

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
  const [open, setOpen] = useState(false);
  const [successfullySignedUp, setSuccessfullySignedUp] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async () => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    });
    const data = await res.json();
    setSuccessfullySignedUp(true);
    setInputs({
      name: "",
      email: "",
      phoneNumber: "",
    });
  };

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
                {successfullySignedUp ? (
                  <Alert severity="success">
                    You have successfully signed up check your email!
                  </Alert>
                ) : null}
                <span className="title font-semibold text-3xl">Sign up</span>
                <p className="mt-4 md:mt-2 text-gray-400 max-w-sm">
                  Updates for every event | Any important steelers news
                </p>
                <div className="form-container overflow-hidden rounded-md bg-[#fff] m-1 w-full">
                  <input
                    type="text"
                    name="name"
                    className="input bg-none border-none h-[40px] text-md px-2 outline-none"
                    placeholder="Full Name"
                    value={inputs.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="input bg-none border-none h-[40px] text-md px-2 outline-none"
                    placeholder="Email"
                    value={inputs.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    className="input bg-none border-none h-[40px] text-md px-2 outline-none"
                    placeholder="Phone Number"
                    value={inputs.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  onClick={onSubmitForm}
                  type="submit"
                  className="bg-[#F7AB0A] text-[#fff] border-none rounded-full py-2 text-md font-light cursor-pointer "
                >
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
