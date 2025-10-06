

type Props = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function ContactSection({ onSubmit }: Props) {
  return (
    <section className="w-full pt-10 md:pt-16">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Red panel with form */}
          <div
            className="rounded-t-lg lg:rounded-s-lg lg:rounded-e-none p-6 sm:p-8 md:p-10"
            style={{
              background: "linear-gradient(180deg, #E01E26 0%, #B0171C 55%, #7A0E0E 100%)",
            }}
          >
            <p className="text-white/90 text-xs tracking-[0.18em] font-semibold">LET'S TALK</p>

            <h2 className="mt-2 text-white text-2xl sm:text-3xl md:text-[28px] font-extrabold leading-tight">
              Got an idea? Let’s get in touch!
            </h2>

            <p className="mt-2 text-white/90 text-sm leading-relaxed max-w-[46ch]">
              Have queries? Not sure of your App Strategy? Discuss with us and we&apos;ll guide you the way forward.
            </p>

            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => {
                if (onSubmit) onSubmit(e)
                e.preventDefault()
              }}
            >
              {/* Name */}
              <label className="sr-only" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md bg-white text-[13px] md:text-sm placeholder-black/50 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
              />

              {/* Email */}
              <label className="sr-only" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md bg-white text-[13px] md:text-sm placeholder-black/50 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
              />

              {/* Phone */}
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                className="w-full rounded-md bg-white text-[13px] md:text-sm placeholder-black/50 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
              />

              {/* Message */}
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows={4}
                className="w-full rounded-md bg-white text-[13px] md:text-sm placeholder-black/50 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60 resize-y"
              />

              {/* Button */}
              <button
                type="submit"
                className="mt-2 w-full rounded-md px-4 py-3 text-white text-[13px] md:text-sm font-semibold shadow-sm"
                style={{
                  background: "linear-gradient(180deg, #8E1217 0%, #4A0A0C 45%, #1A1A1A 100%)",
                }}
              >
                LET&apos;S GET IN TOUCH
              </button>
            </form>
          </div>

          {/* Right: image top + dark info panel bottom */}
          <div className="rounded-b-lg lg:rounded-e-lg lg:rounded-b-none overflow-hidden bg-[#1F2329]">
            {/* Top photo */}
            <div className="aspect-[16/9] w-full">
              <img
                src="./src/assets/images/image 12.png"
                alt="People collaborating at a desk"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Bottom dark panel with subtle polygon texture and content */}
            <div
              className="px-6 sm:px-8 md:px-10 py-8 md:py-10 text-center"
              style={{
                background:
                  "radial-gradient(1200px 400px at 85% 10%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%), radial-gradient(800px 300px at 10% 80%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
              }}
            >
              <p className="text-white/90 text-[13px] md:text-sm">
                Please submit your inquiry and our App Development Strategist will contact you shortly
              </p>

              {/* Phone icon */}
              <div className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white">
                  <path
                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="mt-4 text-white text-xl md:text-2xl font-bold">+1-(800) 826 8018</div>
              <div className="mt-1 text-white/80 text-sm">info@appcoders.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
