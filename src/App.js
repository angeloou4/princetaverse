import './App.css';
import MenuBar from './Components/MenuBar'
import Map from './Components/Map'
import Login from './Components/Login'
import nassau from './images/nassau.jpg'
import blair from './images/blair.jpg'
import firestone from './images/firestone.jpg'
import dillon from './images/dillon.jpg'
import fine from './images/fine.jpg'
import morrison from './images/morrison.jpg'
import frist from './images/frist.jpg'
import chapel from './images/chapel.jpg'
import mccoshHealth from './images/mccoshHealth.jpg'
import forbesAnnex from './images/forbesAnnex.jpg'
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

  const buildings = [
    {
      title: "Nassau Hall",
      coordinates: [40.34871638489288, -74.65933681262437],
      image: nassau,
      price: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['price'] : 0,
      current_owner: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['owner'] : '',
      address: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['address'] : 0,
      tokenID: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['tokenID'] : 0,
      onSale: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['onSale'] : 0
    },
    {
      title: "Blair Hall",
      coordinates: [40.34755271639607, -74.66095016529047],
      image: blair,
      price: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['price'] : 0,
      current_owner: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['owner'] : '',
      address: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['address'] : 0,
      tokenID: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['tokenID'] : 0,
      onSale: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['onSale'] : 0
    },
    {
      title: "Firestone Library",
      coordinates: [40.34953654878533, -74.65767135187826],
      image: firestone,
      price: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['price'] : 0,
      current_owner: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['owner'] : '',
      address: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['address'] : 0,
      tokenID: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['tokenID'] : 0,
      onSale: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['onSale'] : 0
    },
    {
      title: "Dillon Gym",
      coordinates: [40.34561808315859, -74.65879483048707],
      image: dillon,
      price: buildingInfo['Dillon Gym'] ? buildingInfo['Dillon Gym']['price'] : 0,
      current_owner: buildingInfo['Dillon Gym'] ? buildingInfo['Dillon Gym']['owner'] : '',
      address: buildingInfo['Dillon Gym'] ? buildingInfo['Dillon Gym']['address'] : 0,
      tokenID: buildingInfo['Dillon Gym'] ? buildingInfo['Dillon Gym']['tokenID'] : 0,
      onSale: buildingInfo['Dillon Gym'] ? buildingInfo['Dillon Gym']['onSale'] : 0
    },
    {
      title: "Fine Hall",
      coordinates: [40.34569349233305, -74.65278215989223],
      image: fine,
      price: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['price'] : 0,
      current_owner: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['owner'] : '',
      address: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['address'] : 0,
      tokenID: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['tokenID'] : 0,
      onSale: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['onSale'] : 0
    },
    {
      title: "Robertson Hall",
      coordinates: [40.34838490645056, -74.65473808475684],
      image: morrison,
      price: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['price'] : 0,
      current_owner: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['owner'] : '',
      address: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['address'] : 0,
      tokenID: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['tokenID'] : 0,
      onSale: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['onSale'] : 0
    },
    {
      title: "First Campus Center",
      coordinates: [40.34681347772331, -74.65519808682603],
      image: frist,
      price: buildingInfo['Frist Campus Center'] ? buildingInfo['Frist Campus Center']['price'] : 0,
      current_owner: buildingInfo['Frist Campus Center'] ? buildingInfo['Frist Campus Center']['owner'] : '',
      address: buildingInfo['Frist Campus Center'] ? buildingInfo['Frist Campus Center']['address'] : 0,
      tokenID: buildingInfo['Frist Campus Center'] ? buildingInfo['Frist Campus Center']['tokenID'] : 0,
      onSale: buildingInfo['Frist Campus Center'] ? buildingInfo['Frist Campus Center']['onSale'] : 0
    },
    {
      title: "McCosh Health Center",
      coordinates: [40.34602060343338, -74.65541839000737],
      image: mccoshHealth,
      price: buildingInfo['McCosh Health Center'] ? buildingInfo['McCosh Health Center']['price'] : 0,
      current_owner: buildingInfo['McCosh Health Center'] ? buildingInfo['McCosh Health Center']['owner'] : '',
      address: buildingInfo['McCosh Health Center'] ? buildingInfo['McCosh Health Center']['address'] : 0,
      tokenID: buildingInfo['McCosh Health Center'] ? buildingInfo['McCosh Health Center']['tokenID'] : 0,
      onSale: buildingInfo['McCosh Health Center'] ? buildingInfo['McCosh Health Center']['onSale'] : 0
    },
    {
      title: "University Chapel",
      coordinates: [40.34876297606033, -74.65714409849407],
      image: chapel,
      price: buildingInfo['University Chapel'] ? buildingInfo['University Chapel']['price'] : 0,
      current_owner: buildingInfo['University Chapel'] ? buildingInfo['University Chapel']['owner'] : '',
      address: buildingInfo['University Chapel'] ? buildingInfo['University Chapel']['address'] : 0,
      tokenID: buildingInfo['University Chapel'] ? buildingInfo['University Chapel']['tokenID'] : 0,
      onSale: buildingInfo['University Chapel'] ? buildingInfo['University Chapel']['onSale'] : 0
    },
    {
      title: "Forbes Annex",
      coordinates: [40.34152872146229, -74.66057002652977],
      image: forbesAnnex,
      price: buildingInfo['Forbes Annex'] ? buildingInfo['Forbes Annex']['price'] : 0,
      current_owner: buildingInfo['Forbes Annex'] ? buildingInfo['Forbes Annex']['owner'] : '',
      address: buildingInfo['Forbes Annex'] ? buildingInfo['Forbes Annex']['address'] : 0,
      tokenID: buildingInfo['Forbes Annex'] ? buildingInfo['Forbes Annex']['tokenID'] : 0,
      onSale: buildingInfo['Forbes Annex'] ? buildingInfo['Forbes Annex']['onSale'] : 0
    },
  ]

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