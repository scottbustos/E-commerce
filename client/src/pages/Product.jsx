import styled from "styled-components"
import Newsletter from "../components/Newsletter"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Container = styled.div``

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
