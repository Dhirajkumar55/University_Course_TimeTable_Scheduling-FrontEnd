import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MuiButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import EditableTable from "./EditableTable";
import styled from "@emotion/styled";

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

export default function AddTeacherModel() {
  const [refresh, setrefresh] = React.useState([
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [name, setName] = React.useState("");
  const data = {
    teacherBusy: refresh,
    teacherName: name,
  };
  const Button = styled(MuiButton)((props) => ({
    // backgroundColor: "#1976d2",
    // color: "white",
    // borderStyle: "solid",
    marginLeft: "85%",
  }));
  return (
    <div>
      <Button onClick={handleOpen}>Add Teacher</Button>
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
                style={{ marginBottom: "3%", margin: "10px" }}
              />
              <EditableTable change={refresh} setChange={setrefresh} />

              <MuiButton
                variant="contained"
                onClick={() => {
                  console.log(data);
                }}
                style={{
                  marginLeft: "80%",
                  marginTop: "2%",
                }}
              >
                Add Teacher
              </MuiButton>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
