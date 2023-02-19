import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

/*** Navbar ***/
export const Nav = styled.nav`
background: #ffffff;
height: 80px;
display: flex;
justify-content: space-around;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
border-bottom: 1px solid #E4E7EC;
`;

export const Logo = styled(Link)`
	color: #000000;
	text-decoration: none;
`

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;

export const NavLinkWrapper = styled.div`
display: flex;
`

export const Bars = styled(FaBars)`
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

export const NavMenu = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-right: -24px;
width: 100vw;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

/*** Select ***/
export const Select = styled.select`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	padding-left: 10px;
	padding-right: 25px;
	border-radius: 3px;
`;

export const SelectBoxWrapper = styled.div`
	display: flex;
`;

// Icon에 사용할 Icon SVG 컴포넌트 생성
export const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;
`;