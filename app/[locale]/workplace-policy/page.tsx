'use client'

import Link from "next/link"
import {useTranslations, useLocale} from 'next-intl'

export default function WorkplacePolicy() {
  const t = useTranslations('workplacePolicy')
  const locale = useLocale()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <h1 className="text-4xl font-light">{t('title')}</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('subtitle')}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t('content')}
          </p>
        </section>

        <div className="pt-6">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-muted-foreground/60 hover:text-muted-foreground"
          >
            <span aria-hidden="true">{'<-'}</span>
            <span>{t('backToHome')}</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
