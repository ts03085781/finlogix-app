import styled, { css } from "styled-components";

export const HeaderBlock = styled.header`
    display: flex;
    border-bottom: 1px solid #ddd;
    height: fit-content;
    padding: 20px;
    align-items: center;
    justify-content: center;
    .btn-block {
        display: flex;
        gap: 10px;
        align-items: center;
    }
`;

export const LogoImg = styled.img`
    /* overflow: hidden; */
`;

export const Navigator = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    color: #222;
    @media (max-width: 980px) {
        display: none;
    }
    > div {
        cursor: pointer;
    }
`;

export const Content = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LoginBtn = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    border: 1px solid #01254f;
    border-radius: 3px;
    background-color: #fff;
    color: #01254f;
    font-weight: bold;
`;

export const LogoutBtn = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 3px;
    background-color: #01254f;
    color: #fff;
    font-weight: bold;
`;
