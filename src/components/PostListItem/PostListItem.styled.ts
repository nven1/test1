import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Comments = styled(Link)`
    color: ${props => props.theme.t1};
    text-decoration-color: transparent;
    
    &:hover {
        transition: .3s;
        text-decoration-color: ${props => props.theme.t1};

    }
    `