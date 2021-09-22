import './App.css';
import axios from 'axios';
import Photos from './Photos';
import { useEffect, useState } from 'react';


function App() {

  const [ photos, setPhotos ] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000',
      method: 'GET',
      dataResponse: 'JSON', 
      params: {
        api_key: 'AQjj0UlUJRDhtJ1SbKkDiknUfHPDxp0tfyHpamLC',
      }
    }).then((res) => {
      console.log(res.data.photos);
      setPhotos(res.data.photos);
      setLoading(false);
    })

  }, [])
  

  return (
    <div className="App wrapper">
      <h1>Welcome to the Space Cam</h1>
      <ul className="allPhotos">
      {
        photos.map((res) => {
          return (
            <Photos key={res.id} res={res} loading={loading}/>
          )
        })
      }
      </ul>
    </div>
  );
}

export default App;

// AQjj0UlUJRDhtJ1SbKkDiknUfHPDxp0tfyHpamLC
//api_key: 'DEMO_KEY',
//count: 5
