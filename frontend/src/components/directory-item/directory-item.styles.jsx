import styled, { css } from "styled-components";

const PColor = css`
    @media (prefers-color-scheme: dark) {
        color: #fff;
    }
    
    @media (prefers-color-scheme: light) {
        color: #242424;
    }
`;
const BodyColor = css`
    @media (prefers-color-scheme: dark) {
        background-color: #242424;
    }
    
    @media (prefers-color-scheme: light) {
        background-color: white;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ image_url }) => `url(${image_url})`};
    transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const Body = styled.div`
    height: 90px;
    padding: 0 25px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    ${BodyColor}
    opacity: 0.7;
    position: absolute;

    h2 {
        font-weight: bold;
        margin: 0;
        font-size: 22px;
        color: #4a4a4a;
        text-transform: uppercase;
        
        ${PColor}
    }
    
    p {
        font-weight: lighter;
        font-size: 16px;
        margin: 0;
        
        ${PColor}
    }
`;

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 0 8px gray;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;
        
        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95); 
        }
        
        ${Body} {
            opacity: 0.9;
        }
    }
`;
