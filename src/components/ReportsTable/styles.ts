import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1rem;
    max-height: 400px;
    overflow-x: auto;

    table {
        width: 100%;

        border-spacing: 0 0.5rem;
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

        }
        tr {
            &:hover td{
            transition: all 0.2ms;

                filter: brightness(0.9);
            }
        }
        td {
            transition: all 0.2s;
            cursor: pointer;
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            font-size: 0.9rem;
            &:first-child {
                color: var(--text-title);
                min-width: 250px;
            }
            &:last-child {
                min-width: 145px;
            }
        }
    }

    .reports-table-column-phone {
        min-width: 185px;
    }

    @media(max-width: 400px) {
        display: none;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;

    div {
        width: 40%;
        background: #FFF;
        border-radius: 2rem;
        padding: 1rem;
        color: #666360;
        display: flex;
        align-items: center;
        height: 3rem;
        text-align: center;

        input {
            flex: 1;
            color: var(--text-body);
            margin: 0 1rem;
            border: 0;
            &::placeholder {
                color: var(--text-body);
            }
        }
    }
`;
