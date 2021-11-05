import styled from 'styled-components'

export const AppContainer = styled.div`
    height: 100vh;
    overflow-y: hidden;
    display: grid;
    grid-template-rows: max-content 1fr;

    @media (max-width: 300px) {
        font-size: .8em;
    }
    `

