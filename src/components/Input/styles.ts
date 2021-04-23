import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
    primaryColor: string;
    secondColor: string;
}

export const Container = styled.div<ContainerProps>`
    background ${ (props) => props.secondColor};
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    border: 2px solid ${ (props) => props.secondColor};
    color: #666360;
    display: flex;
    align-items: center;
    height: 60px;
    text-align: center;

    margin: 5px;
    & + div {
        margin-top: 8px;
    }
    ${props =>
        props.isErrored &&
        css`
            border-color: ${props.primaryColor};
        `}

    ${props =>
        props.isFocused &&
        css`
            color: ${props.primaryColor};
            border-color: ${props.primaryColor};
        `}

    ${props =>
        props.isFilled &&
        css`
            color: ${props.primaryColor};
        `}


    input {

        flex: 1;
        background: ${ (props) => props.secondColor};
        border: 0;
        color: #FFF;

        &::placeholder {
            color: #666360;
        }
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${ (props) => props.secondColor} inset;
    }

    svg {
        margin-right: 10px;
    }
`;

export const Error = styled(Tooltip)`
    height: 18px;
    margin-left: 16px;
    svg {
        margin: 0;
    }

    span {
        background: #004aad;
        color: #FFF;

        &::before{
            border-color: #004aad transparent;
        }
    }
`;
