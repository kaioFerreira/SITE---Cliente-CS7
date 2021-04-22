import styled, { css } from 'styled-components';
import { animated } from 'react-spring';


interface ContainerProps {
    type?: 'success' | 'error' | 'info';
    hasDescription: number;
}

const toastTypeVariations = {
    info: css`
        background: #ebf8ff;
        color: #3172b7;
    `,
    success: css`
        background: #e6fffa;
        color: #2e656a;
    `,
    error: css`
        background: #fddede;
        color: #c53030;
    `
}

export const Container = styled(animated.div)<ContainerProps>`
    width: 22rem;

    position: relative;
    padding: 1rem 1.8rem 1rem 1rem;
    border-radius: 0.6rem;

    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    display: flex;

    & + div {
        margin-top: 0.5rem;
    }

    ${props => toastTypeVariations[props.type || 'info']}

    > svg {
        margin: 0.25rem 0.9rem 0 0;
    }

    div {
        flex: 1;

        p {
            margin-top: 0.25rem;
            font-size: 1rem;
            opacity: 0.8;
            line-height: 1.4rem;
        }
    }

    button {
        position: absolute;
        right: 1rem;
        top: 1rem;
        opacity: 0.6;
        border: 0;
        background: transparent;
        color: inherit;
    }

    ${props => !props.hasDescription && css `
        align-items: center;

        svg {
            margin-top: 0;
        }
    `}
`;
