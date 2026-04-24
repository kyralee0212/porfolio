import { useLayoutEffect, useState } from 'react'
import kawaHeroNew from '../assets/images/kawa-hero-new.png'
import blsIconColor from '../assets/bls-icon-color.svg'
import blsLogoSloganWhite from '../assets/bls-logo-slogan-white.svg'
import blsSketchWeb1 from '../assets/bls-sketch-web1.png'
import blsSketchWeb2 from '../assets/bls-sketch-web2.png'
import blsCard7 from '../assets/bls-card7.png'
import blsEmailSig from '../assets/images/Email signiture.png'

// ── Kawa Ramen ──────────────────────────────────────────────────────────────
const kawaHero = kawaHeroNew
const kawaLogo = 'https://www.figma.com/api/mcp/asset/4e81bd9a-6fe4-4e81-b2e3-b56c68ebb750'
const kawaSketch1 = 'https://www.figma.com/api/mcp/asset/7826942d-4aec-42e4-a9d6-6e337661e983'
const kawaSketch2 = 'https://www.figma.com/api/mcp/asset/cbd1327b-bf95-408d-82fc-a98241aa9645'
const kawaColor1 = 'https://www.figma.com/api/mcp/asset/5d446eb7-6685-4ff4-af69-4709cf11fc5b'
const kawaColor2 = 'https://www.figma.com/api/mcp/asset/661c3d54-e74a-48ed-aa05-d0ac02454f09'
const kawaFinal1 = 'https://www.figma.com/api/mcp/asset/bb2ec78d-283d-4175-8053-b6c1cba29d62'
const kawaFinal2 = 'https://www.figma.com/api/mcp/asset/2982cee9-50ca-4510-bfd0-05b5eae02df5'
const kawaFinal3 = 'https://www.figma.com/api/mcp/asset/484815e4-f314-4457-81ba-d9b62747d221'

// ── Ming Wei ─────────────────────────────────────────────────────────────────
const mingHero = 'https://www.figma.com/api/mcp/asset/0628324c-1272-4321-aaaa-9c50f3123018'
const mingLogo = 'https://www.figma.com/api/mcp/asset/9b03182a-1dd2-466d-bd27-77dbe425a61a'
const mingHeroLogo = 'https://www.figma.com/api/mcp/asset/d8c10b20-9cd1-44c0-8bab-8371bc7c21dc'
const mingSketch1 = 'https://www.figma.com/api/mcp/asset/e1d8bbeb-0011-47e9-958e-779fb8698871'
const mingSketch2 = 'https://www.figma.com/api/mcp/asset/3abef2cf-1ef3-4178-be02-cdd2f9ff95a0'
const mingColor = 'https://www.figma.com/api/mcp/asset/bc2bbcc6-fd85-4d6f-be1c-06adc9099609'
const mingFinal1 = 'https://www.figma.com/api/mcp/asset/2561e285-27a9-43a8-af43-280fe5fc7f69'
const mingFinal2 = 'https://www.figma.com/api/mcp/asset/ff522882-47b8-48a1-af22-9e07ee9ec2db'

// ── Better Lending Solutions ─────────────────────────────────────────────────
const blsHero = 'https://www.figma.com/api/mcp/asset/5cdb5493-e92f-4422-8e52-f91dca6616ac'
const blsLogo = 'https://www.figma.com/api/mcp/asset/9884d1e0-85bd-4c1d-a152-b44d451fbaf0'
const blsSketch1 = 'https://www.figma.com/api/mcp/asset/4de11519-5c4a-4132-ac9b-508cb01473ef'
const blsSketch2 = 'https://www.figma.com/api/mcp/asset/c32365ed-1c23-4179-ba36-761f1997c574'
const blsSketch3 = 'https://www.figma.com/api/mcp/asset/a360e45a-2cba-4741-a2c8-2f1702a1393e'
const blsSketch4 = 'https://www.figma.com/api/mcp/asset/4f352a7f-0105-4879-b800-cbbba9ab7f2d'
const blsColor1 = 'https://www.figma.com/api/mcp/asset/50666c68-3603-41a5-bf11-bd94f00c4eea'
const blsColor2 = 'https://www.figma.com/api/mcp/asset/a6c92cad-fb67-4c1a-b99d-f823e8920763'
const blsFinalLeft = 'https://www.figma.com/api/mcp/asset/074877c1-7a07-4163-bb62-1d64e8bc3b0b'
const blsFinalTopRight = 'https://www.figma.com/api/mcp/asset/91889f1e-c1ac-4a7b-8be0-6992adc9282c'
const blsFinalMidRight = 'https://www.figma.com/api/mcp/asset/ff43ea8b-8f11-4d75-899b-c1502b9ede31'
const blsFinalEmailSig = 'https://www.figma.com/api/mcp/asset/6c8413f7-a06c-4b8a-93bd-22a4f3a2789c'

// ── Delphinus Lab ─────────────────────────────────────────────────────────────
const delpHero = 'https://www.figma.com/api/mcp/asset/1a5380bd-c629-4e28-95d0-d4d29103b70d'
const delpLogo = 'https://www.figma.com/api/mcp/asset/afd880b3-78ec-40a0-b49a-4443b3c65704'
const delpSketch1 = 'https://www.figma.com/api/mcp/asset/627c671b-b3f7-4926-8a68-d24ee7aa61e5'
const delpSketch2 = 'https://www.figma.com/api/mcp/asset/14128449-6a01-41e3-b8f1-9dba8db1353b'
const delpFinal1 = 'https://www.figma.com/api/mcp/asset/e0dc88c4-239c-417b-a042-b2b0c649f081'
const delpFinal2 = 'https://www.figma.com/api/mcp/asset/81286954-c7e0-4072-a04f-2fb9aa0f9239'
const delpFinal3 = 'https://www.figma.com/api/mcp/asset/1c089986-cfcb-4de9-871a-c511742f27b3'

