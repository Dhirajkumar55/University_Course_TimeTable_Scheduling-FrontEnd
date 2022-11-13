import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import EditableTable from "../components/EditableTable";

const landing = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [refresh, setrefresh] = useState([
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [name, setName] = useState("");
  const data = {
    teacherBusy: refresh,
    teacherName: name,
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="outlined-basic"
          label="Name of the teacher"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <EditableTable change={refresh} setChange={setrefresh} />

        <Button
          variant="contained"
          onClick={() => {
            console.log(data);
          }}
        >
          Add Teacher
        </Button>
      </form>
    </div>
  );
};

export default landing;
