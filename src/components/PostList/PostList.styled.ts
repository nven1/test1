import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr max-content;
    overflow: hidden;
`

export const StyledPaginate = styled.div`
    .Paginate {
        background-color: ${props => props.theme.c1};
        list-style-type: none;
        display: flex;
        gap: 1em;
        justify-content: center;
        align-items: center;
        padding: 1em 0;
        margin: 0;
        transition: all .5s ease-in;
        user-select: none;
        border-top: 2px solid;
        border-color: ${props => props.theme.c2};

        &__button, &__navigationButton {
            display: flex;
            place-content: center;
            place-items: center;
            background: ${props => props.theme.c2};
            border-radius: 12px;
            transition: all .5s ease-in, border-radius .1s ease-in;
            cursor: pointer;
            color: ${props => props.theme.t3};
            &:hover {
                border-radius: 16px;
                background: ${props => props.theme.c3};
            }
        }

        &__button {
            min-height: 2em;
            min-width: 2em;
        }

        &__navigationButton {
            min-height: 2em;
            padding: 0 1em;
            color: ${props => props.theme.t2};

        }
        &__activePage {
            background: ${props => props.theme.c3};
            color: ${props => props.theme.t1};
        }

        &__break {
            color: ${props => props.theme.t3};
        }


    }
`

