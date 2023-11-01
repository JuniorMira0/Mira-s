import './Main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

import Banner1 from '../images/Banner1.png';
import Banner2 from '../images/Banner2.png';
import Banner3 from '../images/Banner3.png';
import Banner4 from '../images/Banner4.png';

const images = [Banner1, Banner2, Banner3, Banner4];

export default function Main() {
  const renderCarouselItems = () => {
    return images.map((banner, index) => (
      <Carousel.Item key={index} interval={1500}>
        <img
          className="d-block w-100"
          src={banner}
          alt={`Banner${index + 1}`}
        />
      </Carousel.Item>
    ));
  };

  return (
    <section className="showcase-area">
      <Carousel fade>{renderCarouselItems()}</Carousel>
    </section>
  );
}
