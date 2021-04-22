import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    a {
        text-decoration: none;
    }
    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        min-height: 10rem;
        cursor: pointer;

        transition: all 0.2s;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media(max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;
