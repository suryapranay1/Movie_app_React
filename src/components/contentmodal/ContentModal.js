import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { img_500, unavailable } from "../../config/config"; // Import your image configurations
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%", // Adjust width as needed
  maxWidth: 300, // Set a maximum width
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function COntentModal({
  open,
  handleClose,
  title,
  poster,
  date,
  overview,
  media_type,
  id,
}) {
  const [video, setVideo] = useState();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" sx={{ fontSize: "1.5em" }}>
            {title}
          </Typography>
          <img
            className="modalPoster"
            src={poster ? `${img_500}/${poster}` : unavailable}
            alt={title}
            style={{ width: "50%", borderRadius: "8px", margin: "16px 0" }}
          />
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <strong>Date:</strong> {date}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <strong>Description:</strong> {overview}
          </Typography>
          <Button
            variant="contained"
            startIcon={<YouTubeIcon />}
            color="secondary"
            target="__blank"
            href="https://youtu.be/73_1biulkYk?si=7J7cqAK3L5bV23wC"
          >
            Watch the Trailer
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
