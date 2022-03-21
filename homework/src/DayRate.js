import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function DayRate(props) {
    const day_list = props.list;
    const navigate = useNavigate();

    return(
        <div style={{width: "100%"}}>
            <h1 style={{textAlign: "center"}}>내 일주일은?</h1>
            <hr style={{width: '100%'}} />
            {day_list.map((v, i) => {
                return(
                    <Container key={i}>
                        <Day>{v}</Day>
                        <Rate>0 0 0 0 0</Rate>
                        <Button onClick={() => {
                            navigate("/detail")
                        }}>보러가기</Button>
                    </Container>
                )
            })}    
        </div>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Day = styled.span`

`;

const Rate = styled.div`

`;

const Button = styled.button`

`;