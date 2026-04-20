import { useState, useRef, useEffect } from 'react'
import {
  imgRectangle18, imgRectangle19, imgRectangle20,
  imgRectangle21, imgRectangle22, imgRectangle23,
  imgRectangle24, imgRectangle25, imgRectangle26, imgRectangle27,
  imgRectangle28, imgRectangle29, imgRectangle32,
  imgRectangle33, imgRectangle34, imgRectangle35, imgRectangle36,
} from '../assets/figmaAssets'

const logoDesignCards = [
  { img: imgRectangle18, category: 'NAIL SHOP', title: "L'EUPHORIE" },
  { img: imgRectangle19, category: 'FINANCE COMPANY', title: 'Better Lending Solutions' },
  { img: imgRectangle20, category: 'COFFEE SHOP', title: 'Cereals Cat' },
  { img: imgRectangle21, category: 'RESTAURANT', title: 'KAWA RAMEN' },
  { img: imgRectangle22, category: 'TECH COMPANY', title: 'Delphinus Lab' },
  { img: imgRectangle23, category: 'HEAVY METAL INDUSTRY COMPANY', title: 'Ming Wei' },
]

const twoDCards = [
  { img: imgRectangle28, category: 'CARTOON SERIES IDEA', title: 'Pitch Bibble' },
  { img: imgRectangle29, category: 'LINE STICKER DESIGN', title: 'Otan & Rigi' },
  { img: imgRectangle32, category: 'CONCEPT ART', title: 'Zeitgeist' },
  { img: imgRectangle33, category: '2D ILLUSTRATION', title: 'Inktober' },
  { img: imgRectangle34, category: 'CHARACTER DESIGN & STORYBOARD', title: 'Bear & Grandma' },
  { img: imgRectangle35, category: '2D ANIMATION', title: 'Bridge' },
  { img: imgRectangle36, category: '2D MOTION GRAPHIC', title: 'Sydney Vivid Show' },
]

const threeDCards = [
  { img: imgRectangle24, category: '3D VISUAL EFFECTS', title: 'Sighting' },
  { img: imgRectangle25, category: '3D ANIMATION', title: 'Tinder Lovin' },
  { img: imgRectangle26, category: '3D ANIMATION', title: 'Zeitgeist' },
  { img: imgRectangle27, category: '3D ENVIRONMENT DESIGN', title: 'Secret Space' },
]

const tabs = [
  { label: 'Logo design', cards: logoDesignCards },
  { label: '2D illustration', cards: twoDCards },
  { label: '3D animation', cards: threeDCards },
]

function ExploreCard({ img, category, title, href = '#' }) {
  return (
    <a
      href={href}
      className="relative block flex-shrink-0 cursor-pointer rounded-[20px]"
      style={{
        width: '348px', height: '348px',
        boxShadow: '0px 4px 16px 0px rgba(0,0,0,0.12)',
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0px 8px 28px 0px rgba(0,0,0,0.18)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0px 4px 16px 0px rgba(0,0,0,0.12)' }}
    >
      {/* Inner clip container — rounds all four corners */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <img src={img} alt={title} className="absolute w-full h-full object-cover" />
        {/* White label strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-white flex flex-col gap-0 pt-6 pb-5 px-6" style={{ height: '89px' }}>
          <p className="font-['Inter',sans-serif] font-bold text-[12px] tracking-[1.2px] uppercase leading-[16px]" style={{ color: '#97a2eb' }}>
            {category}
          </p>
          <p className="font-['Inter',sans-serif] font-bold text-[20px] leading-[28px]" style={{ color: '#64748b' }}>
            {title}
          </p>
        </div>
      </div>
    </a>
  )
}

export default function OtherWorks() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredTab, setHoveredTab] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const tabRefs = useRef([])

  const cards = tabs[activeTab].cards
  const visible = expanded ? cards : cards.slice(0, 3)

  useEffect(() => {
    const el = tabRefs.current[activeTab]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
  }, [activeTab])

  function handleTabChange(i) {
    setActiveTab(i)
    setExpanded(false)
  }

  return (
    <section id="exploration" className="bg-white" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
      <div className="section-container">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="font-['Heebo',sans-serif] font-black text-[36px] tracking-[-1.2px] leading-[60px]" style={{ color: '#0f172a' }}>
            Explorations
          </h2>
          <p className="font-['Heebo',sans-serif] font-normal text-[18px] leading-[28px]" style={{ color: '#64748b' }}>
            A curated archive of creative designs, quick sketches, and motion studies<br />
            across diverse creative fields.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="relative flex items-center gap-8 mb-9"
          style={{ borderBottom: '1px solid #e2e8f0' }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              ref={el => tabRefs.current[i] = el}
              onClick={() => handleTabChange(i)}
              onMouseEnter={() => setHoveredTab(i)}
              onMouseLeave={() => setHoveredTab(null)}
              className="flex flex-col items-center pb-0 relative"
              style={{ height: '47px' }}
            >
              <span
                className="font-['Inter',sans-serif] font-medium text-[15px] leading-[21px] mt-2"
                style={{
                  color: activeTab === i || hoveredTab === i ? '#787cde' : '#64748b',
                  transition: 'color 0.25s ease',
                }}
              >
                {tab.label}
              </span>
            </button>
          ))}
          {/* Sliding underline */}
          <span
            className="absolute bottom-0 h-[2px] rounded"
            style={{
              background: '#787cde',
              left: indicator.left,
              width: indicator.width,
              transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>

        {/* Cards grid: 3 columns */}
        <div>
          <div
            className="grid gap-x-[38px] gap-y-[25px]"
            style={{ gridTemplateColumns: 'repeat(3, 348px)', padding: '6px', margin: '-6px' }}
          >
            {visible.map((card, i) => (
              <ExploreCard key={i} {...card} />
            ))}
          </div>

          {/* Show more button */}
          {!expanded && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center justify-center h-[43px] px-[39px] rounded-[59px] text-white font-['Heebo',sans-serif] font-medium text-[18px] whitespace-nowrap"
                style={{ background: 'linear-gradient(11deg, rgb(120,124,222) 20%, rgb(169,203,255) 80%)' }}
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
