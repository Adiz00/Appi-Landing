type LinkItem = { label: string; href: string }

const about: LinkItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
]

const services: LinkItem[] = [
  { label: "iPhone Application Development", href: "#" },
  { label: "Android Application Development", href: "#" },
  { label: "Enterprise App Development", href: "#" },
]

export function FooterSection() {
  return (
    <footer
      className="
        relative w-full text-white
        bg-[linear-gradient(180deg,#1f2329_0%,#171a20_100%)]
      "
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[#d81f26]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        {/* Grid content */}
        <div
          className="
            grid grid-cols-1 gap-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* Brand + Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="
                  inline-flex h-7 w-7 items-center justify-center
                  rounded-sm bg-[#d81f26]
                  shadow-[0_2px_12px_rgba(216,31,38,0.5)]
                "
                aria-hidden="true"
              >
                {/* stylized 'A' mark */}
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                  <path
                    d="M12 3l9 18h-3.6l-2.1-4.2H8.7L6.6 21H3L12 3zM9.9 13.8h4.2L12 8.1l-2.1 5.7z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div className="leading-none">
                <p className="text-base font-semibold tracking-wide">appicoders Inc.</p>
                <p className="text-xs text-[#cbd5e1]">Digital Products</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-lg font-semibold">Contact Us</p>
              <div className="mt-2 space-y-1 text-sm text-[#cbd5e1]">
                <p>
                  Tel:{" "}
                  <a className="hover:text-white" href="tel:+18008268018">
                    +1 (800) 826-8018
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a className="hover:text-white" href="mailto:info@appcoders.com">
                    info@appcoders.com
                  </a>
                </p>
              </div>

              {/* Socials */}
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2">
                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.42V9.84c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.65l-.42 2.9h-2.23V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1DA1F2">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.47 8.47 0 0 1-2.7 1.03 4.23 4.23 0 0 0-7.2 3.86A12 12 0 0 1 3.15 4.6a4.23 4.23 0 0 0 1.31 5.64c-.65-.02-1.27-.2-1.8-.5v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.75.15-1.14.15-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.98 4.06 3.01A8.49 8.49 0 0 1 2 19.55a11.98 11.98 0 0 0 6.49 1.9c7.79 0 12.05-6.45 12.05-12.05l-.01-.55A8.6 8.6 0 0 0 22.46 6Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#0A66C2">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.44v6.3ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.57V9h3.55v11.45Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <p className="text-xl font-semibold">About</p>
            <ul className="mt-4 space-y-2 text-sm text-[#cbd5e1]">
              {about.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xl font-semibold">Appicoders Services</p>
            <ul className="mt-4 space-y-2 text-sm text-[#cbd5e1]">
              {services.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span className="pt-1 text-[#d1d5db]" aria-hidden="true">
                    &raquo;
                  </span>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs tracking-wide text-[#cbd5e1]">© 2025 APPICODERS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      {/* subtle top/bottom edge vignette to match screenshot depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_-20%,rgba(255,255,255,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />
    </footer>
  )
}

export default FooterSection
