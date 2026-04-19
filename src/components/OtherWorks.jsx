import { useState } from 'react'
import {
  imgRectangle18, imgRectangle19, imgRectangle20,
  imgRectangle21, imgRectangle22, imgRectangle23
} from '../assets/figmaAssets'

const logoDesignCards = [
  { img: imgRectangle18, category: 'NAIL SHOP', title: "L'EUPHORIE" },
  { img: imgRectangle19, category: 'FINANCE COMPANY', title: 'Better Lending Solutions' },
  { img: imgRectangle20, category: 'COFFEE SHOP', title: 'Cereals Cat' },
  { img: imgRectangle21, category: 'RESTAURANT', title: 'KAWA RAMEN' },
  { img: imgRectangle22, category: 'TECH COMPANY', title: 'Delphinus Lab' },
  { img: imgRectangle23, category: 'HEAVY METAL INDUSTRY COMPANY', title: 'Ming Wei' },
]

const tabs = [
  { label: 'Logo Design', cards: logoDesignCards },
  { label: '2D illustration', cards: logoDesignCards },
  { label: '3D animation', cards: logoDesignCards },
]

function ExploreCard({ img, category, title, href = '#' }) {
  return (
    <a
      href={href}
      className="relative block flex-shrink-0 cursor-pointer"
      style={{ width: '348px', height: '348px', boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.09)' }}
    >
      {/* Image */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <img src={img} alt={title} className="absolute w-full h-full object-cover" />
      </div>
      {/* White label strip */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white flex flex-col gap-0 pt-6 pb-5 px-6"
        style={{ height: '89px', borderRadius: '0 0 20px 20px' }}
      >
        <p
          className="font-['Inter',sans-serif] font-bold text-[12px] tracking-[1.2px] uppercase leading-[16px]"
          style={{ color: '#97a2eb' }}
        >
          {category}
        </p>
        <p
          className="font-['Inter',sans-serif] font-bold text-[20px] leading-[28px]"
          style={{ color: '#64748b' }}
        >
          {title}
        </p>
      </div>
    </a>
  )
}

export default function OtherWorks() {
  const [activeTab, setActiveTab] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const cards = tabs[activeTab].cards
  const visible = expanded ? cards : cards.slice(0, 6)

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
          className="flex items-center gap-8 mb-9"
          style={{ borderBottom: '1px solid #e2e8f0' }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => handleTabChange(i)}
              className="flex flex-col items-center pb-0 relative"
              style={{ height: '47px' }}
            >
              <span
                className="font-['Inter',sans-serif] font-bold text-[18px] tracking-[0.35px] uppercase leading-[21px] mt-2"
                style={{ color: activeTab === i ? '#787cde' : '#64748b' }}
              >
                {tab.label}
              </span>
              {activeTab === i && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded"
                  style={{ background: '#787cde' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Cards grid: 3 columns */}
        <div className="relative">
          <div
            className="grid gap-x-[38px] gap-y-[25px] overflow-hidden"
            style={{
              gridTemplateColumns: 'repeat(3, 348px)',
              maxHeight: expanded ? 'none' : '505px',
            }}
          >
            {visible.map((card, i) => (
              <ExploreCard key={i} {...card} />
            ))}
          </div>

          {/* Gradient fade */}
          {!expanded && (
            <div
              className="absolute bottom-0 left-0 right-0 flex justify-center items-end pb-[60px]"
              style={{
                height: '151px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 21%, #ffffff 63%)',
              }}
            />
          )}

          {/* Show more button */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center" style={{ bottom: '0px' }}>
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
