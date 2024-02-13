import Image from 'next/image';
import React from 'react';
export default function Pta4uQuality() {
  return (
    <div className={'container h-full mx-auto px-5'}>
      <div className={'flex flex-col justify-center items-center'}>
        <h1
          className={
            'text-[18px] leading-[22px] lg:text-[30px] font-semibold lg:leading-[36px] text-center'
          }>
          Качество – наш приоритет!
        </h1>
        <p
          className={
            'text-[14px] leading-[18px] lg:text-[18px] lg:leading-5 text-[#747373] text-center max-w-[840px] mt-[20px]'
          }>
          По результатам пороса 2022г, более 3000 постоянных клиентов выбирают Полиглот и ценят
          сотрудничество с нами за качество сервиса и качество предоставляемых услуг.
        </p>
        <div className={'flex flex-col lg:flex-row gap-6 mt-[22px] lg:mt-[44px] w-full'}>
          <div className={'bg-[#F2F2F2] rounded-[30px] p-[40px] flex-1'}>
            <div className={'flex justify-end'}>
              <Image
                src={'/images/quality/Rectangle 778.png'}
                alt={'img'}
                width={288}
                height={185}
              />
            </div>
            <div className={'mt-[36px] lg:p-5'}>
              <h3
                className={
                  'text-[16px] leading-[22px] lg:text-[18px] lg:leading-[26px] font-semibold'
                }>
                <span className={'text-[#F55751]'}>Гарантия</span> качества
              </h3>
              <p className={'mt-4 text-[14px] lg:text-[16px] lg:leading-[22px]'}>
                Каждый перевод от справки до технической документации проходит многоступенчатую
                систему проверки. Переводом узкоспециализированной документации занимается команда
                отраслевых переводчиков.
              </p>
            </div>
          </div>
          <div className={'bg-[#F2F2F2] rounded-[30px] p-[40px] flex-1'}>
            <div className={'flex justify-end'}>
              <Image
                className={'rounded-[20px]'}
                src={'/images/quality/image 1062.png'}
                alt={'img'}
                width={288}
                height={185}
              />
            </div>
            <div className={'mt-[36px] lg:p-5'}>
              <h3
                className={
                  'text-[16px] leading-[22px] lg:text-[18px] lg:leading-[26px] font-semibold'
                }>
                <span className={'text-[#F55751]'}>Строгий контроль</span> соблюдения сроков
              </h3>
              <p className={'mt-4 text-[14px] lg:text-[16px] lg:leading-[22px]'}>
                Мы понимаем, насколько важно соблюдать договоренности о сроках сдачи заказа.
                Перевод, не выполненный в срок, может стать попросту не нужен. Мы адекватно
                оцениваем сроки и строго их соблюдаем.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
