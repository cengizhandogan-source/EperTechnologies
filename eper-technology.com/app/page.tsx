"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const navSections = [
    "hero",
    "mission",
    "technologies",
    "courses",
    "publications",
    "blog",
    "numbers",
    "partners",
  ]

  const stats = [
    { value: "10", label: "Team" },
    { value: "0", label: "Publications" },
    { value: "0M$", label: "Capital" },
    { value: "0", label: "Partners" },
  ]

  const sectors = ["Security", "Defense", "Agriculture", "Industry"]

  const blogPosts = [
    {
      title: "Mission-Ready Autonomy",
      date: "February 3, 2025",
      excerpt:
        "How mission planning pipelines, predictive diagnostics, and resilient comms converge to guarantee decision superiority in the field.",
      href: "#",
    },
    {
      title: "Designing Modular UAV Architectures",
      date: "January 16, 2025",
      excerpt:
        "A behind-the-scenes look at our interchangeable mission modules and the engineering choices that let teams reconfigure airframes in minutes.",
      href: "#",
    },
    {
      title: "AI Co-Pilots for Critical Missions",
      date: "December 5, 2024",
      excerpt:
        "From onboard edge processing to secure ground control, we detail the AI workflows that translate raw telemetry into actionable intelligence.",
      href: "#",
    },
  ]

  const courses = [
    {
      title: "Autonomy Foundations",
      format: "Hybrid · 4 weeks",
      summary: "Systems thinking, flight dynamics, and control fundamentals tailored for multidisciplinary teams entering autonomous aviation.",
      href: "#",
    },
    {
      title: "Mission Software Lab",
      format: "On-site · 3 days",
      summary: "Hands-on coding sprints covering swarm coordination, edge AI deployment, and resilience testing in simulated contested environments.",
      href: "#",
    },
    {
      title: "Operational Integration Clinic",
      format: "Virtual · 6 sessions",
      summary: "Readiness playbooks for operations leads—covering compliance, safety cases, and rapid mission configuration workflows.",
      href: "#",
    },
  ]

  const publications = [
    {
      title: "Autonomous Swarm Coordination",
      date: "November 21, 2024",
      excerpt:
        "Whitepaper on distributed flight control algorithms enabling resilient swarm formations in contested environments.",
      href: "#",
    },
    {
      title: "Edge AI for Tactical ISR",
      date: "September 9, 2024",
      excerpt:
        "Peer-reviewed study detailing our onboard inference stack for real-time signal exploitation and target classification.",
      href: "#",
    },
    {
      title: "Modular Airframe Certification",
      date: "June 14, 2024",
      excerpt:
        "Certification roadmap showing how modular UAV architectures comply with evolving aviation safety frameworks.",
      href: "#",
    },
  ]

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
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-6 sm:px-8 lg:px-16 h-16 flex items-center gap-6">
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
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

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
                  Eper Technologies
                </h1>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A new era in autonomous air operations begins with Eper Technologies.
              </p>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS AREAS</div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {sectors.map((sector) => (
                    <span key={sector} className="px-3 py-1 text-xs border border-border rounded-full">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CONNECT</div>
                <Link
                  href="mailto:info@epertechnologies.com"
                  className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-base sm:text-lg">info@epertechnologies.com</span>
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
              <div className="text-sm text-muted-foreground font-mono">MISSION</div>
              <h2 className="text-3xl sm:text-4xl font-light">We redefine the world’s perception of aviation</h2>
              <p className="text-muted-foreground leading-relaxed">
                With our domestic engineering power, we develop autonomous UAV solutions for strategic areas such as defense, agriculture, and industry.
                Our goal is to enhance security, increase efficiency, and make a difference in critical operations with fast-response, AI-powered, and modular systems.
                We aim not only to be a technology producer but also a partner shaping the autonomous system architecture of the future.
              </p>
            </div>
          </div>
        </section>

        <section id="technologies" ref={(el) => (sectionsRef.current[2] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">TECHNOLOGIES</div>
              <h2 className="text-3xl sm:text-4xl font-light">We deliver innovative solutions. We shape the future.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Next-generation modular UAV architecture powers our system beyond fixed mission profiles. The main carrier UAV (mothership) can carry, release, or retrieve different numbers and types of parasite drones depending on mission needs. This architecture allows a single system to take on multi-role tasks in reconnaissance, attack, jamming, disaster response, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each sub-UAV can be customized with sensors and software integrations tailored to the mission type, providing maximum flexibility and effectiveness in the field.
              </p>
            </div>
          </div>
        </section>
        <section id="courses" ref={(el) => (sectionsRef.current[3] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">COURSES</div>
              <h2 className="text-3xl sm:text-4xl font-light">Upskill with the Eper curriculum</h2>
              <p className="text-muted-foreground leading-relaxed">
                Structured learning paths designed with operators, engineers, and mission planners in mind. We teach the tooling, testing, and integration practices that keep autonomous fleets mission-ready.
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
                    <span>Explore course</span>
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
        <section id="publications" ref={(el) => (sectionsRef.current[4] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
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
        </section>

        <section id="blog" ref={(el) => (sectionsRef.current[5] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">BLOG</div>
              <h2 className="text-3xl sm:text-4xl font-light">Eper Insights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Field stories, engineering deep dives, and autonomy research shaping the next wave of aerial innovation.
              </p>
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
                    className="mt-6 inline-flex items-center gap-3 text-sm text-foreground group-hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span>Read article</span>
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

        <section id="numbers" ref={(el) => (sectionsRef.current[6] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">IN NUMBERS</div>
              <h2 className="text-3xl sm:text-4xl font-light">Eper Technologies at a glance</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500"
                >
                  <div className="text-4xl sm:text-5xl font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" ref={(el) => (sectionsRef.current[7] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">SECTOR PARTNERSHIPS</div>
              <h2 className="text-3xl sm:text-4xl font-light">Our business partners</h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We are just at the beginning, but our goal is ambitious. As Eper Technologies, we want to grow with innovative and visionary partners in diverse sectors—primarily security, defense, agriculture, and industry. If you also want to shape the future of autonomous systems together and become a partner in a high-impact technology, let’s build this journey together.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">START A CONVERSATION</div>
              <p className="text-muted-foreground leading-relaxed">
                Tell us about the missions you need to enable. We assemble dedicated teams that can integrate with your existing operations and deliver rapidly deployable autonomy.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                {sectors.map((sector) => (
                  <span key={sector} className="px-3 py-1 border border-border rounded-full">
                    {sector}
                  </span>
                ))}
              </div>
              <Link
                href="mailto:info@epertechnologies.com"
                className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-base sm:text-lg">info@epertechnologies.com</span>
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
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Eper Technologies Inc. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Maltepe, Çırpıcı Yolu A Sk. No:1, 34010 Zeytinburnu/İstanbul Ofis: 604</div>
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
                  href="#"
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

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground transition-colors duration-300">
                  Privacy
                </Link>
                <Link href="mailto:info@epertechnologies.com" className="hover:text-foreground transition-colors duration-300">
                  Contact
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
