import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    padding: .5em 1em;
    gap: .5em;
    background-color: ${props => props.theme.c1};
    transition: all .5s ease-in;
    border-bottom: 2px solid;
    border-color: ${props => props.theme.c2};

    @media (min-width: 768px) {
        input {
            width: 50%;
        }
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr 1fr;
        padding: .5em 0;

        input {
            grid-area: 2/1/2/3;
            margin: 0 1em;
        }

        button {
            margin: 0 1em;
            width: max-content;
            justify-self: flex-end;
        }
    }
    `