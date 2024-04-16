import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductCartContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 222px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10px 10px 20px 10px;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 15px;
    transition:var(--fast-transition);
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
      transition:var(--fast-transition);
    }

    button {
      opacity: 0.85;
      display: flex;
      transition:var(--fast-transition);
    }
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  font-size: 18px;
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 18px;
`;

export const Price = styled.span`
  /* font-weight: bold; */
`;
