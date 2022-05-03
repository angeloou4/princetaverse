import './App.css';
import MenuBar from './Components/MenuBar'
import Map from './Components/Map'
import Login from './Components/Login'
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
import { API_URL, PUBLIC_KEY2, PRIVATE_KEY } from './blockchain/secrets'
import Web3 from 'web3'
import { mintCoins } from './blockchain/scripts/mintCoins'
import buildBuildings from './buildings'

Amplify.configure(awsExports);
const web3 = new Web3(new Web3.providers.HttpProvider(API_URL))

function App() {

  const [logged, setLogged] = useState(false)
  const [buildingInfo, setBuildingInfo] = useState({})
  const [addingUser, setAddingUser] = useState(false)


	useEffect(() => {
		
    Auth.currentAuthenticatedUser()
			.then(user => {
        setLogged(true)
      })
			.catch(err => setLogged( false ));

    async function fetchData() {

      // fill in buildings data
      let buildingResults = await API.graphql({ 
        query: queries.listNFTS, 
      })
      let newBuildingInfo = {};
      for (let i in buildingResults.data.listNFTS.items) {
        let building = buildingResults.data.listNFTS.items[i]
        newBuildingInfo[building.name] = building
      }
      setBuildingInfo(newBuildingInfo)
  
    }
    fetchData()

      
	}, []);

  const buildings = buildBuildings(buildingInfo)

  const listener = async (data) => {
      let email = null
      switch (data.payload.event) {
          case 'signIn':
              setLogged(true)
              break;
          case 'signUp':
              setLogged(true)

              if (addingUser) return
              setAddingUser(true)

              // Don't run if user exists
              email = data.payload.data.user.username
              let existingUsers = await API.graphql(graphqlOperation(queries.listUsers))
              let allUsers = existingUsers.data.listUsers.items
              const sameUsers = allUsers.filter(user => user.email === email)
              if (sameUsers.length > 0) return
              
              // Make new Eth account
              let newAcc = web3.eth.accounts.create()
              let { address, privateKey } = newAcc
              
              // Give the user coins
              const COIN_AMOUNT = 1000
              mintCoins(PUBLIC_KEY2, COIN_AMOUNT, PRIVATE_KEY)

              // Add user to database
              const userDetails = {
                email: email, 
                address, 
                privateKey,
                coins: COIN_AMOUNT
              }
              const newUser = await API.graphql({ 
                query: mutations.createUser, 
                variables: {input: userDetails }
              })
              console.log('new user: ')
              console.log(newUser)

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
        <Route path="/" element={<Map logged={logged} buildings={buildings}  />}/>
        <Route path='/login' element={<Login setLogged={(bool) => setLogged(bool)} />} />
        <Route path='/profile/:id' element={<Profile buildings={buildings}/>}/>
      </Routes>
      
    </div>

  );
}

export default App;

// , buildingPrices, buildingOwners

// buildingPrices={buildingPrices} buildingOwners={buildingOwners}