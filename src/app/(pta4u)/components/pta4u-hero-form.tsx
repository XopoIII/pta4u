'use client';
import Pta4uInput from './pta4u-input';
import Pta4uButton from './pta4u-button';
interface IProps {
  className?: string;
}
import React from 'react';
export default function Pta4uHeroForm({ className }: IProps) {
  const classes = [' bg-[#F2F2F2] lg:bg-white pt-[38px] pb-[20px] px-[20px] rounded-[20px]'];
  className && classes.push(className);
  return (
    <div className={classes.join(' ')}>
      <h2 className={'text-[18px] leading-[22px] text-center font-semibold'}>
        Расчет стоимости перевода
      </h2>
      <div className={'mt-[16px] flex flex-col gap-[10px]'}>
        <Pta4uInput placeholder={'Ваше имя'} />
        <Pta4uInput placeholder={'Электронная почта'} />
        <Pta4uInput placeholder={'Телефон'} />
      </div>
      <div
        className={'mt-[10px] flex justify-center'}
        onClick={() => window.open(`https://wa.me/79024800262?text=Здравствуйте.`)}>
        <Pta4uButton>Сделать расчет</Pta4uButton>
      </div>
      <p className={'mt-[36px] text-[12px] leading-[16px] text-[#9E989B] text-center'}>
        Нажимая кнопку «Сделать расчет» вы соглашаетесь с политикой и правилами конфиденциальности
      </p>
    </div>
  );
}
