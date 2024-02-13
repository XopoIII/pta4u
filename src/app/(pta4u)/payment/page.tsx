import { Metadata } from 'next/types';
import Pta4uBreadcrumbs from '../components/pta4u-breadcrumbs';
import SetBreadcrumbs from '../../../store/setBreadcrumbs';
import Pta4uPaymentForm from '../components/pta4u-payment-form';
import Pta4uForYou from '../components/pta4u-for-you';
import React from 'react';
export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you | payment',
  description: 'Polyglot - translation agency for you'
};

const breadcrumbs: IBreadcrumbs[] = [
  { title: 'Главная', sort: '0', url: '/' },
  { title: 'Оплата', sort: '1' }
];

export default function PaymentPage() {
  return (
    <>
      <div className={'container h-full mx-auto px-5'}>
        <SetBreadcrumbs breadcrumbs={breadcrumbs} />
        <div className={'mt-[76px] hidden lg:flex justify-center'}>
          <Pta4uBreadcrumbs />
        </div>
        <div className={'mt-[18px]'}>
          <h1
            className={
              'text-[22px] leading-[28px] lg:text-[45px] lg:leading-[54px] font-semibold text-center'
            }>
            Оплата заказа
          </h1>
          <p
            className={
              'mt-[10px] lg:mt-[19px] text-center text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] text-[#747373]'
            }>
            Пожалуйста, выберите соответствующий раздел, чтобы оплатить заказ
          </p>
        </div>
        <div className={'mt-[37px] lg:mt-[57px]'}>
          <Pta4uPaymentForm />
        </div>
        <Pta4uForYou />
      </div>
    </>
  );
}
