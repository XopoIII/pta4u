'use client';
import useBreadcrumbsStore from './breadcrumbs';
import { useEffect } from 'react';

export default function ClearBreadcrumbs() {
  const clearBreadcrumbs = useBreadcrumbsStore((store) => store.clearBreadcrumbs);
  useEffect(() => {
    clearBreadcrumbs();
  }, []);
  return null;
}
