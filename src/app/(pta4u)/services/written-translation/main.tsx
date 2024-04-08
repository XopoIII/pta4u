'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import '../../../globals.css';
import Pta4uQuickBuy from '../../components/pta4u-quick-buy';
import Slider from './Slider';
import arrPrav from './Arrays';
import { arrSecond, arrLeng, sliceSecond } from './Arrays';
import Pta4uReviews from '../../components/pta4u-reviews';

function profServices() {
  return (
    <div className="px-5 bg-[#F2F2F2] mt-[49px] flex flex-col justify-center items-center pt-[36px] pb-[36px] xl:pt-[73px] xl:pb-[40px]">
      <h2 className="text-dark text-[18px] leading-[21.6px] font-semibold text-center pt-[9px] px-6 md:text-xl xl:text-[30px] ">
        Другие профессиональные услуги для вас
      </h2>
      <p className="flex text-[18px] leading-[21.6px] text-[#747373] max-w-[789px] text-center pb-10 pt-6 ">
        Список наших услуг включает в себя профессиональный письменный перевод текстов, документов и
        многое другое.
      </p>
      <div className="flex">
        <Slider />
      </div>
    </div>
  );
}

function renderTranslation(language: string, lang: string) {
  return (
    <div className="flex flex-col w-[72px] lg:w-fit lg:pl-5 md:w-[220px] xl:w-fit">
      <p className="xl:hidden text-[#252627] text-[11px] leading-[12px] font-normal md:text-base xl:text-[18px]">
        {language}
      </p>
      <p className="hidden xl:flex text-[#252627] text-[11px] leading-[12px] font-normal md:text-base xl:text-[18px]">
        {lang}
      </p>
      <span className="text-[#747373] text-[9px] leading-[9.9px] font-normal md:text-[12px] xl:text-[14px]">
        стоимость за стандартную страницу*
      </span>
    </div>
  );
}

