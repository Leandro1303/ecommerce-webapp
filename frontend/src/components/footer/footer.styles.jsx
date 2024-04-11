import styled, { css } from 'styled-components';

const FooterContainerColors = styled(css)`
    @media (prefers-color-scheme: dark) {
        background-color: #343a40;
        color: #f8f9fa;
    }

    @media (prefers-color-scheme: light) {
        background-color: #f8f9fa;
        color: #343a40;
    }
`;

const FooterLinkColors = styled(css)`
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
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
`;

export const FooterLink = styled.a`
    ${FooterLinkColors}
    text-decoration: none;
    transition: color 0.3s;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const DeveloperName = styled.p`
    margin: 0 10px;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const SocialMediaLink = styled.a`
    ${FooterLinkColors}
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;
`;

export const SocialMediaIcon = styled.i`
    font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
    margin-top: 20px;
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
`;

export const CopyRight = styled.p`
    ${FooterLinkColors}
    text-decoration: none;
    transition: color 0.3s;
`;
