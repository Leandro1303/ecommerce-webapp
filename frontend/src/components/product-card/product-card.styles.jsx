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
  padding: 10px 10px 7px 10px;

  @media (prefers-color-scheme: dark) {
    background: var(--color-gradient-dark) ;
  }

  @media (prefers-color-scheme: light) {
    background: var(--color-gradient) ;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    aspect-ratio: 1/1;
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
  min-height: 5%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 10px 0;
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 20px 0;
  text-overflow: ellipsis;
  height: 18px;
`;

export const Price = styled.span`
  font-weight: bold;
`;
