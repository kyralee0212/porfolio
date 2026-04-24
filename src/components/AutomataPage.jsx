import { useLayoutEffect, useState, useRef, useEffect } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'
import heroBg from '../assets/images/automata/hero_bg.png'
import heroRect53 from '../assets/images/automata/hero_rect53.png'
import heroRect54 from '../assets/images/automata/hero_rect54.png'
import automataTitle from '../assets/images/automata/automata_title.png'
import automataLogoTitle from '../assets/images/automata/automata_logo_title.png'
import automataHeroVideo from '../assets/vidu-video-3259131251200959.mp4'
import heroMid from '../assets/images/automata/hero_mid.png'
import heroFront from '../assets/images/automata/hero_front.png'
import stage1Img from '../assets/images/automata/stage1.png'
import stage2Img from '../assets/images/automata/stage2.png'
import stage3Img from '../assets/images/automata/stage3.png'
import stage4Img from '../assets/images/automata/stage4.png'
import celestialImg from '../assets/images/automata/celestial.png'
import building1Img from '../assets/images/automata/building1.png'
import building2Img from '../assets/images/automata/building2.png'
import building3Img from '../assets/images/automata/building3.png'
import robot1Img from '../assets/images/automata/robot1.png'
import robot2Img from '../assets/images/automata/robot2.png'
import robot3Img from '../assets/images/automata/robot3.png'
import robot4Img from '../assets/images/automata/robot4.png'
function loadFrames(glob) {
  return Object.entries(glob).sort(([a], [b]) => a.localeCompare(b)).map(([, m]) => m.default)
}
const hammerFrames   = loadFrames(import.meta.glob('../assets/images/automata/1.hammer/working/*.png',   { eager: true }))
const screenFrames   = loadFrames(import.meta.glob('../assets/images/automata/2.screen/working/*.png',   { eager: true }))
const drugFrames     = loadFrames(import.meta.glob('../assets/images/automata/3.drug/working/*.png',     { eager: true }))
const weedFrames     = loadFrames(import.meta.glob('../assets/images/automata/4.weed/working/*.png',     { eager: true }))
const testFrames     = loadFrames(import.meta.glob('../assets/images/automata/5.test/working/*.png',     { eager: true }))
const digFrames      = loadFrames(import.meta.glob('../assets/images/automata/6.dig/working/*.png',      { eager: true }))
const computerFrames = loadFrames(import.meta.glob('../assets/images/automata/7.computer/working/*.png', { eager: true }))
const pushFrames     = loadFrames(import.meta.glob('../assets/images/automata/8.push/working/*.png',     { eager: true }))
import interfaceIcons from '../assets/images/automata/interface_icons.png'
import uiScreen1 from '../assets/images/automata/ui_screen1.png'
import frame3 from '../assets/images/automata/frame_3.png'
import arrowNext from '../assets/images/automata/arrow_next.png'
import celestialPlanet from '../assets/images/automata/celestial_planet.png'
import planet1 from '../assets/images/automata/1.png'
import planet2 from '../assets/images/automata/2.png'
import planet3 from '../assets/images/automata/3.png'
import whatIsBg from '../assets/images/automata/what_is_bg.png'
import robotBg1 from '../assets/images/automata/robot bg/1.png'
import robotBg2 from '../assets/images/automata/robot bg/2.png'
import robotBg3 from '../assets/images/automata/robot bg/3.png'
import robotBg4 from '../assets/images/automata/robot bg/4.png'
import robotBg5 from '../assets/images/automata/robot bg/5.png'
import robotBg6 from '../assets/images/automata/robot bg/6.png'
import robotBg7 from '../assets/images/automata/robot bg/7.png'
import robotBg8 from '../assets/images/automata/robot bg/8.png'
import uiScreen2 from '../assets/images/automata/ui_screen2.png'
import robotSprite1 from '../assets/images/automata/robot_sprite1.png'
import robotSprite2 from '../assets/images/automata/robot_sprite2.png'
import btnBg1 from '../assets/images/automata/btn_bg1.png'
import btnBg2 from '../assets/images/automata/btn_bg2.png'
import btnDefault from '../assets/images/automata/button.png'
import btnHover from '../assets/images/automata/button hv.png'
const rawVfxGlob = import.meta.glob('../assets/images/automata/prgram_png/**/*.png', { eager: true })
const VFX_HIDDEN = new Set(['NexusField','EtherPulse','QuantumCore','StellarCharge','StarLight','SwiftForge','PlasmaForge','NovaBurst','QuantumScribe','CrystaBloom','EtherForge','EtherForge ','NanoWeave','QuantumFrost','TitaniumBoost','EnerGex','IlluGen','NeuroForge','EnerPlex','Aespa','MegaBoost','QuiFoam','CyberPulse','NexuMax','StarlightForge','PlasmaCharge','XenoFloral','CerebraSpark','QuantumLeap','NovaFlux'])
const vfxSets = (() => {
  const groups = {}
  for (const [path, mod] of Object.entries(rawVfxGlob)) {
    const parts = path.split('/')
    const folder = parts[parts.length - 2]
    if (VFX_HIDDEN.has(folder)) continue
    if (!groups[folder]) groups[folder] = []
    groups[folder].push({ path, src: mod.default })
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b)).map(([name, files]) => ({
    name,
    frames: files.sort((a, b) => a.path.localeCompare(b.path)).map(f => f.src),
  }))
})()

const BG = '#141928'
const CYAN = '#69daff'
const PURPLE = '#787cde'
const PURPLE_LIGHT = '#97a2eb'
const BORDER = 'rgba(68,71,86,0.3)'

