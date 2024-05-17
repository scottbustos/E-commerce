import styled from "styled-components"
import Newsletter from "../components/Newsletter"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Container = styled.div``
const Wrapper = styled.div``
const ImgContainer = styled.div``
const Image = styled.div``
const InfoContainer = styled.div``


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <ImgContainer>
            <Image src="" />
          </ImgContainer>
          <InfoContainer>
              <Title>Denim Jumpsuit</Title>
              <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum!</Desc>
              <Price>$ 20</Price>
          </InfoContainer>

        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
