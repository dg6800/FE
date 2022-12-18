import React, {useEffect, useState} from 'react';

import {ListGroup, Badge} from 'react-bootstrap'




const Board = () => {
    const [boardList, setBoardList] = useState([]);


    const getBoards= async() => {
        let url = `http://localhost:5000/boards`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setBoardList(data);
    }

    useEffect(() => {
        getBoards();
    },[]);


    return (
        <ListGroup as="ol" numbered>
            {boardList.map((list)=> (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold flex " >
                            {list.title}
                        </div>
                    </div>
                        
                    <Badge bg="light" text="dark">
                            {list.user}
                    </Badge>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Board;







// api 호출은 useEffect
// useEffect 매개변수 1. 함수 2. 배열
// console이 아닌 UI에 보여주려면 useState에 넣어주어야한다.  
// const[boardList, setBoardList] = useState()
// 데이터의 값을 받아서 더해주는 것이기 때문에 setBoardList가 data가 된다. 