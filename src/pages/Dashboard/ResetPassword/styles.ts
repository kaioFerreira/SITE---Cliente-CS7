import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import resetBackgroundImg from '../../../assets/background-reset.jpg';

export const Container = styled.div`
    background: var(--secondColor);
    height: 100vh;

    display: flex;
    align-items: stretch;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 700px;


`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;
    img {
        width: 180px;
    }

    form {
        margin-bottom: 40px;
        width: 340px;
        text-align: center;
        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: flex;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            place-content: center;
            align-items: center;

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }

            svg {
                margin-right: 16px;
            }
        }
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px #232129 inset;
        -webkit-text-fill-color: #FFF;
    }
`;

export const Background = styled.div`
    flex: 1;

    background: url(${resetBackgroundImg}) no-repeat center;
    background-size: cover;
`;
