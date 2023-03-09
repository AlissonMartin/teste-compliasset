import styled from "styled-components";

export const FormsArea = styled.div`
    margin-top: 48px;

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

    label {
        margin-left: 16px;
        font-size: 1.05rem;
    }
`

export const SubmitButton = styled.input`
    background-color: #405cf5;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset;
    color: #fff;
    cursor: pointer;
    font-size: 1.1rem;
    height: 44px;
    padding: 0 25px;
    text-align: center;
    user-select: none;
`