import React, { useState } from 'react';
import { SliderData } from '../assets/SliderData';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import './carousel.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider mb-5'>
      <AiFillCaretLeft id='left-arrow' onClick={prevSlide} />
      <AiFillCaretRight id='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <LazyLoadImage src={slide.image} alt='travel image'  className='image' effect='blur' placeholderSrc={slide.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
