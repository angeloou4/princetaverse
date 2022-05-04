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
import wawa from './images/wawa.jpg'
import spelman from './images/spelman.jpg'
import richardson from './images/richardson.jpg'
import prospect from './images/prospect.jpg'
import newSouth from './images/newSouth.jpg'
import friendCenter from './images/friendCenter.jpg'
import fountain from './images/fountain.jpg'
import fitzrandolph from './images/fitzrandolph.jpg'
import dinky from './images/dinky.jpg'
import campusClub from './images/campusClub.jpg'
import bloomberg from './images/bloomberg.jpg'

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
  {
    title: "Wawa",
    coordinates: [40.3418386657145, -74.65888583909424],
    image: wawa,
    price: buildingInfo['Wawa'] ? buildingInfo['Wawa']['price'] : 0,
    current_owner: buildingInfo['Wawa'] ? buildingInfo['Wawa']['owner'] : '',
    address: buildingInfo['Wawa'] ? buildingInfo['Wawa']['address'] : 0,
    tokenID: buildingInfo['Wawa'] ? buildingInfo['Wawa']['tokenID'] : 0,
    onSale: buildingInfo['Wawa'] ? buildingInfo['Wawa']['onSale'] : 0
  },
  {
    title: "Spelman",
    coordinates: [40.3446484767713, -74.65923683701655],
    image: spelman,
    price: buildingInfo['Spelman'] ? buildingInfo['Spelman']['price'] : 0,
    current_owner: buildingInfo['Spelman'] ? buildingInfo['Spelman']['owner'] : '',
    address: buildingInfo['Spelman'] ? buildingInfo['Spelman']['address'] : 0,
    tokenID: buildingInfo['Spelman'] ? buildingInfo['Spelman']['tokenID'] : 0,
    onSale: buildingInfo['Spelman'] ? buildingInfo['Spelman']['onSale'] : 0
  },
  {
    title: "Richardson Auditorium",
    coordinates: [40.348354570523945, -74.660619953954],
    image: richardson,
    price: buildingInfo['Richardson Auditorium'] ? buildingInfo['Richardson Auditorium']['price'] : 0,
    current_owner: buildingInfo['Richardson Auditorium'] ? buildingInfo['Richardson Auditorium']['owner'] : '',
    address: buildingInfo['Richardson Auditorium'] ? buildingInfo['Richardson Auditorium']['address'] : 0,
    tokenID: buildingInfo['Richardson Auditorium'] ? buildingInfo['Richardson Auditorium']['tokenID'] : 0,
    onSale: buildingInfo['Richardson Auditorium'] ? buildingInfo['Richardson Auditorium']['onSale'] : 0
  },
  {
    title: "Prospect House",
    coordinates: [40.34711627992197, -74.65665803659829],
    image: prospect,
    price: buildingInfo['Prospect House'] ? buildingInfo['Prospect House']['price'] : 0,
    current_owner: buildingInfo['Prospect House'] ? buildingInfo['Prospect House']['owner'] : '',
    address: buildingInfo['Prospect House'] ? buildingInfo['Prospect House']['address'] : 0,
    tokenID: buildingInfo['Prospect House'] ? buildingInfo['Prospect House']['tokenID'] : 0,
    onSale: buildingInfo['Prospect House'] ? buildingInfo['Prospect House']['onSale'] : 0
  },
  {
    title: "New South",
    coordinates: [40.34332672390789, -74.65889481323309],
    image: newSouth,
    price: buildingInfo['New South'] ? buildingInfo['New South']['price'] : 0,
    current_owner: buildingInfo['New South'] ? buildingInfo['New South']['owner'] : '',
    address: buildingInfo['New South'] ? buildingInfo['New South']['address'] : 0,
    tokenID: buildingInfo['New South'] ? buildingInfo['New South']['tokenID'] : 0,
    onSale: buildingInfo['New South'] ? buildingInfo['New South']['onSale'] : 0
  },
  {
    title: "Friend Center",
    coordinates: [40.35029062213483, -74.65276513955885],
    image: friendCenter,
    price: buildingInfo['Friend Center'] ? buildingInfo['Friend Center']['price'] : 0,
    current_owner: buildingInfo['Friend Center'] ? buildingInfo['Friend Center']['owner'] : '',
    address: buildingInfo['Friend Center'] ? buildingInfo['Friend Center']['address'] : 0,
    tokenID: buildingInfo['Friend Center'] ? buildingInfo['Friend Center']['tokenID'] : 0,
    onSale: buildingInfo['Friend Center'] ? buildingInfo['Friend Center']['onSale'] : 0
  },
  {
    title: "Fountain of Freedom",
    coordinates: [40.348663362745356, -74.65498043271268],
    image: fountain,
    price: buildingInfo['Fountain of Freedom'] ? buildingInfo['Fountain of Freedom']['price'] : 0,
    current_owner: buildingInfo['Fountain of Freedom'] ? buildingInfo['Fountain of Freedom']['owner'] : '',
    address: buildingInfo['Fountain of Freedom'] ? buildingInfo['Fountain of Freedom']['address'] : 0,
    tokenID: buildingInfo['Fountain of Freedom'] ? buildingInfo['Fountain of Freedom']['tokenID'] : 0,
    onSale: buildingInfo['Fountain of Freedom'] ? buildingInfo['Fountain of Freedom']['onSale'] : 0
  },
  {
    title: "Fitz Randolph Gate",
    coordinates: [40.34954744945415, -74.65969028902448],
    image: fitzrandolph,
    price: buildingInfo['Fitz Randolph Gate'] ? buildingInfo['Fitz Randolph Gate']['price'] : 0,
    current_owner: buildingInfo['Fitz Randolph Gate'] ? buildingInfo['Fitz Randolph Gate']['owner'] : '',
    address: buildingInfo['Fitz Randolph Gate'] ? buildingInfo['Fitz Randolph Gate']['address'] : 0,
    tokenID: buildingInfo['Fitz Randolph Gate'] ? buildingInfo['Fitz Randolph Gate']['tokenID'] : 0,
    onSale: buildingInfo['Fitz Randolph Gate'] ? buildingInfo['Fitz Randolph Gate']['onSale'] : 0
  },
  {
    title: "Dinky",
    coordinates: [40.34214766121447, -74.65877636483125],
    image: dinky,
    price: buildingInfo['Dinky'] ? buildingInfo['Dinky']['price'] : 0,
    current_owner: buildingInfo['Dinky'] ? buildingInfo['Dinky']['owner'] : '',
    address: buildingInfo['Dinky'] ? buildingInfo['Dinky']['address'] : 0,
    tokenID: buildingInfo['Dinky'] ? buildingInfo['Dinky']['tokenID'] : 0,
    onSale: buildingInfo['Dinky'] ? buildingInfo['Dinky']['onSale'] : 0
  },
  {
    title: "Campus Club",
    coordinates: [40.3475834265667, -74.65442900509677],
    image: campusClub,
    price: buildingInfo['Campus Club'] ? buildingInfo['Campus Club']['price'] : 0,
    current_owner: buildingInfo['Campus Club'] ? buildingInfo['Campus Club']['owner'] : '',
    address: buildingInfo['Campus Club'] ? buildingInfo['Campus Club']['address'] : 0,
    tokenID: buildingInfo['Campus Club'] ? buildingInfo['Campus Club']['tokenID'] : 0,
    onSale: buildingInfo['Campus Club'] ? buildingInfo['Campus Club']['onSale'] : 0
  },
  {
    title: "Bloomberg",
    coordinates: [40.343474578865056, -74.65605528788393],
    image: bloomberg,
    price: buildingInfo['Bloomberg'] ? buildingInfo['Bloomberg']['price'] : 0,
    current_owner: buildingInfo['Bloomberg'] ? buildingInfo['Bloomberg']['owner'] : '',
    address: buildingInfo['Bloomberg'] ? buildingInfo['Bloomberg']['address'] : 0,
    tokenID: buildingInfo['Bloomberg'] ? buildingInfo['Bloomberg']['tokenID'] : 0,
    onSale: buildingInfo['Bloomberg'] ? buildingInfo['Bloomberg']['onSale'] : 0
  },
]

export default buildBuildings