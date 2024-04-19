import styled, { css } from 'styled-components';
import Button from '../button/button.component';

const UserBackground = css`
  @media (prefers-color-scheme: dark) {
    background: var(--color-gradient-dark);
  }

  @media (prefers-color-scheme: light) {
    background: var(--color-gradient);
  }
`;

export const UserDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  ${UserBackground}
  box-shadow: var(--shadow);
  top: 70px;
  right: 0;
  z-index: 5;
  transition: 0.5s;

  ${Button} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const UserItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-bottom: 10px;
  /* color: var(--color-text-black); */
  
  &::-webkit-scrollbar {
    display: none;
  }
`;
