import React, { useEffect } from "react";
import NavBar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";

function MenuBar() {

	return (
		
		<NavBar fixed="top" expand="lg" bg="dark" variant="dark" style={{zIndex: 2000}}>
			<div style={{ marginLeft: 15 }}>
				<Link to='/' style={{fontSize: 30, color: "white"}} className="nav-link">The Princetaverse</Link>
			</div>
			<Nav className="me-auto"></Nav>

			<Link to='/' style={{ fontSize: 30, color: "white" }} className="nav-link" >Map</Link>
{/* {logged ? this : else} */}
			<div style={{ marginRight: 15, float: "right" }}>
				<Link to='/login' style={{ fontSize: 30, color: "white" }} className="nav-link" >Login</Link>
			</div>

		</NavBar>
	);
}

export default MenuBar;