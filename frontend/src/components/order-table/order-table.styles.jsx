import styled from "styled-components";

export const OrderTableContainer = styled.div`
  .order {
    border: 1px solid rgb(139, 139, 139);
    border-radius: 12px;
    margin: 2rem 0;
  }

  .order-header {
    display: flex;
    justify-content: space-between;
    font-size: small;
    padding: 0 1.5rem;
    border-radius: 12px;
    background-color: rgb(139, 139, 139);
  }

  .order-footer{
    display: flex;
    justify-content: end;
    margin-right: 5rem;
    margin-top: -2rem;
  }

  table {
    width: 100%;
  }

  th {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
