import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const Navbar = () => {
  const menuList = ['정보방', '롤링페이퍼']
  return (
    <div>
      <LoginBox>
        <div><FontAwesomeIcon icon={faUser} /></div>
        <div>로그인</div>
      </LoginBox>
      <NavArea>
        <NavBox>
          {menuList.map((menu) => (
            <NavList>{menu}</NavList>
          ))}
        </NavBox>
      </NavArea>
    </div>
);
};

export default Navbar;

const LoginBox = styled.div`
display: flex;
justify-content: flex-end;
`

const NavBox = styled.div`
  display: flex;
  list-style-type: none;
  `

const NavList = styled.div`
  padding: 10px;`

const NavArea = styled.div`
  display: flex;
  justify-content: flex-end;
`