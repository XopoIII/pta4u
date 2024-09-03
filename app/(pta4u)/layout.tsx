'use client';
import React from 'react';
import Pta4uHeader from './components/pta4u-header';
import Pta4uFooter from './components/pta4u-footer';

export default function Pta4uLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Pta4uHeader />
      {children}
      <Pta4uFooter />
    </main>
  );
}
