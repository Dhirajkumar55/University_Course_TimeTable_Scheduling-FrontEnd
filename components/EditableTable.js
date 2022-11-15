import { useState } from "react";
import NewTeacher from "./addNewTeacher";

const EditableTable = ({ change, setChange }) => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ]);
  return (
    <div>
      <NewTeacher
        refresh={refresh}
        setRefresh={setRefresh}
        data={data}
        setData={setData}
        change={change}
        setChange={setChange}
      />
    </div>
  );
};

export default EditableTable;
