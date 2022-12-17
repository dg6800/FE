import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Main';
import Login from '../pages/Login';
import Board from '../pages/Board';
import Navbar from '../components/layout/Navbar';


//1. 메인페이지, 로그인페이지, 정보공유 메인페이지,
// 네이게이션 바 만들거임.
//2. 메인페이지에서는 로그인 페이지와 회원가입 페이지로 가는 버튼이 있다. 
//3. 로그인이 되어있어야 작성페이지로 넘어간다.
//4. 로그인이 안되어있을경우 로그인 페이지가 나오게 된다.

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
