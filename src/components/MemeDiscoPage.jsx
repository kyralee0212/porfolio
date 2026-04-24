import { useLayoutEffect } from 'react'

const heroBg1 = 'https://www.figma.com/api/mcp/asset/7b6da09c-ea8b-462c-bbb3-1282e4f22a31'
const heroBg2 = 'https://www.figma.com/api/mcp/asset/cfc6ebfe-b20f-4745-91e7-d0354e94484a'
const starIcon = 'https://www.figma.com/api/mcp/asset/8291ac46-cd8f-4150-9669-e1780405ddcd'

const uiEvolution = [
  {
    img: 'https://www.figma.com/api/mcp/asset/76ad6c21-636f-4bf9-bb8e-79ea50471ec5',
    title: '01. Layout & Foundation',
    desc: 'Established a simple layout structure while defining the overall style and color direction.',
  },
  {
    img: 'https://www.figma.com/api/mcp/asset/ba16dc9d-9fe4-4c7a-bb45-e8fcb9eda766',
    title: '02. Style Exploration',
    desc: 'Confirmed a pixel-style direction and explored different backgrounds and visual elements.',
  },
]

const spriteImgs = [
  'https://www.figma.com/api/mcp/asset/0fc57536-cba3-4084-aeb3-1ed1459c6a45',
  'https://www.figma.com/api/mcp/asset/9df2c5df-5572-4377-9aaa-9d6857c11fb9',
  'https://www.figma.com/api/mcp/asset/0adbb9f8-11d4-4f14-a4aa-c19e6d348326',
  'https://www.figma.com/api/mcp/asset/be9a2d30-5c6e-4234-abf1-8c805f2bd62c',
  'https://www.figma.com/api/mcp/asset/f7c64db3-6f88-4f31-8d6e-6b475be053cf',
  'https://www.figma.com/api/mcp/asset/2fe69e27-4228-468a-9562-0bcd726c1c98',
  'https://www.figma.com/api/mcp/asset/bca96bd5-4216-4862-b2d4-58048292c970',
  'https://www.figma.com/api/mcp/asset/f2b73523-8b8f-48bf-a544-54162f7bb310',
]

const discoDog = 'https://www.figma.com/api/mcp/asset/7fa62cd5-1145-4aed-a5a9-b74588d75948'
const withdrawPopup = 'https://www.figma.com/api/mcp/asset/cd1dfa86-3f63-4ee3-a5e3-168f5237f3c1'
const joinMe = 'https://www.figma.com/api/mcp/asset/fcfb9ebd-80b6-47d4-8920-a3059d0482e3'
const bar1 = 'https://www.figma.com/api/mcp/asset/e560c2e4-15ed-4f2e-95f2-d45e3e0dcf52'
const lotteryHeat = 'https://www.figma.com/api/mcp/asset/6d6642e8-8b69-4972-b9da-2e47c3b8adb0'
const group10 = 'https://www.figma.com/api/mcp/asset/e8605980-58de-4771-859f-d3597c03d117'

const goodJob = 'https://www.figma.com/api/mcp/asset/f21bdfb4-292c-4436-b5c9-7ba8e251eb58'
const amazing = 'https://www.figma.com/api/mcp/asset/d3ff9236-7395-4434-b693-eb04fc55ce41'
const nice = 'https://www.figma.com/api/mcp/asset/4a49abed-7f4f-43ed-8be6-1a24b9314780'

