import React, { useState, useEffect } from "react";
import NavBar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';

function MenuBar({ logged, setLogged }) {

	const [rightButton, setRightButton] = useState(
		<Link to='/login' style={{ fontSize: 30, color: "white" }} className="nav-link">Login</Link>
	)

	useEffect(() => {
		console.log(logged)
		if (logged) {
			setRightButton(
				<button type="button" class="btn btn-link text-decoration-none" onClick={handleSignOut} style={{ fontSize: 30, color: "white" }} >
					Sign out
				</button>
			)
		} else {
			setRightButton(
				<Link to='/login' style={{ fontSize: 30, color: "white" }} className="nav-link">Login</Link>
			)
		}
	}, [logged])

	const handleSignOut = () => {
		Auth.signOut()
		setLogged(false)
	}

	return (
		
		<NavBar fixed="top" expand="lg" bg="dark" variant="dark" style={{zIndex: 2000}}>
			<div style={{ marginLeft: 15 }}>
				<Link to='/' style={{fontSize: 30, color: "white"}} className="nav-link">The Princetaverse</Link>
			</div>
			<Nav className="me-auto"></Nav>

			<Link to='/' style={{ fontSize: 30, color: "white" }} className="nav-link" >Map</Link>
			{
				logged ? (
					<Link to='/profile/logged-in-user' style={{ fontSize: 30, color: "white" }} className="nav-link" >Profile</Link>
				) : (
					null
				)
			}
			
			<div style={{ marginRight: 15, float: "right" }}>
				{rightButton}
			</div>

		</NavBar>
	);
}

export default MenuBar;