import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {message} from "antd";
import { useNavigate } from "react-router-dom";

const Update=()=>{
  const [mydata, setMydata]= useState([]);
  const navigate= useNavigate();

  const loadData=async()=>{
    let api="http://localhost:8000/teacher/display";
    const res= await axios.get(api);
    setMydata(res.data);
  }
  useEffect(()=>{
    loadData();
  }, []);

 const myDel=async(id)=>{
  let api=`http://localhost:8000/teacher/empdelete/?empid=${id}`;
  const res= await axios.get(api)
  message.success(res.data)
  loadData();
 }


const myEdit=(id)=>{
  navigate(`/empedit/${id}`)
}




 const ans = mydata.map((key)=>{
    return(
      <>
       <tr>
        <td> {key.Teacherno} </td>
        <td> {key.Teachername} </td>
        <td> {key.department} </td>
        <td> {key.salary} </td>
        <td>
        <RiDeleteBin6Fill id="myIcon" onClick={()=>{myDel(key._id)}} />
        </td>
        <td>
        <FaEdit id="myIcon" onClick={()=>{myEdit(key._id)}} />   
        </td>
       </tr>
      </>
    )
  })
    return(
        <>
          <h1> Update Teacher Details</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Teacher no</th>
          <th> Teacher Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th> Delete </th>
          <th> Update </th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Update;