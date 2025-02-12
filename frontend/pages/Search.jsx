import axios from 'axios';
import React, { useState } from 'react'

const Search = () => {
    const [input, setInput] = useState("")
    const [mydata , setData] = useState([])

    const handleSubmit =async () =>{
        let api = "http://localhost:8000/teacher/search";
        let res = await axios.post(api , {myid:input});
        setData(res.data);
        console.log(res.data);
        
    }

    let ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.Teacherno}</td>
                <td>{key.Teachername}</td>
                <td>{key.department}</td>
                <td>{key.salary}</td>
            </tr>
            </>
        )
    })
  return (
    <>
      Enter Teacher No. <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
      <br />
      <button  onClick={handleSubmit}>Search </button>

      <hr />

      <table border={2}>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
        </tr>
        <tbody>
            {ans}
        </tbody>
      </table>
    </>
  )
}

export default Search
