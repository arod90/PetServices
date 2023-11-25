'use client';

import { FilterProvider } from '@/utils/FilterContext';

export function Providers({ children }) {
  return <FilterProvider>{children}</FilterProvider>;
}
