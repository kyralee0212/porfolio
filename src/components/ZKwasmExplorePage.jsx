import { useLayoutEffect } from 'react'

const heroBg = 'https://www.figma.com/api/mcp/asset/1ad66c9b-04a9-446b-81d3-084527a976de'
const interfaceImg = 'https://www.figma.com/api/mcp/asset/5f9200e9-c094-4071-811a-fb3bffe1a8e4'
const uiScreen1 = 'https://www.figma.com/api/mcp/asset/f38311d3-812e-4ea0-9c83-2d4f4a8f99e0'
const uiScreen2 = 'https://www.figma.com/api/mcp/asset/f7e8013a-897c-4bfb-a3cf-112594bab7f9'
const uiScreen3 = 'https://www.figma.com/api/mcp/asset/95eed621-6a87-43d3-b231-6208cdf9f38b'

const features = [
  {
    title: 'Real-time Proof Tracking',
    desc: 'Monitor ZK proof generation status and latency across all deployed WASM applications in real time.',
  },
  {
    title: 'Task Explorer',
    desc: 'Search, filter, and inspect every on-chain task by ID, application image, publisher, and submission time.',
  },
  {
    title: 'Network Analytics',
    desc: 'Aggregated statistics on proofs generated, active applications, and average proving time across the network.',
  },
]

const stats = [
  { value: '1M+', label: 'WASM Instructions' },
  { value: '30K+', label: 'Users' },
  { value: '+70%', label: 'Subscriptions Growth' },
  { value: '155K', label: 'Profit' },
]

