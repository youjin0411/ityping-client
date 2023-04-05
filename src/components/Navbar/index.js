import React from 'react';
import DropdownMenu from './DropdownMenu';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	return (
		<Container>
			<Nav>
				<Bars />
				<NavMenu>
					<Logo to='/'>
						로고
					</Logo>
					<Blank/>
					<DropdownMenu />
				</NavMenu>
			</Nav>
		</Container>
	);
};

const Container = styled.div`
	height: 60px;
	border-bottom: 1px solid #E4E7EC;
`;

const Nav = styled.nav`
	background: white;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 70vw;
	height: 60px;
	display: flex;
	justify-content: flex-end;
	margin: 0 auto;
	z-index: 12;
`;

const Logo = styled(Link)`
	color: #000000;
	text-decoration: none;
`;

const Blank = styled.div`
	width: 10vw;
`

const NavMenu = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 1920px;
column-gap: 100px;

@media screen and (max-width: 768px) {
	display: none;
}
`;

const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export default Navbar;