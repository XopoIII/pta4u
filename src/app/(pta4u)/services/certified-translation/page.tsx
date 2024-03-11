import { Metadata } from 'next/types';
import React from 'react';
import { arrCost } from '../written-translation/Arrays';
import Object from './Object';
import { objText } from '../written-translation/Arrays';
import ProfServices from './Main';
import Pta4uReviews from '../../components/pta4u-reviews';
import Pta4uQuickBuy from '../../components/pta4u-quick-buy';
import Pta4uPayments from '../../components/pta4u-payments';

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you | service two',
  description: 'Polyglot - translation agency for you'
};

function mainFunc() {
  return (
    <div className="px-5 flex flex-col gap-[9px] xl:gap-[112px] xl:px-0 items-center justify-center md:flex-row-reverse relative xl:max-w-[1280px] pt-4 xl:pt-10 ">
      <div className="md:hidden flex max-h-[171px] max-w-[335px] overflow-hidden rounded-[30px] md:w-[400px] md:h-[200px]">
        <img
          src="/images/services/image1055.png"
          alt="service"
          className="rounded-[30px] w-[400px] scale-[130%]"
        />
      </div>
      <img
        src="/images/services/image1055.png"
        alt="service"
        className="hidden md:block rounded-[30px] xl:w-[588px] xl:h-[426px] xl:mt-[10px] xl:mr-2 xl:mb-12"
      />
      <div className="flex justify-center items-center xl:items-start flex-col gap-3 xl:gap-0 md:max-w-[400px] xl:max-w-[510px] xl:pt-[66px] xl:pl-2">
        <span className="hidden md:flex text-[#9E989B] text-[14px] left-0 xl:absolute xl:top-16 xl:pl-2">
          Главная → Нотариальное заверение перевода
        </span>
        <h2 className="leading-[28.6px] text-[22px] font-semibold text-center xl:text-[45px] xl:leading-[54px] xl:text-start">
          Нотариальное заверение перевода
        </h2>
        <p className="leading-[18.2px] text-[14px] xl:w-[532px] xl:leading-[21.6px] xl:pt-[29px] font-normal text-center xl:text-[18px] xl:text-start xl:pb-6 xl:pl-1">
          Письменный перевод, выполненный нашими переводчиками, может быть заверен нотариально или
          печатью бюро переводов. Для заверения уже имеющегося у Вас перевода необходимо сначала
          заказать услугу проверки его правильности.
        </p>
        <button
          className="w-[200px] h-[50px] flex xl:mt-[45px] justify-center items-center text-white text-[14px]
                leading-[17px] mt-1 font-semibold bg-gradient-to-r from-[#F55751] to-[#D83CA3] rounded-[50px] xl:mb-12">
          Сделать расчет
        </button>
      </div>
    </div>
  );
}

export default function ServicesTowPage() {
  return (
    <div className={'h-full mx-auto flex flex-col items-center'}>
      {mainFunc()}
      <div className="bg-[#F2F2F2] flex flex-col justify-center items-center w-full px-5 py-8 mt-9 lg:py-14 xl:pt-[46px] xl:pl-4">
        <div>
          <h2 className="text-dark font-semibold md:text-2xl md:leading-[28.8px] text-[18px] pt-1 sm:pt-0 w-[310px] pl-3 sm:pl-0 sm:w-fit leading-[21.8px] text-center lg:text-2xl lg:text-start lg:w-fit">
            Стоимость заверения перевода за документ
          </h2>
          <div className="flex justify-center items-center gap-5 pt-6 xl:pt-8">
            {arrCost.map((item, i) => (
              <div
                key={`arr-${i}`}
                className="bg-white rounded-3xl px-3 pt-5 pb-4 md:w-[354px] lg:pl-7 lg:w-[384px] lg:pt-6 lg:pb-8">
                <h2 className=" text-sm text-dark leading-[16.8px] font-normal w-[128px] md:w-full lg:text-base">
                  {item.name}
                </h2>
                <p className=" text-lg text-dark leading-[21px] font-semibold pt-1 lg:text-2xl ">
                  {item.cost} руб.
                </p>
                <button className="mt-4 text-[#F55751]  underline underline-offset-4">
                  Заказать
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Object objText={objText} />
      </div>
      <div className="w-full pb-10">
        <ProfServices />
      </div>
      <div className="lg:pt-5  w-[340px] sm:w-full">
        <Pta4uReviews />
      </div>
      <div className="pt-[54px] px-5 md:mt-[35px] pb-10">
        <Pta4uQuickBuy />
      </div>
      <Pta4uPayments />
    </div>
  );
}
