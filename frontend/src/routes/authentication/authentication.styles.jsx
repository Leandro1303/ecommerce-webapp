import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    max-width: 900px;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;

    @media (max-width: 820px) {
        flex-direction: column;
        max-width: 380px;
        overflow: hidden;
        gap: 20px;
    }
`;