import styled, { css } from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

const CartBackground = css`
  @media (prefers-color-scheme: dark) {
    background-color: black;
    color: white;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media (prefers-color-scheme: light) {
    background-color: white;
    color: black;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 15px;
  ${CartBackground}
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  border: none;
  box-shadow: 0 0 2px gray;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--fast-transition);

  &:hover {
    transition: var(--fast-transition);
  }
`;

export const SignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GreenButton = styled(BaseButton)`
  background-color: var(--color-success);
  color: var(--color-info-light);
  
  &:hover {
    color: var(--color-info-light);
    background-color: var(--color-success);
    filter: brightness(90%);
  }
`;

export const RedButton = styled(BaseButton)`
  background-color: var(--color-danger);
  color: var(--color-info-light);
  
  &:hover {
    background-color: var(--color-danger);
    color: var(--color-info-light);
    filter: brightness(90%);
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;