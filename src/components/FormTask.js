import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FormTask = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
 
  //console.log(task);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    //tasks.push() no usar este modo si no usar spread operator haciendo uso de setTasks
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-3 text-center'>
          <Form.Control
            className='mb-3'
            type='text'
            placeholder='Ingresar una tarea'
            onChange={(e)=> setTask(e.target.value) }
          />
          <Button variant='primary' type='submit'>
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormTask;
