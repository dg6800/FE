import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['정보방', '롤링페이퍼']
  
    const navigate = useNavigate();
  
  
    const goToLogin = () => {
       navigate('/signin');
    }
  
  return (
    <div>
      <LoginBox onClick={goToLogin}>
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
cursor: pointer;
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