'use client';
import { useCallback, useState } from 'react';
import Slider from '../written-translation/Slider';
import { arrServices, slice } from '../written-translation/Arrays';

function ProfServices() {
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
          ? arrServices.map((item: any) => (
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
          : slice.map((item: any) => (
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

export default ProfServices;
