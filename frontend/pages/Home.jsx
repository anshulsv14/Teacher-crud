import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import myimg from "/src/h1.jpg"
const Home = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myimg}
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h2 style={{color:"white"}} >Watch Anime's</h2>
          <p style={{color:"white"}} >Get the best experience by watching anime on H! Anime</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src="images/1.jpeg"
          alt="Second slide"
          
        />
        <Carousel.Caption>
        <h2 style={{color:"white"}} >Watch Anime's</h2>
        <p style={{color:"white"}} >Get the best experience by watching anime on H! Anime</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="images/1.jpeg"
          alt="Third slide"
          
        />
        <Carousel.Caption>
        <h2 style={{color:"white"}} >Watch Anime's</h2>
        <p style={{color:"white"}} >Get the best experience by watching anime on H! Anime</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home
