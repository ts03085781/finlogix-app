import styled, { css } from "styled-components";

export const OutSideBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 80px 0;
    width: 100%;
    height: fit-content;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
    border-radius: 20px;

    @media (max-width: 980px) {
        border: none;
        box-shadow: none;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 580px;
`;

export const Titel = styled.h3`
    font-size: 22px;
    color: #01254f;
    font-weight: normal;
`;

export const Explain = styled.span`
    text-align: center;
    font-size: 16px;
    color: #888;
    line-height: 24px;
    margin-bottom: 40px;
`;

export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
    > label {
        margin-bottom: 8px;
        font-size: 16px;
    }
    > input {
        width: 100%;
        height: 40px;
        border: 1px solid #c6c6c6;
        border-radius: 4px;
    }
`;

export const SelectBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
    > label {
        margin-bottom: 8px;
        font-size: 16px;
    }
    > select {
        width: 100%;
        height: 40px;
        border: 1px solid #c6c6c6;
        border-radius: 4px;
    }
`;

export const RegisterBtn = styled.button`
    cursor: pointer;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: none;
`;
