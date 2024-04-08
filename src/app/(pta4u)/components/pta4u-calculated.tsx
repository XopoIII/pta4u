import Pta4uButton from './pta4u-button';
import Link from 'next/link';
import React from 'react';
export default function Pta4uCalculated() {
  return (
    <div className={'container h-full mx-auto px-5'}>
      <div
        className="h-[400px] lg:h-[448px] bg-[url('/images/calculated-bg.jpeg')]
      flex flex-col items-center
      bg-cover rounded-[30px]">
        <img
          className={'mt-[90px] lg:mt-[112px]'}
          src={'/images/icons/logo_white.svg'}
          alt={'logo'}
        />
        <h1
          className={
            'text-center text-white text-[18px] lg:text-[26px] lg:leading-[32px] mt-[14px] font-semibold'
          }>
          PTA – надежный оператор рынка переводческих услуг
        </h1>
        <Link href={'/contacts'}>
          <Pta4uButton className={'w-[276px] lg:w-[343px] mt-[68px]'}>
            Рассчитать стоимость перевода
          </Pta4uButton>
        </Link>
      </div>
    </div>
  );
}
