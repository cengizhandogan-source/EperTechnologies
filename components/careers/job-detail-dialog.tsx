"use client"

import {useTranslations} from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface JobDetailDialogProps {
  job: any
  isOpen: boolean
  onClose: () => void
}

export default function JobDetailDialog({ job, isOpen, onClose }: JobDetailDialogProps) {
  const t = useTranslations('careers.jobDetail')

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono uppercase tracking-wide">
              <span>{job.type}</span>
              <span>•</span>
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.workArrangement}</span>
            </div>
            <DialogTitle className="text-3xl font-light">{job.title}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              {job.description}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="space-y-8 py-6">
          <section className="space-y-4">
            <h3 className="text-xl font-light">{t('requirements')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {job.requirements.map((req: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="text-foreground mt-1.5">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-light">{t('responsibilities')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {job.responsibilities.map((resp: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="text-foreground mt-1.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </section>

          {job.qualifications && job.qualifications.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-xl font-light">{t('qualifications')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                {job.qualifications.map((qual: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-foreground mt-1.5">•</span>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <DialogFooter>
          <a
            href={`mailto:kariyer@eperteknoloji.com?subject=${t('applicationSubject')}: ${job.title}`}
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted-foreground"
          >
            {t('applyNow')}
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
