import styled from 'styled-components'
import { CardSecondary, SubtitleUnderline } from '../../styled/styled'

export const CardComments = styled(CardSecondary)`
    display: grid;
    padding: 1em 0;
    /* gap: .5em; */
`

export const CommentsTitle = styled(SubtitleUnderline)`
    margin-left: 1em;
`

export const Comment = styled.div`
    background-color: ${props => props.theme.c1};
    padding: 1em;
    margin: 0.5em 1em;
    border-radius: 8px;

    &:hover {
        opacity: .9;
    }
`

export const CommentHeader = styled.span`
    display: flex;
    gap: 0 1em;
    font-size: 1.2em;

    span:nth-of-type(2) {
        font-weight: bold;
        color: ${props => props.theme.t1};
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const CommentBody = styled.span`
    color: ${props => props.theme.t1};
`