"use client"

import { useEffect } from "react"
import Link from "next/link"
import {useTranslations, useLocale} from 'next-intl'
import JobCard from "@/components/careers/job-card"

export default function CareersPage() {
  const t = useTranslations('careers')
  const locale = useLocale()
  const jobs = t.raw('jobs')

  useEffect(() => {
    document.documentElement.classList.add("dark")
    return () => document.documentElement.classList.remove("dark")
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="space-y-6">
          <div className="h-px w-12 bg-border" aria-hidden="true"></div>
          <h1 className="text-4xl sm:text-5xl font-light">{t('title')}</h1>
          <p className="text-muted-foreground leading-relaxed max-w-3xl text-lg">
            {t('description')}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-light mb-6">{t('openPositions')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {jobs.map((job: any) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          {jobs.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>{t('noPositions')}</p>
            </div>
          )}
        </div>

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
