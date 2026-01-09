'use client'

import Link from "next/link"
import {useTranslations, useLocale} from 'next-intl'

export default function PrivacyPolicy() {
  const t = useTranslations('privacy')
  const locale = useLocale()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <h1 className="text-4xl font-light">{t('title')}</h1>
        <p className="text-muted-foreground">
          {t('intro')}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('sections.collection.title')}</h2>
          <p className="text-muted-foreground">
            {t('sections.collection.content')}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('sections.usage.title')}</h2>
          <p className="text-muted-foreground">
            {t('sections.usage.content')}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('sections.sharing.title')}</h2>
          <p className="text-muted-foreground">
            {t('sections.sharing.content')}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('sections.retention.title')}</h2>
          <p className="text-muted-foreground">
            {t('sections.retention.content')}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('sections.choices.title')}</h2>
          <p className="text-muted-foreground">
            {t('sections.choices.content')}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('sections.updates.title')}</h2>
          <p className="text-muted-foreground">
            {t('sections.updates.content')}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">{t('sections.contact.title')}</h2>
          <p className="text-muted-foreground">
            {t('sections.contact.content')}
          </p>
        </section>

        <p className="text-xs text-muted-foreground">{t('effectiveDate')}</p>

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
