import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Detail(props){
    const navigate = useNavigate();
    const choicedDay = useParams();
    
    return(
        <div>
            <ChoicedDay>{choicedDay.choicedDay}</ChoicedDay>
            <Text>평점 남기기</Text>
            <Rate>⭐⭐⭐⭐⭐</Rate>
            <Button onClick={() => {
                navigate(-1)
            }}>RECORD</Button>
            
        </div>
    )
}

const ChoicedDay = styled.span`
    display: block;
    text-align: center;
    font-size: 3rem;
    background-color: #2196f3;
    border-radius: 30px;
    color: white;
`;

const Text = styled.h1`
    text-align: center;
`;

const Rate = styled.div`
    font-size: 2rem;
    padding-bottom: 0.7rem;
    margin: .5em 0;
`;

const Button = styled.button`
    display: block;
    margin: auto;
    width: 40%;
    font-size: 1.2rem;
    border: 1px solid gray;
    
    &:hover{
        background-color: #90caf9;
        border: 1px solid transparent;
        color: white;
        cursor: pointer;
    }
`;