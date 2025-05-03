// components/Navbar.tsx
export default function Navbar() {
    return (
      <header className="w-full py-4 flex justify-center bg-black">
        <div className="w-full max-w-7xl px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="w-[267px] h-4 bg-white" />
  
          {/* Navigation */}
          <nav className="flex gap-2 items-center text-sm font-medium text-white">
            {["Services", "Our Algorithms", "Affiliate program", "FAQs", "Partners", "Collections"].map((label) => (
              <button
                key={label}
                className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
  
          {/* Call to Action */}
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors">
              Client area
            </button>
          </div>
        </div>
      </header>
    )
  }
  