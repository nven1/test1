import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 1em;
    background-color: ${props => props.theme.c1};
    transition: all .5s ease-in;
    border-bottom: 2px solid;
    border-color: ${props => props.theme.c2};
    `

export const LeftSection = styled.div`
    display: flex;
    gap: 1em;

`

export const RightSection = styled.div`
    margin-left: auto;
`