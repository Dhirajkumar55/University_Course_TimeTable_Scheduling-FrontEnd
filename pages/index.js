import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AddTeacherModel from "../components/AddTeacherModel";
import AddCourseModel from "../components/AddCourseModel";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import CoursesList from "../components/CourseList";

import TeachersList from "../components/TeachersList";
import EditableTable from "../components/EditableTable";
import CourseTable from "../components/CourseTable";
import SectionsList from "../components/SectionsList";
import AddNewSection from "../components/AddNewSection";
const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [numRooms, setnumRooms] = useState(); // change it to num rooms
  const courseList = [
    {
      courseName: "Zoonoodle",
      courseCredits: 1,
    },
    {
      courseName: "Edgeblab",
      courseCredits: 2,
    },
    {
      courseName: "Yabox",
      courseCredits: 3,
    },
    {
      courseName: "Devbug",
      courseCredits: 4,
    },
    {
      courseName: "Dazzlesphere",
      courseCredits: 5,
    },
  ];
  const teachers = [
    {
      teacherName: "Ruperta",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 1,
    },
    {
      teacherName: "Darcey",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 2,
    },
    {
      teacherName: "Alexandra",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 3,
    },
    {
      teacherName: "Trina",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 4,
    },
    {
      teacherName: "Ardelia",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 5,
    },
    {
      teacherName: "Clementine",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 6,
    },
    {
      teacherName: "Merilee",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 7,
    },
    {
      teacherName: "Abbie",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 8,
    },
    {
      teacherName: "Shane",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 9,
    },
    {
      teacherName: "Onida",
      teacherBusy: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
      idx: 10,
    },
  ];
  const [coursesList, setCoursesList] = useState(courseList);
  const [teacher_list, setTeacher_list] = useState(teachers);

  console.log("teachers");
  console.log(teacher_list);
  const removeCourse = (courseName) => {
    // console.log(`removing ${courseName}`);
    const arr = coursesList.filter(function (item) {
      return item.courseName !== courseName;
    });
    setCoursesList(arr);
  };

  const addCourse = (course) => {
    setCoursesList([...coursesList, course]);
  };

  const removeTeacher = (teacherId) => {
    // console.log(`removing ${courseName}`);
    const arr = teacher_list.filter(function (item) {
      return item.idx !== teacherId;
    });
    setTeacher_list(arr);
  };
  const addTeacher = (teacher) => {
    setTeacher_list([
      ...teacher_list,
      { ...teacher, idx: Math.floor(Math.random() * 100000 + 1) },
    ]);
  };

  const handleGenerateTimeTable = async (e) => {
    e.preventDefault();
    let cd = [];
    courseList.map((course, idx) => {
      cd[idx] = {
        Teacher: teacher_list[idx].teacherName,
        Section1: sec1[idx],
        Section2: sec2[idx],
      };
    });
    const data = {
      teacherList: teacher_list,
      courseList: courseList,
      sectionList: secs,
      courseDetailsList: cd,
      rooms: numRooms,
    };
    console.log(data);
    const res = await fetch("http://localhost:8000/res", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(res);
    router.push({
      pathname: "/result",
    });
  };

  const [lect, setLect] = useState([]);
  const [sec1, setSec1] = useState([]);
  const [sec2, setSec2] = useState([]);

  const handleChange = (event) => {
    setnumRooms(event.target.value);
  };

  const [secs, setSecs] = useState([
    { name: "UG-1 A", idx: 1 },
    { name: "UG-1 B", idx: 2 },
    { name: "UG-2 A", idx: 3 },
    { name: "UG-2 B", idx: 4 },
    { name: "UG-3 A", idx: 5 },
    { name: "UG-3 B", idx: 6 },
    { name: "UG-4 A", idx: 7 },
    { name: "UG-4 B", idx: 8 },
  ]);

  const removeSection = (sectionId) => {
    const arr = secs.filter(function (item) {
      return item.idx !== sectionId;
    });
    setSecs(arr);
  };
  const addSection = (sec) => {
    setSecs([
      ...secs,
      { name: sec, idx: Math.floor(Math.random() * 100000 + 1) },
    ]);
  };

  const roomsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // change it to roomsArr
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <div>
        <TeachersList
          removeTeacher={removeTeacher}
          teachersList={teacher_list}
        />
        <AddTeacherModel addTeacher={addTeacher} />
      </div>
      <div>
        <CoursesList removeCourse={removeCourse} coursesList={coursesList} />

        <AddCourseModel addCourse={addCourse} />
      </div>

      <br></br>
      <div>
        <SectionsList removeSection={removeSection} sectionList={secs} />

        <AddNewSection addSection={addSection} />
      </div>

      <FormControl sx={{ width: "25%", margin: "2%", marginLeft: "25%" }}>
        <InputLabel id="outlined-basic">Rooms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={numRooms === undefined ? "" : numRooms}
          label="teacher"
          onChange={handleChange}
        >
          {roomsArr.map((sec) => {
            return <MenuItem value={sec}>{sec}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <CourseTable
        courses={coursesList}
        teachers={teacher_list}
        numRooms={numRooms}
        secArr={secs}
        data={{ lect, setLect, sec1, setSec1, sec2, setSec2 }}
      />
      <Button
        variant="contained"
        onClick={(e) => {
          console.log("going to result page");
          handleGenerateTimeTable(e);
        }}
        style={{
          marginLeft: "40%",
          marginTop: "5%",
          marginBottom: "10%",
        }}
      >
        Generate Time Table
      </Button>
    </div>
  );
};

export default Home;
