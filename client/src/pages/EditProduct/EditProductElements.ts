import styled from "styled-components";

export const LeftSide = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 250px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
    width: 100%;
  }
`

export const RightSide = styled.div`
    flex: 1;

    form {
        width: 80%;
        margin: 0 auto;
    }

    input {
    width: 100%;
    height: 2.6rem;
    font-size: 1.1rem;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;
    transition: all ease .2s;
    margin-bottom: 32px;
    margin-top: 8px;

        &:focus {
            border: 1px solid #333;
         }
    }
`

export const ProductWrapper = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 48px;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`