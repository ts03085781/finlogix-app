import styled, { css } from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : "#fff"};
    > div {
        max-width: 1180px;
        width: 100%;
        padding: 80px 0;
        margin: 26px;
    }
`;