function firstTabs() {
  return (
    <>
      <div className=" border-b-[1px] border-[#D0D0D0] mx-  flex justify-between items-center pt-[12px] pb-[16.7px] xl:pt-6 xl:pb-6">
        <div className="flex justify-center items-center gap-2">
          <CiSearch className="text-2xl text-[#9E989B]" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Найти язык"
            className="xl:hidden outline-none max-w-[150px] placeholder:text-[14px]"
          />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Найти язык, например, португальский"
            className="hidden xl:flex outline-none w-[750px] placeholder:text-[16px]"
          />
        </div>
        <div className="flex justify-center items-center gap-[2.5px]">
          <p className="xl:hidden text-[14px] font-normal leading-[17px] text-right">По алфавиту</p>
          <p className="hidden xl:flex text-[16px] font-normal leading-[17px] text-right text-[#9E989B] gap-1">
            Упорядочить по: <span className="text-[#252627]">Алфавиту</span>
          </p>
          <IoIosArrowDown className="text-base xl:text-[18px]" />
        </div>
      </div>
      <div className="py-2 border-b-[1px] border-[#D0D0D0] px-5 flex justify-between items-start xl:py-5 xl:pt-3 relative xl:px-2">
        <p className="xl:hidden text-[11px] leading-[13.2px] font-normal min-w-[95px] text-dark  md:text-base">
          Язык
        </p>
        <p className="hidden xl:flex text-[18px] leading-[21.2px] font-normal min-w-[95px] text-dark  md:text-base xl:pb-[14px]">
          Наименование языка
        </p>
        <div className="xl:absolute left-[365px] pr-4 md:pl-[115px] md:pr-0 xl:pl-0 lg:pl-[115px] ">
          {renderTranslation('Перевод на русский', 'С иностранного на русский язык ')}
        </div>
        <div className="xl:absolute left-[720px] pr-2 md:pr-2 xl:pr-0 lg:pr-6 xl:pr-0">
          {renderTranslation('Перевод на иностранный', 'С русского языка на иностранный ')}
        </div>
        <p className="text-[10px] w-[36.5px] xl:w-0"></p>
      </div>
      <div className=" border-b-[1px] border-[#D0D0D0] ml-2 flex flex-col xl:pt-5">
        {arrLeng.map((item) => (
          <div
            key={item.id}
            className={`div hover:bg-[#F2F2F2] xl:py-1 flex justify-between items-start ${item.id === Number(arrLeng.length) ? 'pb-[6px]' : ''} ${item.id !== arrLeng.length ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''}`}>
            <div className="w-[95px] xl:flex xl:gap-1">
              <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.title}</h3>
              <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.name}</h3>
            </div>
            <p className="text-[13px] text-dark leading-[23px] md:text-base xl:pl-3">
              от {item.russia} руб.
            </p>
            <p className="text-[13px] text-dark leading-[23px] md:text-base">
              от {item.another} руб.
            </p>
            <button className="xl:hidden rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base  md:px-3 mr-2 px-1 md:mr-0">
              Заказ
            </button>
            <Link href={'/contacts'}>
              <button className="hidden xl:flex rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base px-4 hover:text-white">
                Заказать
              </button>
            </Link>
          </div>
        ))}
        <div className="hidden xl:flex flex-col">
          {arrLeng.map((item) => (
            <div
              key={item.id}
              className={`div hover:bg-[#F2F2F2] xl:py-1 flex justify-between items-start ${item.id === Number(arrLeng.length) ? 'pb-[6px]' : ''} ${item.id !== arrLeng.length ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''}`}>
              <div className="w-[95px] xl:flex xl:gap-1">
                <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.title}</h3>
                <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.name}</h3>
              </div>
              <p className="text-[13px] text-dark leading-[23px] md:text-base xl:pl-3">
                от {item.russia} руб.
              </p>
              <p className="text-[13px] text-dark leading-[23px] md:text-base">
                от {item.another} руб.
              </p>
              <button className="xl:hidden rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base  md:px-3">
                Заказ
              </button>
              <Link href={'/contacts'}>
                <button className="hidden xl:flex rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base px-4 hover:text-white">
                  Заказать
                </button>
              </Link>
            </div>
          ))}
          {arrLeng.slice(11, 16).map((item) => (
            <div
              key={item.id}
              className={`div hover:bg-[#F2F2F2] xl:py-1 flex justify-between items-start ${item.id === Number(arrLeng.length) ? 'pb-[6px]' : ''} ${item.id !== arrLeng.length ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''}`}>
              <div className="w-[95px] xl:flex xl:gap-1">
                <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.title}</h3>
                <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.name}</h3>
              </div>
              <p className="text-[13px] text-dark leading-[23px] md:text-base xl:pl-3">
                от {item.russia} руб.
              </p>
              <p className="text-[13px] text-dark leading-[23px] md:text-base">
                от {item.another} руб.
              </p>
              <button className="xl:hidden rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base  md:px-3">
                Заказ
              </button>
              <Link href={'/contacts'}>
                <button className="hidden xl:flex rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base px-4 hover:text-white">
                  Заказать
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:flex flex-col items-center ">
        <div className="mt-[46px] xl:mt-[75px] xl:mb-[38px] flex flex-col items-start justify-center xl:w-[790px]">
          <h2 className="text-[14px] ml-[20px] leading-[16.8px] text-dark font-semibold md:text-xl xl:text-[22px] xl:leading-[26.4px] xl:ml-0 ">
            Примечание
          </h2>
          <div className="ul flex mx-5 pt-[12px] flex-col gap-4 xl:pt-6 xl:mx-0">
            {arrPrav.map((item, i) => (
              <div key={i} className="flex justify-center items-start gap-4">
                <div className="bg-[#D9D9D9] w-2 h-2 rounded-full lg:mt-[6px]" />
                <p
                  key={item.id}
                  className="li list-disc leading-[15.6px] text-[13px] text-dark font-normal md:text-base xl:leading-[20.2px] lg:w-[745px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function secondTabs() {
  return (
    <>
      <div className="hidden md:flex pt-[30px] px-5 xl:px-0 flex-col gap-8 xl:pt-8">
        {arrSecond.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between ${item.id !== arrSecond.length ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''} pb-3  xl:pb-8 ${item.id === arrSecond.length ? 'xl:pb-[6px] ' : ''}`}>
            <h2 className="text-dark text-[14px] font-semibold leading-[16.8px] md:text-base xl:text-[24px] xl:font-normal">
              {item.name}
            </h2>
            <div className=" md:max-w-[400px] xl:max-w-[586px]">
              <p className="text-dark text-[13px] font-normal leading-[15.6px] md:text-[14px] xl:text-base xl:leading-[19.2px]">
                {item.title}
              </p>
              <Link href={'/contacts'}>
                <button
                  className={`${item.id !== arrSecond.length - 2 ? 'text-[#F55751] ' : 'text-dark'} pt-[10px] underline underline-offset-4 xl:mt-1`}>
                  Заказать
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex pt-[30px] px-5 flex-col gap-6">
        {sliceSecond.map((item) => (
          <div
            key={item.id}
            className={`flex flex-wrap justify-between ${item.id !== 4 ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''} pb-3`}>
            <h2 className="text-dark text-[14px] font-semibold leading-[16.8px]">{item.name}</h2>
            <div className="pt-3">
              <p className="text-dark text-[13px] font-normal leading-[15.6px]">{item.title}</p>
              <Link href={'/contacts'}>
                <button
                  className={`${item.id !== arrSecond.length - 2 ? 'text-[#F55751]' : 'text-dark'} pt-[10px]`}>
                  Заказать
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('first');

  const handleFirstTabClick = () => {
    setSelectedTab('first');
  };

  const handleSecondTabClick = () => {
    setSelectedTab('second');
  };

  return (
    <div className="pt-[34px] xl:pt-[85px] flex flex-col items-center w-full">
      <div className="xl:w-[1200px]">
        <div className="flex justify-center items-center border-b-[1px] border-[#D0D0D0] md:gap-4 xl:gap-10">
          <div
            onClick={handleFirstTabClick}
            className=" cursor-pointer flex flex-col items-center px-5">
            <h3
              className={`${selectedTab === 'first' ? 'text-dark' : 'text-[#747373]'} text-[14px] font-semibold leading-[17px] text-center md:text-xl`}>
              Языки и стоимость перевода
            </h3>
            {selectedTab === 'first' ? (
              <div className="mx-5 mt-[7px] bg-gradient-to-r from-[#F55751] to-[#D83CA3] w-full h-1 xl:scale-125"></div>
            ) : (
              ''
            )}
          </div>
          <div className=" cursor-pointer flex flex-col items-center px-5">
            <h3
              onClick={handleSecondTabClick}
              className={`${selectedTab === 'second' ? 'text-dark' : 'text-[#747373]'} text-[14px] font-semibold leading-[17px] text-center md:text-xl`}>
              Услуги письменного перевода
            </h3>
            {selectedTab === 'second' ? (
              <div className="mx-5 mt-[7px] bg-gradient-to-r from-[#F55751] to-[#D83CA3] w-full h-1 xl:scale-125"></div>
            ) : (
              ''
            )}
          </div>
        </div>
        {selectedTab === 'first' ? firstTabs() : secondTabs()}
      </div>
      <div className={`w-full ${selectedTab === 'second' ? 'mt-0' : 'mb-10'}`}>
        {profServices()}
      </div>
      <div className={` ${selectedTab === 'second' ? 'lg:pt-16' : 'lg:pt-6'} w-[340px] sm:w-full`}>
        <Pta4uReviews />
      </div>
      <div className="pt-[54px] px-5 md:mt-[35px] pb-10 xl:pb-20">
        <Pta4uQuickBuy />
      </div>
    </div>
  );
};

export default Main;
