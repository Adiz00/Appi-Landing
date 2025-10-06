import image2Img from "../assets/images/image 2.png"
import image4Img from "../assets/images/image 4.png"
import image13Img from "../assets/images/image 13.png"

type Award = {
  src: string
  alt: string
}

const awards: Award[] = [
  { src: image2Img, alt: "ITFirms Top Mobile App Development Company" },
  { src: image4Img, alt: "Top Mobile App Developers 2020" },
  { src: image13Img, alt: "Clutch Top React Native Developers" },
  { src: image2Img, alt: "appfutura Top Mobile App Development Companies" },
]
  
  export default function AwardsSection() {
    return (
      <section className="relative w-full bg-white">
        <div className="absolute left-0 top-0 h-1 w-full bg-[#D81F26]" aria-hidden="true" />
  
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
          {/* Title */}
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#2B2E34] md:text-3xl lg:text-4xl">
            Awards and Recognitions
          </h2>
  
          <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 md:mt-10 md:grid-cols-4 lg:gap-x-14">
            {awards.map((item) => (
              <figure
                key={item.alt}
                className="flex h-40 w-40 items-center justify-center rounded-full border border-[#E5E7EB] bg-white p-4 shadow-sm md:h-44 md:w-44"
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={168}
                  height={168}
                  className="h-32 w-32 object-contain md:h-36 md:w-36"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    )
  }
  