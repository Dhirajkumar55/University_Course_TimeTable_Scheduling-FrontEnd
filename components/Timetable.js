import { useEffect, useState } from "react";

const weekNames = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const timeIntervals = ["8:30 - 9:30", "9:30 - 10:30","10:45 - 11:45","11:45 - 12:45","14:00 - 15:00","15:00 - 16:00"];
const colours = ["accent-orange-gradient","accent-green-gradient","accent-cyan-gradient","accent-pink-gradient","accent-purple-gradient"]

export default function Timetable({data}) {

    return (
        <div className="timetable">
            <div className="week-names">
                {
                    weekNames.map((week,idx)=>{
                        return <div key={idx}>{week}</div>
                    })
                }
                <div className="weekend">saturday</div>
                <div className="weekend">sunday</div>
            </div>
            <div className="time-interval">
                {timeIntervals.map((interval,idx)=>{
                    return <div key={idx} >{interval}</div>
                })}
            </div>
            <div className="content">   
                {
                    data.map((slot,idx1)=>{
                        const list = slot.map((day,idx2)=>{
                            const boxColor = colours[Math.floor(Math.random() * colours.length)];
                            return (day ? <div key={`${idx1}${idx2}`} className={boxColor} >{`course id : ${day}`}</div>:<div/>)
                        })

                        list.push(<div className="weekend"></div>);
                        list.push(<div className="weekend"></div>);

                        return list;
                    })
                }
            </div>
        </div>
    )
}