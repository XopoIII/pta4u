'use client';
import React, { useState, StrictMode } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
const arrServices = [
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
  }
];

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="overflow-scroll">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            position: 'absolute',
            right: 0,
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30
          },
          children: <span>{`>`}</span>
        }}
        backwardBtnProps={{
          style: {
            position: 'absolute',
            alignSelf: 'center',
            left: 0,
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30
          },
          children: <span>{`<`}</span>
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768
          }
        ]}
        speed={400}
        easing="linear">
        {arrServices.map((item, _) => (
          <div key={item.id} className="flex flex-col justify-center items-center w-[500px]">
            <img
              src={item.url}
              alt="logo"
              className=" shrink rounded-[30px] h-[170px] w-[335px] object-cover md:w-[450px] md:h-[220px] z-0"
            />
            <p className="text-dark text-[14px] leading-[19.6px] w-[250px] pt-[10px] font-normal text-center cursor-pointer  md:text-base md:w-fit">
              {item.title}
            </p>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
};

export default Slider;