// ── Cereals Cat ──────────────────────────────────────────────────────────────
const cerHero = 'https://www.figma.com/api/mcp/asset/70301f66-9b55-4ae9-bc2c-de8183ec7c1b'
const cerIconHero = 'https://www.figma.com/api/mcp/asset/055b190c-c8dd-4d03-abc0-d55b2bb416b3'
const cerLogo = 'https://www.figma.com/api/mcp/asset/9eccee1e-5e75-493a-ac8b-51fd11cd561e'
const cerSketch1 = 'https://www.figma.com/api/mcp/asset/26721654-04dd-4935-8885-60fab794ef5f'
const cerSketch2 = 'https://www.figma.com/api/mcp/asset/d79b47ac-e0e3-498d-a75c-359d7eba56b8'
const cerRefine1 = 'https://www.figma.com/api/mcp/asset/5cfde055-52dc-4813-8d88-d68260bd7acf'
const cerRefine2 = 'https://www.figma.com/api/mcp/asset/f3c694cc-36ca-40dc-b3d2-44c9e5425bc8'
const cerFinal1 = 'https://www.figma.com/api/mcp/asset/1965ef67-e569-4eed-a435-f9f333a2ff9e'
const cerFinal2 = 'https://www.figma.com/api/mcp/asset/3e017b3a-c9cc-47ff-a39f-0616eabda98b'
const cerFinal3 = 'https://www.figma.com/api/mcp/asset/7ee0ff57-56ea-4e74-b0da-ea170e1b82af'

// ── L'Euphorie ────────────────────────────────────────────────────────────────
const euphHero = 'https://www.figma.com/api/mcp/asset/64d34e75-2d7b-40df-8579-de82b02e3c5b'
const euphHeroText = 'https://www.figma.com/api/mcp/asset/2887ea3f-15ad-454f-bb56-62cff91d7a73'
const euphLogo = 'https://www.figma.com/api/mcp/asset/5b32e054-0a09-402b-af0b-1948a77a0f0d'
const euphFinal1 = 'https://www.figma.com/api/mcp/asset/8c44e152-c485-4f85-81fb-2cb4ddb05af4'
const euphFinal2 = 'https://www.figma.com/api/mcp/asset/7714283c-bffe-4988-b595-bfc5cc8b08c0'
const euphCard1 = 'https://www.figma.com/api/mcp/asset/0fb295cb-c3a9-4391-94b7-204feb77bd79'
const euphCard2 = 'https://www.figma.com/api/mcp/asset/a6afa806-a69a-468f-b4f3-9611200eb534'
const euphTote = 'https://www.figma.com/api/mcp/asset/7afb25a2-46b3-4363-8a49-020ca6d28ca7'

// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = {
  'kawa-ramen': {
    name: 'Kawa Ramen',
    heroImg: kawaHero,
    heroImgStyle: { transform: 'scale(1.2)', transformOrigin: 'center bottom' },
    heroOverlay: { background: 'linear-gradient(to right, white 32%, rgba(255,255,255,0))' },
    heroTheme: 'light',
    heroJustify: 'flex-start',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 0, maxWidth: 580 }}>
        {/* Category tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <div style={{ width: 28, height: 2, background: '#97a2eb' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase', color: '#97a2eb' }}>
            Restaurant Branding · Sydney
          </span>
        </div>
        {/* Main title */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 58, lineHeight: 1.05, color: '#0f172a', marginBottom: 0, letterSpacing: -1.5 }}>
          One of the
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 58, lineHeight: 1.05, color: '#97a2eb', marginBottom: 0, letterSpacing: -1.5 }}>
          Best Ramen
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 58, lineHeight: 1.05, color: '#0f172a', marginBottom: 24, letterSpacing: -1.5 }}>
          in Sydney.
        </p>
        {/* Divider */}
        <div style={{ width: 48, height: 2, background: '#0f172a', opacity: 0.15, marginBottom: 20 }} />
        {/* Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#475569', marginBottom: 28, maxWidth: 420 }}>
          Honoured to have designed the identity for a beloved CBD restaurant. Though it closed in 2018, its legacy endures in the city's memory.
        </p>
        {/* Stats row */}
        <div style={{ display: 'flex', gap: 32 }}>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#0f172a', lineHeight: 1 }}>2017</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#97a2eb', letterSpacing: '1px', textTransform: 'uppercase', marginTop: 4 }}>Year</p>
          </div>
          <div style={{ width: 1, background: '#e2e8f0' }} />
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#0f172a', lineHeight: 1 }}>Logo Design</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#97a2eb', letterSpacing: '1px', textTransform: 'uppercase', marginTop: 4 }}>Service</p>
          </div>
          <div style={{ width: 1, background: '#e2e8f0' }} />
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#0f172a', lineHeight: 1 }}>CBD Sydney</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#97a2eb', letterSpacing: '1px', textTransform: 'uppercase', marginTop: 4 }}>Location</p>
          </div>
        </div>
      </div>
    ),
    logoImg: kawaLogo,
    brandColors: [
      { hex: '#0F59A3', label: '#0F59A3' },
      { hex: '#083E92', label: '#083E92' },
      { hex: '#111214', label: '#111214' },
      { hex: '#FFFFFF', label: '#FFFFFF', border: true },
    ],
    brandBgTitle: 'Cultural Fusion Design',
    brandBgText: 'The client envisioned a Japanese restaurant, and the concept was inspired by "kawa," meaning river. The flowing form was merged with the shape of ramen, while the kanji itself subtly resembles chopsticks. Creating a thoughtful and distinctive design that the client loved.',
    processSteps: [],
    processRender: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Card 01 */}
        <div style={{ background: '#eff1f2', borderRadius: 32, padding: 40 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#97a2eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#f8f0ff' }}>01</span>
          </div>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 6 }}>Concept Sketching</p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>Used divergent thinking to explore ideas, expressing concepts through both typography and graphic elements.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
              <img src={kawaSketch1} alt="" style={{ width: 'calc(100% - 30px)', height: 'calc(100% - 30px)', objectFit: 'contain', transform: 'scale(1.06)', clipPath: 'inset(5px)' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
              <img src={kawaSketch2} alt="" style={{ width: 'calc(100% - 30px)', height: 'calc(100% - 30px)', objectFit: 'contain', transform: 'scale(1.06)', clipPath: 'inset(5px 5px 5px 37px)' }} />
            </div>
          </div>
        </div>
        {/* Card 02 */}
        <div style={{ background: '#eff1f2', borderRadius: 32, padding: 40 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#97a2eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#f8f0ff' }}>02</span>
          </div>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 6 }}>Colouring and Refining</p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>Polished the selected concept and introduced a refined color palette drawing from Japanese cultural elements — deep navy, ink black, and crisp white.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
              <img src={kawaColor1} alt="" style={{ width: 'calc(100% - 60px)', height: 'calc(100% - 60px)', objectFit: 'contain' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
              <img src={kawaColor2} alt="" style={{ width: 'calc(100% - 50px)', height: 'calc(100% - 50px)', objectFit: 'contain', transform: 'scale(1.06)', clipPath: 'inset(5px)' }} />
            </div>
          </div>
        </div>
      </div>
    ),
    finalTitle: 'Final Deliverables',
    finalImages: [],
    finalRender: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '388px 388px', gap: 24 }}>
        {/* Left large: spans 2 cols × 2 rows */}
        <div style={{ gridColumn: '1 / 3', gridRow: '1 / 3', borderRadius: 24, overflow: 'hidden' }}>
          <img src={kawaFinal1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Top right */}
        <div style={{ gridColumn: '3 / 5', gridRow: '1', borderRadius: 24, overflow: 'hidden' }}>
          <img src={kawaFinal2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 0px' }} />
        </div>
        {/* Bottom right */}
        <div style={{ gridColumn: '3 / 5', gridRow: '2', borderRadius: 24, overflow: 'hidden' }}>
          <img src={kawaFinal3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    ),
  },

  'ming-wei': {
    name: 'Ming Wei',
    heroImg: mingHero,
    heroOverlay: { background: 'linear-gradient(105deg, rgba(10,14,30,0.88) 45%, rgba(10,14,30,0.3) 100%)' },
    heroTheme: 'dark',
    heroJustify: 'flex-start',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 0, maxWidth: 640 }}>
        {/* Category tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <div style={{ width: 3, height: 16, background: '#B21E1D' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
            Heavy Industry · Brand Identity · 2024
          </span>
        </div>
        {/* Logo */}
        <img src={mingHeroLogo} alt="Ming Wei logo" style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 20, filter: 'brightness(0) invert(1)' }} />
        {/* Main title */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 62, lineHeight: 1.0, color: 'white', textTransform: 'uppercase', letterSpacing: -1, marginBottom: 4 }}>
          Forged for
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 62, lineHeight: 1.0, color: '#B21E1D', textTransform: 'uppercase', letterSpacing: -1, marginBottom: 4 }}>
          Reliability.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 18, lineHeight: 1.0, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 32 }}>
          Built for the Ground Beneath
        </p>
        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.12)', marginBottom: 28 }} />
        {/* Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 15, lineHeight: '26px', color: 'rgba(255,255,255,0.6)', maxWidth: 460, marginBottom: 36 }}>
          Transforming raw copper into precision-engineered conduits that protect and power critical underground infrastructure.
        </p>
        {/* Stats */}
        <div style={{ display: 'flex', gap: 32 }}>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>2024</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Year</p>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>Logo Design</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Service</p>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>Taiwan</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Location</p>
          </div>
        </div>
      </div>
    ),
    logoImg: mingLogo,
    logoImgStyle: { clipPath: 'inset(4px)' },
    brandColors: [
      { hex: '#B21E1D', label: '#B21E1D' },
      { hex: '#1F2E85', label: '#1F2E85' },
      { hex: '#111214', label: '#111214' },
      { hex: '#FFFFFF', label: '#FFFFFF', border: true },
    ],
    brandBgTitle: 'Strong & Reliable Identity',
    brandBgText: 'Designed for a heavy copper processing company, focusing on a stable and trustworthy image. A balanced, symmetrical structure was used, along with deeper tones of red and blue to create a strong and grounded feel.',
    processSteps: [],
    processRender: (
      <div style={{ background: '#eff1f2', borderRadius: 32, padding: 40, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Left: Concept Sketching */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Concept Sketching</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>
              Developed concepts inspired by the letters "M" and "W" to shape the design.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', height: 220 }}>
                <img src={mingSketch1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center -15px' }} />
              </div>
              <div style={{ borderRadius: 16, overflow: 'hidden', height: 350 }}>
                <img src={mingSketch2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center -8px' }} />
              </div>
            </div>
          </div>
          {/* Right: Company colour design */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Company Colour Design</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>
              Experimented with different colors to give off a friendly and reliable vibe.
            </p>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 586 }}>
              <img src={mingColor} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    ),
    finalTitle: 'Final Showcase',
    finalImages: [],
    finalRender: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        {/* Company Signage */}
        <div style={{ background: '#f5f6f7', borderRadius: 32, overflow: 'hidden' }}>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img src={mingFinal2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '28px 32px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 3, height: 14, background: '#B21E1D', borderRadius: 2 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#B21E1D' }}>Application</span>
            </div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 24, color: '#2c2f30', lineHeight: '32px', marginBottom: 12 }}>Company Signage</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px' }}>
              A bold, large-format sign was placed at the factory entrance to establish immediate brand recognition. The clean red-and-blue palette commands authority in the industrial environment.
            </p>
          </div>
        </div>
        {/* Brand Collateral */}
        <div style={{ background: '#f5f6f7', borderRadius: 32, overflow: 'hidden' }}>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img src={mingFinal1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '28px 32px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 3, height: 14, background: '#1F2E85', borderRadius: 2 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#1F2E85' }}>Collateral</span>
            </div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 24, color: '#2c2f30', lineHeight: '32px', marginBottom: 12 }}>Brand Collateral</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px' }}>
              Designed a complete set of branded collateral—envelopes, business cards, tote bags, and ID lanyards—each carrying the signature logo to reinforce brand presence at every touchpoint.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  'better-lending': {
    name: 'Better Lending Solutions',
    heroImg: blsHero,
    heroOverlay: { background: 'radial-gradient(ellipse at center, rgba(3,8,45,0.45) 0%, rgba(3,8,45,0.15) 45%, transparent 72%), linear-gradient(135deg, rgba(15,18,139,0.38) 0%, rgba(92,0,216,0.3) 33%, rgba(0,156,215,0.3) 66%, rgba(0,192,157,0.35) 100%)' },
    heroTheme: 'dark',
    heroJustify: 'center',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0, maxWidth: 680 }}>
        {/* Category tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.4)' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
            Finance · Investment · Brand Identity
          </span>
          <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.4)' }} />
        </div>
        {/* Logo — main focus */}
        <img src={blsLogoSloganWhite} alt="Better Lending Solutions" style={{ height: 200, objectFit: 'contain', marginBottom: 32 }} />
        {/* Tagline */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 58, lineHeight: 1.05, color: 'white', letterSpacing: -2, marginBottom: 0 }}>
          Clear Guidance.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 58, lineHeight: 1.05, color: 'rgba(255,255,255,0.75)', letterSpacing: -2, marginBottom: 28 }}>
          Better Outcomes.
        </p>
        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.25)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.25)' }} />
        </div>
        {/* Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 16, lineHeight: '28px', color: 'rgba(255,255,255,0.6)', maxWidth: 460, marginBottom: 36 }}>
          Empowering smarter financial decisions through modern branding and trustworthy design.
        </p>
        {/* Stats */}
        <div style={{ display: 'flex', gap: 32 }}>
          {[{ val: '2022', label: 'Year' }, { val: 'Logo Design', label: 'Service' }, { val: 'Finance', label: 'Industry' }].map((s, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>{s.val}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>{s.label}</p>
              </div>
              {i < arr.length - 1 && <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.2)' }} />}
            </div>
          ))}
        </div>
      </div>
    ),
    logoImg: blsLogo,
    brandColors: [
      { hex: '#0f128b', label: '#0F128B' },
      { hex: '#5c00d8', label: '#5C00D8' },
      { hex: '#009cd7', label: '#009CD7' },
      { hex: '#00c09d', label: '#00C09D' },
    ],
    brandBgTitle: 'Modern, Trustworthy & Innovative',
    brandBgText: 'Designed for an investment company aiming to convey a sense of technology and trust. Blue and green tones were combined with modern gradients to create a fresh, innovative, and reliable brand image.',
    processSteps: [],
    processRender: (
      <div style={{ background: '#eff1f2', borderRadius: 32, padding: 40, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Left: Concept Sketching */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Concept Sketching</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>
              Based on the client's preference for the uppercase "B," a series of concepts were developed around its form.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', height: 380, background: 'white' }}>
                <img src={blsSketchWeb1} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
              </div>
              <div style={{ borderRadius: 16, overflow: 'hidden', height: 380, background: 'white', padding: '0%', boxSizing: 'border-box' }}>
                <img src={blsSketchWeb2} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
          {/* Right: Company Colour Design */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Company Colour Design</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>
              Explored different typography and color combinations to strike the right balance between approachability, trust, and innovation.
            </p>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 776, background: 'white' }}>
              <img src={blsColor1} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', clipPath: 'inset(60px 0 0 0)' }} />
            </div>
          </div>
        </div>
      </div>
    ),
    finalTitle: 'Final Showcase',
    finalImages: [],
    finalRender: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'stretch' }}>
        {/* Left: Brand Collateral */}
        <div style={{ background: '#f0f1f3', borderRadius: 32, overflow: 'hidden' }}>
          <div style={{ height: 830, overflow: 'hidden' }}>
            <img src={blsFinalLeft} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div style={{ padding: '24px 32px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 3, height: 14, background: '#0f128b', borderRadius: 2 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0f128b' }}>Application</span>
            </div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 20, color: '#2c2f30', marginBottom: 6 }}>Brand Collateral</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: '#595c5d', lineHeight: '22px' }}>Business cards, letterhead, envelopes, and digital templates applied across the full brand suite.</p>
          </div>
        </div>
        {/* Right: 3 cards stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
          {/* Business card */}
          <div style={{ background: '#f0f1f3', borderRadius: 32, overflow: 'hidden' }}>
            <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
              <img src={blsCard7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ padding: '18px 24px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 3, height: 14, background: '#009cd7', borderRadius: 2 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#009cd7' }}>Print</span>
              </div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 17, color: '#2c2f30', marginBottom: 4 }}>Business Card</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 13, color: '#595c5d', lineHeight: '20px' }}>Frosted glass finish card featuring the gradient brand identity for a premium first impression.</p>
            </div>
          </div>
          {/* Email signature */}
          <div style={{ background: '#f0f1f3', borderRadius: 32, overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflow: 'hidden', background: 'white', padding: 20, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={blsEmailSig} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '18px 24px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 3, height: 14, background: '#5c00d8', borderRadius: 2 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#5c00d8' }}>Digital</span>
              </div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 17, color: '#2c2f30', marginBottom: 4 }}>Email Signature</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 13, color: '#595c5d', lineHeight: '20px' }}>Consistent digital identity across all staff communications.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  'delphinus-lab': {
    name: 'Delphinus Lab',
    heroImg: delpHero,
    heroOverlay: { background: 'linear-gradient(120deg, rgba(0,8,24,0.92) 40%, rgba(0,20,50,0.6) 100%)' },
    heroTheme: 'dark',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0, maxWidth: 720 }}>
        {/* Category tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ width: 32, height: 1, background: 'rgba(75,195,226,0.5)' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(75,195,226,0.8)' }}>
            Zero-Knowledge · WebAssembly · Blockchain
          </span>
          <div style={{ width: 32, height: 1, background: 'rgba(75,195,226,0.5)' }} />
        </div>
        {/* Logo */}
        <img src={delpLogo} alt="Delphinus Lab" style={{ height: 56, objectFit: 'contain', marginBottom: 28 }} />
        {/* Main title */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 64, lineHeight: 1.0, color: 'white', letterSpacing: -2, marginBottom: 0 }}>
          The Future
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 64, lineHeight: 1.0, color: '#4BC3E2', letterSpacing: -2, marginBottom: 0 }}>
          Runs on Proof.
        </p>
        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '28px 0' }}>
          <div style={{ width: 40, height: 1, background: 'rgba(75,195,226,0.25)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(75,195,226,0.5)' }} />
          <div style={{ width: 40, height: 1, background: 'rgba(75,195,226,0.25)' }} />
        </div>
        {/* Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 16, lineHeight: '28px', color: 'rgba(255,255,255,0.6)', maxWidth: 480, marginBottom: 36 }}>
          Transforming WebAssembly into verifiable, zero-knowledge execution — making trustless computation accessible for every developer.
        </p>
        {/* Stats */}
        <div style={{ display: 'flex', gap: 32 }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>2022</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(75,195,226,0.6)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Year</p>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.12)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>Logo Design</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(75,195,226,0.6)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Service</p>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.12)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>Web3 / DeFi</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(75,195,226,0.6)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Industry</p>
          </div>
        </div>
      </div>
    ),
    logoImg: delpLogo,
    brandColors: [
      { hex: '#4BC3E2', label: '#4BC3E2' },
      { hex: '#2DA8F7', label: '#2DA8F7' },
      { hex: '#111214', label: '#111214' },
      { hex: '#FFFFFF', label: '#FFFFFF', border: true },
    ],
    brandBgTitle: 'Futuristic Crypto Identity',
    brandBgText: 'Designed for a crypto startup with a strong focus on a futuristic and tech-driven identity. Inspired by the dolphin constellation, the concept incorporates dolphin elements to create a unique and forward-looking brand image.',
    processSteps: [],
    processRender: (
      <div style={{ background: '#eff1f2', borderRadius: 32, padding: 40, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* Left: Concept Sketching */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Concept Sketching</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>
              Used divergent thinking to explore ideas, expressing concepts through both typography and graphic elements.
            </p>
            <div style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minHeight: 300 }}>
              <img src={delpSketch1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          {/* Right: Final Colouring & Design */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Final Colouring & Design</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24 }}>
              Selected the final concept and refined the linework for digital precision. A cyan and blue gradient palette was chosen to reflect the brand's futuristic, tech-forward identity.
            </p>
            <div style={{ borderRadius: 16, overflow: 'hidden', flex: 1, minHeight: 300 }}>
              <img src={delpSketch2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    ),
    finalTitle: 'Final Showcase',
    finalImages: [],
    finalRender: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {/* Top row: T-shirt + Cold Wallet */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* T-shirt mockup */}
          <div style={{ borderRadius: 48, overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <img src={delpFinal1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Cold Wallet */}
          <div style={{ background: '#f5f6f7', borderRadius: 48, overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: '32px 32px 0 0', marginTop: -24 }}>
              <img src={delpFinal2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '20px 28px 32px' }}>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 26, color: '#2c2f30', marginBottom: 8 }}>Cold Wallet</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, color: '#595c5d', lineHeight: '26px' }}>
                USB device for secure cryptocurrency storage
              </p>
            </div>
          </div>
        </div>
        {/* Bottom row: Digital Versatility — text left + watch right */}
        <div style={{ background: '#f5f6f7', borderRadius: 48, padding: 48, display: 'flex', gap: 48, alignItems: 'center', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ flexShrink: 0, maxWidth: 400 }}>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 28, color: '#2c2f30', marginBottom: 12 }}>Digital Versatility</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, color: '#595c5d', lineHeight: '28px' }}>
              Designed for online use across various social platforms and devices — from app icons to wearables, the logo adapts seamlessly at every scale.
            </p>
          </div>
          <div style={{ flex: 1, borderRadius: 32, overflow: 'hidden', aspectRatio: '613/425' }}>
            <img src={delpFinal3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    ),
  },

  'cereals-cat': {
    name: 'Cereals Cat',
    heroImg: cerHero,
    heroOverlay: { background: 'linear-gradient(to left, rgba(49,30,6,0.88) 13.5%, rgba(255,255,255,0))' },
    heroTheme: 'dark',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0, maxWidth: 580 }}>
        {/* Category tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 32, height: 1, background: 'rgba(255,220,160,0.5)' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,220,160,0.8)' }}>
            Hand-Drip Coffee · Brand Identity
          </span>
          <div style={{ width: 32, height: 1, background: 'rgba(255,220,160,0.5)' }} />
        </div>
        {/* Icon */}
        <img src={cerIconHero} alt="" style={{ height: 72, objectFit: 'contain', marginBottom: 20 }} />
        {/* Main title */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 58, lineHeight: 1.05, color: 'white', letterSpacing: -1.5, marginBottom: 0 }}>
          Every Bean
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 58, lineHeight: 1.05, color: 'rgba(255,220,160,1)', letterSpacing: -1.5, marginBottom: 0 }}>
          Tells a
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 58, lineHeight: 1.05, color: 'white', letterSpacing: -1.5, marginBottom: 24 }}>
          Story.
        </p>
        {/* Divider */}
        <div style={{ width: 48, height: 2, background: 'rgba(255,220,160,0.4)', marginBottom: 20 }} />
        {/* Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 15, lineHeight: '26px', color: 'rgba(255,255,255,0.65)', marginBottom: 32 }}>
          From distant highlands to your daily ritual — each harvest carries the land, the people, and the craft behind every cup.
        </p>
        {/* Stats */}
        <div style={{ display: 'flex', gap: 32 }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>2021</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,220,160,0.6)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Year</p>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>Logo Design</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,220,160,0.6)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Service</p>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: 'white', lineHeight: 1 }}>Café Brand</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, color: 'rgba(255,220,160,0.6)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 6 }}>Type</p>
          </div>
        </div>
      </div>
    ),
    logoImg: cerLogo,
    brandColors: [
      { hex: '#344454', label: '#344454' },
      { hex: '#111214', label: '#111214' },
      { hex: '#FFFFFF', label: '#FFFFFF', border: true },
    ],
    brandBgTitle: 'Warm & Handcrafted Identity',
    brandBgText: 'Designed for a hand-drip coffee brand, focusing on warmth and storytelling in every bean. Flowing shapes and a hand-drawn style were used to reflect this narrative, with subtle cat elements inspired by the name "Cereals Cat."',
    processSteps: [],
    processRender: (
      <div style={{ background: '#eff1f2', borderRadius: 32, padding: 40, overflow: 'hidden' }}>
        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 24 }}>
          <div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Concept Sketching</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px' }}>
              Experimenting with ways to blend cat elements into the logo.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 8 }}>Refine and Decide</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px' }}>
              Once the design was refined, the client chose the final linework and color palette.
            </p>
          </div>
        </div>
        {/* 2×2 equal grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 500, flexShrink: 0 }}>
            <img src={cerSketch1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center -50px' }} />
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 500, flexShrink: 0 }}>
            <img src={cerRefine1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 500, flexShrink: 0 }}>
            <img src={cerSketch2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 0px', transform: 'scale(1.1)', transformOrigin: 'center' }} />
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 500, flexShrink: 0 }}>
            <img src={cerRefine2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'calc(50% + 100px) top' }} />
          </div>
        </div>
      </div>
    ),
    finalTitle: 'Final Outcome',
    finalImages: [
      { src: cerFinal1, span: 2, aspect: '16/7' },
      { src: cerFinal2, span: 1, aspect: '1/1.4' },
      { src: cerFinal3, span: 1, aspect: '1/1.4' },
    ],
  },

  'leuphorie': {
    name: "L'EUPHORIE",
    heroImg: euphHero,
    heroOverlay: { background: 'linear-gradient(to bottom, rgba(147,147,147,0.44), rgba(0,0,0,0.44))' },
    heroTheme: 'dark',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0, maxWidth: 680 }}>
        {/* Category tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.5)' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
            Nail Art Studio · Brand Identity
          </span>
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.5)' }} />
        </div>
        {/* Logo image */}
        <img src={euphHeroText} alt="L'Euphorie Nail Art Studio" style={{ height: 68, objectFit: 'contain', marginBottom: 32 }} />
        {/* Tagline */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 28, lineHeight: 1.8, color: 'rgba(255,255,255,0.95)', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: 36, whiteSpace: 'nowrap' }}>
          Minimal &nbsp;·&nbsp; Sophisticated &nbsp;·&nbsp; Serene
        </p>
        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.35)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
          <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.35)' }} />
        </div>
        {/* Description */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 15, lineHeight: '26px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.3px', maxWidth: 420 }}>
          Championing independent women to lead, create, and thrive in their own domains.
        </p>
      </div>
    ),
    logoImg: euphLogo,
    brandColors: [
      { hex: '#D2C2B0', label: '#D2C2B0' },
      { hex: '#84411D', label: '#84411D' },
      { hex: '#A9987E', label: '#A9987E' },
      { hex: '#FFFFFF', label: '#FFFFFF', border: true },
    ],
    brandBgTitle: 'Warm Minimal Branding',
    brandBgText: 'Designed a soft, high-end logo for a nail salon using milk tea-inspired tones to reflect a simple yet refined lifestyle. The overall visual focuses on a gentle, feminine aesthetic while maintaining a clean and elegant look.',
    processSteps: [],
    finalTitle: 'Final Showcase',
    finalImages: [],
    finalRender: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '390px 390px', gap: 24 }}>
        {/* Left half: salon photo — spans 2 cols × 2 rows */}
        <div style={{ gridColumn: '1 / 3', gridRow: '1 / 3', borderRadius: 24, overflow: 'hidden' }}>
          <img src={euphFinal1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Top right inner left: stacked business cards on gray bg */}
        <div style={{ gridColumn: '3', gridRow: '1', borderRadius: 24, overflow: 'hidden', background: '#abaca6', position: 'relative' }}>
          <img src={euphCard1} alt="" style={{ position: 'absolute', top: '12%', left: '7%', width: '86%', boxShadow: '0 4px 4px rgba(0,0,0,0.25)' }} />
          <img src={euphCard2} alt="" style={{ position: 'absolute', top: '42%', left: '7%', width: '86%', boxShadow: '0 4px 4px rgba(0,0,0,0.25)' }} />
        </div>
        {/* Top right inner right: nail art photo */}
        <div style={{ gridColumn: '4', gridRow: '1', borderRadius: 24, overflow: 'hidden' }}>
          <img src={euphFinal2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Bottom right: tote bag — spans 2 cols */}
        <div style={{ gridColumn: '3 / 5', gridRow: '2', borderRadius: 24, overflow: 'hidden' }}>
          <img src={euphTote} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    ),
  },
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function ColorSwatches({ colors }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#595c5d', marginBottom: 12 }}>Brand Colours</p>
      <div style={{ display: 'flex', gap: 12 }}>
        {colors.map(c => (
          <div key={c.hex} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
            <div style={{
              width: '100%', aspectRatio: '1', borderRadius: 8, background: c.hex,
              border: c.border ? '1px solid rgba(171,173,174,0.2)' : 'none',
            }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#2c2f30', textAlign: 'center' }}>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProcessCard({ num, title, desc, images }) {
  return (
    <div style={{ background: '#eff1f2', borderRadius: 32, padding: '40px', marginBottom: 48, position: 'relative' }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%', background: '#97a2eb',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16,
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: '#f8f0ff' }}>{num}</span>
      </div>
      <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#2c2f30', marginBottom: 6 }}>{title}</p>
      <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#595c5d', lineHeight: '26px', marginBottom: 24, maxWidth: 600 }}>{desc}</p>
      <div style={{ display: 'grid', gridTemplateColumns: images.length === 1 ? '1fr' : '1fr 1fr', gap: 16, alignItems: 'stretch' }}>
        {images.map((src, i) => (
          <div key={i} style={{ borderRadius: 16, overflow: 'hidden', height: 900 }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function FinalGrid({ images }) {
  if (!images.length) return null
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            gridColumn: `span ${img.span || 1}`,
            aspectRatio: img.aspect || '1/1',
            borderRadius: 24,
            overflow: 'hidden',
          }}
        >
          <img
            src={img.src}
            alt=""
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: img.objectPosition || 'center',
            }}
          />
        </div>
      ))}
    </div>
  )
}

// ─── Project order (for prev/next nav) ───────────────────────────────────────

const PROJECT_ORDER = [
  'kawa-ramen',
  'ming-wei',
  'better-lending',
  'delphinus-lab',
  'cereals-cat',
  'leuphorie',
]

function navigateTo(slug) {
  history.pushState(null, '', `#${slug}`)
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

function PrevNextNav({ currentSlug }) {
  const idx = PROJECT_ORDER.indexOf(currentSlug)
  const prevSlug = PROJECT_ORDER[(idx - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length]
  const nextSlug = PROJECT_ORDER[(idx + 1) % PROJECT_ORDER.length]
  const prevName = PROJECTS[prevSlug]?.name
  const nextName = PROJECTS[nextSlug]?.name
  const [hoveredPrev, setHoveredPrev] = useState(false)
  const [hoveredNext, setHoveredNext] = useState(false)

  const linkStyle = (align) => ({
    display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer',
    textDecoration: 'none', alignItems: align === 'left' ? 'flex-start' : 'flex-end',
    padding: '28px 0',
    flex: 1, background: 'none', border: 'none',
  })

  return (
    <div style={{
      borderTop: '1px solid #e2e8f0',
      display: 'flex', justifyContent: 'space-between', alignItems: 'stretch',
      padding: '0 clamp(32px, 6vw, 100px)',
      marginTop: 40,
    }}>
      <button
        onClick={() => navigateTo(prevSlug)}
        onMouseEnter={() => setHoveredPrev(true)}
        onMouseLeave={() => setHoveredPrev(false)}
        style={linkStyle('left')}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: '#97a2eb', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '30px', lineHeight: 1 }}>‹</span><span style={{ marginLeft: 2, fontSize: '18px', lineHeight: 1, position: 'relative', top: 2 }}>Previous</span>
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 700,
          color: hoveredPrev ? '#97a2eb' : '#0f172a',
          transform: hoveredPrev ? 'scale(1.05)' : 'scale(1)',
          transformOrigin: 'left center',
          transition: 'color 0.2s ease, transform 0.2s ease',
          display: 'inline-block',
        }}>
          {prevName}
        </span>
      </button>

      <div style={{ width: 1, background: '#e2e8f0', margin: '16px 0' }} />

      <button
        onClick={() => navigateTo(nextSlug)}
        onMouseEnter={() => setHoveredNext(true)}
        onMouseLeave={() => setHoveredNext(false)}
        style={linkStyle('right')}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: '#97a2eb', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', lineHeight: 1, position: 'relative', top: 2 }}>Next</span><span style={{ marginLeft: 2, fontSize: '30px', lineHeight: 1 }}>›</span>
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 700,
          color: hoveredNext ? '#97a2eb' : '#0f172a',
          transform: hoveredNext ? 'scale(1.05)' : 'scale(1)',
          transformOrigin: 'right center',
          transition: 'color 0.2s ease, transform 0.2s ease',
          display: 'inline-block',
        }}>
          {nextName}
        </span>
      </button>
    </div>
  )
}

