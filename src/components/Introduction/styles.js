import styled, { css } from "styled-components";

export const Content = styled.div`
    display: flex;
    gap: 120px;
    @media (max-width: 980px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const VideoBlock = styled.iframe`
    width: 50%;
    /* height: 320px; */
    @media (max-width: 980px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const Article = styled.article`
    width: 50%;
    > h3 {
        font-style: 22px;
        color: #01254f;
        margin-bottom: 10px;
        font-weight: bold;
    }
    @media (max-width: 980px) {
        width: 100%;
    }
`;
