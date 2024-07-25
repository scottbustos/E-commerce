import styled from "styled-components"
import {mobile} from "../Responsive"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: = 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh", width: "100vw"})}


`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
