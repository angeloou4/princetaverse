import './App.css';
import MenuBar from './Components/MenuBar'
import Map from './Components/Map'
import Landing from './Components/Landing'
import Login from './Components/Login'
import nassau from './images/nassau.jpg'
import blair from './images/blair.jpg'
import firestone from './images/firestone.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route, 
} from "react-router-dom";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {

  // dummy data
  const buildings = [
    {
      title: "Nassau Hall",
      coordinates: [40.34871638489288, -74.65933681262437],
      image: nassau,
      price: 500000,
      current_owner: "Chris Eisgruber"
    },
    {
      title: "Blair Hall",
      coordinates: [40.34755271639607, -74.66095016529047],
      image: blair,
      price: 500000,
      current_owner: "JP Singh"
    },
    {
      title: "Firestone Library",
      coordinates: [40.34953654878533, -74.65767135187826],
      image: firestone,
      price: 500000,
      current_owner: "Robert Fish"
    },
  ]

  return (

    <div className="App">

      <MenuBar />

      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/map" element={<Map buildings={buildings}/>}/>
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </div>

  );
}

export default withAuthenticator(App);
