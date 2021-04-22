import styled from 'styled-components';

export const Container = styled.header`
    background: var(--secondColor);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem 1rem 8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 100px;
        margin-bottom: 10px;
    }
    svg {
        width: 20px;
        height: 20px;
        margin: 1rem;
        cursor: pointer;
    }
`;
