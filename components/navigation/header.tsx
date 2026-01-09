'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import LanguageSelector from './language-selector';

interface HeaderProps {
  activeSection: string;
  navSections: string[];
}

export default function Header({activeSection, navSections}: HeaderProps) {
  const t = useTranslations('common.nav');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 sm:px-8 lg:px-16 h-16 flex items-center gap-6 justify-between">
        <div className="flex items-center gap-6">
          <Link href="#hero" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Eper Technologies"
              width={140}
              height={50}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-xs sm:text-sm text-muted-foreground">
            {navSections.slice(1).map((section) => (
              <button
                key={section}
                onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
                className={`uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeSection === section ? "text-foreground" : "hover:text-foreground"
                }`}
                type="button"
              >
                {t(section)}
              </button>
            ))}
          </nav>
        </div>

        <LanguageSelector />
      </div>
    </header>
  );
}
