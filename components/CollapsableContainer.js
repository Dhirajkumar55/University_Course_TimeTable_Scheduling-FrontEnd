import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import Timetable from "./Timetable";

const CollapsableContainer = ({ subData, idx, typeRes }) => {
  const [open, setOpen] = useState(false);
  console.log(`collapsable cont ${typeRes}`);
  console.log(subData);
  let type, name;
  if (typeRes == "sectionRoutine") {
    type = "Section";
    name = "sectionName";
  } else if (typeRes == "roomRoutine") {
    type = "Room";
    name = "roomNumber";
  } else {
    type = "Teacher";
    name = "teacherName";
  }
  return (
    <div className="col-sm-offset-4">
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <button
                style={{
                  background: "none",
                  backgroundColor: "none",
                  border: "none",
                }}
              >
                <a
                  // href="#"
                  onClick={function () {
                    setOpen(!open);
                  }}
                  style={{ color: "#38369A" }}
                  onMouseOver={(e) => {}}
                >
                  {subData[name]}'s schedule
                  <span className="accicon">
                    <i className="fas fa-angle-down rotate-icon"></i>
                  </span>
                </a>
              </button>
            </h4>
          </div>
          <div
            className={open ? "panel-collapse" : "panel-collapse panel-close"}
          >
            <ul className="list-group">
              <div>
                <Timetable
                  key={`${typeRes} ${idx + 1}`}
                  data={subData}
                  typeRes={typeRes}
                />
                <br />
                <br />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsableContainer;
