import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AddTeacherModel from "../components/AddTeacherModel";
import AddCourseModel from "../components/AddCourseModel";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import CoursesList from "../components/CourseList";
const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const handleGenerateTimeTable = async (e) => {
    e.preventDefault();
    router.push({
      pathname: "/result",
      // query: {  },
    });
  };
  const list = [
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
  const [coursesList, setCoursesList] = useState(list);

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
  console.log(coursesList);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <div style={{ marginTop: "2%" }}>
        <CoursesList removeCourse={removeCourse} coursesList={coursesList} />
        <AddTeacherModel />
      </div>
      <div>
        <CoursesList removeCourse={removeCourse} coursesList={coursesList} />

        <AddCourseModel addCourse={addCourse} />
      </div>

      <Button
        variant="contained"
        onClick={(e) => {
          console.log("going to result page");
          handleGenerateTimeTable(e);
        }}
        style={{
          marginLeft: "30%",
          marginTop: "2%",
        }}
      >
        Generate Time Table
      </Button>
    </div>
  );
};

export default Home;
