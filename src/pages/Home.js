import React from 'react'
import  './Home.css'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import Card from '../components/Card'
import backgroundimage from '../assets/backgroundimage.jpg'
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.webp'
import i3 from '../assets/i3.webp'
import i4 from '../assets/i4.webp'
import i5 from '../assets/i5.jpeg'
import i6 from '../assets/i6.jpeg'
import i7 from '../assets/i7.jpg'
import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.png'
import m5 from '../assets/m5.jpg'
import m6 from '../assets/m6.webp'


const Home = () => {
  const cardData = [
    {
      image: backgroundimage,
      title: 'Modern House',
      text: 'A beautiful modern house with stunning architecture.',
    },
    {
      image: i1,
      title: 'Cozy Cottage',
      text: 'A cozy cottage perfect for a relaxing getaway.',
    },
    {
      image: i2,
      title: 'Luxury Villa',
      text: 'Experience luxury living in a stunning villa.',
    },
    {
      image: i3,
      title: 'Urban Loft',
      text: 'An urban loft designed for modern living.',
    },
    {
      image: i4,
      title: 'Beach House',
      text: 'A beach house with breathtaking ocean views.',
    },
    {
      image:i5,
      title: 'Rustic Farmhouse',
      text: 'A rustic farmhouse surrounded by nature.',
    },
    {
      image: i2,
      title: 'Rustic Farmhouse',
      text: 'A rustic farmhouse surrounded by nature.',
    },
    {
      image: i4,
      title: 'Rustic Farmhouse',
      text: 'A rustic farmhouse surrounded by nature.',
    },
    {
      image: i3,
      title: 'Rustic Farmhouse',
      text: 'A rustic farmhouse surrounded by naturelorew.',
    },
  ];

  return (
    <div>
      <Carousel/>
      <div className="d-flex flex-wrap justify-content-center">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} text={card.text} />
        ))}
      </div>
      <div className="image-cards-container">
      <div className="image-card">
        <img className="card-img" src={m1} alt="Card Image 1" />
      </div>
      <div className="image-card">
        <img className="card-img" src={m2} alt="Card Image 2" />
      </div>
      <div className="image-card">
        <img className="card-img" src={m3} alt="Card Image 3" />
      </div>
      <div className="image-card">
        <img className="card-img" src={m4} alt="Card Image 4" />
      </div>
      <div className="image-card">
        <img className="card-img" src={m6} alt="Card Image 5" />
      </div>
    </div>
      <Banner/>
    </div>
  )
}

export default Home