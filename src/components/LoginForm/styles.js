import styled, { css } from "styled-components";

export const Cover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 1s linear 0;
`;

export const LoginBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: fit-content;
    height: fit-content;
    padding: 30px;
    border-radius: 5px;
    background-color: #fff;
    gap: 20px;
`;

export const LoginButton = styled.button`
    cursor: pointer;
    margin-top: 30px;
    width: 120px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #01254f;
    color: #01254f;
    font-weight: bold;
`;

export const CancelBtn = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    &::after {
        content: "X";
        cursor: pointer;
        width: 10px;
        height: 10px;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const ErrorText = styled.span`
    font-weight: bold;
    color: red;
`;
