import React, { useState, useEffect } from "react";

import axios from 'axios';
import { Toast, ToastHeader, ToastBody, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";

function App() {
  // Image state

  const [data, setData] = useState('');
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=SC1e9272cqAVlkeODrAWo1fNGART0KXa9Uy25x3d')
    .then (res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => console.log(err));
  },[]);

  //Photo Background Styles
  const backgroundStyles = {
    backgroundImage: `url(${data.hdurl})`,
    height: '100vh',
    width: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: 'white',
  };


  return (
    <div className="App">
      <div className="photoContainer" style={backgroundStyles}>

        <Button
          onClick={toggle}
          className="toast-button"
          size="lg"
          color="info"
        >
          View Details
        </Button>

        <div className="info-toast p-3 my-2 rounded bg-docs-transparent-grid">
          <Toast isOpen={show}>
            <ToastHeader toggle={toggle}>{data.title}</ToastHeader>
            <ToastBody className="toast-body">
              <p className="photoExplaination">{data.explanation}</p>
              <p><strong>&copy; Copyright {data.copyright}, {data.date}</strong></p>
              <Button href={data.hdurl} target="_blank">Download Image</Button>
            </ToastBody>
          </Toast>
        </div>
        
        
        
        
        {/* <div className="photoInfo">
          <h1>{data.title}</h1>
          <h2>&copy; {data.copyright} {data.date}</h2>
          <p className="photoExplaination" >{data.explanation}</p>
          <a href={data.url}>Download Image</a>
        </div> */}
      </div>
    </div>
  );
}

export default App;
