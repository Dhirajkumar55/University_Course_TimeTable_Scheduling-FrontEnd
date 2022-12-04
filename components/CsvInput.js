import { Button, Input } from "@mui/material";
import React, { useState } from "react";
// import { Form, Input, Button } from "@material-ui/material";

export default function CSVForm() {
  const [csvFile, setCsvFile] = useState(null);

  const onChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // do something with the CSV file here
    console.log(csvFile);
  };

  return (
    <div>
      <Input type="file" accept=".csv" onChange={onChange} />
      <Button type="primary" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
}
