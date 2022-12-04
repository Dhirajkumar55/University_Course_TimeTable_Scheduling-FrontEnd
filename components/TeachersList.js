import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import { Button } from "@mui/material";

const TeachersList = ({ removeTeacher, teachersList }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleRemoveTeacher = (name) => {
    removeTeacher(name);
  };

  const teachers = teachersList;
  return (
    <div
      style={{
        margin: "40px",
        border: "solid #EFEFEF",
        borderRadius: "10px",
        padding: "30px",
      }}
    >
      <h2 style={{ marginLeft: "1%" }}>Teachers List</h2>
      <Stack
        direction="row"
        spacing={2}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {teachers.map((teacher, idx) => {
          return (
            <div style={{ margin: "1%" }} key={teacher.teacherName + idx}>
              <Item>
                {`${teacher.teacherName} `}
                <Button
                  onClick={(e) => {
                    console.log("clicked!!");
                    handleRemoveTeacher(teacher.idx);
                  }}
                >
                  X
                </Button>
              </Item>
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default TeachersList;
