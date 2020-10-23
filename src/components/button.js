import React from 'react'
import styled from 'styled-components'

const Container = styled.button`

`

const Button = ({ onClick=null }) => (
    <Container onClick={onClick}>Shake</Container>
)

export default Button
