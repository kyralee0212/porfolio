import { useState } from 'react'
import {
  imgImage1, imgImage3, imgImage4,
  imgImage5, imgImage6, imgImage7, imgImage8, imgImage9,
  imgGo
} from '../assets/figmaAssets'

const projects = [
  {
    title: 'Xiuxian',
    subtitle: 'Game UI / Illustration / Animation',
    description: 'Designed an eastern fantasy cultivation simulation game with system-driven progression',
    images: [imgImage1, imgImage3, imgImage4],
    imgPosition: 'calc(50% - 50px) center',
    href: '#',
  },
  {
    title: 'Nugget',
    subtitle: 'Game UI / System Design',
    description: 'Designed a mining-based incremental game with clear system feedback and intuitive UI',
    images: [imgImage5],
    href: '#',
  },
  {
    title: 'Chi Palace',
    subtitle: 'App UI Design / Game Illustration',
    description: 'Designed a stylised Taoist-inspired environment with culturally driven gameplay elements',
    images: [imgImage9],
    href: '#',
  },
  {
    title: 'Memedisco',
    subtitle: 'Interactive UI / Experience Design',
    description: 'Created an interactive experience focused on character customisation and expressive motion',
    images: [imgImage6],
    href: '#',
  },
  {
    title: 'ZKwasm Explore',
    subtitle: 'Product UI / Dashboard',
    description: 'Designed a data-driven interface for exploring blockchain tasks',
    images: [imgImage7],
    imgPosition: 'center calc(50% + 50px)',
    href: '#',
  },
  {
    title: 'ZKwasmHub',
    subtitle: 'Web Platform / Visual System',
    description: 'Built a scalable visual system for Web3 deployment experience',
    images: [imgImage8],
    imgPosition: 'center calc(50% + 50px)',
    href: '#',
  },
]

function ProjectCard({ title, subtitle, description, images, imgPosition, href }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      className="relative block rounded-[20px] overflow-hidden bg-white flex-shrink-0 cursor-pointer"
      style={{ width: '348px', height: '270px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image layer */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        {images[0] && (
          <img
            src={images[0]} alt={title}
            className="absolute w-full h-full object-cover"
            style={{
              objectPosition: imgPosition || 'center center',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        )}
        {images[1] && (
          <img src={images[1]} alt="" className="absolute object-cover pointer-events-none" style={{ left: '8.61%', top: '-5.77%', width: '41.5%', height: '76.56%' }} />
        )}
        {images[2] && (
          <img src={images[2]} alt="" className="absolute object-cover pointer-events-none mix-blend-darken" style={{ left: '23.86%', top: '31.95%', width: '32.53%', height: '56.35%' }} />
        )}
      </div>

      {/* Bottom gradient overlay — taller + darker on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-end pb-6 px-7"
        style={{
          height: hovered ? '200px' : '136px',
          gap: '6px',
          background: hovered
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
          borderRadius: '0 0 20px 20px',
          transition: 'height 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p className="font-['Inter',sans-serif] font-bold text-[24px] leading-[28px] text-white">{title}</p>
        <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">{subtitle}</p>
        <p
          className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-white"
          style={{
            opacity: hovered ? 0.85 : 0,
            maxHeight: hovered ? '60px' : '0px',
            overflow: 'hidden',
            transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1) 0.1s, max-height 0.4s cubic-bezier(0.4,0,0.2,1) 0.1s',
            marginTop: hovered ? '2px' : '0px',
          }}
        >
          {description}
        </p>
      </div>

      {/* Go button — hidden on hover */}
      <img
        src={imgGo}
        alt="View"
        className="absolute"
        style={{
          right: '16px', bottom: '16px', width: '43px', height: '43px',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.25s ease',
        }}
      />
    </a>
  )
}

export default function AllWorks() {
  return (
    <section className="bg-white" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
      <div className="section-container">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="font-['Heebo',sans-serif] font-black text-[36px] leading-[40px]" style={{ color: '#0f172a' }}>
            Selected Projects
          </h2>
          <p className="font-['Heebo',sans-serif] font-normal text-[16px] leading-[24px] mt-1" style={{ color: '#475569' }}>
            A collection of projects spanning various disciplines.
          </p>
        </div>

        {/* Grid: 3 cols × 2 rows */}
        <div
          className="grid gap-x-[38px] gap-y-4"
          style={{ gridTemplateColumns: 'repeat(3, 348px)' }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