// ─── Page component ───────────────────────────────────────────────────────────

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

function goBack() {
  history.pushState(null, '', '#projects')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export default function LogoDetailPage({ projectSlug }) {
  useLayoutEffect(() => { window.scrollTo(0, 0) }, [])
  const project = PROJECTS[projectSlug]
  if (!project) return null

  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'white', borderBottom: '1px solid #e2e8f0', height: 74,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingLeft: 'clamp(20px, 3vw, 60px)', paddingRight: 'clamp(20px, 3vw, 60px)',
      }}>
        <button
          onClick={goBack}
          style={{
            display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none',
            cursor: 'pointer', fontFamily: 'Heebo, sans-serif', fontWeight: 500,
            fontSize: 14, color: '#787cde', padding: 0,
          }}
        >
          <span style={{ fontSize: '30px', lineHeight: 1 }}>‹</span><span style={{ marginLeft: 2, fontSize: '18px', lineHeight: 1, position: 'relative', top: 2 }}>Back</span>
        </button>
        <span style={{ fontFamily: 'Heebo, sans-serif', fontWeight: 600, fontSize: 26, color: '#787cde' }}>
          {project.name}
        </span>
        <WorkWithMeBtn />
      </header>

      {/* Hero */}
      <section style={{ height: 'calc(100vh - 74px)', position: 'relative', overflow: 'hidden', marginTop: 74 }}>
        <img
          src={project.heroImg} alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...(project.heroImgStyle || {}) }}
        />
        <div style={{ position: 'absolute', inset: 0, ...project.heroOverlay }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center',
          justifyContent: project.heroJustify || 'center',
          paddingLeft: 'clamp(40px, 6vw, 120px)', paddingRight: 'clamp(40px, 6vw, 120px)',
        }}>
          {project.heroContent}
        </div>
      </section>

      {/* Brand Guidelines */}
      <section style={{ padding: '80px clamp(32px, 6vw, 100px)' }}>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 34, color: '#2c2f30', marginBottom: 48, letterSpacing: -0.9 }}>
          Brand Guidelines
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'stretch' }}>
          {/* Logo card */}
          <div style={{
            background: 'white', borderRadius: 18,
            boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src={project.logoImg} alt={project.name} style={{ maxWidth: '97%', maxHeight: '332px', objectFit: 'contain', ...(project.logoImgStyle || {}) }} />
          </div>
          {/* Right col */}
          <div style={{ paddingTop: 16 }}>
            <ColorSwatches colors={project.brandColors} />
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#595c5d', marginBottom: 16 }}>Brand Background</p>
              <div style={{ borderLeft: '2px solid #97a2eb', paddingLeft: 24 }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 26, color: '#2c2f30', lineHeight: '36px', marginBottom: 12, letterSpacing: -0.9 }}>
                  {project.brandBgTitle}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, color: '#595c5d', lineHeight: '28px' }}>
                  {project.brandBgText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      {(project.processRender || project.processSteps.length > 0) && (
        <section style={{ padding: '0 clamp(32px, 6vw, 100px) 80px' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 34, color: '#2c2f30', marginBottom: 40, letterSpacing: -0.9 }}>
            Development Process
          </h2>
          {project.processRender ?? project.processSteps.map(step => (
            <ProcessCard key={step.num} {...step} />
          ))}
        </section>
      )}

      {/* Final section */}
      {project.finalTitle && (project.finalRender || project.finalImages.length > 0) && (
        <section style={{ padding: '0 clamp(32px, 6vw, 100px) 100px' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 34, color: '#2c2f30', marginBottom: 40, letterSpacing: -0.9 }}>
            {project.finalTitle}
          </h2>
          {project.finalRender ?? <FinalGrid images={project.finalImages} />}
        </section>
      )}

      <PrevNextNav currentSlug={projectSlug} />
    </div>
  )
}
