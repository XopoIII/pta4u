import { Metadata } from 'next';
import Pta4uHero from './components/pta4u-hero';
import Pta4uReviews from './components/pta4u-reviews';
import Pta4uServices from './components/pta4u-services';
import Pta4uQuality from './components/pta4u-quality';
import Pta4uCalculated from './components/pta4u-calculated';
import Pta4uQuickBuy from './components/pta4u-quick-buy';
import Pta4uPayments from './components/pta4u-payments';
import React from 'react';
import ClearBreadcrumbs from '../../src/store/clearBreadcrumbs';

export const metadata: Metadata = {
  title: 'Polyglot - translation agency for you. Бюро переводов Полиглот.',
  description: 'Polyglot - translation agency for you. Бюро переводов Полиглот во владивостоке.'
};

export default function Home() {
  return (
    <main className={'mt-[47px]'}>
      <ClearBreadcrumbs />
      <Pta4uHero />
      <div className={'mt-[40px] lg:mt-[67px]'}>
        <Pta4uReviews />
      </div>
      <div className={'mt-[51px] lg:mt-[105px]'}>
        <Pta4uServices />
      </div>
      <div className={'mt-[30px] lg:mt-[81px]'}>
        <Pta4uQuality />
      </div>
      <div className={'mt-[20px] lg:mt-[105px]'}>
        <Pta4uCalculated />
      </div>
      <div className={'mt-[40px] lg:mt-[64px]'}>
        <Pta4uQuickBuy />
      </div>
      <div className={'mt-[46px] lg:mt-[70px]'}>
        <Pta4uPayments />
      </div>
    </main>
  );
}
