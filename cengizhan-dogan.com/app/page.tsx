"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const navSections = [
    "hero",
    "mission",
    "technologies",
    "intelligence",
    "architecture",
    "why",
    "numbers",
    "partners",
  ]

  const stats = [
    { value: "2", label: "Employees" },
    { value: "1", label: "Core Team" },
    { value: "0M$", label: "Capital" },
    { value: "0", label: "Partners" },
  ]

  const sectors = ["Security", "Defense", "Agriculture", "Industry"]

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

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

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
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
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">EPER TECHNOLOGIES / AUTONOMOUS SYSTEMS</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight uppercase">
                  The future of aviation is here
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A new era in autonomous air operations begins with Eper Technologies.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                <div className="h-px w-12 bg-border" aria-hidden="true"></div>
                <div>Redefining autonomy from the ground up</div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS AREAS</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Domestic engineering powering multi-sector UAV innovation.</p>
                  <div className="flex flex-wrap gap-2">
                    {sectors.map((sector) => (
                      <span key={sector} className="px-3 py-1 text-xs border border-border rounded-full">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CONNECT</div>
                <Link
                  href="mailto:info@eperteknoloji.com"
                  className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-base sm:text-lg">info@eperteknoloji.com</span>
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

        <section id="intelligence" ref={(el) => (sectionsRef.current[3] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">REAL-TIME INFORMATION</div>
              <h2 className="text-3xl sm:text-4xl font-light">Operational intelligence in every second</h2>
              <p className="text-muted-foreground leading-relaxed">
                Success in modern operations depends not only on taking action but also on timely access to accurate data. Our autonomous UAV system collects, processes, and transmits real-time data through integrated thermal and optical cameras, signal analysis modules, and AI-powered classification algorithms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While this data is instantly delivered to the user interface, it is also analyzed by decision-support systems. As a result, events are managed while they are happening—not afterward. The system does not just observe; it makes sense of data and turns it into operational intelligence.
              </p>
            </div>
          </div>
        </section>

        <section id="architecture" ref={(el) => (sectionsRef.current[4] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">DOMESTIC DESIGN</div>
              <h2 className="text-3xl sm:text-4xl font-light">Field-proven toughness meets laboratory precision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Developed entirely with local engineering capabilities from design to production, our system is shaped to fully adapt to field requirements. With its modular structure, carbon-fiber body, optimized aerodynamics, and interchangeable mission modules, the system is lightweight, durable, and mission-oriented.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Its frame accommodates both quadcopter and octocopter configurations, enabling the same platform to be used in different scenarios.
              </p>
            </div>
          </div>
        </section>

        <section id="why" ref={(el) => (sectionsRef.current[5] = el)} className="min-h-screen py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6 max-w-3xl">
              <div className="h-px w-12 bg-border" aria-hidden="true"></div>
              <div className="text-sm text-muted-foreground font-mono">WHY EPER TECHNOLOGIES</div>
              <h2 className="text-3xl sm:text-4xl font-light">Mission-focused design, intelligence-focused system</h2>
              <p className="text-muted-foreground leading-relaxed">
                Eper Technologies leaves behind conventional solutions with its speed, agility, flexibility, and AI-oriented approach. With our modular system structure, multi-role mission capacity, and real-time decision-making capabilities, we redefine traditional drone architectures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Backed by domestic production power and a multidisciplinary expert team, we provide users not only with a tool but also with decision support, operational intelligence, and strategic advantage. For critical missions, the only answer is Eper Technologies.
              </p>
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
                href="mailto:info@eperteknoloji.com"
                className="group inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-base sm:text-lg">info@eperteknoloji.com</span>
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
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Eper Technologies Inc. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Maltepe, Çırpıcı Yolu A Sk. No:1, 34010 Zeytinburnu/İstanbul Ofis: 604</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
