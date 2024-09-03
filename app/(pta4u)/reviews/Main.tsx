'use client';
import React, { useState } from 'react';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('second');

  const handleFirstTabClick = () => {
    setSelectedTab('first');
  };

  const handleSecondTabClick = () => {
    setSelectedTab('second');
  };
  return (
    <div className="flex justify-center gap-6 items-center border-b-[1px] border-[#D0D0D0] xl:gap-[250px] md:gap-[200px]">
      <div
        onClick={handleFirstTabClick}
        className=" cursor-pointer flex flex-col items-center px-5 w-[150px]">
        <h3
          className={`${selectedTab === 'first' ? 'text-dark' : 'text-[#747373]'} text-[14px] font-semibold leading-[17px] text-center md:text-xl`}>
          Яндекс
        </h3>
        {selectedTab === 'first' ? (
          <div className="mx-5 mt-[7px] bg-gradient-to-r from-[#F55751] to-[#D83CA3] w-[150px] h-1 md:w-[250px]"></div>
        ) : (
          ''
        )}
      </div>
      <div
        onClick={handleSecondTabClick}
        className=" cursor-pointer flex flex-col items-center px-5 w-[150px]">
        <h3
          className={`${selectedTab === 'second' ? 'text-dark' : 'text-[#747373]'} text-[14px] font-semibold leading-[17px] text-center md:text-xl`}>
          2ГИС
        </h3>
        {selectedTab === 'second' ? (
          <div className="mx-5 mt-[7px] bg-gradient-to-r from-[#F55751] to-[#D83CA3] w-[150px] h-1  md:w-[250px]"></div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Main;
