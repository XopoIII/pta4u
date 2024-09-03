import React from 'react';
import { IPaymentsLinks } from '../types';
interface IProps {
  payment: IPaymentsLinks;
}

export default function Pta4uPaymentsItem({ payment }: IProps) {
  return (
    <div
      className={
        'lg:w-[282px] h-[50px] text-[14px] lg:text-[16px] bg-white rounded-lg flex justify-center items-center gap-3'
      }>
      {payment.icon && (
        <img
          src={payment.icon}
          alt={payment.icon}
          width={22}
          height={22}
          style={{ objectFit: 'scale-down' }}
        />
      )}
      <span className={'hidden lg:block'}>{payment.title}</span>
      <span className={'lg:hidden'}>{payment.short}</span>
    </div>
  );
}
