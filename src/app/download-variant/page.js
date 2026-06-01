import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/global/footer";

const variants = [
  {
    id: "software",
    title: "Download software",
    kicker: "Desktop app",
    description:
      "Install the full Eyekon suite to capture focus, fatigue, and posture insights with every session.",
    points: [
      "Full analytics dashboard",
      "Offline session capture",
      "Auto-update ready",
    ],
    cta: "Download the app",
    href: "/downloads/eyekon-app",
    meta: "Installer package",
    featured: true,
  },
  {
    id: "extension",
    title: "Browser extension",
    kicker: "Chrome + Edge",
    description:
      "Stay aware while you work in the browser with lightweight signals, quick pauses, and focus nudges.",
    points: [
      "Lightweight overlay",
      "One-click pause",
      "Syncs to desktop app",
    ],
    cta: "Get the extension",
    href: "/downloads/eyekon-extension",
    meta: "Browser store listing",
  },
  {
    id: "hardware",
    title: "Buddy hardware",
    kicker: "External site",
    description:
      "Pair Eyekon with a physical buddy for ambient focus cues, haptic reminders, and recovery feedback.",
    points: [
      "Ambient focus cues",
      "Haptic reminders",
      "Works with Eyekon",
    ],
    cta: "Visit hardware site",
    href: "https://eyekon.ai/buddy",
    meta: "Ships separately",
    external: true,
  },
];

export default function DownloadVariantPage() {
  return (
    <div className="min-h-screen bg-black/60 text-white">
      <section className="relative overflow-hidden px-6 py-20 sm:px-12">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-8 top-10 h-px w-44 bg-white/60" />
          <div className="absolute left-16 top-6 h-44 w-px bg-white/60" />
          <div className="absolute right-8 bottom-10 h-px w-44 bg-white/60" />
          <div className="absolute right-16 bottom-6 h-44 w-px bg-white/60" />
        </div>

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Downloads
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Choose a download variant that fits how you work.
            </h1>
            <p className="mt-5 text-base leading-7 text-white/70">
              Three curated ways to experience Eyekon: the full desktop suite,
              a focused browser extension, and the buddy hardware companion.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2">
              Desktop
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2">
              Browser
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2">
              Hardware
            </span>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-12">
        <div className="absolute left-1/2 top-0 h-px w-[80vw] -translate-x-1/2 bg-white/10" />
        <div className="absolute left-1/2 top-6 h-24 w-px -translate-x-1/2 bg-orange-200/40" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-3">
          {variants.map((variant) => {
            const linkProps = variant.external
              ? { target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <div
                key={variant.id}
                className={`group blueprint-card relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition duration-300 ease-out ${
                  variant.featured
                    ? "border-orange-200/60 bg-orange-200/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {variant.kicker}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {variant.title}
                    </h2>
                  </div>
                  {variant.featured && (
                    <span className="rounded-full border border-orange-200/60 bg-orange-200/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-orange-100">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  {variant.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {variant.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-orange-200/80" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={variant.href}
                  {...linkProps}
                  className={`mt-8 inline-flex w-fit items-center gap-3 rounded-full border px-5 py-3 text-xs uppercase tracking-[0.25em] transition ${
                    variant.featured
                      ? "border-orange-200/70 bg-orange-200/20 text-orange-100 hover:bg-orange-200/30"
                      : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  {variant.cta}
                  <span aria-hidden="true">-&gt;</span>
                </a>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/40">
                  {variant.meta}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto mt-12 grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <div className="blueprint-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Included software suite
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Focus Monitor, Fatigue Radar, Posture Coach
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Every download keeps the same intelligence core, so your signals,
              nudges, and weekly insights stay consistent across devices.
            </p>
          </div>
          <div className="blueprint-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Need help choosing
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Start with the desktop app, then add the extension
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              The extension adds quick awareness in the browser, while the buddy
              hardware brings ambient focus cues into your workspace.
            </p>
            <a
              href="/#products"
              className="mt-6 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] text-orange-100"
            >
              View product lineup
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
