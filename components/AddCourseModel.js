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

export default function AddCourseModel({ addCourse }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [name, setName] = React.useState("");
  const [credits, setCredits] = React.useState(0);
  const data = {
    courseName: name,
    courseCredits: credits,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dropDopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = (credits) => {
    setAnchorEl(null);
    setCredits(credits);
  };
  const Button = styled(MuiButton)((props) => ({
    marginLeft: "85%",
  }));
  return (
    <div>
      <Button onClick={handleOpen}>Add Course</Button>
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
                label="Name of the course"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                required
                // style={{ marginBottom: "3%", margin: "10px" }}
              />
              <br />
              <MuiButton
                id="basic-button"
                aria-controls={dropDopen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={dropDopen ? "true" : undefined}
                onClick={handleClick}
                style={{ marginLeft: "3%", marginTop: "2%", color: "#546E7A" }}
              >
                Course credits ({credits})
              </MuiButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={dropDopen}
                onClose={handleDropdownClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownClose(2);
                  }}
                >
                  2 Credits
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownClose(3);
                  }}
                >
                  3 Credits
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownClose(4);
                  }}
                >
                  4 Credits
                </MenuItem>
              </Menu>

              <br />
              <MuiButton
                variant="contained"
                onClick={() => {
                  addCourse(data);
                  console.log("course added!", data);
                  handleClose();
                }}
                sx={{
                  marginLeft: "35%",
                  marginTop: "5%",
                }}
              >
                Add Course
              </MuiButton>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
