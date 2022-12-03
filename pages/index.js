import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AddTeacherModel from "../components/AddTeacherModel";
import AddCourseModel from "../components/AddCourseModel";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import CoursesList from "../components/CourseList";
import CSVForm from "../components/CsvInput";
import TeachersList from "../components/TeachersList";
const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);

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
    {
      courseName: "Mudo",
      courseCredits: 6,
    },
    {
      courseName: "Riffpath",
      courseCredits: 7,
    },
    {
      courseName: "Lajo",
      courseCredits: 8,
    },
    {
      courseName: "Zooxo",
      courseCredits: 9,
    },
    {
      courseName: "Voonyx",
      courseCredits: 10,
    },
    {
      courseName: "Dabshots",
      courseCredits: 11,
    },
    {
      courseName: "Izio",
      courseCredits: 12,
    },
    {
      courseName: "Edgewire",
      courseCredits: 13,
    },
    {
      courseName: "Dynabox",
      courseCredits: 14,
    },
    {
      courseName: "Riffwire",
      courseCredits: 15,
    },
    {
      courseName: "Voolia",
      courseCredits: 16,
    },
    {
      courseName: "Jayo",
      courseCredits: 17,
    },
    {
      courseName: "Twinder",
      courseCredits: 18,
    },
    {
      courseName: "Skippad",
      courseCredits: 19,
    },
    {
      courseName: "Feedspan",
      courseCredits: 20,
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
    },
  ];
  const [coursesList, setCoursesList] = useState(courseList);
  const [teacher_list, setTeacher_list] = useState(teachers);

  const removeCourse = (courseName) => {
    // console.log(`removing ${courseName}`);
    const arr = coursesList.filter(function (item) {
      return item.courseName !== courseName;
    });
    setCoursesList(arr);
  };

  const removeTeacher = (teacherName) => {
    // console.log(`removing ${courseName}`);
    const arr = teacher_list.filter(function (item) {
      return item.teacherName !== teacherName;
    });
    setTeacher_list(arr);
  };

  const addCourse = (course) => {
    setCoursesList([...coursesList, course]);
  };

  const addTeacher = (teacher) => {
    setTeacher_list([...teacher_list, teacher]);
  };
  console.log(coursesList);
  console.log("teacher_list ");
  console.log(teacher_list);

  const [csvFile, setCsvFile] = useState(null);

  const handleGenerateTimeTable = async (e) => {
    e.preventDefault();
    console.log(csvFile);
    // router.push({
    //   pathname: "/result",
    // });
  };
  const onChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <div style={{ marginTop: "2%" }}>
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

      <Input
        type="file"
        accept={".csv"}
        onChange={onChange}
        style={{ width: "50%", marginLeft: "25%" }}
      />
      <br></br>

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
