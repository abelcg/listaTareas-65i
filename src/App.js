import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import FormTask from './components/FormTask';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
       <Container>
          <Heading classroom='66i' enable={enabled} />
          <Subheading></Subheading>
          <div className="text-center">
            <button className='btn btn-primary text-center' onClick={()=> setEnabled(!enabled)}>
              {enabled ? 'Deshabilitar' : 'Habilitar'}
            </button>
          </div>
          <FormTask></FormTask>
       </Container>
    </>
  );
}

export default App;
