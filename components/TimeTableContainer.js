import { useState } from "react";
import CollapsableContainer from "./CollapsableContainer";
import Timetable from "./Timetable";

export default function TimeTableContainer({ data, type }) {
  return (
    <div>
      {data.map((subData, idx) => {
        return (
          <CollapsableContainer
            subData={subData}
            idx={idx}
            type={type}
            key={idx}
          />
        );
      })}
    </div>
  );
}
