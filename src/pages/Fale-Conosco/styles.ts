import styled from 'styled-components';
import { shade } from 'polished';

export const Orcamento = styled.div`
    section {
        background: #77838d;

        display: flex;

        form {
            color: #FFF;
            width: 60%;
            padding: 0 10%;
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                margin: 20px 0;
            }

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
                    border: 2px solid #0468ed;
                    &::placeholder {
                        color: #0468ed;
                    }
                }

                &::placeholder {
                    font-size: 16px;
                }
            }

            input {
                color: #000000;
                width: 100%;
                height: 40px;
                border-radius: 10px;
                border: 0px;
                padding: 16px;
                display: flex;
                align-items: center;

                & + input {
                    margin-top: 8px;
                }


            }

            button {
                width: 100%;
                height: 40px;
                border-radius: 10px;
                margin-top: 16px;
                margin-bottom: 32px;

                border: none;
                color: #FFF;
                background: #004aad;
                padding: 16px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: background-color 0.2s;

                &:hover {
                    background: ${shade(0.4, '#004aad')};
                }
            }
        }
    }

    @media(max-width: 800px) {
        section {
            flex-direction: column;

            form {
                width: 100%;
            }
        }
    }
`;

export const Contato = styled.div`
    width: 40%;
    display: flex;
    justify-content: start;
    align-items: center;

    flex-direction: column;
    color: #FFF;


    > h1 {
        font-size: 30px;
        margin-top: 50px;
    }

    div {
        margin-top: 50px;

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 28px;
        }
        img {
            margin-right: 10px;
            width: 30px;
            height: 30px;
        }
    }

    @media(max-width: 800px) {
        width: 100%;

        > h1 {
            font-size: 250%;
        }

        div {
            margin-bottom: 40px;
        }

    }
`;
