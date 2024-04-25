import styled from "styled-components";

export const OrderContainer = styled.div` //order-item
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 20px;
    margin-top: 1rem;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px gray;
    background-color: var(--color-background-card);

    
    ul {
        list-style-type: none;
        padding: 0;
        
        li {
            margin-left: 20px;
            margin-bottom: -10px;
        }
    }
`;

export const OrderHeader = styled.div` //order-header
    display: flex;
    justify-content: space-between;
    padding: 1rem 2.5rem;
    border-radius: 12px;
    font-weight: 600;
    background-color: var(--color-primary);
    color: var(--color-info-light);
`;

export const OrderProductHead = styled.div` //order-product-head
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-weight: 600;
    align-items: center;
`;

export const OrderProductData = styled.div` //order-product-data
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    height: 50px;
    padding: 3px;
`;

export const OrderProductImage = styled.img` //order-product-image
    height: 40px;
    width: 40px;
    object-fit: cover;
`;

export const ButtonHolder = styled.div` //button-holder
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
`;
