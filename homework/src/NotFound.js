import React from "react";
import styled from "styled-components";
import img from "./image/scc_img01.png"

export default function NotFound() {
    return(
        <Wrap>
            <img scr={img} alt="rtan" />
            <h1>페이지를 찾을 수 없습니다.</h1>
        </Wrap>
    )
}

const Wrap = styled.div`
    /* img {
        width: 60%;
        margin: 16px;
    } */
    
    h1{
        text-align: center;
    }
`;
