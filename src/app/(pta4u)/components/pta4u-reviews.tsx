'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Pta4uButton from './pta4u-button';
const images = [
  '/images/sponsors/first.png',
  '/images/sponsors/image1048.png',
  '/images/sponsors/image1049.png',
  '/images/sponsors/second.png',
  '/images/sponsors/image1051.png',
  '/images/sponsors/third.png',
  '/images/sponsors/Vector.png',
  '/images/sponsors/first.png',
  '/images/sponsors/image1048.png',
  '/images/sponsors/image1049.png',
  '/images/sponsors/second.png',
  '/images/sponsors/image1051.png',
  '/images/sponsors/third.png',
  '/images/sponsors/Vector.png'
];
import React from 'react';
export default function Pta4uReviews() {
  return (
    <div className={'container h-full mx-auto px-5 flex flex-col items-center'}>
      <p
        className={
          'text-center text-[14px] leading-[16px] lg:text-[18px] lg:leading-[22px] pb-[30px]'
        }>
        <span className={'text-[#F55751] font-semibold'}>&gt; 2000</span> корпоративных клиентов
        выбирают сервис Polyglot
      </p>
      <div className={'reviews-slider'}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          freeMode={true}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}>
          {images.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="relative" style={{ width: '138px', height: '128px' }}>
                  <img
                    className="object-scale-down"
                    src={image}
                    alt={'alt'}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                    width={138}
                    height={128}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h1 className={'text-[18px] leading-[22px] lg:text-[30px] lg:leading-[36px] font-semibold'}>
        Отзывы Яндекс и 2ГИС
      </h1>
      <p
        className={
          'mt-[20px] text-[14px] leading-[16px] lg:text-[24px] lg:leading-[36px] max-w-[760px] text-center'
        }>
        &quot;Спасибо за оперативность. Сделали перевод с русского на китайский и заверили у
        натариуса.&quot;
      </p>
      <div className={'mt-[16px] lg:mt-[20px]'}>
        <img src={'/images/icons/stars.svg'} alt={'img'} />
      </div>
      <p className={'mt-[10px] text-[14px] lg:text-[18px] font-semibold'}>Татьяна Наглая</p>
      <p className={'mt-[4px] text-[13px] lg:text-[16px] italic font-serif text-[#747373]'}></p>
      <p
        className={
          'mt-[20px] text-[14px] leading-[16px] lg:text-[24px] lg:leading-[36px] max-w-[760px] text-center'
        }>
        &quot;👋Здравствуйте Испанский знают отлично, перевели быстро и у нотариуса заверили, все
        устроило. Так держать💪&quot;
      </p>
      <div className={'mt-[16px] lg:mt-[20px]'}>
        <img src={'/images/icons/stars.svg'} alt={'img'} />
      </div>
      <p className={'mt-[10px] text-[14px] lg:text-[18px] font-semibold'}>Евгений Сорванов</p>
      <p className={'mt-[4px] text-[13px] lg:text-[16px] italic font-serif text-[#747373]'}></p>
      <div className={'mt-[14px] lg:mt-[32px] flex flex-col lg:flex-row gap-[10px] lg:gap-[24px]'}>
        <Pta4uButton type={'outline'}>
          <div className={'text-inherit flex gap-[7px]'}>
            Яндекс отзывы:
            <div className={'text-inherit flex gap-[4px]'}>
              <img src={'/images/icons/star.svg'} alt={'img'} />
              4.7
            </div>
          </div>
        </Pta4uButton>
        <Pta4uButton type={'outline'}>
          <div
            onClick={() =>
              window.open(
                'https://2gis.ru/vladivostok/firm/3518965489901725/tab/reviews?m=131.888823%2C43.129523%2F16'
              )
            }
            className={'text-inherit flex gap-[7px]'}>
            2ГИС отзывы:
            <div className={'text-inherit flex gap-[4px]'}>
              <img src={'/images/icons/star.svg'} alt={'img'} />
              4.9
            </div>
          </div>
        </Pta4uButton>
      </div>
    </div>
  );
}
