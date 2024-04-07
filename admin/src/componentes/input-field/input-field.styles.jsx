import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

/* const InputTextColors = css`
  @media (prefers-color-scheme: dark) {
    color: white;

    &:focus {
      color: white;
    }
  }

  @media (prefers-color-scheme: light) {
    color: black;

    &:focus {
      color: black;
    }
  }
`;

const InputColors = css`
  @media (prefers-color-scheme: dark) {
    background-color: #242424;
    color: white;
  }

  @media (prefers-color-scheme: light) {
    background-color: white;
    color: black;

    &:focus {
      background-color: black;
      color: white;
    }
  }
`; */

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  background-color: white;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }
  
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 15px 0;
  
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
