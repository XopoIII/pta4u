'use client';
import React from 'react';
import SetBreadcrumbs from '../../../store/setBreadcrumbs';
import Pta4uBreadcrumbs from '../components/pta4u-breadcrumbs';
import Link from 'next/link';
import Pta4uReviews from '../components/pta4u-reviews';
import Pta4uQuickBuy from '../components/pta4u-quick-buy';
import Pta4uPayments from '../components/pta4u-payments';
import { IBreadcrumbs } from '../types';

const breadcrumbs: IBreadcrumbs[] = [
  { title: 'Главная', sort: '0', url: '/' },
  { title: 'Контакты', sort: '1' }
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
          Контактная информация
        </h1>
        <p
          className={
            'mt-[10px] lg:mt-[18px] text-[#747373] max-w-[996px] mx-auto text-center text-[14px] lg:text-[18px] leading-[18px] lg:leading-[22px]'
          }>
          Вы можете связаться с нами любым удобным для вас способом
        </p>
        <div className={'mt-[30px]'}>
          <div className={'flex flex-col lg:flex-row align-center justify-center gap-[25px]'}>
            <div
              className={
                'w-full px-[30px] py-[25px] bg-[#F2F2F2] rounded-[20px] flex flex-col lg:flex-row gap-[20px] justify-between'
              }>
              <div className={'text-[16px]'}>
                <div className={'pb-[8px]'}>Телефон</div>
                <div className={'text-[24px] font-semibold pb-[28px]'}>+7 902 480 0262</div>
                <div className={'font-semibold text-[#48B04C]'}>
                  <Link
                    className={'flex gap-[9px]'}
                    href="https://wa.me/79024800262"
                    target="_blank">
                    <span
                      className={
                        'flex align-center justify-center w-[26px] h-[26px] bg-[#FFFFFF] p-[4px] rounded-[6px]'
                      }>
                      <img src={'/images/icons/wp.svg'} alt={'wp'} />
                    </span>
                    Связаться по WhatsApp
                  </Link>
                </div>
              </div>
              <div className={'text-[16px]'}>
                <div className={'pb-[8px]'}>Электронная почта</div>
                <div className={'text-[24px] font-semibold pb-[28px]'}>info@pta4u.ru</div>
                <div className={'font-semibold text-[#F55751]'}>
                  <Link className={'flex gap-[9px]'} href="mailto:info@pta4u.ru" target="_blank">
                    <span
                      className={
                        'flex align-center justify-center w-[26px] h-[26px] bg-[#FFFFFF] p-[4px] rounded-[6px]'
                      }>
                      <img src={'/images/icons/mail.svg'} alt={'mail'} />
                    </span>
                    Отправить сообщение
                  </Link>
                </div>
              </div>
            </div>
            <div className={'w-full px-[30px] py-[25px] bg-[#F2F2F2] rounded-[20px]'}>
              <div className={'text-[16px] pb-[12px]'}>Адрес</div>
              <div className={'text-[18px] font-semibold'}>
                Владивосток, пр-т Красного знамени,3 (Бизнес Центр «Игнат»), 10 этаж, офис 102
              </div>
            </div>
          </div>
          <div className={'w-full mt-[41px]'}>
            <iframe
              className={'rounded-[30px]'}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa452441c884e219c017024d0fdd0baffb7e0f098ed41b43530ca66bc57582b7e&amp;source=constructor"
              width="100%"
              height="500"></iframe>
          </div>
        </div>
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
