import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TimeTableContainer from "./TimeTableContainer";

export default function RootContainer({ data, typeRes }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const display = () => {
    if (value === 0) {
      return (
        <TimeTableContainer
          key={value}
          type="Teacher"
          data={data["TeacherRoutine"]}
          typeRes={"teacherRoutine"}
        />
      );
    } else if (value === 1) {
      return (
        <TimeTableContainer
          key={value}
          type="Section"
          data={data["SectionRoutine"]}
          typeRes={"sectionRoutine"}
        />
      );
    } else if (value === 2) {
      return (
        <TimeTableContainer
          key={value}
          type="Room"
          data={data["RoomRoutine"]}
          typeRes={"roomRoutine"}
        />
      );
    }
  };

  return (
    <Box
      sx={{ width: "100%", bgcolor: "background.paper", paddingLeft: "10rem" }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Teacher Routine" />
        <Tab label="Section Routine" />
        <Tab label="Room Routine" />
      </Tabs>
      {display()}
    </Box>
  );
}
