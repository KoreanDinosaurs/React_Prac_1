import React from "react";
import styled from "styled-components";
import img from "./image/scc_img01.png"

export default function NotFound() {
    return(
        <Wrap>
            <h1>페이지를 찾을 수 없습니다.</h1>
            <img scr={img} alt="rtan" />
        </Wrap>
    )
}

const Wrap = styled.div`
    h1{
        text-align: center;
    }
`;
