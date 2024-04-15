import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ForYouCardContainer = styled(Link)`

.card {
  max-width: 50%;
  margin: auto;
  transition: .2s;
  }
  
.card-img {
  border-radius: 25px;
  object-fit: contain;
}

.card:hover {
  transition: .2s;
  transform: scale(1.04);
}
`;

