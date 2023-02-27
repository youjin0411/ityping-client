import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "../Hook/useDetectClose";

const DropdownMenu = () => {
	const [userIsOpen, userRef, userHandler] = useDetectClose(false);

	return (
    <>
		<Wrapper>
			<Link href="/select-theme">테마선택</Link>
			<Link href="/code-review">코드리뷰</Link>
			<Link href="/tutorial">튜토리얼</Link>
		</Wrapper>
			<DropdownContainer>
			<DropdownButton onClick={userHandler} ref={userRef}>
				Guest
			</DropdownButton>
			<Menu isDropped={userIsOpen}>
        <LinkWrapper href="/login">Login</LinkWrapper>
        <LinkWrapper href="/signup">Sign Up</LinkWrapper>
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

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;
  width: 100%;
  display: block;
  text-align: center;

  &:hover {
    color: #1C3796;
    transition: all .3s;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  color: white;
  background-color: #1C3796;
  border-radius: 4px;
  font-size: 14px;
  padding: 6px 12px;
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 40px;
  left: 50%;
  width: 100px;
  height: 80px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
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

const LinkWrapper = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:nth-child(1) {
    border-bottom: 1px solid #E4E7EC;
  }

  &:hover {
    background-color: #344054;
    color: white;
    transition: all 0.5s;
  }

  &:nth-child(1):hover {
    border-radius: 4px 4px 0 0;
  }

  &:nth-child(2):hover {
    border-radius: 0 0 4px 4px;
  }
`;