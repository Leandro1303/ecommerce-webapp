import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainerColors = css`
    @media (prefers-color-scheme: dark) {
        background-color:var(--color-primary);
        color: #f8f9fa;
    }

    @media (prefers-color-scheme: light) {
        background-color:var(--color-footer-light);
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
    font-size: 1em;
`;

export const Line = styled.div`
  border-top: 1px solid #6c757d;
  width: 80%;
`

export const DevsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 50%;
    font-size: 1em;
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
    font-size: 1em;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
`;

export const SocialMediaIcon = styled.img`
    width: 1.3em;
    aspect-ratio: 1/1;
    cursor: pointer;

`;

export const About = styled(Link)`
  ${FooterLinkColors}
    transition: color 0.3s;
    font-size: 1em;
    cursor: pointer;
`

export const Title = styled.h1`
font-size: 1.5em;
`

export const WebMapContainer = styled.div`
  font-size: 1em;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 15%;
  justify-content: center;
  align-items: center;
`

export const WebMap = styled(Link)`
  font-size: 1em;
  padding: 10px;
`

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
  font-size: 2em;
  padding-bottom: 10px;
`;
