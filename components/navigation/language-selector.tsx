'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = {
  tr: {name: 'Türkçe', flag: '🇹🇷'},
  en: {name: 'English', flag: '🇬🇧'},
};

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  const currentLang = languages[locale as keyof typeof languages];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-md hover:border-muted-foreground/60 transition-colors">
        <span>{currentLang.flag}</span>
        <span className="uppercase">{locale}</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([key, lang]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => switchLocale(key)}
            className="cursor-pointer"
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
