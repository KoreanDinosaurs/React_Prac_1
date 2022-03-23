import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux"

export default function DayRate() {
    const day_list = useSelector(state => state.data.list)
    const navigate = useNavigate();
    
    // 현재 요일에 맞게 day_list를 재배열
    // const getDay = new Date().getDay()
    // day_list.push(...day_list.splice(0, getDay))
    // console.log(day_list)
    
    // 1-5까지의 정수를 랜덤 출력
    const randomInt = () => {
        return Math.floor(Math.random()* 5) + 1
    }

    return(
        <div style={{width: "100%", height: "100%"}}>
            <Title>내 일주일은?</Title>
            <Line />
            {day_list.map((v, i) => {
                return(
                    <Wrap key={i}>
                        <Day>{v.day}</Day>
                        <Rate random={randomInt}>
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                        </Rate>
                        <Button onClick={() => {
                            navigate(`/detail/${day_list[i].day}`)
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
    justify-content: space-between;
    align-items: center;
    margin: 1.2rem 0;
    padding: 0 0.3rem;
`;

const Day = styled.span`
    font-size: 1.5rem;
`;

const Rate = styled.div`
    font-size: 2rem;
    display: flex;
    
    & > div {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: 2px solid #64b5f6;
        border-radius: 30px;
        margin: 5px 3px;
        cursor: pointer;
    }

    & > div:nth-child(-n+${props => props.random}){
        background-color: #64b5f6;
    }
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