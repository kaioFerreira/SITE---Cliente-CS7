import styled from 'styled-components';

export const Orcamento = styled.div`
    section {
        background: #77838d;

        display: flex;


        height: calc(100vh - 290px);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            margin-top: 20px;
            font-size: 2rem;
        }
    }

    @media(max-width: 800px) {
        section {
            span {
                font-size: 1rem;
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
