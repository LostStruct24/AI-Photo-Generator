import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';

function App() {
  const [image, setImage] = useState('')

  //add your API key here
  const handleChange = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=YOUR_API_KEY&order_by=random').then(res => {
      const uri = res.data.faces[0].urls[4][512]
      uri && setImage(uri)
    })
  }

  return (
    <div className="App">
      <Helmet>
        <title>AI Photo Generator</title>
      </Helmet>
      <h1>AI Photo Generator</h1>
      {image && <img src={image} alt="AIPhoto" /> }
      <button type="button" onClick={handleChange}>
        Generate New Image
      </button>
    </div>
  );
}

export default App;
