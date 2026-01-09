'use client'

import {useTranslations} from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-light">{t('title')}</h1>
      <p className="mt-4 text-muted-foreground">{t('description')}</p>
    </div>
  )
}
