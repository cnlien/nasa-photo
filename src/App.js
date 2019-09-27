import React, { useState, useEffect, Component } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import "./App.css";
import axios from 'axios';
import ReadMoreButton from "./components/moreButton.js";

function App() {
  // Image state
  const [nasaPhoto, setNasaPhoto] = useState('');
  const [copyright, setCopyright] = useState('');
  const [date, setDate] = useState('');
  const [exp, setExp] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=SC1e9272cqAVlkeODrAWo1fNGART0KXa9Uy25x3d')
    .then (res => {
      setNasaPhoto(res.data.hdurl);
      setCopyright(res.data.copyright);
      setDate(res.data.date);
      setExp(res.data.explanation);
      setTitle(res.data.title);
      setUrl(res.data.hdurl);
    })
    .catch(err => console.log(err));
  },[]);

  //Photo Container Styles
  let photoStyles = {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${nasaPhoto})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: 'white',
  };


  return (
    <div className="App">
      <div className="photoContainer" style={photoStyles}>
        <div className="photoInfo">
          <h1>{title}</h1>
          <h2>&copy; {copyright} {date}</h2>
          // <p className="photoExplaination" >{exp}</p>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
}

export default App;
