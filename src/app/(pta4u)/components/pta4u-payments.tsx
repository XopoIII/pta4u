import Pta4uPaymentsItem from './pta4u-payments-item';
import React from 'react';
const payments: Array<IPaymentsLinks> = [
  { title: 'На сайте компании', short: 'На сайте', icon: '/icons/earth.svg', url: '' },
  { title: 'По QR коду', short: 'По QR коду', icon: '/icons/qr.svg', url: '' },
  { title: 'На расчетный счет', short: 'На РС', icon: '/icons/doc.svg', url: '' },
  { title: 'Картой/наличными', short: 'Карта/наличка', icon: '/icons/card.svg', url: '' }
];

export default function Pta4uPayments() {
  return (
    <div className={'h-[218px] lg:h-[180px] bg-[#F2F2F2] w-full'}>
      <div className={'container h-full mx-auto px-5 flex items-center'}>
        <div className={'flex-1 flex flex-col justify-center items-center gap-6'}>
          <h1 className={'text-[18px] font-semibold leading-5'}>Удобные способы оплаты</h1>
          <div className={'grid grid-cols-2 lg:flex gap-6 flex-wrap justify-center w-full'}>
            {payments.map((payment) => {
              return <Pta4uPaymentsItem key={payment.title} payment={payment} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
