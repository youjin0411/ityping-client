import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./useDetectClose";

const DropdownMenu = () => {
	const [userIsOpen, userRef, userHandler] = useDetectClose(false);

	return (
    <>
		<Wrapper>
			<LinkWrapper href="/nav1">nav1</LinkWrapper>
			<LinkWrapper href="/nav2">nav2</LinkWrapper>
			<LinkWrapper href="/nav3">nav3</LinkWrapper>
		</Wrapper>
			<DropdownContainer>
			<DropdownButton onClick={userHandler} ref={userRef}>
				Guest
			</DropdownButton>
			<Menu isDropped={userIsOpen}>
				<Ul>
				<Li>
					<LinkWrapper href="/condition">Login</LinkWrapper>
				</Li>
				<Li>
					<LinkWrapper href="/body">Sign Up</LinkWrapper>
				</Li>
				</Ul>
			</Menu>
			</DropdownContainer>
    </>
	);
};

export default DropdownMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 16px;
  width: 40vw;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  color: white;
  background-color: #344054;
  border-radius: 4px;
  font-size: 14px;
  padding: 6px 12px;
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 40px;
  left: 50%;
  width: 180px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top-width: 0;
    border-bottom-color: 558B2F;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & > li:first-of-type {
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  border-bottom: 1px solid white;
  width: 100%;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;
`;