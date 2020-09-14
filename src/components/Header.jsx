import React from 'react'
import styled from 'styled-components'

const AppHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

export default function Header() {
    return (
        /*  <AppHeader as='a'  will change header to a tag*/
        <AppHeader colored>
            <h1>List of Lena's movies</h1>
            <h2>5 posts, watched 0, liked 0</h2>
        </AppHeader>
    )
}
