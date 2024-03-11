'use client';
import React from 'react';
import Slider from '../written-translation/Slider';

function ProfServices() {
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

export default ProfServices;
