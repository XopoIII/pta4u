'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import React from 'react';
import { IHeroSlide } from '../types';

interface IProps {
  slides: IHeroSlide[];
}
export default function Pta4uHeroSlider({ slides }: IProps) {
  return (
    <div className={'w-full pta4u-hero-slider'}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Pagination]}
        pagination={true}>
        {slides.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div className={'h-[229px] lg:h-[500px] w-auto relative rounded-[30px] truncate'}>
                <div
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(61, 48, 56, 0.70) 13.04%, rgba(21, 18, 35, 0.00) 70.45%)'
                  }}
                  className={
                    'w-full h-full z-50 top-0 left-0 absolute p-[28px] lg:p-[70px] flex flex-col justify-end'
                  }>
                  <div className={'max-w-[530px]'}>
                    <h2
                      className={
                        'text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px] font-semibold'
                      }
                      style={{ textWrap: 'balance' }}>
                      {slide.title}
                    </h2>
                    <p
                      className={
                        'text-white mt-[10px] lg:mt-5 text-[14px] leading-[16px] lg:text-[16px] lg:leading-[20px]'
                      }
                      style={{ textWrap: 'balance' }}>
                      {slide.descriptions}
                    </p>
                  </div>
                </div>
                <img className="object-cover" src={slide.image} alt={'img'} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
