import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'always'
});

export const locales = ['tr', 'en'] as const;
export const defaultLocale = 'tr' as const;

export type Locale = (typeof locales)[number];
