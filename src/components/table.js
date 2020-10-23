import React from 'react'
import styled from 'styled-components'
import Jar from './jar'
import Button from './button'

const Container = styled.div`
    max-width: 500px;
    margin: 25px auto;
    text-align: center;
`

const Table = () => {
    const [pennies, setPennies] = React.useState(100)
    const [removed, setRemoved] = React.useState(0)

    const flipCoin = () => {
        return Math.round(Math.random())
    }

    const shake = () => {
        let heads = 0
        let tails = 0
        
        for (let i = 0; i < pennies; i++) {
            if (flipCoin()) {
                heads++
            } else {
                tails ++
            }
        }

        setPennies(tails)
        setRemoved(removed + heads)
    }

    return (
        <Container>
            <Jar value={removed} />
            <div>
                <h2>Table</h2>
                <p>Pennies: {pennies}</p>
            </div>
            <Button onClick={shake} />
        </Container>
    )
}

export default Table