function goBack() {
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export default function MemeDiscoPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen" style={{ background: '#0d0a1a' }}>

      {/* Nav */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-8 h-[74px]"
        style={{ background: 'rgba(13,10,26,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(151,162,235,0.15)' }}>
        <button onClick={goBack}
          className="flex items-center gap-2 font-['Heebo',sans-serif] font-medium text-[20px] cursor-pointer bg-transparent border-none"
          style={{ color: '#787cde' }}>
          ‹ back
        </button>
        <span className="font-['Heebo',sans-serif] font-semibold text-[28px]" style={{ color: '#787cde' }}>MEMEDISCO</span>
        <div style={{ width: 109 }} />
      </div>

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '100vh', minHeight: 600 }}>
        <img src={heroBg1} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src={heroBg2} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ mixBlendMode: 'screen', opacity: 0.4 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(13,10,26,0.6)' }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,220,0,0.3) 0%, rgba(238,190,35,0) 50%, transparent 100%)'
        }} />
        <div className="relative flex flex-col items-center gap-6 text-center px-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: '#d8caff' }}>
            <img src={starIcon} alt="" style={{ width: 13, height: 13 }} />
            <span className="font-['Inter',sans-serif] font-semibold text-[12px]" style={{ color: '#4f329d' }}>
              The Future of zkWasm Gaming
            </span>
          </div>
          <h1 className="font-['Inter',sans-serif] font-bold text-white" style={{ fontSize: 'clamp(56px,9vw,128px)', letterSpacing: '-6px', lineHeight: 1 }}>
            MEMEDISCO
          </h1>
          <p className="font-['Inter',sans-serif] font-medium text-white text-[22px] tracking-[2px] uppercase max-w-[700px]" style={{ opacity: 0.85 }}>
            Fully responsible for all visual design and art direction, from concept to final assets.
          </p>
          <a href="https://memedisco.xyz" target="_blank" rel="noreferrer"
            className="mt-2 px-12 py-4 rounded-[18px] font-['Inter',sans-serif] font-semibold text-[20px]"
            style={{ background: '#97a2eb', color: '#004a5d' }}>
            Play Now
          </a>
        </div>
      </section>

      {/* What is Memedisco */}
      <section className="section-container py-24">
        <p className="font-['Space_Grotesk',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#69daff' }}>
          Core Protocol
        </p>
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[56px] leading-[1.1] mb-6" style={{ color: '#97a2eb' }}>
              What is<br />Memedisco?
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.7]" style={{ color: '#a7aabb' }}>
              Memedisco is an interactive on-chain experience focused on character customisation and expressive motion. Players upload meme characters and compete in disco-themed NFT battles powered by zkWASM proofs, with fully transparent and verifiable outcomes on every match.
            </p>
            <ul className="mt-6 space-y-3">
              {['Lead designer', 'Interactive UI / Experience Design', 'zkWasm powered gameplay'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#787cde' }} />
                  <span className="font-['Inter',sans-serif] text-[16px]" style={{ color: '#a7aabb' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <img src={discoDog} alt="Discodog sprite sheet" className="rounded-[18px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* UI Evolution */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2e4f6' }}>UI Evolution</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b7280' }}>From skeletal wireframes to luminescent high-fidelity interfaces.</p>
        <div className="grid grid-cols-2 gap-8">
          {uiEvolution.map((step, i) => (
            <div key={i} className="rounded-[32px] overflow-hidden pb-8" style={{ background: 'rgba(220,220,220,0.07)', backdropFilter: 'blur(10px)' }}>
              <div className="overflow-hidden rounded-t-[32px]" style={{ height: 280 }}>
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="px-8 pt-6">
                <h3 className="font-['Manrope',sans-serif] font-bold text-[20px] mb-2" style={{ color: '#e2e4f6' }}>{step.title}</h3>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6]" style={{ color: '#9ca3af' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-game UI Elements */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2e4f6' }}>In-game UI Elements</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b7280' }}>From skeletal wireframes to luminescent high-fidelity interfaces.</p>

        {/* Sprite grid */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {spriteImgs.map((src, i) => (
            <img key={i} src={src} alt={`sprite ${i + 1}`} className="rounded-[18px] w-full object-cover" style={{ aspectRatio: '1/1' }} />
          ))}
        </div>

        {/* Score bar */}
        <div className="mb-8">
          <img src={bar1} alt="Score bar" className="rounded-[18px] w-full max-w-[600px] mx-auto block object-cover" />
        </div>

        {/* Bottom UI grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col gap-4">
            <img src={goodJob} alt="Good Job" className="rounded-[18px] w-full object-cover" />
            <img src={nice} alt="Nice" className="rounded-[18px] w-full object-cover" />
            <img src={amazing} alt="Amazing" className="rounded-[18px] w-full object-cover" />
          </div>
          <div>
            <img src={group10} alt="Connecting UI" className="rounded-[18px] w-full object-cover" />
            <img src={lotteryHeat} alt="Lottery Heat" className="rounded-[18px] w-full object-cover mt-4" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={withdrawPopup} alt="Withdraw Balance" className="rounded-[18px] w-full object-cover" />
            <img src={joinMe} alt="Upload meme" className="rounded-[18px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Retrospective */}
      <section className="py-16" style={{ background: 'rgba(151,162,235,0.05)' }}>
        <div className="section-container max-w-[800px]">
          <p className="font-['Inter',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#97a2eb' }}>Retrospective</p>
          <p className="font-['Inter',sans-serif] font-light text-[18px] leading-[1.8]" style={{ color: '#a7aabb' }}>
            Designing Memedisco was a challenge in balancing playfulness with clarity. The meme upload flow required multiple rounds of testing to make sure users understood what was happening at each step. If I were to start over, I would allocate more time to the social/sharing features, which ended up being cut due to timeline constraints.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: '#6372cf' }}>
              <span className="text-white font-bold text-[16px]">Y</span>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px]" style={{ color: '#e2e4f6' }}>Design Lead</p>
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] tracking-[2px] uppercase" style={{ color: '#97a2eb' }}>Delphinus Lab</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