function goBack() {
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export default function ZKwasmExplorePage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen" style={{ background: '#080c18' }}>

      {/* Nav */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-8 h-[74px]"
        style={{ background: 'rgba(8,12,24,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(0,210,255,0.15)' }}>
        <button onClick={goBack}
          className="flex items-center gap-2 font-['Heebo',sans-serif] font-medium text-[20px] cursor-pointer bg-transparent border-none"
          style={{ color: '#787cde' }}>
          ‹ back
        </button>
        <span className="font-['Heebo',sans-serif] font-semibold text-[28px]" style={{ color: '#787cde' }}>ZKwasm Explorer</span>
        <div style={{ width: 109 }} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* BG decor */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ width: 384, height: 384, left: 320, top: 0, background: '#00d2ff', filter: 'blur(64px)', opacity: 0.15 }} />
          <div className="absolute rounded-full" style={{ width: 384, height: 384, right: 320, bottom: 0, background: '#9d50bb', filter: 'blur(64px)', opacity: 0.15 }} />
        </div>
        <div className="section-container relative flex items-center gap-12" style={{ paddingTop: 120, paddingBottom: 80, minHeight: '100vh' }}>
          {/* Left text */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full" style={{ background: '#55f38f' }} />
              <span className="font-['Inter',sans-serif] text-[14px]" style={{ color: '#e2e4f6' }}>Network Live</span>
              <span className="w-2 h-2 rounded-full ml-4" style={{ background: '#5ee3ff' }} />
              <span className="font-['Inter',sans-serif] text-[14px]" style={{ color: '#e2e4f6' }}>1.1M+ Proofs Generated</span>
            </div>
            <h1 className="font-['Inter',sans-serif] font-bold leading-[1.05]" style={{ fontSize: 'clamp(40px,5.5vw,72px)', color: 'white' }}>
              The Gateway to<br />
              <span style={{ color: '#0f172a', WebkitTextStroke: '1px rgba(0,210,255,0.6)', color: 'rgba(0,210,255,0.85)' }}>Verifiable<br />Computation</span>
            </h1>
            <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.65] max-w-[520px]" style={{ color: '#a7aabb' }}>
              The barrier to zero-knowledge tech has collapsed. Convert standard Web Assembly (Rust, C, C++) into ZK proofs without writing a single custom circuit.
            </p>
            <a href="https://explorer.zkwasmhub.com" target="_blank" rel="noreferrer"
              className="self-start px-8 py-4 rounded-[18px] font-['Inter',sans-serif] font-bold text-[18px] text-white"
              style={{ background: '#7b6bc8' }}>
              Visit Website
            </a>
          </div>
          {/* Right: interface screenshot */}
          <div className="flex-1 relative">
            <div className="absolute rounded-full" style={{ width: 128, height: 128, right: -24, top: -24, background: 'rgba(0,210,255,0.2)', filter: 'blur(20px)' }} />
            <div className="absolute rounded-full" style={{ width: 192, height: 192, left: -40, bottom: -40, background: 'rgba(157,80,187,0.2)', filter: 'blur(32px)' }} />
            <div className="relative rounded-[16px] overflow-hidden" style={{ border: '1px solid rgba(0,210,255,0.2)' }}>
              <img src={interfaceImg} alt="ZKwasm Explorer Interface" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What is ZKwasm Explorer */}
      <section className="section-container py-24">
        <p className="font-['Space_Grotesk',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#69daff' }}>
          Core Protocol
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[52px] leading-[1.1] mb-8" style={{ color: '#97a2eb' }}>
          What is<br />ZKwasm Explorer?
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map(f => (
            <div key={f.title} className="p-6 rounded-[16px]" style={{ background: 'rgba(151,162,235,0.06)', border: '1px solid rgba(151,162,235,0.15)' }}>
              <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] mb-3" style={{ color: '#97a2eb' }}>{f.title}</h3>
              <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[1.65]" style={{ color: '#a7aabb' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UI Design Progress */}
      <section className="section-container py-16">
        <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-center mb-2" style={{ color: '#e2e4f6' }}>UI Design Progress</h2>
        <p className="text-center text-[16px] mb-12" style={{ color: '#6b7280' }}>Three major iterations toward the final production interface.</p>
        <div className="grid grid-cols-3 gap-6">
          {[uiScreen1, uiScreen2, uiScreen3].map((src, i) => (
            <div key={i} className="rounded-[15px] overflow-hidden" style={{ border: '1px solid rgba(0,210,255,0.1)' }}>
              <img src={src} alt={`UI iteration ${i + 1}`} className="w-full object-cover" />
              <div className="px-4 py-3" style={{ background: 'rgba(8,12,24,0.8)' }}>
                <p className="font-['Inter',sans-serif] font-medium text-[14px]" style={{ color: '#69daff' }}>
                  {i === 0 ? 'v1 — Early Exploration' : i === 1 ? 'v2 — Structured Layout' : 'v3 — Final Polish'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Insights */}
      <section className="py-16" style={{ background: 'rgba(0,210,255,0.04)', borderTop: '1px solid rgba(0,210,255,0.1)', borderBottom: '1px solid rgba(0,210,255,0.1)' }}>
        <div className="section-container grid grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-['Space_Grotesk',sans-serif] font-bold text-[48px]" style={{ color: '#69daff' }}>{s.value}</p>
              <p className="font-['Inter',sans-serif] font-normal text-[14px] tracking-[2px] uppercase mt-1" style={{ color: '#a7aabb' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retrospective */}
      <section className="py-16">
        <div className="section-container max-w-[800px]">
          <p className="font-['Inter',sans-serif] font-bold text-[13px] tracking-[4px] uppercase mb-4" style={{ color: '#69daff' }}>Retrospective</p>
          <p className="font-['Inter',sans-serif] font-light text-[18px] leading-[1.8]" style={{ color: '#a7aabb' }}>
            Designing a blockchain explorer required deep collaboration with engineers to understand what data was available and how it could be surfaced meaningfully. The biggest win was the proof status system — colour-coding Pending / Processing / Done / Fail at a glance cut support queries significantly. If I could revisit this, I would add a guided onboarding layer for first-time Web3 users.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: '#6372cf' }}>
              <span className="text-white font-bold text-[16px]">Y</span>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px]" style={{ color: '#e2e4f6' }}>Design Lead</p>
              <p className="font-['Inter',sans-serif] font-semibold text-[12px] tracking-[2px] uppercase" style={{ color: '#69daff' }}>Delphinus Lab</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
