import styled from "styled-components";

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 32px;
    gap: 48px;
`

export const ProductsItem = styled.div`
    width: 40%;
    height: 320px;
    position: relative;
    background-size: cover;
    border-radius: 5px;

    .deleteButton {
        width: 50px;
        height: 50px;
        background-color: red;
        position: absolute;
        top: 10%;
        right: 5%;
        border:none;
        background-color: #405CF5CC;
        color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        font-size: 3rem;
        line-height: 3rem;
        cursor: pointer;
        border-radius: 3px;
    }

`

export const ItemDescription = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    bottom: 0;
    padding: 8px 16px;
    background-color: #405CF5AA;
    color: white;
    background-size: cover;

    h3 {
        font-size: 1.2rem;
    }

    p {

    }

    .editButton {
        background-color: white;
        border: none;
        padding: 6px 12px;
        font-size: 1.2rem;
        cursor: pointer;
    }

`