const stages = [
  { num: '01', img: stage1Img, title: 'Game Structure & Wireframing', desc: 'Establishing the foundational blueprint of the application. We define core mechanics and initial wireframes to validate the logic of zkWASM execution environments.', accent: false },
  { num: '02', img: stage2Img, title: 'UI & Interaction Design', desc: 'Refining elements for clarity and global consistency. We map interactive nodes and feedback loops to ensure user actions are met with predictable responses.', accent: false },
  { num: '03', img: stage3Img, title: 'Visual Design & Animation', desc: 'Finalizing assets with polished, obsidian-grade details. Every texture and motion curve is calibrated to reflect the precision of cryptographic truth.', accent: false },
  { num: '04', img: stage4Img, title: 'UX Optimization & 2.5D Enhancement', desc: 'Evolving the visuals through depth mapping and experience optimization. We layer 2.5D perspectives over the core data to provide spatial understanding.', accent: false },
]

const motionSets = [
  { frames: hammerFrames,   label: 'Hammer Strike',   bg: robotBg1, offset: { x: -45, y: 45 } },
  { frames: screenFrames,   label: 'Screen Interact', bg: robotBg2, offset: { x: 0,   y: 0  } },
  { frames: drugFrames,     label: 'Item Use',        bg: robotBg3, offset: { x: 50,  y: -30 } },
  { frames: weedFrames,     label: 'Harvest',         bg: robotBg4, offset: { x: -16, y: 0  } },
  { frames: testFrames,     label: 'Scan',            bg: robotBg5, offset: { x: 40,  y: 8  } },
  { frames: digFrames,      label: 'Excavate',        bg: robotBg6, offset: { x: 0,   y: 24 } },
  { frames: computerFrames, label: 'Terminal',        bg: robotBg7, offset: { x: 0,   y: 0  } },
  { frames: pushFrames,     label: 'Push',            bg: robotBg8, offset: { x: 0,   y: 13 } },
]

function MotionCard({ frames, label, bg, offset = { x: 0, y: 0 } }) {
  const [frameIdx, setFrameIdx] = useState(0)
  const [hov, setHov] = useState(false)
  useEffect(() => {
    const id = setInterval(() => setFrameIdx(f => (f + 1) % frames.length), 1000 / 24)
    return () => clearInterval(id)
  }, [frames])
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: '12px', overflow: 'hidden',
        background: 'rgba(18,24,42,0.9)',
        border: `1px solid ${hov ? 'rgba(105,218,255,0.5)' : 'rgba(68,71,86,0.4)'}`,
        boxShadow: hov ? '0 0 20px rgba(105,218,255,0.12)' : '0 2px 12px rgba(0,0,0,0.4)',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ aspectRatio: '1', background: 'radial-gradient(ellipse at 50% 80%, rgba(105,218,255,0.12) 0%, rgba(18,28,58,0.95) 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', position: 'relative', overflow: 'hidden' }}>
        {bg
          ? <img src={bg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
          : <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(105,218,255,0.06) 1px, transparent 1px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />
        }
        <img src={frames[frameIdx]} alt={label} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', margin: 'auto', position: 'relative', zIndex: 1, transform: `translate(${offset.x}px, ${offset.y}px)` }} />
      </div>
      <div style={{ padding: '8px 10px', borderTop: '1px solid rgba(68,71,86,0.3)' }}>
        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: hov ? '#69daff' : 'rgba(167,170,187,0.8)', letterSpacing: '0.8px', textTransform: 'uppercase', textAlign: 'center', transition: 'color 0.2s' }}>{label}</p>
      </div>
    </div>
  )
}
function VfxCard({ name, frames }) {
  const [frameIdx, setFrameIdx] = useState(0)
  const [hov, setHov] = useState(false)
  const intervalRef = useRef(null)

  const startAnim = () => {
    setHov(true)
    setFrameIdx(0)
    intervalRef.current = setInterval(() => setFrameIdx(f => (f + 1) % frames.length), 1000 / 18)
  }
  const stopAnim = () => {
    setHov(false)
    clearInterval(intervalRef.current)
    setFrameIdx(0)
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  return (
    <div
      onMouseEnter={startAnim}
      onMouseLeave={stopAnim}
      style={{
        borderRadius: '10px', overflow: 'hidden',
        background: 'rgba(14,20,40,0.95)',
        border: `1px solid ${hov ? 'rgba(105,218,255,0.45)' : 'rgba(68,71,86,0.35)'}`,
        boxShadow: hov ? '0 0 18px rgba(105,218,255,0.15)' : '0 2px 10px rgba(0,0,0,0.35)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        display: 'flex', flexDirection: 'column', cursor: 'default',
      }}
    >
      <div style={{ aspectRatio: '1', position: 'relative', overflow: 'hidden', background: '#0c1020', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={frames[frameIdx]}
          alt={name}
          style={{ width: '75%', height: '75%', objectFit: 'cover', display: 'block', margin: 'auto' }}
        />
        {hov && (
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(105,218,255,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
        )}
      </div>
      <div style={{ padding: '6px 8px', borderTop: '1px solid rgba(68,71,86,0.25)' }}>
        <p style={{
          margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '9px', fontWeight: 600,
          color: hov ? '#69daff' : 'rgba(167,170,187,0.65)',
          letterSpacing: '0.6px', textTransform: 'uppercase', textAlign: 'center',
          transition: 'color 0.2s', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{name}</p>
      </div>
    </div>
  )
}

const celestialPlanets = [
  { name: 'Aureon-K',  img: celestialImg, thumb: building1Img, thumbOffset: 30, thumbRotate: 0, desc: 'A rust-red world rich in base metals and cooling rivers. The ideal starting point for large-scale automation and titanium mining.' },
  { name: 'Veluris-9', img: celestialImg, thumb: building2Img, thumbOffset: 40, thumbRotate: 0, desc: 'A high-orbit gas giant with volatile energy pockets. Harvest plasma streams to power advanced automation networks.' },
  { name: 'Cyth Prime', img: celestialImg, thumb: building3Img, thumbOffset: 23, thumbRotate: -3, desc: 'A frozen tundra world laced with rare crystalline minerals. Extreme conditions demand fully automated extraction rigs.' },
]

function goBack(e) {
  e.preventDefault()
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}


function WorkWithMeBtn() {
  const [btn, setBtn] = useState('default')
  return (
    <a
      href="mailto:kyralee0212@gmail.com"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: 30, padding: '0 28px', borderRadius: 59,
        background: 'linear-gradient(11deg, rgb(120,124,222), rgb(169,203,255), rgb(120,124,222))',
        backgroundSize: '200% 100%',
        backgroundPosition: btn === 'hover' || btn === 'active' ? '100% 0%' : '0% 0%',
        color: btn === 'active' ? '#3d4196' : 'white',
        fontFamily: 'Heebo, sans-serif', fontWeight: 500,
        fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap',
        transition: 'background-position 0.5s ease, color 0.1s',
      }}
      onMouseEnter={() => setBtn('hover')}
      onMouseLeave={() => setBtn('default')}
      onMouseDown={() => setBtn('active')}
      onMouseUp={() => setBtn('hover')}
    >
      Work with me
    </a>
  )
}

function ArrowBtn({ onClick, flip }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'absolute', top: '50%', background: 'none', border: 'none', cursor: 'pointer', padding: 0, zIndex: 2,
        ...(flip
          ? { left: '-36px', transform: `translateY(-50%) scaleX(-1)` }
          : { right: '-36px', transform: `translateY(-50%)` }),
      }}
    >
      <img
        src={arrowNext}
        alt={flip ? 'prev' : 'next'}
        style={{
          width: hov ? '52px' : '44px',
          height: hov ? '62px' : '52px',
          display: 'block',
          filter: hov ? `drop-shadow(0 0 8px ${CYAN}) drop-shadow(0 0 3px rgba(105,218,255,0.8))` : 'none',
          transition: 'width 0.2s ease, height 0.2s ease, filter 0.2s ease',
        }}
      />
    </button>
  )
}

function PlayNowBtn() {
  const [hov, setHov] = useState(false)
  return (
    <a
      href="https://automata.zkwasm.ai/"
      target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: 'inline-block', textDecoration: 'none', cursor: 'pointer', position: 'relative' }}
    >
      <img
        src={hov ? btnHover : btnDefault}
        alt="Play Now"
        style={{ display: 'block', height: '52px', width: 'auto' }}
      />
      <span style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Heebo', sans-serif", fontWeight: 700, fontSize: '16px',
        color: hov ? 'white' : '#1a1a2e', letterSpacing: '1px', pointerEvents: 'none', transition: 'color 0.2s',
      }}>Play Now</span>
    </a>
  )
}

function BackBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: 'Heebo, sans-serif', fontWeight: 500,
        fontSize: 14, color: PURPLE, padding: 0,
      }}
    >
      <span style={{ fontSize: '30px', lineHeight: 1 }}>‹</span>
      <span style={{ marginLeft: 2, fontSize: '18px', lineHeight: 1, position: 'relative', top: 2 }}>Back</span>
    </button>
  )
}

export default function AutomataPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const [planetIdx, setPlanetIdx] = useState(0)
  const [slideDir, setSlideDir] = useState(null)
  const [exitPlanetIdx, setExitPlanetIdx] = useState(null)
  const lastDirRef = useRef('next')

  function goPlanet(dir) {
    lastDirRef.current = dir
    setSlideDir(dir)
    setExitPlanetIdx(planetIdx)
    setPlanetIdx(i => dir === 'next'
      ? (i + 1) % celestialPlanets.length
      : (i - 1 + celestialPlanets.length) % celestialPlanets.length)
    setTimeout(() => {
      setExitPlanetIdx(null)
      setSlideDir(null)
    }, 400)
  }

  const [hoveredRobot, setHoveredRobot] = useState(null)
  const [refAbout, visibleAbout] = useFadeUp(0.1)
  const [refProcess, visibleProcess] = useFadeUp(0.1)
  const [refCelestial, visibleCelestial] = useFadeUp(0.1)
  const [refChars, visibleChars] = useFadeUp(0.1)
  const [refInterface, visibleInterface] = useFadeUp(0.1)
  const [refVfx, visibleVfx] = useFadeUp(0.1)
  const [refRetro, visibleRetro] = useFadeUp(0.1)

  const fade = (v) => ({
    opacity: v ? 1 : 0,
    transform: v ? 'translateY(0)' : 'translateY(36px)',
    transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
  })

  const planet = celestialPlanets[planetIdx]

  return (
    <div style={{ background: BG, color: '#e2e4f6', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>
      <style>{`
        @keyframes slide-in-right  { from { opacity:0; transform: translateX(60px); } to { opacity:1; transform: translateX(0); } }
        @keyframes slide-in-left   { from { opacity:0; transform: translateX(-60px); } to { opacity:1; transform: translateX(0); } }
        @keyframes slide-out-right { from { opacity:1; transform: translateX(0); } to { opacity:0; transform: translateX(-60px); } }
        @keyframes slide-out-left  { from { opacity:1; transform: translateX(0); } to { opacity:0; transform: translateX(60px); } }
        .planet-slide-next { animation: slide-out-right 0.28s ease forwards; }
        .planet-slide-prev { animation: slide-out-left  0.28s ease forwards; }
        .planet-enter-next { animation: slide-in-right  0.28s ease forwards; }
        .planet-enter-prev { animation: slide-in-left   0.28s ease forwards; }

        @keyframes planet-spin-out-next { from { transform: rotateZ(0deg); opacity:1; } to { transform: rotateZ(180deg); opacity:0; } }
        @keyframes planet-spin-out-prev { from { transform: rotateZ(0deg); opacity:1; } to { transform: rotateZ(-180deg); opacity:0; } }
        @keyframes planet-spin-in-next  { from { transform: rotateZ(-180deg); opacity:0; } to { transform: rotateZ(0deg); opacity:1; } }
        @keyframes planet-spin-in-prev  { from { transform: rotateZ(180deg); opacity:0; } to { transform: rotateZ(0deg); opacity:1; } }
        .planet-spin-out-next { animation: planet-spin-out-next 0.4s cubic-bezier(0.4,0,0.2,1) forwards; transform-origin: center center; }
        .planet-spin-out-prev { animation: planet-spin-out-prev 0.4s cubic-bezier(0.4,0,0.2,1) forwards; transform-origin: center center; }
        .planet-spin-in-next  { animation: planet-spin-in-next  0.4s cubic-bezier(0.4,0,0.2,1) forwards; transform-origin: center center; }
        .planet-spin-in-prev  { animation: planet-spin-in-prev  0.4s cubic-bezier(0.4,0,0.2,1) forwards; transform-origin: center center; }
      `}</style>


      {/* ── Nav ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        height: '74px', background: BG,
        borderBottom: `1px solid ${BORDER}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        <BackBtn onClick={goBack} />
        <span style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'Heebo, sans-serif', fontWeight: 600, fontSize: 26, color: PURPLE,
        }}>
          AUTOMATA
        </span>
        <WorkWithMeBtn />
      </div>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: '892px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: BG }}>
        {/* Layer 1: background video */}
        <video
          src={automataHeroVideo}
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        />
        {/* Layer 2: mid — game scene with robot */}
        <img src={heroMid} alt="" style={{
          position: 'absolute', bottom: 0,
          left: '50%', transform: 'translateX(-50%)',
          width: '234%',
          pointerEvents: 'none', display: 'block',
        }} />
        {/* Layer 3: front — foreground, height-anchored to bottom */}
        <img src={heroFront} alt="" style={{
          position: 'absolute', bottom: 0,
          left: '50%', transform: 'translateX(-50%)',
          height: '69%', width: 'auto', bottom: '-250px',
          pointerEvents: 'none', display: 'block',
        }} />
        {/* Layer 4: dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.61)', pointerEvents: 'none' }} />
        {/* Layer 5: radial white glow */}
        <div style={{
          position: 'absolute', inset: '6px 0 -6px 0', opacity: 0.7, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 78.18% 77.66% at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(10,14,26,0) 100%)',
        }} />
        {/* Layer 6: bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: `linear-gradient(to bottom, transparent, ${BG})`, pointerEvents: 'none' }} />

        {/* content */}
        <div style={{
          position: 'relative', zIndex: 2,
          textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px',
          padding: '0 32px', maxWidth: '1024px',
          transform: 'translateY(20px)',
        }}>
          {/* pill badge */}
          <div style={{
            border: '1px solid #97a2eb', borderRadius: '18px',
            padding: '0 24px', height: '36px',
            display: 'flex', alignItems: 'center',
            background: 'rgba(105,218,255,0.16)',
            color: CYAN, fontSize: '20px', letterSpacing: '3px',
            textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
            whiteSpace: 'nowrap',
          }}>
            A Web-Speed Verifiable Gaming Universe
          </div>


          {/* AUTOMATA stylized logo */}
          <img
            src={automataLogoTitle}
            alt="AUTOMATA"
            style={{ width: '700px', maxWidth: '90vw', display: 'block' }}
          />

          {/* subtitle */}
          <p style={{
            color: 'white', fontSize: '24px', maxWidth: '758px',
            lineHeight: '1.5', margin: 0, fontWeight: 500,
            letterSpacing: '3px', textTransform: 'uppercase',
          }}>
            Fully responsible for all visual design and art direction, from concept to final assets.
          </p>

          {/* CTA */}
          <div style={{ marginTop: '6px' }}>
            <PlayNowBtn />
          </div>
        </div>
      </section>

      {/* ── Meta bar ── */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: '24px 96px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
          {[
            { label: 'Role', value: 'Lead Designer' },
            { label: 'Genre', value: 'Idle Strategy' },
            { label: 'Platform', value: 'Web · Mobile' },
            { label: 'Status', value: 'Live' },
          ].map(item => (
            <div key={item.label}>
              <p style={{ color: PURPLE_LIGHT, fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '4px', opacity: 0.7 }}>{item.label}</p>
              <p style={{ color: '#e2e4f6', fontSize: '15px', fontWeight: 600, margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '48px' }}>
          {[
            { num: '10K+', label: 'Players' },
            { num: 'Reddit', label: 'Popular Topic' },
          ].map(s => (
            <div key={s.num} style={{ textAlign: 'right' }}>
              <p style={{ color: CYAN, fontSize: '26px', fontWeight: 800, margin: 0 }}>{s.num}</p>
              <p style={{ color: '#a7aabb', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── What is Automata ── */}
      <section ref={refAbout} style={{ padding: '0 96px', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', ...fade(visibleAbout) }}>
        {/* background image */}
        <img src={whatIsBg} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.2, pointerEvents: 'none',
        }} />
        {/* inner shadow to blend edges into BG */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          boxShadow: `inset 0 0 120px 80px ${BG}`,
        }} />
        <div style={{ maxWidth: '1216px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr fit-content(100%)', gap: '80px', alignItems: 'center' }}>
          {/* left text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ color: CYAN, fontSize: '16px', letterSpacing: '4.8px', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0 }}>Core Protocol</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '40px', lineHeight: '48px', color: CYAN, margin: 0 }}>
              What is<br />Automata?
            </h2>
            <p style={{ color: '#a7aabb', fontSize: '18px', lineHeight: '1.625', margin: '16px 0 0', maxWidth: '480px' }}>
              ZKWasm Automata is a strategy-based idle game where players deploy and upgrade automated units to generate resources over time. By optimizing placement and upgrading systems, players can improve efficiency and progress further while the game continues to run automatically.
            </p>
          </div>
          {/* right screenshot inside game frame */}
          <div style={{ width: '580px', height: '380px', flexShrink: 0, position: 'relative' }}>
            {/* YouTube embed inset to fit inside frame padding */}
            <iframe
              src="https://www.youtube.com/embed/pjl7h4tW-ww"
              title="Automata gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '7%', left: '5%',
                width: '90%', height: '86%',
                border: 'none',
                borderRadius: '8px',
              }}
            />
            {/* frame overlay */}
            <img
              src={frame3}
              alt=""
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'fill',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Design Progress ── */}
      <section ref={refProcess} id="process-section" style={{ padding: '64px 32px 128px', ...fade(visibleProcess) }}>
        <h2 style={{
          textAlign: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 700,
          fontSize: '36px', letterSpacing: '2.4px', textTransform: 'uppercase',
          color: 'white', marginBottom: '48px',
        }}>
          Design Progress
        </h2>
        <div style={{ maxWidth: '1216px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {stages.map((s) => (
            <div key={s.num} style={{
              borderRadius: '16px', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              ...(s.accent
                ? { background: 'linear-gradient(to bottom, rgba(89,194,193,0.8), rgba(32,96,135,0.8))', boxShadow: '0 4px 24px rgba(0,0,0,0.35)' }
                : { background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }),
            }}>
              {/* image — flush, no gap */}
              <img src={s.img} alt={s.title} style={{ width: '100%', height: '340px', objectFit: 'contain', objectPosition: s.imgPosition || 'center', display: 'block', flexShrink: 0, background: 'rgba(0,0,0,0.15)' }} />
              {/* text */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px' }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '32px', lineHeight: '36px',
                  flexShrink: 0, width: '44px',
                  color: s.accent ? 'rgba(255,255,255,0.5)' : `rgba(105,218,255,0.25)`,
                }}>{s.num}</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: '28px',
                    marginBottom: '10px', marginTop: 0,
                    color: s.accent ? '#ffffff' : '#e2e4f6',
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: '24px',
                    margin: 0,
                    color: s.accent ? 'rgba(235,235,235,0.85)' : 'rgba(167,170,187,0.9)',
                  }}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Celestial Objects ── */}
      <section ref={refCelestial} style={{ padding: '64px 48px', position: 'relative', ...fade(visibleCelestial) }}>
        <div style={{ maxWidth: '1216px', margin: '0 auto' }}>
          {/* section header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '24px', color: '#e2e4f6', margin: 0 }}>Celestial Atlas</h2>
            <span style={{ background: 'rgba(105,218,255,0.12)', color: CYAN, fontSize: '12px', fontWeight: 600, padding: '4px 14px', borderRadius: '9999px', letterSpacing: '1px', border: `1px solid rgba(105,218,255,0.25)` }}>3 ASSETS</span>
          </div>


          {/* wrapper with arrows outside */}
          <div style={{ position: 'relative' }}>

            <ArrowBtn flip onClick={() => goPlanet('prev')} />

            {/* outer frame — background image fills it */}
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              border: `1.5px solid rgba(105,218,255,0.4)`,
              height: '420px', position: 'relative',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            }}>
              {/* background: full landscape image */}
              <img
                src={planet.img} alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* exit planet — spins out */}
              {exitPlanetIdx !== null && (
                <div style={{
                  position: 'absolute',
                  right: ['5%', 'calc(5% - 35px)', 'calc(5% + 20px)'][exitPlanetIdx],
                  top: ['calc(-30% + 130px)', 'calc(-30% + 163px)', 'calc(-30% + 109px)'][exitPlanetIdx],
                  height: ['237%', '226%', '239%'][exitPlanetIdx],
                  width: 'auto', pointerEvents: 'none',
                }}>
                  <img
                    src={[planet1, planet2, planet3][exitPlanetIdx]} alt=""
                    className={slideDir === 'next' ? 'planet-spin-out-next' : 'planet-spin-out-prev'}
                    style={{ height: '100%', width: 'auto', display: 'block', opacity: 0.95 }}
                  />
                </div>
              )}
              {/* enter planet — spins in */}
              <div style={{
                position: 'absolute',
                right: ['5%', 'calc(5% - 35px)', 'calc(5% + 20px)'][planetIdx],
                top: ['calc(-30% + 130px)', 'calc(-30% + 163px)', 'calc(-30% + 109px)'][planetIdx],
                height: ['237%', '226%', '239%'][planetIdx],
                width: 'auto', pointerEvents: 'none',
              }}>
                <img
                  key={`planet-${planetIdx}`}
                  src={[planet1, planet2, planet3][planetIdx]} alt=""
                  className={exitPlanetIdx !== null
                    ? (lastDirRef.current === 'next' ? 'planet-spin-in-next' : 'planet-spin-in-prev')
                    : ''}
                  style={{ height: '100%', width: 'auto', display: 'block', opacity: 0.95 }}
                />
              </div>

              {/* left floating panel */}
              <div
                key={`panel-${planetIdx}`}
                className={slideDir ? 'planet-slide-next' : 'planet-enter-prev'}
                style={{
                position: 'absolute', top: '20px', left: '20px', bottom: '20px',
                width: '260px',
                borderRadius: '16px',
                background: 'linear-gradient(160deg, rgba(89,194,193,0.82) 0%, rgba(32,96,135,0.88) 100%)',
                padding: '16px 16px 20px',
                display: 'flex', flexDirection: 'column', gap: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
                overflow: 'visible',
              }}>
                {/* square frame — inner shadow, no building inside */}
                <div style={{
                  borderRadius: '12px',
                  border: '2px solid rgba(105,218,255,0.5)',
                  width: '100%', aspectRatio: '1', flexShrink: 0, maxHeight: '200px',
                  boxShadow: 'inset 0 4px 16px rgba(0,0,0,0.35)',
                  background: 'rgba(4,72,78,0.35)',
                  position: 'relative',
                }}>
                  {/* building floats above the frame */}
                  <img
                    src={planet.thumb} alt={planet.name}
                    style={{
                      position: 'absolute',
                      bottom: '0', left: '50%',
                      transform: `translateX(-50%) translateY(calc(-10% + ${planet.thumbOffset}px)) rotate(${planet.thumbRotate}deg)`,
                      width: '120%', height: '120%',
                      objectFit: 'contain',
                      pointerEvents: 'none',
                      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))',
                    }}
                  />
                </div>
                {/* name + desc */}
                <div style={{ flexShrink: 0 }}>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '20px', color: 'white', margin: '0 0 6px' }}>{planet.name}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '13px', lineHeight: '20px', color: 'rgba(235,235,235,0.85)', margin: 0 }}>{planet.desc}</p>
                </div>
              </div>
            </div>

            <ArrowBtn onClick={() => goPlanet('next')} />
          </div>

          {/* dot indicators */}
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '20px' }}>
            {celestialPlanets.map((_, i) => (
              <div key={i} onClick={() => setPlanetIdx(i)} style={{ width: i === planetIdx ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === planetIdx ? CYAN : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.3s ease' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Characters + Motion ── */}
      <section ref={refChars} style={{ padding: '64px 48px', ...fade(visibleChars) }}>
        <div style={{ maxWidth: '1216px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>

          {/* Robot Archetypes — card style */}
          <div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '24px', color: '#e2e4f6', margin: '0 0 32px' }}>Robot Archetypes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', alignItems: 'start' }}>
              {[
                { img: robot1Img, name: 'Unit-A1', type: 'Combat',  typeColor: '#ef4444', typeBg: 'rgba(239,68,68,0.18)',    cardGlow: 'rgba(239,68,68,0.12)',  lv: 85, cls: 'Assault' },
                { img: robot2Img, name: 'Unit-A2', type: 'Support', typeColor: '#22c55e', typeBg: 'rgba(34,197,94,0.18)',    cardGlow: 'rgba(34,197,94,0.1)',   lv: 72, cls: 'Medic' },
                { img: robot3Img, name: 'Unit-A3', type: 'Mining',  typeColor: '#f59e0b', typeBg: 'rgba(245,158,11,0.18)',   cardGlow: 'rgba(245,158,11,0.1)', lv: 91, cls: 'Excavator' },
                { img: robot4Img, name: 'Unit-A4', type: 'Defense', typeColor: '#69daff', typeBg: 'rgba(105,218,255,0.14)', cardGlow: 'rgba(105,218,255,0.1)', lv: 78, cls: 'Guardian' },
              ].map((robot, i) => {
                const hov = hoveredRobot === i
                return (
                  <div key={i}
                    onMouseEnter={() => setHoveredRobot(i)}
                    onMouseLeave={() => setHoveredRobot(null)}
                    style={{ position: 'relative', paddingTop: '150px', transition: 'transform 0.3s ease', transform: hov ? 'translateY(-8px)' : 'translateY(0)' }}
                  >
                    <img src={robot.img} alt={robot.name} style={{
                      position: 'absolute', top: 20, left: '50%',
                      transform: 'translateX(-50%)',
                      width: '90%', height: '210px',
                      objectFit: 'contain', objectPosition: 'bottom',
                      pointerEvents: 'none', zIndex: 2,
                      filter: hov ? `drop-shadow(0 0 20px ${robot.typeColor}66) drop-shadow(0 4px 12px rgba(0,0,0,0.7))` : 'drop-shadow(0 6px 18px rgba(0,0,0,0.7))',
                      transition: 'filter 0.3s ease',
                    }} />
                    <div style={{
                      borderRadius: '20px',
                      background: 'linear-gradient(180deg, rgba(22,30,52,0.97) 0%, rgba(14,19,36,0.99) 100%)',
                      border: `1px solid ${hov ? robot.typeColor + '60' : 'rgba(68,71,86,0.45)'}`,
                      boxShadow: hov ? `0 0 32px ${robot.cardGlow}, 0 16px 48px rgba(0,0,0,0.55)` : '0 4px 24px rgba(0,0,0,0.45)',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}>
                      <div style={{ height: '3px', background: `linear-gradient(90deg, transparent, ${robot.typeColor}, transparent)`, opacity: hov ? 1 : 0.4, transition: 'opacity 0.3s' }} />
                      <div style={{ position: 'absolute', top: '130px', left: '50%', transform: 'translateX(-50%)', width: '140px', height: '50px', borderRadius: '50%', background: robot.typeColor, opacity: hov ? 0.22 : 0.1, filter: 'blur(24px)', pointerEvents: 'none', transition: 'opacity 0.3s' }} />
                      <div style={{ padding: '70px 18px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '17px', color: 'white' }}>
                          <span style={{ color: 'rgba(255,255,255,0.3)', marginRight: 5 }}>•</span>{robot.name}<span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 5 }}>•</span>
                        </p>
                        <span style={{ padding: '4px 16px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: robot.typeColor, background: robot.typeBg, border: `1px solid ${robot.typeColor}50` }}>{robot.type}</span>
                        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, width: '100%' }}>
                          {[{ val: `LV.${robot.lv}`, label: 'Power' }, { val: robot.cls, label: 'Class' }].map((s, si) => (
                            <div key={si} style={{ padding: '8px 10px', borderRight: si === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                              <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '14px', color: 'white' }}>{s.val}</p>
                              <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(167,170,187,0.6)', letterSpacing: '0.8px', textTransform: 'uppercase', marginTop: 2 }}>{s.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Motion Cycles — animated cards */}
          <div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '24px', color: '#e2e4f6', margin: '0 0 8px' }}>2.5D Robot Motion Cycles</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 20px' }}>Proprietary rig-ready animations for Unit-A1 Series — 24 fps.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {motionSets.map((m, i) => <MotionCard key={i} frames={m.frames} label={m.label} bg={m.bg} offset={m.offset} />)}
            </div>
          </div>

        </div>
      </section>

      {/* ── Interface Components ── */}
      <section ref={refInterface} style={{ padding: '64px 48px', ...fade(visibleInterface) }}>
        <div style={{ maxWidth: '1216px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '24px', color: '#e2e4f6', marginBottom: '32px' }}>Interface Components</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
            {/* left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '3px' }}>
              {/* icon grid — 5×2 */}
              <div style={{
                borderRadius: '16px', padding: '20px 24px',
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid rgba(105,218,255,0.2)`,
                boxShadow: 'inset 0 1px 0 rgba(105,218,255,0.08)',
                display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px',
              }}>
                {[
                  'https://www.figma.com/api/mcp/asset/fd80a330-19bf-458a-8d48-864aa7072fa9',
                  'https://www.figma.com/api/mcp/asset/471c9a6c-1186-41e2-a9ef-19bbfcfbcb44',
                  'https://www.figma.com/api/mcp/asset/4ee6f20f-754b-434a-92b4-56d77f6d85f7',
                  'https://www.figma.com/api/mcp/asset/4f4af85a-365f-46db-a61b-31f3cb025404',
                  'https://www.figma.com/api/mcp/asset/9ab21b3a-5106-4177-9c21-c0b47e847a47',
                  'https://www.figma.com/api/mcp/asset/3ff3065d-5242-4b3d-a030-757cb231fdb3',
                  'https://www.figma.com/api/mcp/asset/ace01c62-5697-4225-b506-2c7dd7d006fd',
                  'https://www.figma.com/api/mcp/asset/44fded32-3cd5-4e75-9b26-aa55646a98b1',
                  'https://www.figma.com/api/mcp/asset/e7a072ec-bb59-46c5-9f5e-2e5f83217f63',
                  'https://www.figma.com/api/mcp/asset/e2832dc2-b005-4e14-a08b-a79efd1e3500',
                ].map((url, i) => (
                  <div key={i} style={{
                    aspectRatio: '1', borderRadius: '10px',
                    background: 'rgba(105,218,255,0.06)',
                    border: '1px solid rgba(105,218,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '20px',
                  }}>
                    <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
              {/* UI composite — group17 (552×640 reference) */}
              <div style={{ position: 'relative', flex: 1, minHeight: '400px' }}>
                {[
                  // Asset 102 1 — main auction panel
                  { url: 'https://www.figma.com/api/mcp/asset/b836e756-666f-4fa6-b379-5208599d117e', t:'1.09%', l:'0%',     w:'41.67%', h:'24.69%', o:1 },
                  // Asset 108 1 — toggle off
                  { url: 'https://www.figma.com/api/mcp/asset/a9661a0b-f061-4ca9-b0b0-a5fa92615c0e', t:'0%',    l:'44.93%', w:'19.38%', h:'8.59%',  o:1 },
                  // Asset 109 1 — toggle on
                  { url: 'https://www.figma.com/api/mcp/asset/5754b690-7aa4-43b4-8edd-121fa2a3a5ea', t:'8.59%', l:'44.93%', w:'19.38%', h:'8.44%',  o:1 },
                  // bounty_hover
                  { url: 'https://www.figma.com/api/mcp/asset/39f7d1ca-22ea-4942-b3c7-9a7e74307610', t:'1.09%', l:'66.49%', w:'19.93%', h:'14.38%', o:1 },
                  // upgrade_idle
                  { url: 'https://www.figma.com/api/mcp/asset/d865b6ab-c9dd-4f75-a7bc-8206bd4423b5', t:'0%',    l:'88.77%', w:'9.06%',  h:'7.66%',  o:1 },
                  // upgrade
                  { url: 'https://www.figma.com/api/mcp/asset/41f24799-bafd-442b-bed0-ad7a38bd34d6', t:'8.59%', l:'88.77%', w:'9.06%',  h:'7.66%',  o:1 },
                  // Asset 104 1 — redeem bar
                  { url: 'https://www.figma.com/api/mcp/asset/f7a0e67f-9890-4539-bd1b-94448063b23d', t:'19.69%',l:'44.02%', w:'53.8%',  h:'12.34%', o:1 },
                  // withdraw_normal
                  { url: 'https://www.figma.com/api/mcp/asset/e8a97668-c83b-49a6-b36f-d7675de59b9b', t:'27.97%',l:'0.18%',  w:'20.11%', h:'11.41%', o:1 },
                  // deposit_normal
                  { url: 'https://www.figma.com/api/mcp/asset/45775348-0521-4fd9-89cd-f595dd8241c3', t:'27.97%',l:'21.74%', w:'19.93%', h:'11.25%', o:1 },
                  // back_n
                  { url: 'https://www.figma.com/api/mcp/asset/58dce6cf-2b0a-4016-b9c7-e6ae89ef3829', t:'34.38%',l:'62.5%',  w:'6.88%',  h:'6.88%',  o:1 },
                  // next_n
                  { url: 'https://www.figma.com/api/mcp/asset/76f67b83-6585-4098-9034-bc0ba2ae3169', t:'34.53%',l:'91.3%',  w:'6.52%',  h:'6.56%',  o:1 },
                  // Asset 416 1 — 200/200
                  { url: 'https://www.figma.com/api/mcp/asset/d6b2ab66-2040-4302-b3ec-658ad967177d', t:'34.84%',l:'71.92%', w:'16.85%', h:'5.94%',  o:1 },
                  // Asset 105 1 — items column
                  { url: 'https://www.figma.com/api/mcp/asset/0a1b7662-2b00-4185-ac4f-5bc6d1f58e00', t:'34.22%',l:'45.47%', w:'13.77%', h:'26.56%', o:1 },
                  // guide_n
                  { url: 'https://www.figma.com/api/mcp/asset/604b66d0-fa1c-4183-af27-cd6104d67e61', t:'44.22%',l:'62.5%',  w:'22.28%', h:'6.56%',  o:1 },
                  // Asset 415 1
                  { url: 'https://www.figma.com/api/mcp/asset/ffa9b22e-afa9-46c7-9500-b2288a41f277', t:'43.59%',l:'88.77%', w:'7.97%',  h:'7.66%',  o:1 },
                  // robot 1 — MO-00203 panel
                  { url: 'https://www.figma.com/api/mcp/asset/6784678a-2584-498c-adff-889e3c479ec9', t:'40.78%',l:'0.18%',  w:'42.93%', h:'19.53%', o:1 },
                  // play_n
                  { url: 'https://www.figma.com/api/mcp/asset/cee1d93b-962d-4c29-9585-19427242d5fb', t:'52.81%',l:'62.5%',  w:'22.64%', h:'6.72%',  o:1 },
                  // ufo
                  { url: 'https://www.figma.com/api/mcp/asset/99e43743-8eca-4e8c-99fd-6aa0c6ec8e04', t:'52.81%',l:'88.77%', w:'8.51%',  h:'5.78%',  o:1 },
                  // frame 1 (background, low opacity)
                  { url: 'https://www.figma.com/api/mcp/asset/615da3c3-6ec4-4549-bed6-edc94a799e40', t:'64.38%',l:'0.18%',  w:'99.82%', h:'7.03%',  o:0.2 },
                  // frame 2 (foreground)
                  { url: 'https://www.figma.com/api/mcp/asset/cb535994-2d02-429f-8f06-9a9c2c4b066f', t:'64.38%',l:'0.18%',  w:'99.82%', h:'7.03%',  o:1 },
                  // Asset 417 1 — UNLOCK panel
                  { url: 'https://www.figma.com/api/mcp/asset/7b0f4d79-cbaa-44dc-a31c-a926c3ea3e7d', t:'75.47%',l:'0.18%',  w:'48.55%', h:'24.53%', o:1 },
                  // Asset 417 2 — DEPOSIT panel
                  { url: 'https://www.figma.com/api/mcp/asset/4ee39592-3007-4fe4-bfea-05152b7ae92e', t:'75.47%',l:'51.45%', w:'48.55%', h:'24.53%', o:1 },
                ].map((el, i) => (
                  <img key={i} src={el.url} alt="" style={{
                    position: 'absolute', top: el.t, left: el.l, width: el.w, height: el.h,
                    objectFit: 'contain', pointerEvents: 'none', opacity: el.o,
                  }} />
                ))}
              </div>
            </div>

            {/* right column — two stacked panels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
                <img src="https://www.figma.com/api/mcp/asset/2aa76b6d-6f81-4c46-a45d-37b7512c16dc" alt="UI level panel" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
                <img src="https://www.figma.com/api/mcp/asset/5a16235f-691e-4c4a-9397-df1df225be3d" alt="UI leaderboard" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VFX & Shaders ── */}
      <section ref={refVfx} style={{ padding: '64px 32px', ...fade(visibleVfx) }}>
        <div style={{ maxWidth: '1216px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '24px', color: '#e2e4f6', margin: '0 0 4px' }}>VFX &amp; Shaders</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Optimized particle systems and procedural textures.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '12px' }}>
            {vfxSets.map((set) => (
              <VfxCard key={set.name} name={set.name} frames={set.frames} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats + Retrospective ── */}
      <section ref={refRetro} style={{
        padding: '80px 64px 100px',
        borderTop: `1px solid ${BORDER}`,
        ...fade(visibleRetro),
      }}>
        <div style={{ maxWidth: '1216px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '80px', alignItems: 'center' }}>

          {/* left — retrospective */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(105,218,255,0.08)', border: '1px solid rgba(105,218,255,0.2)', borderRadius: '100px', padding: '4px 14px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: CYAN, display: 'block' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: CYAN, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Retrospective</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '38px', color: '#e2e4f6', margin: '0 0 28px', lineHeight: 1.2 }}>What I learned<br />from this project</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: '1.75', color: '#a7aabb', margin: '0 0 16px' }}>
              This is one of the most complete and successfully launched games I have independently created. Through several months of continuous updates and iterations, it has become increasingly engaging and dynamic.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: '1.75', color: '#a7aabb', margin: 0 }}>
              Looking back, one area for improvement would be more efficient communication with the client during the early stages. Clearer and faster alignment could better support future iterations and reduce the need for repeated revisions later in the process.
            </p>
          </div>

          {/* right — stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { num: '250K+', label: 'Active Netrummers',   color: CYAN },
              { num: '$1M+',  label: 'Total Crypto Rewards', color: PURPLE_LIGHT },
              { num: '100+',  label: 'Unique Augmentations', color: '#f59e0b' },
            ].map((s) => (
              <div key={s.num} style={{
                background: 'rgba(20,25,40,0.8)',
                border: `1px solid rgba(68,71,86,0.35)`,
                borderRadius: '14px',
                padding: '20px 24px',
                borderLeft: `3px solid ${s.color}`,
                display: 'flex', flexDirection: 'column', gap: '4px',
              }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '44px', lineHeight: 1, color: s.color, margin: 0 }}>{s.num}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7280', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Back to top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed', bottom: '40px', right: '40px', zIndex: 999,
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'rgba(20,25,40,0.9)',
          border: `1px solid rgba(105,218,255,0.35)`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', backdropFilter: 'blur(10px)',
          transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(105,218,255,0.7)'
          e.currentTarget.style.boxShadow = '0 0 20px rgba(105,218,255,0.2)'
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(105,218,255,0.35)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="#69daff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </div>
  )
}
