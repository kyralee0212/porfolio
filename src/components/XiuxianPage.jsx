import { useLayoutEffect } from 'react'

const heroBg = 'https://www.figma.com/api/mcp/asset/334eb663-9f23-4359-b74b-67b21ad54d57'

const uiEvolution = [
  {
    img: 'https://www.figma.com/api/mcp/asset/792f5050-9dfb-429a-bb5d-d2d29cdab22c',
    title: '01. Layout & Foundation',
    desc: 'Established a simple layout structure while defining the overall style and color direction.',
  },
  {
    img: 'https://www.figma.com/api/mcp/asset/a7caa219-8485-4853-835e-5670399fb05d',
    title: '02. Style Exploration',
    desc: 'Confirmed a pixel-style direction and explored different backgrounds and visual elements.',
  },
]

const spriteImgs = [
  'https://www.figma.com/api/mcp/asset/3e035c7c-7cf9-4f6b-a27f-e02d09b11da1',
  'https://www.figma.com/api/mcp/asset/e048bc58-d36b-44d6-afb7-21aed20166e9',
  'https://www.figma.com/api/mcp/asset/c9913858-d97b-4303-bd90-4bb34198d822',
  'https://www.figma.com/api/mcp/asset/a9d17a5e-e027-4c49-b811-928946f2baa4',
  'https://www.figma.com/api/mcp/asset/7d6faa47-7af5-415d-8cb5-657fd756a03a',
  'https://www.figma.com/api/mcp/asset/dcda04c2-b71c-4a4b-9e2e-5e6540796b89',
  'https://www.figma.com/api/mcp/asset/4cd7de7d-8006-4f24-a98b-e0563a900c51',
  'https://www.figma.com/api/mcp/asset/72c297b4-1230-4e8d-8f40-3a3ec7f3ccd7',
]

const discoDog = 'https://www.figma.com/api/mcp/asset/ba54aa9e-1440-46d4-a0bd-0c63a16b65d0'
const withdrawPopup = 'https://www.figma.com/api/mcp/asset/2ed548aa-2c27-4224-9726-1a4e107aa456'
const joinMe = 'https://www.figma.com/api/mcp/asset/df228694-3a3f-450a-bb8f-d0fa2a7b8b97'
const bar1 = 'https://www.figma.com/api/mcp/asset/bdccf26d-6dc2-406c-9808-ce67f845ae20'
const lotteryHeat = 'https://www.figma.com/api/mcp/asset/fb4c6a2a-a5e2-4293-bc91-fc694eee310f'
const group10 = 'https://www.figma.com/api/mcp/asset/8b43ee44-7b43-4354-a5fa-7150afb1e03e'
const goodJob = 'https://www.figma.com/api/mcp/asset/5d293081-345d-46b3-b876-5312f8ecb2f0'
const amazing1 = 'https://www.figma.com/api/mcp/asset/490503a6-31a5-444b-9020-4e23763f04e3'
const nice1 = 'https://www.figma.com/api/mcp/asset/143854f7-d37b-45ec-a177-a147273e7b09'

