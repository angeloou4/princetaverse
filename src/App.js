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
  const [usersNFTs, setUsersNFTs] = useState([])
  const [buildingInfo, setBuildingInfo] = useState({})


	useEffect(async () => {
    console.log('rtygjuki')
		
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
    await fetchData()
    console.log('running')

      
	}, []);

  console.log(buildingInfo)
  const buildings = [
    {
      title: "Nassau Hall",
      coordinates: [40.34871638489288, -74.65933681262437],
      image: nassau,
      price: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['price'] : 0,
      current_owner: {"name": buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['email'] : 0, "id": 12345},
      address: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['address'] : 0,
      tokenID: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['tokenID'] : 0,
      onSale: buildingInfo['Nassau Hall'] ? buildingInfo['Nassau Hall']['onSale'] : 0
    },
    {
      title: "Blair Hall",
      coordinates: [40.34755271639607, -74.66095016529047],
      image: blair,
      price: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['price'] : 0,
      current_owner: {"name": buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['email'] : 0, "id": 43638},
      address: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['address'] : 0,
      tokenID: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['tokenID'] : 0,
      onSale: buildingInfo['Blair Hall'] ? buildingInfo['Blair Hall']['onSale'] : 0
    },
    {
      title: "Firestone Library",
      coordinates: [40.34953654878533, -74.65767135187826],
      image: firestone,
      price: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['price'] : 0,
      current_owner: {"name": buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['email'] : 0, "id": 2343254},
      address: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['address'] : 0,
      tokenID: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['tokenID'] : 0,
      onSale: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['onSale'] : 0
    },
    {
      title: "Dillon Gym",
      coordinates: [40.34561808315859, -74.65879483048707],
      image: dillon,
      price: buildingInfo['Dillon Gym'] ? buildingInfo['Dillon Gym']['price'] : 0,
      current_owner: {"name": buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['email'] : 0, "id": 21000000},
      address: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['address'] : 0,
      tokenID: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['tokenID'] : 0,
      onSale: buildingInfo['Firestone Library'] ? buildingInfo['Firestone Library']['onSale'] : 0
    },
    {
      title: "Fine Hall",
      coordinates: [40.34569349233305, -74.65278215989223],
      image: fine,
      price: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['price'] : 0,
      current_owner: {"name": buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['email'] : 0, "id": 4356543},
      address: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['address'] : 0,
      tokenID: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['tokenID'] : 0,
      onSale: buildingInfo['Fine Hall'] ? buildingInfo['Fine Hall']['onSale'] : 0
    },
    {
      title: "Robertson Hall",
      coordinates: [40.34838490645056, -74.65473808475684],
      image: morrison,
      price: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['price'] : 0,
      current_owner: {"name": buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['email'] : 0, "id": 567876},
      address: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['address'] : 0,
      tokenID: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['tokenID'] : 0,
      onSale: buildingInfo['Robertson Hall'] ? buildingInfo['Robertson Hall']['onSale'] : 0
    },
  ]

  const listener = async (data) => {
      let userInfo = null
      let email = null
      switch (data.payload.event) {
          case 'signIn':
              setLogged(true)

              userInfo = await Auth.currentUserInfo()
              email = userInfo.attributes.email
              console.log(userInfo.attributes)
              
              let filter = {
                owner: {
                  eq: email
                }
              }
              let NFTs = await API.graphql({ 
                query: queries.listNFTS, 
                variables: { filter: filter }
              })

              console.log(NFTs)

              setUsersNFTs(NFTs.data.listNFTS.items) // array

              break;
          case 'signUp':
              setLogged(true)

              // Don't run if user exists
              userInfo = await Auth.currentUserInfo()
              email = userInfo.attributes.email
              const existingUsers = await API.graphql(graphqlOperation(queries.listUsers))
              const allUsers = existingUsers.data.listUsers.items
              const sameUsers = allUsers.filter(user => user.email === email)
              if (sameUsers.length > 0) return
              
              // Make new Eth account
              let newAcc = web3.eth.accounts.create()
              let { address, privateKey } = newAcc
              
              // Give the user coins
              const COIN_AMOUNT = 1234
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
        <Route path='/profile/:id' element={<Profile buildings={buildings} isLoggedInUser={true}/>}/>
      </Routes>
      
    </div>

  );
}

export default App;

// , buildingPrices, buildingOwners

// buildingPrices={buildingPrices} buildingOwners={buildingOwners}