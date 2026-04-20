import { useState } from 'react'
import { imgStarPurple1, imgIcon, imgNewPlanet1, imgImage2 } from '../assets/figmaAssets'
import automataVideo from '../assets/automata.mp4'

function Tag({ label }) {
  return (
    <div
      className="inline-flex items-center h-[28px] px-4 rounded-full flex-shrink-0 w-fit"
      style={{ background: 'rgba(151,161,235,0.1)' }}
    >
      <span className="font-['Heebo',sans-serif] font-semibold text-[14px] text-center" style={{ color: '#787cde' }}>
        {label}
      </span>
    </div>
  )
}

function GradientBtn({ children, href = '#' }) {
  const [btn, setBtn] = useState('default')
  return (
    <a
      href={href}
      className="flex items-center justify-center h-[43px] px-[40px] rounded-[59px] font-['Heebo',sans-serif] font-medium text-[18px] whitespace-nowrap w-fit"
      style={{
        background: 'linear-gradient(11deg, rgb(120,124,222), rgb(169,203,255), rgb(120,124,222))',
        backgroundSize: '200% 100%',
        backgroundPosition: btn === 'hover' || btn === 'active' ? '100% 0%' : '0% 0%',
        color: btn === 'active' ? '#3d4196' : 'white',
        transition: 'background-position 0.5s ease, color 0.1s',
      }}
      onMouseEnter={() => setBtn('hover')}
      onMouseLeave={() => setBtn('default')}
      onMouseDown={() => setBtn('active')}
      onMouseUp={() => setBtn('hover')}
    >
      {children}
    </a>
  )
}

export default function FeaturedProjects() {
  return (
    <>
      {/* --- AUTOMATA --- */}
      <section id="projects" className="relative bg-white overflow-hidden" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px', display: 'flex', alignItems: 'center' }}>
        <div className="section-container w-full">
          <div className="relative flex items-center gap-16">
            {/* Left: mockup */}
            <div className="relative flex-shrink-0" style={{ width: '600px', height: '480px', marginTop: '-80px' }}>
              <video
                src={automataVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
              />
            </div>

            {/* Right: text */}
            <div className="flex-1 flex flex-col gap-5">
              <div className="relative inline-flex items-center">
                <img src={imgStarPurple1} alt="" className="w-[25px] h-[26px] mr-3" />
                <span
                  className="font-['Heebo',sans-serif] font-bold text-[20px] tracking-[1.4px] uppercase"
                  style={{ color: '#787cde' }}
                >
                  Featured Project
                </span>
              </div>

              <p className="font-['Inter',sans-serif] font-semibold text-[48px] leading-[48px]" style={{ color: '#0f172a' }}>
                AUTOMATA
              </p>

              <div className="flex flex-wrap gap-3">
                {['UI/UX Design', 'Game design', 'Animation'].map(t => <Tag key={t} label={t} />)}
              </div>

              <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[25px]" style={{ color: '#475569', maxWidth: '426px' }}>
                Automata is an automation-driven strategy game where players design smart workflows and rules to keep systems running on their own.
              </p>

              <ul className="space-y-2 mt-2">
                {['Lead designer', 'More than 10k players', 'Popular topic on Reddit'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <img src={imgIcon} alt="" className="w-5 h-5 flex-shrink-0" />
                    <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[20px]" style={{ color: '#64748b' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2">
                <GradientBtn>Detail</GradientBtn>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ZKwasm Dapp Hub --- */}
      <section className="relative bg-white" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px', display: 'flex', alignItems: 'center', overflow: 'visible' }}>
        <div className="section-container w-full">
          <div className="relative flex items-center gap-16">
            {/* Left: text */}
            <div className="flex-1 flex flex-col gap-5" style={{ position: 'relative', zIndex: 2, marginTop: '100px' }}>
              <div className="relative inline-flex items-center">
                <img src={imgStarPurple1} alt="" className="w-[25px] h-[26px] mr-3" />
                <span
                  className="font-['Heebo',sans-serif] font-bold text-[20px] tracking-[1.4px] uppercase"
                  style={{ color: '#787cde' }}
                >
                  Featured Project
                </span>
              </div>

              <p className="font-['Inter',sans-serif] font-semibold text-[48px] leading-[48px]" style={{ color: '#0f172a' }}>
                ZKwasm Dapp Hub
              </p>

              <Tag label="App UI/UX Design" />

              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[29px]" style={{ color: '#475569', maxWidth: '463px' }}>
                A centralized mobile platform integrating all corporate editorial content and gaming portfolios. Designed to streamline brand discovery, the app allows users to explore company insights and access our full suite of games and web applications through a single, cohesive interface.
              </p>

              <div className="mt-2">
                <GradientBtn>Details</GradientBtn>
              </div>
            </div>

            {/* Right: mockup image + planets behind */}
            <div className="relative flex-shrink-0" style={{ width: '558px', height: '592px' }}>
              {/* Small planet — top center, behind phones */}
              <img src={imgNewPlanet1} alt="" className="absolute pointer-events-none float-slow"
                style={{ left: '100px', top: '10px', width: '180px', opacity: 0.85, zIndex: 0, filter: 'hue-rotate(45deg) saturate(1.5) brightness(1.2) contrast(0.9)' }} />
              {/* Large planet — bottom right */}
              <img src={imgNewPlanet1} alt="" className="absolute pointer-events-none float-slow-delay"
                style={{ right: '-80px', bottom: '-80px', width: '380px', opacity: 0.85, zIndex: 0 }} />
              <img
                src={imgImage2}
                alt="ZKwasm Dapp Hub mockup"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
