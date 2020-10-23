import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid #000;
    width: 200px;
    height: 300px;
    border-radius: 4px;
    margin: auto;
`

const Jar = ({ value=0 }) => (
    <Container>
        <h2>Jar</h2>
        <p>Pennies: {value}</p>
    </Container>
)

export default Jar
