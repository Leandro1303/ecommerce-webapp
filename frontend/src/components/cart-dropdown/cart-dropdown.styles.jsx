import styled, { css } from 'styled-components';
import Button from '../button/button.component';

const CartBackground = css`
  @media (prefers-color-scheme: dark) {
    background-color: #242424;
  }

  @media (prefers-color-scheme: light) {
    background-color: white;
  }
`

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  ${CartBackground}
  box-shadow: 0 0 15px 0 gray;
  top: 70px;
  right: 0;
  z-index: 5;

  ${Button} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-bottom: 10px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;