import './App.css';
import MenuBar from './Components/MenuBar'
import Map from './Components/Map'
import Landing from './Components/Landing'
import Login from './Components/Login'
import nassau from './images/nassau.jpg'
import blair from './images/blair.jpg'
import firestone from './images/firestone.jpg'
import dillon from './images/dillon.jpg'
import fine from './images/fine.jpg'
import morrison from './images/morrison.jpg'
import Profile from './Components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route, 
} from "react-router-dom";


function App() {

  // dummy data
  const buildings = [
    {
      title: "Nassau Hall",
      coordinates: [40.34871638489288, -74.65933681262437],
      image: nassau,
      price: 500000,
      current_owner: {"name": "Chris Eisgruber", "id": 12345},
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    },
    {
      title: "Blair Hall",
      coordinates: [40.34755271639607, -74.66095016529047],
      image: blair,
      price: 30000,
      current_owner: {"name": "JP Singh", "id": 43638},
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    },
    {
      title: "Firestone Library",
      coordinates: [40.34953654878533, -74.65767135187826],
      image: firestone,
      price: 400000,
      current_owner: {"name": "Robert Fish", "id": 2343254},
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    },
    {
      title: "Dillon Gym",
      coordinates: [40.34561808315859, -74.65879483048707],
      image: dillon,
      price: 450000,
      current_owner: {"name": "Satoshi Nakamoto", "id": 21000000},
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    },
    {
      title: "Fine Hall",
      coordinates: [40.34569349233305, -74.65278215989223],
      image: fine,
      price: 200000,
      current_owner: {"name": "Jane Street", "id": 4356543},
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    },
    {
      title: "Robertson Hall",
      coordinates: [40.34838490645056, -74.65473808475684],
      image: morrison,
      price: 300000,
      current_owner: {"name": "Goldman Sachs", "id": 567876},
      address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    },
  ]



  return (

    <div className="App">

      <MenuBar />

      <Routes>
        <Route path="/" element={<Map buildings={buildings}/>}/>
        <Route path="/map" element={<Map buildings={buildings} />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/profile/:id' element={<Profile buildings={buildings} isLoggedInUser={true}/>}/>
      </Routes>
      
    </div>

  );
}

export default App;
