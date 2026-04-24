import { useState } from 'react'
import {
  imgBg22, imgPlanet2, imgSquare3, imgStar4, imgMe1, imgCloud22
} from '../assets/figmaAssets'
import { useFadeUp } from '../hooks/useFadeUp'

export default function About() {
  const [hovered, setHovered] = useState(false)
  const [ref, visible] = useFadeUp()

  return (
    <section id="about" className="relative bg-white overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px', display: 'flex', alignItems: 'center' }}>
      <div ref={ref} className={`section-container flex flex-col md:flex-row items-stretch gap-8 md:gap-16 fade-up${visible ? ' visible' : ''}`}>

        {/* Left: photo collage — 70% of Figma size: 353×452 */}
        <div
          className="relative flex-shrink-0"
          style={{ width: '424px', height: '542px' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* bg2 2 — blob background */}
          <div className="absolute overflow-hidden pointer-events-none"
            style={{ left: 0, top: '16px', width: '96.26%', height: '526px', transform: 'rotate(7.41deg)', transformOrigin: 'center center', zIndex: 0 }}
          >
            <img src={imgBg22} alt=""
              style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '173%', maxWidth: 'none' }}
            />
          </div>
          {/* Photo */}
          <img src={imgMe1} alt="Yun Lee" className="absolute pointer-events-none"
            style={{ left: '5.76%', top: 0, width: '81.34%', zIndex: 1 }}
          />
          {/* Cloud — moves up on hover */}
          <div className="absolute overflow-hidden pointer-events-none"
            style={{ left: '2.39%', right: 0, top: '323px', aspectRatio: '566/241', zIndex: 3,
              transform: hovered ? 'translateY(-18px)' : 'translateY(0)',
              transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }}
          >
            <div style={{ transform: 'scaleX(-1)', width: '100%', height: '100%', position: 'relative' }}>
              <img src={imgCloud22} alt=""
                style={{ position: 'absolute', width: '226.15%', height: '367.63%', left: '-47.17%', top: '-212.86%', maxWidth: 'none' }}
              />
            </div>
          </div>
          {/* Decorative — scatter outward on hover, below photo when hidden */}
          <img src={imgPlanet2} alt="" className="absolute pointer-events-none"
            style={{ left: '-10px', top: '90px', width: '80px',
              zIndex: hovered ? 4 : 0,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translate(0,0)' : 'translate(70px, 50px)',
              transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1), zIndex 0s' }}
          />
          <img src={imgStar4} alt="" className="absolute pointer-events-none"
            style={{ left: '288px', top: '30px', width: '52px',
              zIndex: hovered ? 4 : 0,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translate(0,0)' : 'translate(-60px, 55px)',
              transition: 'opacity 0.5s ease 0.08s, transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.08s' }}
          />
          <img src={imgSquare3} alt="" className="absolute pointer-events-none"
            style={{ left: '306px', top: '174px', width: '48px',
              zIndex: hovered ? 4 : 0,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translate(0,0)' : 'translate(-55px, -20px)',
              transition: 'opacity 0.5s ease 0.16s, transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.16s' }}
          />
        </div>

        {/* Right: bio text */}
        <div className="flex-1" style={{ paddingTop: '50px' }}>
          <h2
            className="font-['Heebo',sans-serif] font-bold leading-[1.221] mb-5"
            style={{ fontSize: '45px', color: 'rgba(0,0,0,0.7)' }}
          >
            Hello ~<br />I am Yun Lee
          </h2>

          <p
            className="font-['Heebo',sans-serif] font-normal text-[20px] leading-[30px] mb-10"
            style={{ color: '#475569', maxWidth: '519px' }}
          >
            I&apos;m a commercial illustrator and visual designer working across games and digital products, with experience on multiple successfully launched apps and websites. I create illustration, animation, and visual systems with a strong focus on design logic and user experience, while leveraging AI tools to work faster and smarter, delivering visuals that are both impactful and purposeful.
          </p>

          {/* Stats */}
          <div className="flex items-start gap-12">
            <div className="flex items-start gap-[21px]">
              <img src={imgStar4} alt="" className="pointer-events-none" style={{ width: '47px', flexShrink: 0, marginTop: '11px' }} />
              <div>
                <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[44px]" style={{ color: '#475569' }}>Work experience</p>
                <p className="font-['Inter',sans-serif] font-extrabold text-[28px] leading-[36px]" style={{ color: '#475569' }}>5+ years</p>
              </div>
            </div>
            <div className="flex items-start gap-[21px]">
              <img src={imgSquare3} alt="" className="pointer-events-none" style={{ width: '50px', flexShrink: 0, marginTop: '11px' }} />
              <div>
                <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[44px]" style={{ color: '#475569' }}>Launched Projects</p>
                <p className="font-['Inter',sans-serif] font-extrabold text-[28px] leading-[36px]" style={{ color: '#475569' }}>30+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
