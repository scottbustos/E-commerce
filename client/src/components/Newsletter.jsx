import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    border: 1px solid #d3d3d3;
`
const Input = styled.input`
    border: none;
    flex: 8;

`
const Button = styled.button`
    flex: 1;

`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get updates from your favorite clothing brand.</Desc>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
