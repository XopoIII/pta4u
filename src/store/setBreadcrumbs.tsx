'use client';
import { useEffect } from 'react';
import { useBreadcrumbsStore } from './breadcrumbs';

export default function SetBreadcrumbs({ breadcrumbs }: any) {
  const setBreadcrumbs = useBreadcrumbsStore((state) => state.setBreadcrumbs);
  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  });
  return null;
}
