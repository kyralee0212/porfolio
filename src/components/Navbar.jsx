import { useState, useEffect } from 'react'
import { imgLogoWhite1 } from '../assets/figmaAssets'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Exploration', href: '#exploration' },
]

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [btn, setBtn] = useState('default')

  useEffect(() => {
    const observers = []
    NAV_LINKS.forEach(({ label, href }) => {
      const el = document.querySelector(href)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(label) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="h-[74px] flex items-stretch justify-between" style={{ paddingLeft: 'clamp(40px, 8vw, 160px)', paddingRight: 'clamp(20px, 3vw, 90px)' }}>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 self-center">
          <div className="relative w-[35px] h-[35px] bg-[#787cde] rounded-[10px] flex items-center justify-center flex-shrink-0">
            <img src={imgLogoWhite1} alt="Logo" className="w-[25px] h-[27px] object-contain" />
          </div>
          <span className="font-['Heebo',sans-serif] font-medium text-[30px] text-black leading-none">Yun Lee</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex h-full gap-[52px]">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label} className="h-full flex">
              <a
                href={href}
                onClick={() => setActive(label)}
                className="relative h-full flex items-center group"
              >
                <span
                  className={`font-['Heebo',sans-serif] font-medium text-[17px] leading-none transition-colors duration-200 mb-[5px] mt-[10px] ${
                    active === label
                      ? 'text-[#787cde]'
                      : 'text-black/40 group-hover:text-[#787cde]'
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#787cde] transition-all duration-200 ${
                    active === label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="mailto:kyralee0212@gmail.com"
          className="hidden md:flex self-center items-center justify-center rounded-[59px] font-['Heebo',sans-serif] font-medium whitespace-nowrap"
          style={{
            background: 'linear-gradient(11deg, rgb(120,124,222) 0%, rgb(169,203,255) 35%, rgb(169,203,255) 65%, rgb(120,124,222) 100%)',
            backgroundSize: '200% 100%',
            backgroundPosition: btn === 'hover' || btn === 'active' ? '100% 0%' : '0% 0%',
            color: btn === 'active' ? '#3d4196' : 'white',
            transition: 'background-position 0.5s ease, color 0.1s',
            height: '30px',
            padding: '0 28px',
            fontSize: '13px',
            marginRight: '8px',
          }}
          onMouseEnter={() => setBtn('hover')}
          onMouseLeave={() => setBtn('default')}
          onMouseDown={() => setBtn('active')}
          onMouseUp={() => setBtn('hover')}
        >
          Work with me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 self-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => { setActive(label); setMenuOpen(false) }}
              className="font-['Heebo',sans-serif] font-medium text-[17px]"
              style={{ color: active === label ? '#787cde' : 'rgba(0,0,0,0.4)' }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:kyralee0212@gmail.com"
            className="flex items-center justify-center h-[43px] px-8 rounded-[59px] text-white font-['Heebo',sans-serif] font-medium text-[18px] w-fit"
            style={{ background: 'linear-gradient(11deg, rgb(120,124,222) 0%, rgb(169,203,255) 35%, rgb(169,203,255) 65%, rgb(120,124,222) 100%)' }}
          >
            Work with me
          </a>
        </div>
      )}
    </nav>
  )
}
