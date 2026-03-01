import { useState } from "react"
import { Menu, X, Search, Sun } from "lucide-react"
import Logo from "/IST-logo.png"
import Subscribe from "../../buttons/subscribeButton"
{/**BUtton imports */}
import HomeButton from "../../buttons/homeButton"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white relative">
      
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        
        {/* LEFT ICONS */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>

          <button className="hidden md:block">
            <Menu size={20} />
          </button>

          <Search size={20} className="cursor-pointer" />
          <Sun size={20} className="cursor-pointer" />
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src={Logo}
            alt="Hague Logo"
            className="h-22 md:h-22 object-contain"
          />
        </div>

        {/* RIGHT SUBSCRIBE (Desktop Only) */}
        <div className="hidden md:block">
          <Subscribe />
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden md:flex justify-center items-center gap-8 py-3 border-t text-sm font-medium">
        {/* Navigation buttons will go here later */}
        <HomeButton />

      </nav>

      {/* MOBILE MENU DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          
          <div className="bg-white w-72 max-w-[80%] h-full p-6 shadow-lg flex flex-col">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMobileOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* Future Nav Items */}
            <div className="flex flex-col gap-4 text-sm flex-grow">
              {/* Navigation buttons will go here later */}
              <HomeButton />
            </div>

            {/* Subscribe Button in Drawer (Mobile Only) */}
            <div className="mt-6">
              <Subscribe />
            </div>

          </div>
        </div>
      )}
    </header>
  )
}