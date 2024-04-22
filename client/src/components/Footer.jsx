import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``


const Desc = styled.p`
    margin: 20px 0px;
`


const SocialContainer = styled.div`
    display: flex;
`


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`



const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>OLLIE.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum!
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <FacebookIcon/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <InstagramIcon/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <XIcon/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <PinterestIcon/>
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem><RoomIcon style={{marginRight:"10px", marginLeft:"8px"}}/>
            630 Jonathan Lane , Chicago 60613
        </ContactItem>
        <ContactItem><PhoneIcon style={{marginRight:"10px", marginLeft:"8px"}}/>
            713-555-5032
        </ContactItem>
        <ContactItem><MailOutlineOutlinedIcon style={{marginRight:"10px", marginLeft:"8px"}}/>
            contact@ollie.com
        </ContactItem>
        <Payment src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png"/>
    </Right>

    </Container>
  )
}

export default Footer
