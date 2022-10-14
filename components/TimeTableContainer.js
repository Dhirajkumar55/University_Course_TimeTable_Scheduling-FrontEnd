import Timetable from "./Timetable";

export default function TimeTableContainer({data, type}){

    return <div>
       {
        data.map((subData,idx) =>{
            return (
                <div>
                    <h2 >{`${type} ${idx+1}`}</h2>
                    <Timetable key={`${type} ${idx+1}`} data={subData}/>
                    <br/>
                    <br/>
                </div>
            )
            
        })
       }
    </div>

}