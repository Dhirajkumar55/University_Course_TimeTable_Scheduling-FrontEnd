import React, { useState } from "react";
import Timetable from "./Timetable";

const CollapsableContainer = ({ subData, idx, type }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="col-sm-offset-4">
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                href="#"
                onClick={function () {
                  setOpen(!open);
                }}
              >
                {type} {idx + 1}
                <span class="accicon">
                  <i class="fas fa-angle-down rotate-icon"></i>
                </span>
              </a>
            </h4>
          </div>
          <div
            className={open ? "panel-collapse" : "panel-collapse panel-close"}
          >
            <ul className="list-group">
              <div>
                {/* <h2>{`${type} ${idx + 1}`}</h2> */}
                <Timetable key={`${type} ${idx + 1}`} data={subData} />
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
