import { useState } from "react";
import CollapsableContainer from "./CollapsableContainer";
import Timetable from "./Timetable";

export default function TimeTableContainer({ data, typ, typeRes }) {
  console.log(data);
  // console.log("****************");
  // console.log("timetable cont");
  // console.log(typeRes);
  return (
    <div>
      {data.map((subData, idx) => {
        return (
          <CollapsableContainer
            subData={subData}
            idx={idx}
            key={idx}
            typeRes={typeRes}
          />
        );
      })}
    </div>
  );
}
