import React from "react";
import { useNavigate } from "react-router-dom";

export default function Detail(){
    const navigate = useNavigate();

    return(
        <div>
            <h1><span>월요일</span>평점남기기</h1>
            <button onClick={() => {
                navigate(-1)
            }}>평점 남기기</button>
        </div>
    )
}