function goBack() {
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export default function XiuxianPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen" style={{ background: '#0e0c0a' }}>

      {/* Nav */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-8 h-[74px]"
        style={{ background: 'rgba(14,12,10,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(180,150,80,0.2)' }}>
        <button onClick={goBack}
          className="flex items-center gap-2 font-['Heebo',sans-serif] font-medium text-[20px] cursor-pointer bg-transparent border-none"
          style={{ color: '#c9a84c' }}>
          ‹ back
        </button>
        <span className="font-['Heebo',sans-serif] font-semibold text-[28px]" style={{ color: '#c9a84c' }}>XIUXIAN</span>
        <div style={{ width: 109 }} />
      </div>

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '100vh', minHeight: 600 }}>
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(14,12,10,0.45)' }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.2) 0%, transparent 60%)'
        }} />
        <div className="relative flex flex-col items-start gap-4 px-24 w-full max-w-[1280px]">
          <p className="font-['Inter',sans-serif] font-semibold text-[16px] tracking-[3px] uppercase" style={{ color: '#c9a84c' }}>
            2026 Steam-Targeted Game
          </p>
          <h1 className="font-['Inter',sans-serif] font-bold text-white" style={{ fontSize: 'clamp(72px,12vw,160px)', letterSpacing: '-4px', lineHeight: 0.9, opacity: 0.15 }}>
            XIUXIAN
          </h1>
        </div>
      </section>

      {/* What is Xiuxian */}
      <section className="section-container py-24">
        <p className="font-['Space_Grotesk',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#c9a84c' }}>
          Core Design
        </p>
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[56px] leading-[1.1] mb-6" style={{ color: '#c9a84c' }}>
              What is<br />Xiuxian?
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.7]" style={{ color: '#a79060' }}>
              Xiuxian is an eastern fantasy cultivation simulation game with system-driven progression. Players manage resources, form alliances, and ascend through cultivation realms in a richly illustrated world inspired by classical Chinese mythology.
            </p>
            <ul className="mt-6 space-y-3">
              {['Lead designer', 'Game UI / Illustration / Animation', '2026 Steam-targeted release'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />
                  <span className="font-['Inter',sans-serif] text-[16px]" style={{ color: '#a79060' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <img src={discoDog} alt="Xiuxian character" className="rounded-[18px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* UI Evolution */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2d5b0' }}>UI Evolution</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b5e3e' }}>From skeletal wireframes to luminescent high-fidelity interfaces.</p>
        <div className="grid grid-cols-2 gap-8">
          {uiEvolution.map((step, i) => (
            <div key={i} className="rounded-[32px] overflow-hidden pb-8" style={{ background: 'rgba(180,150,80,0.06)', backdropFilter: 'blur(10px)', border: '1px solid rgba(180,150,80,0.15)' }}>
              <div className="overflow-hidden rounded-t-[32px]" style={{ height: 280 }}>
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="px-8 pt-6">
                <h3 className="font-['Manrope',sans-serif] font-bold text-[20px] mb-2" style={{ color: '#e2d5b0' }}>{step.title}</h3>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6]" style={{ color: '#a79060' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-game UI Elements */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2d5b0' }}>In-game UI Elements</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b5e3e' }}>Character sprites, UI panels and interactive components.</p>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {spriteImgs.map((src, i) => (
            <img key={i} src={src} alt={`element ${i + 1}`} className="rounded-[18px] w-full object-cover" style={{ aspectRatio: '1/1' }} />
          ))}
        </div>

        <div className="mb-8">
          <img src={bar1} alt="Score bar" className="rounded-[18px] w-full max-w-[600px] mx-auto block object-cover" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <img src={goodJob} alt="Good Job" className="rounded-[18px] w-full object-cover" />
            <img src={nice1} alt="Nice" className="rounded-[18px] w-full object-cover" />
            <img src={amazing1} alt="Amazing" className="rounded-[18px] w-full object-cover" />
          </div>
          <div>
            <img src={group10} alt="Character animation" className="rounded-[18px] w-full object-cover" />
            <img src={lotteryHeat} alt="UI panel" className="rounded-[18px] w-full object-cover mt-4" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={withdrawPopup} alt="Game UI popup" className="rounded-[18px] w-full object-cover" />
            <img src={joinMe} alt="Join popup" className="rounded-[18px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Retrospective */}
      <section className="py-16" style={{ background: 'rgba(180,150,80,0.04)', borderTop: '1px solid rgba(180,150,80,0.12)' }}>
        <div className="section-container max-w-[800px]">
          <p className="font-['Inter',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#c9a84c' }}>Retrospective</p>
          <p className="font-['Inter',sans-serif] font-light text-[18px] leading-[1.8]" style={{ color: '#a79060' }}>
            Xiuxian pushed me to deeply research traditional Chinese visual culture — ink wash painting, seal script typography, and classical architectural motifs — and translate them into a functional game UI. The biggest challenge was preserving cultural authenticity while keeping the interface legible to international players. I would love to revisit the tutorial flow which still feels too text-heavy.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: '#8a6d2e' }}>
              <span className="text-white font-bold text-[16px]">Y</span>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px]" style={{ color: '#e2d5b0' }}>Design Lead</p>
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] tracking-[2px] uppercase" style={{ color: '#c9a84c' }}>Delphinus Lab</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
