import * as React from 'react';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios"
import Loading from '../components/Loading';
import RootContainer from '../components/RootContainer';
export default function Home() {

  const [data, setData]= useState(null);
  

  useEffect(()=>{
    async function getData(){
      const res = await axios.get("http://localhost:8000/solver/solution");
      setData(res.data);
    }
    getData();
  },[])

  return (
    <div>
      <Navbar/>
      {!data ? <Loading/> : <RootContainer data={data}/>}
    </div>
  )
}
