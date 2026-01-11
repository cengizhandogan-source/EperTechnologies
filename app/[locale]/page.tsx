"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { jobPositions } from "@/lib/careers-data"
import Header from "@/components/navigation/header"

export default function Home() {
  const t = useTranslations()
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const navSections = [
    "hero",
    "mission",
    "technologies",
    "consulting",
    "courses",
    "blog",
    "team",
    "careers",
    "partners",
    "contact",
  ]

  const sectors = Object.values(t.raw('home.hero.sectors'))
  const teamMembers = t.raw('home.team.members')
  const technologyPrograms = t.raw('home.technologies.programs')
  const consultingServices = t.raw('home.consulting.services')
  const blogPosts = t.raw('home.blog.posts')
  const courses = t.raw('home.courses.list')

  // Display first 2 positions as teaser
  const featuredPositions = jobPositions.slice(0, 2).map(job => ({
    title: job.title,
    type: job.type,
    description: job.description,
  }))

  useEffect(() => {
    document.documentElement.classList.add("dark")
    return () => document.documentElement.classList.remove("dark")
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <style jsx>{`
        .libutton {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7px;
          text-align: center;
          outline: none;
          text-decoration: none !important;
          color: #ffffff !important;
          width: 200px;
          height: 32px;
          border-radius: 12px;
          background-color: #0a66c2;
          font-family: "Exo 2", "Exo2", Helvetica, sans-serif;
        }
      `}</style>
      <Header activeSection={activeSection} navSections={navSections} />

      <div className="h-16" aria-hidden="true"></div>
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {navSections.map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header id="hero" ref={(el) => (sectionsRef.current[0] = el)} className="min-h-screen flex items-center opacity-0">
          <div className="w-full space-y-10">
            <div className="space-y-3 sm:space-y-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="Eper Technologies logo"
                  width={80}
                  height={80}
                  priority
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                />
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight whitespace-nowrap">
                  {t('home.hero.title')}
                </h1>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t('home.hero.subtitle')}
              </p>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">{t('home.hero.focusAreas')}</div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {sectors.map((sector) => (
                    <span key={sector} className="px-3 py-1 text-xs border border-border rounded-full">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">{t('home.hero.connect')}</div>
                <Link
                  href={`mailto:${t('home.hero.email')}`}
                  className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-base sm:text-lg">{t('home.hero.email')}</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section id="mission" ref={(el) => (sectionsRef.current[1] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">{t('home.mission.label')}</div>
              <h2 className="text-3xl sm:text-4xl font-light">{t('home.mission.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.mission.description')}
              </p>
            </div>
          </div>
        </section>

        <section id="technologies" ref={(el) => (sectionsRef.current[2] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">{t('home.technologies.label')}</div>
              <h2 className="text-3xl sm:text-4xl font-light">{t('home.technologies.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.technologies.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {technologyPrograms.map((program) => (
                <article
                  key={program.title}
                  className="border border-border rounded-xl p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-light text-foreground">{program.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="consulting" ref={(el) => (sectionsRef.current[3] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">{t('home.consulting.label')}</div>
              <h2 className="text-3xl sm:text-4xl font-light">{t('home.consulting.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.consulting.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {consultingServices.map((service) => (
                <article
                  key={service.title}
                  className="border border-border rounded-xl p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-light text-foreground">{service.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </article>
              ))}
            </div>

            <div className="flex justify-start">
              <a
                href="mailto:info@eperteknoloji.com"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground transition-all duration-300 hover:border-muted-foreground hover:bg-muted/50"
              >
                {t('home.consulting.cta')}
              </a>
            </div>
          </div>
        </section>
        <section id="courses" ref={(el) => (sectionsRef.current[4] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">{t('home.courses.label')}</div>
              <h2 className="text-3xl sm:text-4xl font-light">{t('home.courses.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.courses.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {courses.map((course) => (
                <article
                  key={course.title}
                  className="group border border-border rounded-lg p-6 sm:p-8 space-y-4 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{course.format}</div>
                  <h3 className="text-2xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{course.summary}</p>
                  <Link
                    href={course.href}
                    className="inline-flex items-center gap-3 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span>{t('common.actions.exploreCourse')}</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* <section id="publications" ref={(el) => (sectionsRef.current[4] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">PUBLICATIONS</div>
              <h2 className="text-3xl sm:text-4xl font-light">Research and papers from the field</h2>
              <p className="text-muted-foreground leading-relaxed">
                Technical briefings, whitepapers, and studies documenting how we engineer dependable autonomy under mission pressure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {publications.map((item) => (
                <article
                  key={item.title}
                  className="group border border-border rounded-lg p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{item.date}</div>
                  <h3 className="mt-4 text-2xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-3 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span>Read publication</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <section id="blog" ref={(el) => (sectionsRef.current[6] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">{t('home.blog.label')}</div>
              <h2 className="text-3xl sm:text-4xl font-light">{t('home.blog.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.blog.description')}
              </p>
              <div>
                <a
                  className="libutton"
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7377626286367707137"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common.actions.subscribeLinkedIn')}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="group border border-border rounded-lg p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{post.date}</div>
                  <h3 className="mt-4 text-2xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-3 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span>{t('common.actions.readArticle')}</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" ref={(el) => (sectionsRef.current[7] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">{t('home.team.label')}</div>
              <h2 className="text-3xl sm:text-4xl font-light">{t('home.team.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.team.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="border border-border rounded-xl p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-light text-foreground">{member.name}</h3>
                  <div className="mt-2 text-xs text-muted-foreground font-mono uppercase tracking-wide">{member.role}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{member.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="careers" ref={(el) => (sectionsRef.current[8] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">{t('home.careers.label')}</div>
              <h2 className="text-3xl sm:text-4xl font-light">{t('home.careers.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.careers.description')}{" "}
                <Link href="/careers" className="underline hover:text-foreground transition-colors">
                  {t('home.careers.viewAll')}
                </Link>
                {" "}{t('home.careers.orEmail')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {featuredPositions.map((position) => (
                <Link
                  key={position.title}
                  href="/careers"
                  className="group border border-border rounded-lg p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{position.type}</div>
                  <h3 className="mt-4 text-2xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {position.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{position.description}</p>
                  <div className="mt-6 inline-flex items-center gap-3 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    <span>{t('common.actions.viewDetails')}</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" ref={(el) => (sectionsRef.current[9] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-6 sm:space-y-8 max-w-3xl">
            <div className="h-px w-12 bg-border" aria-hidden="true"></div>
            <div className="text-sm text-muted-foreground font-mono">{t('home.partners.label')}</div>
            <h2 className="text-3xl sm:text-4xl font-light">{t('home.partners.title')}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {t('home.partners.description')}
            </p>
          </div>
        </section>

        <section id="contact" ref={(el) => (sectionsRef.current[10] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="h-px w-12 bg-border" aria-hidden="true"></div>
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wide">{t('home.contact.label')}</div>
            <h2 className="text-3xl sm:text-4xl font-light">{t('home.contact.title')}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {t('home.contact.description')}
            </p>
            <Link
              href={`mailto:${t('home.contact.email')}`}
              className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              <span className="text-base sm:text-lg">{t('home.contact.email')}</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">{t('common.footer.copyright')}</div>
              <div className="text-xs text-muted-foreground">{t('common.footer.address')}</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Link
                  href="https://www.linkedin.com/company/epertech"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-muted-foreground/60 transition-colors duration-300"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5a2.5 2.5 0 112.5 2.5 2.5 2.5 0 01-2.5-2.5zM4.5 8.75h3v11.5h-3zM10.25 8.75h2.86v1.59h.04a3.14 3.14 0 012.83-1.56c3.03 0 3.59 1.99 3.59 4.58v6.89h-3v-6.11c0-1.46-.03-3.34-2.03-3.34-2.03 0-2.34 1.58-2.34 3.22v6.23h-3z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/eperteknoloji"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-muted-foreground/60 transition-colors duration-300"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 3.514h2.963l-6.48 7.4 5.727 8.572h-4.744l-3.727-5.441-4.27 5.441H4.72l6.9-7.856L6.24 3.514h4.908l3.32 4.87z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.reddit.com/r/EperTech"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-muted-foreground/60 transition-colors duration-300"
                  aria-label="Reddit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.31c0-1.23-.99-2.23-2.21-2.23-.6 0-1.15.24-1.54.64-1.48-1.05-3.48-1.72-5.68-1.81l1.16-5.44 3.77.8c.01 1.03.85 1.87 1.88 1.87 1.04 0 1.88-.84 1.88-1.88s-.84-1.88-1.88-1.88c-.74 0-1.38.43-1.68 1.05l-4.2-.89a.34.34 0 00-.47.3l-1.27 5.99c-2.25.08-4.29.76-5.81 1.85-.39-.43-.94-.69-1.54-.69-1.23 0-2.23 1-2.23 2.23 0 .91.53 1.69 1.29 2.04-.03.22-.05.45-.05.68 0 3.13 3.29 5.67 7.34 5.67s7.34-2.54 7.34-5.67c0-.22-.02-.45-.05-.66.76-.36 1.28-1.15 1.28-2.06zm-14.5 1.99c0-.88.71-1.59 1.59-1.59s1.59.71 1.59 1.59-.71 1.59-1.59 1.59-1.59-.71-1.59-1.59zm8.73 3.53c-.9.9-2.7.98-3.22.98-.52 0-2.31-.08-3.22-.98a.3.3 0 01.43-.43c.62.62 1.93.83 2.78.83.85 0 2.16-.21 2.78-.83a.3.3 0 01.43.43zm-.07-1.94c-.88 0-1.59-.71-1.59-1.59s.71-1.59 1.59-1.59 1.59.71 1.59 1.59-.71 1.59-1.59 1.59z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/epertechnologies"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-muted-foreground/60 transition-colors duration-300"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@EperTechnologies"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-muted-foreground/60 transition-colors duration-300"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.24 5 12 5 12 5s-6.24 0-7.84.43A2.5 2.5 0 002.4 7.2 25.9 25.9 0 002 12a25.9 25.9 0 00.4 4.8 2.5 2.5 0 001.76 1.77C5.76 19 12 19 12 19s6.24 0 7.84-.43a2.5 2.5 0 001.76-1.77A25.9 25.9 0 0022 12a25.9 25.9 0 00-.4-4.8zM10 15.5v-7l6 3.5z" />
                  </svg>
                </Link>
                <Link
                  href="https://linktr.ee/epertech"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-muted-foreground/60 transition-colors duration-300"
                  aria-label="Linktree"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.5 8.5L12 3l4.5 5.5" />
                    <path d="M9 13l3-3 3 3" />
                    <path d="M12 10v11" />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <button
                  onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors duration-300"
                  type="button"
                >
                  {t('common.nav.mission')}
                </button>
                <button
                  onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors duration-300"
                  type="button"
                >
                  {t('common.nav.technologies')}
                </button>
                <button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors duration-300"
                  type="button"
                >
                  {t('common.nav.courses')}
                </button>
                <button
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors duration-300"
                  type="button"
                >
                  {t('common.nav.blog')}
                </button>
                <button
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors duration-300"
                  type="button"
                >
                  {t('common.nav.team')}
                </button>
                <Link href="/careers" className="hover:text-foreground transition-colors duration-300">
                  {t('common.nav.careers')}
                </Link>
                <button
                  onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors duration-300"
                  type="button"
                >
                  {t('common.nav.partners')}
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors duration-300"
                  type="button"
                >
                  {t('common.nav.contact')}
                </button>
                <Link href="/privacy" className="hover:text-foreground transition-colors duration-300">
                  {t('common.footer.privacy')}
                </Link>
                <Link href="/workplace-policy" className="hover:text-foreground transition-colors duration-300">
                  {t('common.footer.workplacePolicy')}
                </Link>
                <Link
                  href="/Eper%20Teknoloji_Kurumsal_Kimlik.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
                >
                  {t('common.footer.brandGuidelines')}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M14 3h7v7" />
                    <path d="M10 14 21 3" />
                    <path d="M5 12v9h14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
