import styled from "styled-components";

export const UserItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 3px gray;
  border-radius: 10px;
  margin: 3px 5px;
  cursor: pointer;
  transition: all 0.1s;
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px gray;
  }
`;

export const UserItemName = styled.span`
  font-size: 18px;
`;

export const UserItemIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
