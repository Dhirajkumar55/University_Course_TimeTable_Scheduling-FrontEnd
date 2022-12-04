import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  MuiButton,
  Select,
} from "@mui/material";

const CourseTable = ({ courses, teachers, numSections, secArr, data }) => {
  const { lect, setLect, sec1, setSec1, sec2, setSec2 } = data;
  const handleSecChange = (event, secNum, idx) => {
    if (secNum == 1) {
      let arr = [...sec1];
      arr[idx] = event.target.value;
      setSec1(arr);
    } else {
      let arr = [...sec2];
      arr[idx] = event.target.value;
      setSec2(arr);
    }
  };

  console.log("numSections ");
  console.log(secArr);
  const handleChange = (event, idx) => {
    let arr = [...lect];
    arr[idx] = event.target.value;
    setLect(arr);
  };
  console.log(courses);
  console.log(lect);
  console.log(sec1);
  console.log(sec2);
  return (
    <table
      className="table"
      style={{ width: "90%", margin: "2%", marginLeft: "5%" }}
      border="solid"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Coruse</th>
          <th>Teacher</th>
          <th>Section 1</th>
          <th>Section 2</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, idx) => (
          <tr>
            <th scope="row">{idx + 1}</th>
            <td>{course.courseName}</td>
            <td>
              <FormControl sx={{ width: "25%" }}>
                <InputLabel id="outlined-basic">Teacher</InputLabel>
                <Select
                  labelId="teacher-select-label"
                  id="teacher-select"
                  value={lect[idx] === undefined ? "" : lect[idx]}
                  label="teacher"
                  onChange={(e) => handleChange(e, idx)}
                  sx={{ width: "150px" }}
                >
                  {teachers.map((teacher, idx) => {
                    return (
                      <MenuItem value={teacher.teacherName}>
                        {teacher.teacherName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </td>
            <td>
              <FormControl sx={{ width: "25%" }}>
                <InputLabel id="outlined-basic">Section</InputLabel>
                <Select
                  labelId="section1-select-label"
                  id="section1-select"
                  value={sec1[idx] === undefined ? "" : sec1[idx]}
                  label="section1"
                  onChange={(e) => handleSecChange(e, 1, idx)}
                  sx={{ width: "150px" }}
                >
                  {secArr.map((section) => {
                    return (
                      <MenuItem value={section.name}>{section.name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </td>
            <td>
              <FormControl sx={{ width: "25%" }}>
                <InputLabel id="outlined-basic">Section</InputLabel>
                <Select
                  labelId="section2-select-label"
                  id="section2-select"
                  value={sec2[idx] === undefined ? "" : sec2[idx]}
                  label="section2"
                  onChange={(e) => handleSecChange(e, 2, idx)}
                  sx={{ width: "150px" }}
                >
                  {secArr.map((section) => {
                    return (
                      <MenuItem value={section.name}>{section.name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    //   </Column>
    // </DataTable>
  );
};

export default CourseTable;
