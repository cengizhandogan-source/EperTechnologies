import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <h1 className="text-4xl font-light">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This Privacy Policy explains how Eper Technologies Inc. collects, uses, and protects personal
          information when you interact with our products, services, and website.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect the information you provide directly to us, such as your name, email address, and
            any details you include when registering for courses, subscribing to newsletters, or contacting our
            team. We also collect limited technical information automatically when you access our digital
            services, including IP address, device identifiers, and usage data for analytics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">How We Use Information</h2>
          <p className="text-muted-foreground">
            We use collected information to deliver and improve our services, communicate with you about
            updates and offerings, personalize content, analyze usage trends, and maintain the security of
            our systems. We may send you marketing communications with your consent and provide you the
            option to opt out at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">Sharing and Disclosure</h2>
          <p className="text-muted-foreground">
            We do not sell your personal data. We share information only with trusted service providers who
            assist us in operating our business, and only to the extent necessary for them to perform those
            services. We may also disclose information if required by law or to protect our legal rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">Data Retention</h2>
          <p className="text-muted-foreground">
            We retain personal information only for as long as necessary to fulfill the purposes outlined in
            this policy, comply with our legal obligations, resolve disputes, and enforce agreements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">Your Choices</h2>
          <p className="text-muted-foreground">
            You may request access to, correction of, or deletion of your personal information by contacting
            us at info@eperteknoloji.com. You can also unsubscribe from marketing communications by
            following the instructions included in those messages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            applicable regulations. When we make changes, we will revise the effective date and make the
            updated policy available on this page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy or our data practices, please contact us at
            info@eperteknoloji.com.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">Effective date: October 1, 2025</p>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-muted-foreground/60 hover:text-muted-foreground"
          >
            <span aria-hidden="true">{'<-'}</span>
            <span>Back to homepage</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
