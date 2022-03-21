import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail(props){
    const navigate = useNavigate();
    const choicedDay = useParams();
    
    return(
        <div>
            <h1><span>{choicedDay.choicedDay}</span>평점남기기</h1>
            <button onClick={() => {
                navigate(-1)
            }}>평점 남기기</button>
        </div>
    )
}