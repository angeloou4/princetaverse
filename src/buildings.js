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

const buildBuildings = buildingInfo => [
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

export default buildBuildings