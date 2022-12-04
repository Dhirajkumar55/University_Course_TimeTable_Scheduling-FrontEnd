import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MuiButton from "@mui/material/Button";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import styled from "@emotion/styled";
// import EditableTable from "./EditableTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function AddNewSection({ addSection }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [name, setName] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dropDopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  const Button = styled(MuiButton)((props) => ({
    marginLeft: "85%",
  }));
  return (
    <div>
      <Button onClick={handleOpen}>Add Section</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                id="outlined-basic"
                label="Name of the Section"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />

              <br />
              <MuiButton
                variant="contained"
                onClick={() => {
                  addSection(name);
                  console.log("section added!", name);
                  handleClose();
                }}
                sx={{
                  marginLeft: "35%",
                  marginTop: "5%",
                }}
              >
                Add Section
              </MuiButton>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
