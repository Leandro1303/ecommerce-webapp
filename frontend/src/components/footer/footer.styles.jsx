import styled, { css } from 'styled-components';

const FooterContainerColors = css`
    @media (prefers-color-scheme: dark) {
        background-color: black;
        color: #f8f9fa;
    }

    @media (prefers-color-scheme: light) {
        background-color: #f8f9fa;
        color: #343a40;
    }
`;

const FooterLinkColors = css`
    @media (prefers-color-scheme: dark) {
        color: #6c757d;

        &:hover {
            color: #f8f9fa;
        }
    }
    
    @media (prefers-color-scheme: light) {
        color: black;
        
        &:hover {
            color: #343a40;
        }
    }
`;

export const FooterContainer = styled.footer`
    ${FooterContainerColors}
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1px 0 20px 0;
    display: absolute;
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
`;

export const CopyRight = styled.p`
    ${FooterLinkColors}
    text-decoration: none;
    transition: color 0.3s;
    font-size: 18px;
`;

export const DevsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 0;
    width: 250px;
`;

export const DeveloperName = styled.p`
    margin: 0 10px;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    
`;

export const SocialMediaIcon = styled.img`
    width: 30px;
    aspect-ratio: 1/1;
    cursor: pointer;
`;
