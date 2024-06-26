import { create } from 'zustand';
import { IBreadcrumbs } from '../app/(pta4u)/types';

interface IBreadcrumbsStore {
  breadcrumbs: IBreadcrumbs[];
  // eslint-disable-next-line no-unused-vars
  setBreadcrumbs: (breadcrumbs: IBreadcrumbs[]) => void;
  clearBreadcrumbs: () => void;
}

const useBreadcrumbsStore = create<IBreadcrumbsStore>()((set) => ({
  breadcrumbs: [],
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
  clearBreadcrumbs: () => set({ breadcrumbs: [] })
}));

export { useBreadcrumbsStore };
