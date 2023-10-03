import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Preview() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://chatterboxfilm.com/wp-content/uploads/2023/06/20230627_180113.jpg"
          alt="Party with Freddy Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/FqBxfVoaQAAkAr5.jpg"
          alt="Party with Freddy Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.diaryofanaspiringloser.com/wp-content/uploads/2020/03/100108.jpg"
          alt="Party with Freddy Image 3"
        />
      </Carousel.Item>
      {/* Add more Carousel.Items if needed */}
    </Carousel>
  );
}

export default Preview;
