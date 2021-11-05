// import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardPage = styled.div`
    display: grid;
    gap: 2em;
    overflow-y: scroll;
    padding: 5vw;
    max-width: 90vw;
    background-color: ${props => props.theme.c2};
    transition: all .5s ease-in;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: max-content;
    box-shadow: ${props => props.theme.shadow};
    border-radius: 8px;
    background-color: ${props => props.theme.c1};
    transition: all .5s ease-in;
`

export const CardMain = styled.div`
    display: grid;
    padding: 0 2em 1em;    
    color: ${props => props.theme.t1};
`
export const CardSecondary = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .8em 2em;
    border-radius: 0 0 8px 8px;
    transition: all .5s ease-in;
    background-color: ${props => props.theme.c4};
    color: ${props => props.theme.t3};
`

export const Button1 = styled.button`
    color: white;
    background-color: ${props => props.theme.a1};
    border-color: transparent;
    cursor: pointer;
    padding: 4px 20px;
    border-radius: 100px;
    transition: .2s ease-in;
    font-weight: bold;
    
    &:hover {
        background-color: ${props => props.theme.a2};
    }
`

export const TitleUnderline = styled.h1`
    color: ${props => props.theme.t1};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.a1};

    &:hover {
        transition: .4s;
        text-decoration-color: ${props => props.theme.a2};
    }
`

export const SubtitleUnderline = styled.h2`
    color: ${props => props.theme.t1};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.a1};

    &:hover {
        transition: .4s;
        text-decoration-color: ${props => props.theme.a2};
    }
`