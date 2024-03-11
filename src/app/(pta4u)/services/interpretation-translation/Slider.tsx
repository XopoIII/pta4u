import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  {
    id: 1,
    title: 'Письменный перевод любой документации и текстов',
    url: '/images/services/image1056.png'
  },
  {
    id: 2,
    title: 'Нотариальное заверение перевода',
    url: '/images/services/image1055.png'
  },
  {
    id: 3,
    title: 'Апостиль для документов ',
    url: '/images/services/Rectangle613.png'
  },
  {
    id: 1,
    title: 'Письменный перевод любой документации и текстов',
    url: '/images/services/image1057.png'
  },
  {
    id: 2,
    title: 'Нотариальное заверение перевода',
    url: '/images/services/Rectangle614.png'
  },
  {
    id: 3,
    title: 'Апостиль для документов ',
    url: '/images/services/Rectangle615.png'
  }
];

const Slider = () => {
  return (
    <div className="parent w-[384px] lg:w-[1200px]">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider flex flex-col items-center gap-5" key={index}>
              <img src={imageUrl.url} alt="movie" />
              <span className="text-center text-[18px] font-normal">{imageUrl.title}</span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
