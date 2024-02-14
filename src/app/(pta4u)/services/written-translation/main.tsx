'use client';
import React, { useCallback, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import '../../../globals.css';
import Pta4uQuickBuy from '../../components/pta4u-quick-buy';
import Slider from './Slider';
import arrPrav from './Arrays';
import {
  arrPhoto,
  slice,
  arrServices,
  arrSecond,
  arrLeng,
  arrReplies,
  sliceSecond
} from './Arrays';
import Pta4uReviews from '../../components/pta4u-reviews';

function profServices() {
  const [active, setActive] = useState(false);

  const handleActive = useCallback(() => setActive((prev) => !prev), []);

  return (
    <div className="px-5 bg-[#F2F2F2] mt-[49px] flex flex-col justify-center items-center pb-[36px] xl:pt-[73px] xl:pb-[85px]">
      <h2 className="text-dark text-[18px] leading-[21.6px] font-semibold text-center pt-[9px] px-6 md:text-xl">
        Другие профессиональные услуги для вас
      </h2>
      <p className="xl:flex hidden text-[18px] leading-[21.6px] text-[#747373] w-[789px] text-center pb-10 pt-5">
        Список наших услуг включает в себя профессиональный письменный перевод текстов, документов и
        многое другое.
      </p>
      <div className=" xl:flex hidden">
        <Slider />
      </div>
      <div className="xl:hidden flex flex-wrap justify-center pt-5 w-full">
        {active === true
          ? arrServices.map((item, _) => (
              <div key={item.id} className="flex flex-wrap justify-center items-center w-[500px]">
                <img
                  src={item.url}
                  alt="logo"
                  className=" shrink rounded-[30px] h-[170px] w-[335px] object-cover md:w-[450px] md:h-[220px] z-0"
                />
                <p className="text-dark text-[14px] leading-[19.6px] w-[250px] pt-[10px] font-normal text-center cursor-pointer  md:text-base md:w-fit">
                  {item.title}
                </p>
              </div>
            ))
          : slice.map((item, _) => (
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
      </div>
      <button
        onClick={handleActive}
        className="xl:hidden w-[200px] h-[50px] flex justify-center items-center text-white text-[14px]
                leading-[17px] mt-[32.5px] font-semibold bg-gradient-to-r from-[#F55751] to-[#D83CA3] rounded-[50px]">
        {active === true ? 'Скрыть' : '  Показать еще'}
      </button>
      <button
        onClick={handleActive}
        className="hidden w-[200px] h-[50px] xl:flex justify-center items-center text-white text-[14px]
                leading-[17px] mt-[32.5px] font-semibold bg-gradient-to-r from-[#F55751] to-[#D83CA3] rounded-[50px]">
        {active === true ? 'Включить Слайдер' : 'Включить Слайдер'}
      </button>
    </div>
  );
}

function renderTranslation(language: string, lang: string) {
  return (
    <div className="flex flex-col w-[72px] md:w-fit">
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
      <div className=" border-b-[1px] border-[#D0D0D0] mx-5  flex justify-between items-center pt-[12px] pb-[16.7px] xl:pt-6">
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
          <pre className="hidden xl:flex text-[16px] font-normal leading-[17px] text-right text-[#9E989B]">
            Упорядочить по: <span className="text-[#252627]">Алфавиту</span>
          </pre>
          <IoIosArrowDown className="text-base xl:text-[18px]" />
        </div>
      </div>
      <div className="py-2 border-b-[1px] border-[#D0D0D0] mx-5 flex justify-between items-start xl:py-5 relative">
        <p className="xl:hidden text-[11px] leading-[13.2px] font-normal min-w-[95px] text-dark  md:text-base">
          Язык
        </p>
        <p className="hidden xl:flex text-[18px] leading-[21.2px] font-normal min-w-[95px] text-dark  md:text-base">
          Наименование языка
        </p>
        <div className="xl:absolute left-[365px]">
          {renderTranslation('Перевод на русский', 'С иностранного на русский язык ')}
        </div>
        <div className="xl:absolute left-[720px]">
          {renderTranslation('Перевод на иностранный', 'С русского языка на иностранный ')}
        </div>
        <p className="text-[10px] w-[36.5px] xl:w-0"></p>
      </div>
      <div className=" border-b-[1px] border-[#D0D0D0] mx-5 flex flex-col xl:pt-5">
        {arrLeng.map((item, _) => (
          <div
            key={item.id}
            className={`div hover:bg-[#F2F2F2] xl:py-1 flex justify-between items-start ${item.id === Number(arrLeng.length) ? 'pb-[6px]' : ''} ${item.id !== arrLeng.length ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''}`}>
            <div className="w-[95px] xl:flex xl:gap-1">
              <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.title}</h3>
              <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.name}</h3>
            </div>
            <p className="text-[13px] text-dark leading-[23px] md:text-base">
              от {item.russia} руб.
            </p>
            <p className="text-[13px] text-dark leading-[23px] md:text-base">
              от {item.another} руб.
            </p>
            <button className="xl:hidden rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base  md:px-3">
              Заказ
            </button>
            <button className="hidden xl:flex rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base px-4 hover:text-white">
              Заказать
            </button>
          </div>
        ))}
        <div className="hidden xl:flex flex-col">
          {arrLeng.map((item, _) => (
            <div
              key={item.id}
              className={`div hover:bg-[#F2F2F2] xl:py-1 flex justify-between items-start ${item.id === Number(arrLeng.length) ? 'pb-[6px]' : ''} ${item.id !== arrLeng.length ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''}`}>
              <div className="w-[95px] xl:flex xl:gap-1">
                <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.title}</h3>
                <h3 className="text-[13px] text-dark leading-[18px] md:text-base">{item.name}</h3>
              </div>
              <p className="text-[13px] text-dark leading-[23px] md:text-base">
                от {item.russia} руб.
              </p>
              <p className="text-[13px] text-dark leading-[23px] md:text-base">
                от {item.another} руб.
              </p>
              <button className="xl:hidden rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base  md:px-3">
                Заказ
              </button>
              <button className="hidden xl:flex rounded-[25px] text-[#747373] text-[13px] leading-[23px] md:text-base px-4">
                Заказать
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:flex flex-col items-center">
        <div className="mt-[46px] xl:mt-[75px] xl:mb-[90px] flex flex-col items-start justify-center xl:max-w-[771px]">
          <h2 className="text-[14px] ml-[20px] leading-[16.8px] text-dark font-semibold md:text-xl xl:text-[22px] xl:leading-[26.4px]">
            Примечание
          </h2>
          <ul className="ul flex mx-9 pt-[12px] flex-col gap-4 xl:pt-10">
            {arrPrav.map((item, _) => (
              <li
                key={item.id}
                className="li list-disc leading-[15.6px] text-[13px] text-dark font-normal md:text-base xl:leading-[19.2px]">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function secondTabs() {
  return (
    <>
      <div className="hidden md:flex pt-[30px] px-5 flex-col gap-6">
        {arrSecond.map((item, _) => (
          <div
            key={item.id}
            className={`flex justify-between ${item.id !== arrSecond.length ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''} pb-3`}>
            <h2 className="text-dark text-[14px] font-semibold leading-[16.8px] md:text-base xl:text-[24px] xl:font-normal">
              {item.name}
            </h2>
            <div className=" md:max-w-[400px]">
              <p className="text-dark text-[13px] font-normal leading-[15.6px] md:text-[14px] xl:text-base">
                {item.title}
              </p>
              <button
                className={`${item.id !== arrSecond.length - 2 ? 'text-[#F55751] ' : 'text-dark'} pt-[10px] underline underline-offset-4`}>
                Заказать
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex pt-[30px] px-5 flex-col gap-6">
        {sliceSecond.map((item, _) => (
          <div
            key={item.id}
            className={`flex flex-wrap justify-between ${item.id !== 4 ? 'border-b-[1px] border-[#D0D0D0] border-separate border-dashed' : ''} pb-3`}>
            <h2 className="text-dark text-[14px] font-semibold leading-[16.8px]">{item.name}</h2>
            <div className="pt-3">
              <p className="text-dark text-[13px] font-normal leading-[15.6px]">{item.title}</p>
              <button
                className={`${item.id !== arrSecond.length - 2 ? 'text-[#F55751]' : 'text-dark'} pt-[10px]`}>
                Заказать
              </button>
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
      <div className="xl:w-[1220px]">
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
      <div className="w-full mb-10">{profServices()}</div>
      <Pta4uReviews />
      <div className="pt-[54px] px-5 md:mt-[35px] pb-10">
        <Pta4uQuickBuy />
      </div>
    </div>
  );
};

export default Main;
