import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import { Button } from "@mui/material";

export default function sectionsList({ removeSection, sectionList }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleRemoveSection = (name) => {
    removeSection(name);
  };

  return (
    <div
      style={{
        margin: "40px",
        border: "solid #EFEFEF",
        borderRadius: "10px",
        padding: "30px",
      }}
    >
      <h2 style={{ marginLeft: "1%" }}>Sections List</h2>
      <Stack
        direction="row"
        spacing={2}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {sectionList.map((course, idx) => {
          return (
            <div style={{ margin: "1%" }} key={idx}>
              <Item>
                {`${course.name}`}
                <Button
                  onClick={(e) => {
                    console.log("clicked!!");
                    handleRemoveSection(course.idx);
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
}
