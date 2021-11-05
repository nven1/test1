import styled from 'styled-components'

export const Input = styled.input`
    background-color: ${props => props.theme.t1};
    color: ${props => props.theme.c1};
    border-color: ${props => props.theme.t1};
    border-style: solid;
    border-radius: 100px;
    padding: 4px 1em;
    transition: all .5s ease-in;
`