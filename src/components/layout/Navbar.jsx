import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const menuList = ['정보방', '롤링페이퍼']
  
    const navigate = useNavigate();


    const goToHome = () => {
      navigate('/');
    }
  
    const goToLogin = () => {
      navigate('/login');
    }
  
  return (
    <div>
      <FirstNavBox>
        <LogoBox onClick={goToHome}>
          <LogoImg src='img/logo.png'/>
        </LogoBox>
        <LoginBox onClick={goToLogin}>
          <div><FontAwesomeIcon icon={faUser} /></div>
          <div>로그인</div>
        </LoginBox>
      </FirstNavBox>
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

const LogoBox = styled.div`
  cursor: pointer;
`

const LogoImg = styled.img`
  width: 100px;
`

const FirstNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const LoginBox = styled.div`
  display: flex;
  cursor: pointer;
`

const NavBox = styled.div`
  display: flex;
  list-style-type: none;
`

const NavList = styled.div`
  padding: 10px;
`

const NavArea = styled.div`
  display: flex;
  justify-content: flex-end;
`
