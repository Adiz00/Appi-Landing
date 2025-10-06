import { useState } from "react"

const categories = [
  "ALL",
  "Health Supreme",
  "CRM 365",
  "OSDA",
  "Marketplace E-Commerce Platform",
  "Sports Training App",
  "Fitness",
]

const products = [
  { id: 1, image: "./src/assets/images/Maskgroup1.png", alt: "Health Dashboard" },
  { id: 2, image: "./src/assets/images/Maskgroup1.png", alt: "E-commerce Platform" },
  { id: 3, image: "./src/assets/images/Maskgroup1.png", alt: "Mobile App" },
  { id: 4, image: "./src/assets/images/Maskgroup1.png", alt: "Training Interface" },
  {
    id: 5,
    image: "./src/assets/images/Maskgroup1.png",
    alt: "Health Supreme",
    featured: true,
  },
  { id: 6, image: "./src/assets/images/Maskgroup1.png", alt: "Recipe Dashboard" },
]

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL")

  return (
    <section className="relative min-h-screen bg-[#E01E26] overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background pattern - red curved lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, transparent 0%, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%),
            radial-gradient(circle at 40% 50%, transparent 0%, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%),
            radial-gradient(circle at 60% 50%, transparent 0%, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%),
            radial-gradient(circle at 80% 50%, transparent 0%, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.03) 20px,
            rgba(255, 255, 255, 0.03) 40px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">Products</h1>

        {/* Category Navigation */}
        <nav className="mb-12">
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`text-white text-sm sm:text-base font-medium transition-all ${
                    activeCategory === category ? "underline underline-offset-4 decoration-2" : "hover:opacity-80"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {product.featured ? (
                // Featured product with dark overlay
                <div className="relative aspect-[4/3] bg-[#1a1a1a] rounded-lg overflow-hidden flex items-center justify-center">
                  {/* Bracket focus effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-24 h-24">
                      {/* Top-left bracket */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"></div>
                      {/* Top-right bracket */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
                      {/* Bottom-left bracket */}
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>
                      {/* Bottom-right bracket */}
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>
                    </div>
                  </div>

                  {/* Featured text */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Health Supreme</h3>
                    <p className="text-gray-300 text-xs sm:text-sm max-w-[200px] mx-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi nibh molestie
                    </p>
                  </div>

                  {/* Background mockup image (dimmed) */}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                </div>
              ) : (
                // Regular product card
                <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
