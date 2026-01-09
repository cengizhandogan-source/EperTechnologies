"use client"

import { useState } from "react"
import { JobPosition } from "@/lib/careers-data"
import JobDetailDialog from "./job-detail-dialog"

interface JobCardProps {
  job: JobPosition
}

export default function JobCard({ job }: JobCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="group border border-border rounded-lg p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1 cursor-pointer"
      >
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
          {job.type}
        </div>
        <h3 className="mt-4 text-2xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
          {job.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {job.description}
        </p>
        <div className="mt-2 text-xs text-muted-foreground">
          <span>{job.location}</span> • <span>{job.workArrangement}</span>
        </div>
        <div className="mt-6 inline-flex items-center gap-3 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300">
          <span>View details</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </article>

      <JobDetailDialog job={job} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
