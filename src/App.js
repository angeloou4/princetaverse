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
import { useEffect, useState } from 'react';
import { Amplify, Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations'
import * as queries from './graphql/queries'
import awsExports from './aws-exports';
import { API_URL, PUBLIC_KEY, PRIVATE_KEY } from './secrets'
import { createAlchemyWeb3 } from '@alch/alchemy-web3'

Amplify.configure(awsExports);
const web3 = createAlchemyWeb3(API_URL)

function App() {

  const [logged, setLogged] = useState(false)

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then(user => {
        setLogged(true)
      })
			.catch(err => setLogged( false ));
	});

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

  const listener = async (data) => {
      switch (data.payload.event) {
          case 'signIn':
              setLogged(true)
              break;
          case 'signUp':
              setLogged(true)
              
              const COIN_AMOUNT = 1000
              
              // Make new Eth account

              // let newAcc = web3.eth.accounts.create()
              // let { address, privateKey } = newAcc

              // Give the user coins



              // Add user to database
              
              let userInfo = await Auth.currentUserInfo()
              let email = userInfo.attributes.email

              const existingUsers = await API.graphql(graphqlOperation(queries.listUsers))
              const allUsers = existingUsers.data.listUsers.items
              const sameUsers = allUsers.filter(user => user.email === email)

              // Don't add user if already exists
              if (sameUsers.length > 0) return
              
              const userDetails = {
                email: email, 
                address: 'test', 
                privateKey: 'test',
                coins: COIN_AMOUNT
              }
              
              const newUser = await API.graphql({ 
                query: mutations.createUser, 
                variables: {input: userDetails }
              })

              break;
          case 'signOut':
              setLogged(false)
              console.log('user signed out');
              break;
          default: 
              break;
      }
  }
  Hub.listen('auth', listener)

  return (

    <div className="App">

      <MenuBar logged={logged} setLogged={(bool) => setLogged(bool)} />

      <Routes>
        <Route path="/" element={<Map buildings={buildings} />}/>
        <Route path='/login' element={<Login setLogged={(bool) => setLogged(bool)} />} />
        <Route path='/profile/:id' element={<Profile buildings={buildings} isLoggedInUser={true}/>}/>
      </Routes>
      
    </div>

  );
}

export default App;
