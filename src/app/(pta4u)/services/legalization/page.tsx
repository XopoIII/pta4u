import { Metadata } from 'next/types';
import React from 'react';
import { arrCost } from './Arrays';
import ProfServices from './Main';
import Pta4uReviews from '../../components/pta4u-reviews';
import Pta4uQuickBuy from '../../components/pta4u-quick-buy';
import Pta4uPayments from '../../components/pta4u-payments';

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you | service one',
  description: 'Polyglot - translation agency for you'
};

function mainFunc() {
  return (
    <div className="pt-[14px] flex flex-col items-center xl:pt-[50px]">
      <div className="px-5 flex flex-col gap-[9px] xl:gap-[112px] xl:px-0 items-center justify-center md:flex-row-reverse relative xl:max-w-[1200px]">
        <div className="md:hidden flex max-h-[171px] max-w-[335px] overflow-hidden rounded-[30px] md:w-[400px] md:h-[200px]">
          <img
            src="/images/services/Rectangle614.png"
            alt="service"
            className="rounded-[30px] max-w-[300px] scale-[130%]"
          />
        </div>
        <img
          src="/images/services/Rectangle614.png"
          alt="service"
          className="hidden md:block rounded-[30px] xl:w-[588px] xl:h-[426px]"
        />
        <div className="flex justify-center items-center xl:items-start flex-col gap-3 xl:gap-0 md:max-w-[400px] xl:max-w-[510px] xl:pt-8 relative">
          <span className="hidden md:flex text-[#9E989B] text-[14px] left-0 xl:absolute xl:top-3">
            Главная → Консульская легализация
          </span>
          <h2 className="leading-[28.6px] text-[22px] font-semibold text-center xl:text-[45px] xl:leading-[54px] xl:text-start xl:pt-5">
            Консульская легализация
          </h2>
          <p className="leading-[18.2px] text-[14px] xl:max-w-[442px] xl:leading-[31px] xl:pt-[29px] font-normal text-center xl:text-[18px] xl:text-start">
            Для консульской легализации документ должен пройти нотариальную контору, Министерство
            юстиции РФ, КД МИД России и консульство государства, где он будет использоваться.
          </p>
          <button
            className="w-[200px] h-[50px] flex xl:mt-[39px] justify-center items-center text-white text-[14px]
                leading-[17px] mt-1 font-semibold bg-gradient-to-r from-[#F55751] to-[#D83CA3] rounded-[50px]">
            Сделать расчет
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesApostillePage() {
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
        <div className="px-5 pt-10 lg:max-w-[800px] lg:px-0">
          <h2 className="hidden md:flex pt-7 text-dark font-semibold text-sm leading-4 md:text-base lg:text-2xl xl:pt-10">
            Консульская легализация и апостилирование: в чём разница?
          </h2>
          <div className="pt-6 flex flex-col gap-1 xl:pt-7 xl:gap-0">
            <div className="flex items-start gap-3 ">
              <div className="md:flex hidden min-w-2 h-2 rounded-full bg-[#F55751] mt-2"></div>
              <div className="md:hidden flex min-w-2 h-2 rounded-full bg-[#F55751] mt-1"></div>
              <div>
                <h2 className=" font-bold text-sm leading-[16.8px] text-dark md:text-base xl:text-[18px]">
                  Консульская легализация
                </h2>
                <div className="flex flex-col gap-1 pt-2 xl:pt-7">
                  <p className="md:flex hidden text-dark text-[13px] leading-[15.6px] font-normal md:text-sm lg:text-base xl:leading-[19.2px]">
                    Для консульской легализации документ должен пройти нотариальную контору,
                    Министерство юстиции РФ, КД МИД России и консульство государства, где он будет
                    использоваться. Консульская легализация заключается в удостоверении подписи на
                    документе и печати государственного органа. Обычно российские документы
                    легализуются в нотариально заверенных копиях, но есть исключения. Сроки процесса
                    консульской легализации зависят от многих факторов, лучше спросить о них в нашем
                    бюро переводов.
                  </p>
                  <p className="md:flex hidden text-dark text-[13px] leading-[15.6px] font-normal md:text-sm lg:text-base xl:leading-[19.2px]">
                    Для консульской легализации документ должен пройти нотариальную контору,
                    Министерство юстиции РФ, КД МИД России и консульство государства, где он будет
                    использоваться. Консульская легализация заключается в удостоверении подписи на
                    документе и печати государственного органа. Обычно российские документы
                    легализуются в нотариально заверенных копиях, но есть исключения. Сроки процесса
                    консульской легализации зависят от многих факторов, лучше спросить о них в нашем
                    бюро переводов.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 xl:pt-8">
              <div className="md:flex hidden min-w-2 h-2 rounded-full bg-[#F55751] mt-2"></div>
              <div className="md:hidden flex min-w-2 h-2 rounded-full bg-[#F55751] mt-1"></div>
              <div>
                <h2 className=" font-bold text-sm leading-[16.8px] text-dark md:text-base xl:text-[18px]">
                  Апостилирование
                </h2>
                <div className="flex flex-col gap-1 pt-2 xl:pt-7">
                  <p className="md:hidden flex text-dark text-[13px] leading-[15.6px] font-normal md:text-sm lg:text-base">
                    Гаагская конвенция, которая состоялась 5 октября 1961 года, упростила
                    легализацию в странах-участниках этой конвенции. Россия присоединилась к
                    Гаагской конвенции 31 мая 1992 года. Вместо процедуры консульской легализации
                    орган государства, в котором документ был совершён, проставляет штамп —
                    апостиль. Апостиль удостоверяет подлинность подписи, качество, в котором
                    выступает лицо, подписавшее документ, и подлинность печати и штампа, которыми он
                    скреплён. Сроки проставления апостиля в каждом случае следует уточнять у
                    сотрудников бюро переводов.
                  </p>
                  <p className="md:flex hidden text-dark text-[13px] leading-[15.6px] font-normal md:text-sm lg:text-base xl:leading-[19.2px] ">
                    Гаагская конвенция, которая состоялась 5 октября 1961 года, упростила
                    легализацию в странах-участниках этой конвенции. Россия присоединилась к
                    Гаагской конвенции 31 мая 1992 года. Вместо процедуры консульской легализации
                    орган государства, в котором документ был совершён, проставляет штамп —
                    апостиль. Апостиль удостоверяет подлинность подписи, качество, в котором
                    выступает лицо, подписавшее документ, и подлинность печати и штампа, которыми он
                    скреплён. Сроки проставления апостиля в каждом случае следует уточнять у
                    сотрудников бюро переводов.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base lg:text-2xl xl:pt-11">
            Услуги, которые мы предоставляем
          </h2>
          <div className="hidden sm:flex pt-2  flex-col gap-1 xl:gap-0 xl:pt-4">
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Консульская легализация в посольствах;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Легализация документов для Китая;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Легализация документов для ОАЭ;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на аттестат;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на диплом;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на справку из ЗАГСа;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на справку о несудимости;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на справку УМВД;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на судебные решения;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на свидетельство о браке;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на свидетельство о разводе;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на свидетельство о рождении;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> Апостиль на свидетельство о смерти.
            </p>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base lg:text-2xl xl:pt-11">
            Что важно знать перед легализацией документов
          </h2>
          <div className="hidden sm:flex pt-2  flex-col gap-1 xl:gap-0 xl:pt-4">
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> В «Бюро переводов «Полиглот» существует
              услуга истребования документов. Если вам нужно легализовать документ, который
              находится в организации другого города, бюро может запросить этот документ, и вам не
              придётся тратить время на поездки;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> При желании в «Бюро переводов «Полиглот»
              возможна срочная легализация документов, но она будет стоить дороже. О сроках и
              стоимости этой услуги следует спрашивать у сотрудников бюро.
            </p>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base lg:text-2xl xl:pt-11">
            Легализации не подлежат
          </h2>
          <div className="hidden sm:flex pt-2  flex-col gap-1 xl:gap-0 xl:pt-4">
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> документы, целостность которых нарушена;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> документы с исправлениями, приписками,
              стёртыми буквами или пятнами, которые затрудняют чтение документа;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> документы с разночтениями в данных фамилии,
              имени или отчества;
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 md:text-sm lg:text-base">
              <span className="text-[#999B9D]">—</span> заламинированные документы.
            </p>
          </div>
          <h2 className="pt-7 text-dark font-semibold text-sm leading-4 md:text-base  lg:text-2xl">
            Когда требуется легализация документов
          </h2>
          <div className="hidden sm:flex pt-4 flex-col gap-7 xl:gap-0">
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] ">
              Представьте: вы едете в другую страну работать или учиться. Или встретили любовь за
              границей и вступаете в брак в другом государстве. Ещё ситуация: вы с иностранными
              партнёрами открываете компанию за рубежом. В этих и многих других ситуациях за
              границей вас попросят предъявить российские документы об образовании, трудовом стаже,
              семейном положении и другие.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Чтобы документы приняли, их необходимо легализовать — подтвердить, что российские
              документы соответствуют законодательству РФ. Точно так же иностранные документы
              легализуют для предоставления в российские государственные органы. Легализуют документ
              на территории страны, в которой он был выдан или оформлен.
            </p>
            <p className="text-dark font-normal text-[13px] leading-4 lg:text-base xl:leading-[19.2px] xl:pt-7">
              Какие виды легализации существуют и как легализуют документы, чтобы они обрели
              юридическую силу в другой стране, читайте далее.
            </p>
          </div>
        </div>
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
