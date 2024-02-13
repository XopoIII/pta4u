import React from 'react';
import { ObjText } from './types'; // Замените на путь к вашему файлу с типами

const Object: React.FC<{ objText: ObjText }> = ({ objText }) => {
  return (
    <div className="px-5 pt-10 lg:max-w-[1220px]">
      <h2 className="text-dark font-semibold text-sm leading-4 md:text-base  lg:text-2xl">
        {' '}
        {objText.name}
      </h2>
      <div className="pt-4 flex flex-col gap-4">
        {objText.title.map((item, _) => (
          <p key={item.id} className="text-dark font-normal text-[13px] leading-4 lg:text-base">
            {item.paragraph}
          </p>
        ))}
      </div>
      <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base lg:text-2xl">
        {objText.transfer}
      </h2>
      <div className="pt-2 flex flex-col gap-1">
        {objText.transferArr.map((item, _) => (
          <p
            key={item.id}
            className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
            <span className="text-[#999B9D]">—</span> {item.span}
          </p>
        ))}
      </div>
      <h2 className="hidden md:flex pt-7 text-dark font-semibold text-sm leading-4 md:text-base lg:text-2xl">
        {objText.notarius}
      </h2>
      <div className="pt-6 flex flex-col gap-1">
        {objText.notariusArr.map((item, _) => (
          <>
            <div key={item.id} className="flex items-start gap-3">
              <div className="min-w-2 h-2 rounded-full bg-[#F55751] mt-1" />
              <div>
                <h2 className=" font-bold text-sm leading-[16.8px] text-dark md:text-base">
                  {item.title}
                </h2>
                <div className="flex flex-col gap-1 pt-2">
                  {item.titleArr.map((item, _) => (
                    <>
                      <p
                        key={item.id}
                        className={`md:hidden flex text-dark text-[13px] leading-[15.6px] font-normal md:text-sm lg:text-base`}>
                        {item.id < 3 ? item.paragraph : ''}
                      </p>
                      <p
                        key={item.id}
                        className={`md:flex hidden text-dark text-[13px] leading-[15.6px] font-normal md:text-sm lg:text-base`}>
                        {item.paragraph}
                      </p>
                      <p className="text-[14px] font-semibold text-dark leading-[16.7px] md:text-base">
                        {item.paragraph2}
                      </p>
                      <div className="flex flex-col gap-3 pl-5">
                        {item.paragraphArr?.map((item, _) => (
                          <li
                            key={item.id}
                            className="text-[13px] font-normal leading-4 text-dark md:text-sm lg:text-base">
                            {item.title}
                          </li>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <h2 className="hidden md:flex pt-7 text-dark font-semibold text-sm leading-4 md:text-base lg:text-2xl">
        {objText.company}
      </h2>
      <div className="hidden md:flex pt-5  flex-col gap-4 pl-5 ">
        {objText.companyArr.map((item, _) => (
          <div>
            <li className="list-decimal text-[14px] font-semibold text-dark leading-[16.7px] md:text-base">
              {item.li}
            </li>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              {item.span}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Object;
