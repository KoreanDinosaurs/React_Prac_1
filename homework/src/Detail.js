import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {updateData} from "./redux/modules/data"

export default function Detail(){
    const day_list = useSelector(state => state.data.list)
    const navigate = useNavigate();
    const choicedDay = useParams();
    const dispatch = useDispatch();
    
    const colorChange = (e) => {
        const elemNum = e.target.dataset.num;
        console.log(e.target.dataset)
        // const elemArr = e.target.parentNode.childNodes;
        
        // for(let j = 0; j < 5; j++){
        //     elemArr[j].style.backgroundColor = "transparent";
        // }

        // for(let i = 0; i < elemNum; i++){
        //     elemArr[i].style.backgroundColor = "#64b5f6";
        // }
        
        dispatch(updateData([choicedDay.choicedDay, elemNum]))
    };

    const rank = () => {
        const rank = day_list.filter(v => v.day === choicedDay.choicedDay).shift().rank;
        return rank
    }

    return(
        <div>
            <ChoicedDay>{choicedDay.choicedDay}</ChoicedDay>
            <Text>평점 남기기</Text>
            <Rate rank={rank}>
                <div onClick={colorChange} data-num= '1'/>
                <div onClick={colorChange} data-num= '2'/>
                <div onClick={colorChange} data-num= '3'/>
                <div onClick={colorChange} data-num= '4'/>
                <div onClick={colorChange} data-num= '5'/>
            </Rate>
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
    display: flex;
    & > div {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: 2px solid #64b5f6;
        border-radius: 40px;
        margin: 5px;
        cursor: pointer;
    }

    & > div:nth-child(-n+${props => props.rank}){
        background-color: #64b5f6;
    }
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