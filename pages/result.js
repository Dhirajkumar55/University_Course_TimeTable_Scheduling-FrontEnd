import * as React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import RootContainer from "../components/RootContainer";
import { withRouter } from "next/router";
function Result(props) {
  const [data, setData] = useState(null);
  console.log(props);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8000/solution2");
      setData(res.data);
      console.log(res.data);
    }
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      {!data ? <Loading /> : <RootContainer data={data} />}
    </div>
  );
}

export default withRouter(Result);
