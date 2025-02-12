import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
const Insert = () => {
  let nav = useNavigate();

    const[input,setInput]=useState({})
    const hinput=(e)=>{
        const{name,value}=e.target
        setInput((values)=>{
            return{
                ...values,[name]:value
            }
        })
   }
    const submithandle=(e)=>{
      e.preventDefault();
       const api="http://localhost:8000/teacher/datasave"
       axios.post(api,input).then((res)=>{
        alert(res.data)
        nav('/display')
       })
    }
  return (
  <>
   <h1 style={{textAlign:"center",marginTop:"15px",marginBottom:"15px"}} >Application form</h1>
  <div id='form' >
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Teacher No.</Form.Label>
        <Form.Control type="text"   name='Teacherno' onChange={hinput} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Teacher Name</Form.Label>
        <Form.Control type="text"   name='Teachername' onChange={hinput} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text"   name='department' onChange={hinput} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>salary</Form.Label>
        <Form.Control type="text"   name='salary' onChange={hinput} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

     
      <Button variant="primary" type="submit" onClick={submithandle}>
        Submit
      </Button>
    </Form>
    </div>
  </>
  )
}

export default Insert
