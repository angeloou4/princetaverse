import React from "react";
import NavBar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const MenuBar = () => {
	return (
		<NavBar fixed="top" expand="lg" bg="dark" variant="dark">	
				<div style={{marginLeft: 15}}>
					<NavBar.Brand style={{fontSize: 30}} href="#home">The Princetaverse</NavBar.Brand>
				</div>
				<Nav className="me-auto"></Nav>
					
				<div style={{marginRight: 15, float: "right"}}>
					<Nav>
						<Nav.Link style={{fontSize: 30}} href="#memes">
							Login
						</Nav.Link>
					</Nav>
				</div>
		</NavBar>
	);
};

export default MenuBar;