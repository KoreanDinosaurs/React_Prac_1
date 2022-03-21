import React from "react";
import styled from "styled-components";

export default function DayRate(props) {
    const day_list = props.list;

    return(
        <div>
            {day_list.map((v, i) => {
                return(
                    <Container key={i}>
                        <Day>{v}</Day>
                        <Rate>0 0 0 0 0</Rate>
                        <Button>보러가기</Button>
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