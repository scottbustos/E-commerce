import { Search, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Searchcontainer = styled.div`
    display: flex;
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
    align-items: center;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    text-align: center;
    flex: 1;
`
const Logo = styled.h1`

`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`
const Menuitem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <Searchcontainer>
                    <Input/>
                    <Search style= {{color:"gray", fontSize:16}}/>
                </Searchcontainer>
            </Left>
            <Center><Logo>OLLIE.</Logo></Center>
            <Right>
                <Menuitem>REGISTER</Menuitem>
                <Menuitem>SIGN IN</Menuitem>
                <Menuitem>
                <Badge badgeContent={2} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
                </Menuitem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
