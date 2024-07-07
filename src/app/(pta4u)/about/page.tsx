import React from 'react';
import { Metadata } from 'next';
import SetBreadcrumbs from '../../../store/setBreadcrumbs';
import Pta4uBreadcrumbs from '../components/pta4u-breadcrumbs';
import Pta4uReviews from '../components/pta4u-reviews';
import Pta4uQuickBuy from '../components/pta4u-quick-buy';
import Pta4uPayments from '../components/pta4u-payments';
import Pta4uForYou from '../components/pta4u-for-you';
import { IBreadcrumbs } from '../types';

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you',
  description: 'Polyglot - translation agency for you'
};

const breadcrumbs: IBreadcrumbs[] = [
  { title: 'Главная', sort: '0', url: '/' },
  { title: 'Компания', sort: '1' }
];

export default function AboutPage() {
  return (
    <div className={'mt-[34px] lg:mt-[76px]'}>
      <SetBreadcrumbs breadcrumbs={breadcrumbs} />
      <div className={'container mx-auto px-5'}>
        <div className={'hidden lg:flex justify-center'}>
          <Pta4uBreadcrumbs />
        </div>
        <h1
          className={
            'text-[22px] lg:text-[45px] leading-[28px] lg:leading-[54px] text-center font-semibold lg:mt-[18px]'
          }>
          Компания Polyglot
        </h1>
        <p
          className={
            'mt-[10px] lg:mt-[18px] text-[#747373] max-w-[996px] mx-auto text-center text-[14px] lg:text-[18px] leading-[18px] lg:leading-[22px]'
          }>
          Приглашаем вас на маленькую экскурсию по «Бюро переводов «Полиглот»! Вы узнаете, как мы
          работаем, почему большинство клиентов обращаются к нам повторно и почему доверяют нам.
        </p>
        <div className={'mt-[30px]'}>
          <div>
            <div className={'h-[453px] lg:h-[500px] w-full relative rounded-[30px] truncate'}>
              <img src={'/images/bg-1.png'} alt={'img'} />
              <div
                className="bg-[#3D3038]/[0.4] absolute z-30 top-0 left-0 w-full h-full
              p-[18px] lg:py-[34px] lg:px-[50px] flex flex-col justify-end">
                <div className="flex gap-[12px] lg:gap-[20px] justify-between flex-wrap">
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <img src={'/images/icons/recycle.svg'} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[28px]">
                        &gt; 60
                      </h1>
                      <p className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[14px] max-w-[120px] lg:max-w-none">
                        Языков перевода
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <img src={'/images/icons/doc.svg'} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[28px]">
                        &gt; 150 000
                      </h1>
                      <p
                        className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[14px] max-w-[120px] lg:max-w-none"
                        style={{ whiteSpace: 'wrap' }}>
                        Страниц переведено за 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <img src={'/images/icons/smile.svg'} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[28px]">
                        &gt; 7000
                      </h1>
                      <p
                        className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[14px] max-w-[120px] lg:max-w-none"
                        style={{ whiteSpace: 'wrap' }}>
                        Довольных клиентов за 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[12px] items-start">
                    <img src={'/images/icons/users.svg'} alt={'img'} />
                    <div>
                      <h1 className="text-white text-[18px] leading-[22px] lg:text-[30px] lg:leading-[28px]">
                        &gt; 80
                      </h1>
                      <p
                        className="text-white text-[14px] leading-[16px] lg:text-[16px] lg:leading-[14px] max-w-[120px] lg:max-w-none"
                        style={{ whiteSpace: 'wrap' }}>
                        Профессиональных переводчиков
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] lg:mt-[81px] flex flex-col gap-[20px] lg:gap-[81px]">
          <div className="flex gap-[81px] items-center">
            <div>
              <h1 className="text-[14px] leading-[16px] lg:text-[30px] lg:leading-[36px] font-semibold">
                Забота об удобстве клиента
              </h1>
              <p className="max-w-[560px] mt-[11px] lg:mt-[25px] text-[13px] leading-[16px] lg:text-[16px] lg:leading-[22px]">
                Паспорта и свидетельства о рождении, дипломы и аттестаты, справки и удостоверения и
                т. д. Перевод личных документов потребуется людям, которые приезжают из-за границы в
                Россию. Также перевод нужен, если вы хотите учиться, работать или приобрести
                недвижимость за рубежом. Мы рады помочь вам открыть новую страницу жизни в другой
                стране. Переводим личные документы на 45 языков. Работаем с текстами любой
                сложности. Работу выполняем точно в срок.
              </p>
            </div>
            <div className="hidden lg:block w-[585px] h-[361px] rounded-[30px] relative truncate">
              <img src={'/images/company/image1035.png'} alt={'img'} />
            </div>
          </div>
          <div className="flex gap-[81px] items-center">
            <div className="hidden lg:block w-[585px] h-[361px] rounded-[30px] relative truncate">
              <img src={'/images/company/image1063.png'} alt={'img'} />
            </div>
            <div>
              <h1 className="text-[14px] leading-[16px] lg:text-[30px] lg:leading-[36px] font-semibold">
                Почему нам доверяют
              </h1>
              <p className="max-w-[560px] mt-[11px] lg:mt-[25px] text-[13px] leading-[16px] lg:text-[16px] lg:leading-[22px]">
                Выполняем срочные переводы личных документов. Если вы разместите заказ до 11 утра,
                мы постараемся перевести документы и заверить их у нотариуса в день обращения, хотя
                это не всегда возможно. <br />
                <br />
                Следует учитывать, что некоторые переводы требуют долгой и вдумчивой работы. Для
                сравнения: художественный перевод или перевод инструкции по эксплуатации корабля
                занимает больше времени, чем перевод справки или личных документов. Поэтому если вам
                нужно получить готовый перевод к определённому времени, чем раньше вы обратитесь в
                «Бюро переводов «Полиглот», тем лучше.
              </p>
            </div>
          </div>
        </div>
        <Pta4uForYou />
      </div>
      <div className="mt-[62px]">
        <Pta4uReviews />
      </div>
      <div className="mt-[43px] lg:mt-[72px]">
        <Pta4uQuickBuy />
      </div>
      <div className="mt-[46px] lg:mt-[70px]">
        <Pta4uPayments />
      </div>
    </div>
  );
}
