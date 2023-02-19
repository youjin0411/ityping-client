import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
Nav,
NavLink,
NavLinkWrapper,
Bars,
NavMenu,
NavBtn,
SelectBoxWrapper,
Select,
IconSVG,
Logo
} from './NavbarElements';

const OPTIONS = [
	{ value: "guest", name: "Guest" },
	{ value: "login", name: "Login" },
	{ value: "signup", name: "Sign Up" },
];

const Navbar = () => {
	const history = useHistory();
	const [selected, setSelected] = useState("guest");

	const handleSelect = (event) => {
		setSelected(event.target.value);

		if (event.target.value === 'guest') {
			history.push('/');
		} else if (event.target.value === 'login') {
			history.push('/login');
		} else if (event.target.value === 'signup') {
			history.push('/signup');
		};
	};	

	return (
		<>
		<Nav>
			<Bars />

			<NavMenu>
				<Logo to='/'>
						로고
				</Logo>
				<NavLinkWrapper>
					<NavLink to='/nav1'>
						NAV 1
					</NavLink>
					<NavLink to='/nav2'>
						NAV 2
					</NavLink>
					<NavLink to='/nav3'>
						NAV 3
					</NavLink>
				</NavLinkWrapper>
				<NavBtn>
					<SelectBoxWrapper>
						<Select onChange={handleSelect} value={selected}>
							{OPTIONS.map((option) => (
								<option
									key={option.value}
									value={option.value}
								>
									{option.name}
								</option>
							))}
						</Select>
						<IconSVG
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M10 14L16 6H4L10 14Z"
								fill="#1A1A1A"
							/>
						</IconSVG>
					</SelectBoxWrapper>
				</NavBtn>
			</NavMenu>
		</Nav>
		</>
	);
};

export default Navbar;
