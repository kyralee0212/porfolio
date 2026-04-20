import { useState } from 'react'
import { imgVector2, imgVector1, imgAlien2 } from '../assets/figmaAssets'
import bgVideo from '../assets/bg_video.mp4'
import { useFadeUp } from '../hooks/useFadeUp'

export default function Hero() {
  const [state, setState] = useState('idle')
  const [btn, setBtn] = useState('default')
  const [textRef, textVisible] = useFadeUp(0.1)

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
      style={{ height: 'calc(100vh - 74px)', minHeight: '600px', marginTop: '74px' }}
    >
      {/* Video background right half */}
      <div
        className="absolute top-0 bottom-0 overflow-hidden"
        style={{ left: '38%', right: 0, zIndex: 0, background: '#6468C8' }}
        onMouseEnter={() => setState('in')}
        onMouseLeave={() => setState('out')}
      >
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Vector2 下層 */}
      <img src={imgVector2} alt="" className="absolute pointer-events-none"
        style={{ left: 'calc(22% + 230px)', top: 'calc(-10% - 30px)', width: '50%', height: '120%', objectFit: 'fill', zIndex: 1 }}
      />
      {/* Vector1 上層 */}
      <img src={imgVector1} alt="" className="absolute pointer-events-none"
        style={{ left: '18%', top: '-10%', width: '50%', height: '120%', objectFit: 'fill', zIndex: 2 }}
      />

      {/* Alien */}
      <img src={imgAlien2} alt="Alien"
        className="absolute pointer-events-none"
        onTransitionEnd={() => { if (state === 'out') setState('idle') }}
        style={{
          width: '220px',
          zIndex: state === 'in' ? 3 : 0,
          top:  state === 'out' ? '-120px' : '70px',
          left: state === 'idle' ? 'calc(100% + 20px)'
              : state === 'in'   ? 'calc(60% + 360px)'
              :                    '-280px',
          transition: state === 'in'
            ? 'left 2s cubic-bezier(0.22,1,0.36,1), top 2s cubic-bezier(0.22,1,0.36,1)'
            : state === 'out'
            ? 'left 0.4s cubic-bezier(0.55,0,1,0.45), top 0.4s cubic-bezier(0.55,0,1,0.45)'
            : 'none',
        }}
      />

      {/* White overlay left */}
      <div className="absolute pointer-events-none" style={{ left: 0, top: 0, width: '40%', height: '100%', background: 'white', zIndex: 4 }} />

      {/* Text — centered within left half */}
      <div ref={textRef} className="absolute" style={{
        zIndex: 5, top: '50%', left: 'clamp(40px, 8vw, 160px)', right: '62%',
        transform: textVisible ? 'translateY(-50%)' : 'translateY(calc(-50% + 40px))',
        opacity: textVisible ? 1 : 0,
        transition: 'opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <h1 className="font-['Heebo',sans-serif] font-bold leading-[1.3] mb-4"
          style={{ fontSize: 'clamp(28px, 3vw, 40px)', color: 'rgba(0,0,0,0.7)' }}>
          Bringing Worlds to Life Through Design
        </h1>
        <p className="font-['Heebo',sans-serif] font-normal leading-[1.3] mb-3"
          style={{ fontSize: 'clamp(18px, 2vw, 25px)', color: 'rgba(0,0,0,0.5)' }}>
          UI/UX Designer &amp; Game Visual Designer
        </p>
        <p className="font-['Heebo',sans-serif] font-normal leading-[1.6] mb-8"
          style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', color: 'rgba(0,0,0,0.4)' }}>
          Specializing in stylized characters, environments, and digital experiences that convert ideas into engaging products.
        </p>
        <a href="#projects"
          className="inline-flex items-center justify-center h-[43px] px-[40px] rounded-[59px] font-['Heebo',sans-serif] font-medium whitespace-nowrap mb-5 cursor-pointer"
          style={{
            fontSize: 'clamp(14px, 1.4vw, 18px)',
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
          View my work
        </a>
        <p className="font-['Heebo',sans-serif] font-normal block mt-4"
          style={{ fontSize: 'clamp(11px, 1vw, 14px)', color: 'rgba(0,0,0,0.3)' }}>
          Trusted by startups, game studios, and creative teams worldwide.
        </p>
      </div>
    </section>
  )
}
