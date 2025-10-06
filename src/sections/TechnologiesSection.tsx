export function TechnologiesSection() {
    return (
      <section className="relative py-12 md:py-16 bg-foreground/90">
        {/* Background subtle vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(120% 80% at 50% -10%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.85) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight">
            Technologies
          </h2>
  
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 md:gap-10">
            {/* Left: Text card */}
            <div className="bg-card text-card-foreground rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold">Cloud Solutions</h3>
              <p className="mt-3 text-sm md:text-[13.5px] leading-relaxed text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in libero, sollicitudin vel tempor sed,
                ullamcorper quis urna. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut
                tempus quis, elementum eu dui.
              </p>
  
              {/* Accent lines */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1.5 w-8 rounded-full bg-destructive" />
                <span className="h-1.5 w-6 rounded-full bg-muted-foreground/30" />
              </div>
            </div>
  
            {/* Right: Image card (slight overlap on md+) */}
            <div className="relative md:-ml-16 md:z-10">
              <div className="overflow-hidden rounded-xl shadow-xl bg-foreground">
                <img
                  src={cloudTechImg}
                  alt="Futuristic cloud technology illustration"
                  className="h-[220px] w-full object-cover md:h-[300px] lg:h-[340px]"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  

  export default TechnologiesSection
import cloudTechImg from "../assets/images/cloud-tech.png"
  