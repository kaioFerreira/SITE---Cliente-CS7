import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
    form {

        textarea {
            width: 100%;
            height: 120px;
            border-radius: 10px;
            border: 2px solid #FFF;

            padding: 16px;
            display: flex;
            align-items: center;
            margin-top: 8px;
            resize: none;
            font: 16px Roboto,sans-serif;

            &:focus {
                border: 2px solid var(--secondColor);
            }

            &::placeholder {
                font-size: 16px;
            }
        }

        h2 {
            color: var(--secondColor);
            font-style: 1.5rem;
            margin-bottom: 2rem;
        }

        input {
            color: var(--secondColor);
        }
        svg {
            color: var(--secondColor) !important;
        }
        span {
            background: var(--secondColor);
            &::before {
                border-color: var(--secondColor) transparent;
            }
        }
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 30px #f0f2f5 inset;
            color: var(--secondColor);
        }

        button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--secondColor);
            color: #FFF;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;
            transition: filter 0.2s;
            font-weight: 600;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }
`;

export const LeadTypeContainer = styled.div`
    margin: 1rem 0;
    display: none;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    color: ${(props) => props.isActive ? '#FFF' : 'var(--text-title)'} ;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive ? '#031f41d1' : 'transparent'};

    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color: 0.2s;
    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }
`;
