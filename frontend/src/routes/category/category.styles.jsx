import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, 350px);
    grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
    grid-gap: 1em;
    justify-items: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`;