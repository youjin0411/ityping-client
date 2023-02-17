import React, { useState } from 'react';
import {
Nav,
NavLink,
NavLinkWrapper,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
SelectBoxWrapper,
Select,
IconSVG,
Logo
} from './NavbarElements';

const Navbar = (history) => {

	const [selected, setSelected] = useState("guest");

	const handleSelect = (event) => {
		setSelected(event.target.value);
	};

	return (
		<>
		<Nav>
			<Bars />

			<NavMenu>
			<Logo to='/' activeStyle>
					로고
			</Logo>
			<NavLinkWrapper>
				<NavLink to='/nav1' activeStyle>
					NAV 1
				</NavLink>
				<NavLink to='/nav2' activeStyle>
					NAV 2
				</NavLink>
				<NavLink to='/nav3' activeStyle>
					NAV 3
				</NavLink>
			</NavLinkWrapper>
			</NavMenu>
			<NavBtn>
			<SelectBoxWrapper>
				<Select onChange={handleSelect} value={selected}>
					<option key="guest" value="guest">Guest</option>
					<option key="login" value="login">Login</option>
					<option key="signup" value="signup">Sign Up</option>
				</Select>
				<IconSVG
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 14L16 6H4L10 14Z"
						fill="#1A1A1A"
					/>
				</IconSVG>
			</SelectBoxWrapper>
			</NavBtn>
		</Nav>
		</>
	);
};

export default Navbar;
