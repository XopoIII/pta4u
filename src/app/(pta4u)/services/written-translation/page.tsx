import { Metadata } from 'next/types';
import Pta4uPayments from '../../components/pta4u-payments';
import Main from './main';
import React from 'react';

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you | service one',
  description: 'Polyglot - translation agency for you'
};

export default function ServicesOnePage() {
  return (
    <div className="pt-[14px] flex flex-col items-center xl:pt-[50px]">
      <div className="px-5 flex flex-col gap-[9px] xl:gap-[112px] xl:px-0 items-center justify-center md:flex-row-reverse relative xl:max-w-[1200px]">
        <div className="md:hidden flex max-h-[171px] max-w-[335px] overflow-hidden rounded-[30px] md:w-[400px] md:h-[200px]">
          <img
            src="../images/services/image1056.png"
            alt="service"
            className="rounded-[30px] max-w-[300px] scale-[130%]"
          />
        </div>
        <img
          src="../images/services/image1056.png"
          alt="service"
          className="hidden md:block rounded-[30px] xl:w-[588px] xl:h-[426px]"
        />
        <div className="flex justify-center items-center xl:items-start flex-col gap-3 xl:gap-0 md:max-w-[400px] xl:max-w-[510px] xl:pt-8 relative">
          <span className="hidden md:flex text-[#9E989B] text-[14px] left-0 xl:absolute xl:top-3">
            Главная → Письменный перевод
          </span>
          <h2 className="leading-[28.6px] text-[22px] font-semibold text-center xl:text-[45px] xl:leading-[54px] xl:text-start xl:pt-5">
            Письменный перевод любой документации и текстов
          </h2>
          <p className="leading-[18.2px] text-[14px] xl:max-w-[442px] xl:leading-[31px] xl:pt-[29px] font-normal text-center xl:text-[18px] xl:text-start">
            Переведём любые документы: от свидетельства о рождении до юридических документов и
            технических инструкций.
          </p>
          <button
            className="w-[200px] h-[50px] flex xl:mt-[39px] justify-center items-center text-white text-[14px]
                leading-[17px] mt-1 font-semibold bg-gradient-to-r from-[#F55751] to-[#D83CA3] rounded-[50px]">
            Сделать расчет
          </button>
        </div>
      </div>
      <Main />
      <Pta4uPayments />
    </div>
  );
}
