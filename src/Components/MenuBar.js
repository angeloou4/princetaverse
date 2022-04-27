import React from "react";
import NavBar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";

function MenuBar() {
	return (
		
		<NavBar fixed="top" expand="lg" bg="dark" variant="dark">
			<div style={{ marginLeft: 15 }}>
				<Link to='/' style={{fontSize: 30}} className="nav-link">The Princetaverse</Link>
			</div>
			<Nav className="me-auto"></Nav>

			<Link to='/map' style={{ fontSize: 30 }} className="nav-link" >Map</Link>

			<div style={{ marginRight: 15, float: "right" }}>
				<Link to='/login' style={{ fontSize: 30 }} className="nav-link" >Login</Link>
			</div>

		</NavBar>
	);
}

export default MenuBar;