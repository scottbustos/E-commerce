import { Search, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import GlobalStyle from '../globalStyle'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px"})};
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px"})};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})};
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
    ${mobile({ width: "50px"})}
`

const Center = styled.div`
    text-align: center;
    flex: 1;
`
const Logo = styled.h1`
    ${mobile({ fontSize: "24px"})}
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    ${mobile({ flex: 2, justifyContent: "center"})}
`
const Menuitem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
  return (
    <>
    <GlobalStyle/>
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <Searchcontainer>
                    <Input placeholder = "Search"/>
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
    </>
  )
}

export default Navbar
