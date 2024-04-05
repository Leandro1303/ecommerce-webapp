import styled from 'styled-components';

export const ShoppingIcon = styled.img`
  width: 100%;
  height: 80%;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 22px;
  width: 22px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  border-radius: 100%;
  background-color: red;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;