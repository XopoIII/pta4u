'use client';
import useBreadcrumbsStore from '../../../src/store/breadcrumbs';
import Link from 'next/link';
import React from 'react';
import { IBreadcrumbs } from '../types';
interface IBreadLinkProps {
  item: IBreadcrumbs;
  arrow?: boolean;
}

function BreadLink({ item, arrow }: IBreadLinkProps) {
  const hasArrow = arrow ?? false;
  if (item.url) {
    return (
      <>
        <Link href={item.url}>{item.title}</Link>
        {hasArrow && <span className={'text-inherit'}>&gt;</span>}
      </>
    );
  } else {
    return <span className={'text-inherit'}>{item.title}</span>;
  }
}

export default function Pta4uBreadcrumbs() {
  const breadcrumbs = useBreadcrumbsStore((state) => state.breadcrumbs);
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }
  return (
    <div className={'flex gap-[12px] text-[#9E989B]'}>
      {breadcrumbs.map((item, i) => {
        return <BreadLink key={i} item={item} arrow={i < breadcrumbs.length - 1} />;
      })}
    </div>
  );
}
