import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "./image/scc_img01.png"

export default function NotFound() {
    const navigate = useNavigate();

    return(
        <Wrap>
            <h1>페이지를 찾을 수 없습니다.</h1>
            <img src={img} alt="rtan" />
            <button onClick={() => {navigate(-1)}}>뒤로가기</button>
        </Wrap>
    )
}

const Wrap = styled.div`
    h1{
        text-align: center;
        margin-bottom: 40px;
    }

    button {
        display: block;
        margin: 20px auto;
        height: 40px;
        width: 80px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
    }

    button:hover {
        color: white;
        background-color: #64b5f6;
    }
`;
