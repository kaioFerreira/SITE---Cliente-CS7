import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        outline: 0;
        box-sizing: border-box;
    }
    :root {
        scroll-behavior: smooth;
        --background: #F0F2F5;

        --green: #33CC95;
        --secondColor: #032541;
        --primaryColor: #E83029;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: #f1f1f1;

        color: #FFF;

        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    input {
        outline: 0;
        border-color: #232129;
    }

    button {
        outline-color: var(--secondColor);
        outline: 0;
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);

        padding: 3rem;
        position: relative;

        border-radius: 0.25rem;
    }
    .react-modal-content-report {
        width: 100%;
        max-width: 1080px;
        background: var(--background);

        padding: 3rem;
        position: relative;

        border-radius: 0.25rem;
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;
