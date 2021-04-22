import styled from 'styled-components';
import { shade } from 'polished';

export const  Container = styled.nav`

    @media(max-width: 800px) {
        img {
            margin-left: 0 !important;
            width: 100px;
            margin-bottom: 10px;
        }
        position: static;

        display: flex;
        flex-direction: column;
        align-items: center;
        > a {
            text-align: center;
        }
        > ul {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            padding: 10px;
            height: 200px;
            li {
                ul {
                    display: none !important;
                }
            }
        }

    }

    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;

    width: 100%;

    top: 0;
    left: 0;

    border-bottom: 2px solid #004aad;
    padding: 10px;
    background: #FFF;

    img {
        width: 92px;
        height: 66px;
        margin-left: 20px;
    }

    > ul {
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        transition: all 0.2s;

        > li:nth-child(3) a {
            transition: all 0s;
        }

        > li:nth-child(3) {
            transition: all 0s;

            border-radius: 5px;
            padding: 10px 0;

            color: #FFF;
            &:hover {
                background: ${shade(0.2, '#004aad')};
            }

            &:hover > a {
                color: #FFF;
            }

            &:hover ul{
                display: block;
            }
        }


        > li a {

            padding: 10px;
            border-radius: 5px;
            color: #004aad;
            text-decoration: none;
            transition: all 0.2s;

            &:hover {
                background: ${shade(0.2, '#004aad')};
                color: #FFF;
            }
        }

        ul {

            list-style: none;
            transition: all 2s;
            margin-top: 5px;
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            display: none;

            background: ${shade(0.2, '#004aad')};

            border-radius: 10px;
            border-top-left-radius: 0px;

            padding: 10px;

            li {
                transition: all 0.2s;
                padding: 10px;
            }

            a {
                color: #FFF;

                &:hover {
                    color: #004aad;
                    background: #FFF;
                }
            }
        }
    }

    > a {
        display: flex;
        align-items: center;


        background: #004aad;
        border-radius: 10px;
        padding: 15px;
        transition: background-color 0.2s;
        text-decoration: none;

        color: #FFF;

        svg {
            margin-right: 10px;
        }

        &:hover {
            background: ${shade(0.2, '#004aad')};
        }
    }
`;

export const WhatsApp = styled.div`
    position: fixed;

    right: 0.9rem;
    bottom: 0.9rem;

    img {
        width: 5rem;
        height: 5rem;
    }
`;
