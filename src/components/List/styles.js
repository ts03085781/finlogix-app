import styled, { css } from "styled-components";

export const ListCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 380px;
    min-width: 270px;
    width: 100%;
    height: 300px;
    padding: 20px;
    border: 1px solid #d6d6d6;
    background: #ffffff;
    box-shadow: 1px 2px 6px rgba(219, 219, 219, 0.5);
    border-radius: 4px;
    > div {
        .date {
            width: 280px;
            font-size: 14px;
            color: #01254f;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .title {
            width: 280px;
            font-size: 16px;
            color: #01254f;
            line-height: 24px;
            margin-bottom: 12px;
            font-weight: bold;
        }
        .contet {
            width: 280px;
            font-size: 14px;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.65);
            margin-bottom: 20px;
        }
        .time {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.65);
        }
    }

    .register {
        display: flex;
        justify-content: space-between;
        color: #43aa15;
        font-weight: bold;
        align-items: center;
    }
`;

export const IconBtn = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid #43aa15;
    border-radius: 50%;
    &::before {
        content: "";
        margin-right: 3px;
        width: 8px;
        height: 8px;
        border-top: 1px solid #43aa15;
        border-right: 1px solid #43aa15;
        transform: rotate(45deg);
    }
`;
