import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import anchors from './anchors';
import logo from "../../icons/logo.svg";
import styled from "styled-components";

import {
	Collapse,
	NavbarToggler,
	NavbarBrand,
	Navbar,
	Nav,
	NavItem,
	NavLink } from 'reactstrap';
	
import { Link } from "react-scroll";

import { Link as RLink } from "react-router-dom";

const RouterLink = styled(RLink)`
	text-decoration: none;
	color: inherit;

	&:hover {
		color: inherit;
		text-decoration: none;
	}
`;

export default class Navs extends React.Component {
	
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			paddingStyle: {
				paddingLeft: '10vw ', 
				paddingRight: '10vw '
			}
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<Navbar dark expand="md" sticky={'top'} className="dark-bg" style={this.state.paddingStyle}>
				<NavbarBrand href="#intro">
					<Link
						activeClass="active"
						to="intro"
						spy={true}
						smooth={true}
						offset={-50}
						duration={1000}
					>
						<img 
							src={logo}
							alt="Logo"
							style={{width:46, margin:2}}
						/>
					</Link>
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle}></NavbarToggler>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						{anchors.map(({ label, target }) => (
							<NavItem>
								<NavLink href={"#"+target}>
								<Link
									activeClass="active"
									to={target}
									spy={true}
									smooth={true}
									offset={-50}
									duration={1000}
								>
									<span className="bold"></span>{label}
								</Link>
								</NavLink>
							</NavItem>
						))}
						<NavItem>
							<NavLink>
								<RouterLink to="/dev">COMING SOON</RouterLink>
							</NavLink>					
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
