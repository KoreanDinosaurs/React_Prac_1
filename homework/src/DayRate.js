import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux"

export default function DayRate() {
    const day_list = useSelector(state => state.data.list)
    const navigate = useNavigate();

    return(
        <div style={{width: "100%"}}>
            <Title>내 일주일은?</Title>
            <Line />
            {day_list.map((v, i) => {
                return(
                    <Wrap key={i}>
                        <Day>{v}</Day>
                        <Rate>⭐⭐⭐⭐⭐</Rate>
                        <Button onClick={() => {
                            navigate(`/detail/${day_list[i]}`)
                        }}>보러가기</Button>
                    </Wrap>
                )
            })}    
        </div>
    )
}

const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
`;

const Line = styled.hr`
    width: 100%;
    margin: 1em 0;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Day = styled.span`
    font-size: 1.5rem;
`;

const Rate = styled.div`
    font-size: 2rem;
    padding-bottom: 0.7rem;
`;

const Button = styled.button`
    border: none;
    border-radius: 100px;
    width: 60px;
    height: 30px;

    &:hover {
        background-color: #64b5f6;
        color: white;
        cursor: pointer;
    }
`;