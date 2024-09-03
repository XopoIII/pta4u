'use client';
import React, { useState } from 'react';
import Pta4uPaymentF from './payment-form/pta4u-payment-f';
import Pta4uPaymentU from './payment-form/pta4u-payment-u';

const tabs: any = {
  1: <Pta4uPaymentF />,
  2: <Pta4uPaymentU />
};

const tabClasses =
  'w-[380px] text-center lg:text-[18px] lg:leading-[22px] text-[14px] leading-[16px] border-b-[4px] pb-[14px] cursor-pointer';
const activeTabClasses = 'border-[#F35557] font-semibold';
const noActiveTabClasses = 'border-transparent text-[#747373]';

export default function Pta4uPaymentForm() {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className={'border-b border-[#D0D0D0] w-full flex justify-center'}>
        <div
          className={tabClasses + ' ' + (tab === 1 ? activeTabClasses : noActiveTabClasses)}
          onClick={() => setTab(1)}>
          Для физических лиц
        </div>
        <div
          className={tabClasses + ' ' + (tab === 2 ? activeTabClasses : noActiveTabClasses)}
          onClick={() => setTab(2)}>
          Для юридических лиц
        </div>
      </div>
      <div className={'mt-[36px]'}>{tabs[tab]}</div>
    </>
  );
}
