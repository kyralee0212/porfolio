import { imgGroup142, imgPinkPlanet2 } from '../assets/figmaAssets'
import { useFadeUp } from '../hooks/useFadeUp'

const expertise = [
  'UI/UX Design', 'Motion Graphics', 'Animation', 'Graphic Design',
  'Illustration', 'Concept Art', 'Character Design', 'Webflow Development', 'Brand Identity',
]

function Tag({ label }) {
  return (
    <div
      className="flex items-center justify-center h-[36px] px-4 rounded-full flex-shrink-0"
      style={{ background: 'rgba(151,161,235,0.1)' }}
    >
      <span className="font-['Heebo',sans-serif] font-semibold text-[16px] text-center" style={{ color: '#787cde' }}>
        {label}
      </span>
    </div>
  )
}

export default function Experience() {
  const [ref, visible] = useFadeUp()
  return (
    <section id="experience" className="relative bg-white overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px', display: 'flex', alignItems: 'center' }}>
      <div ref={ref} className={`section-container w-full fade-up${visible ? ' visible' : ''}`}>

        {/* Top row: Work Experience (left) + Software Skills (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
          {/* Work Experience */}
          <div>
            <h3 className="font-['Heebo',sans-serif] font-bold text-[30px] text-black mb-5">Work Experience</h3>
            <div
              className="border-l-[3px] pl-8 space-y-0"
              style={{ borderColor: '#787cde' }}
            >
              {/* Job 1 */}
              <div className="relative" style={{ paddingTop: '0', paddingBottom: '20px' }}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-['Heebo',sans-serif] font-semibold text-[20px] leading-[24px]" style={{ color: '#0f172a' }}>
                      Game Artist / UI/UX Designer
                    </p>
                    <p className="font-['Heebo',sans-serif] font-semibold text-[16px] mt-1" style={{ color: 'rgba(15,23,42,0.5)' }}>
                      Delphinus Lab Pty Ltd
                    </p>
                    <p className="font-['Heebo',sans-serif] font-normal text-[14px] mt-2 leading-[20px]" style={{ color: '#768499', maxWidth: '420px' }}>
                      Delivered refined UI designs that boosted user interaction by 35% and strengthened product usability.
                    </p>
                  </div>
                  <span className="font-['Heebo',sans-serif] font-semibold text-[20px] text-right flex-shrink-0" style={{ color: '#0f172a' }}>
                    2022–2026
                  </span>
                </div>
              </div>
              {/* Job 2 */}
              <div className="relative" style={{ paddingTop: '16px' }}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-['Heebo',sans-serif] font-semibold text-[20px] leading-[24px]" style={{ color: '#0f172a' }}>
                      App Designer / Illustrator
                    </p>
                    <p className="font-['Heebo',sans-serif] font-semibold text-[16px] mt-1" style={{ color: 'rgba(15,23,42,0.5)' }}>
                      Fat Box Technology Services
                    </p>
                    <p className="font-['Heebo',sans-serif] font-normal text-[14px] mt-2 leading-[20px]" style={{ color: '#768499', maxWidth: '420px' }}>
                      Contributed to the successful launch of a live game played by 10,000+ users.
                    </p>
                  </div>
                  <span className="font-['Heebo',sans-serif] font-semibold text-[20px] text-right flex-shrink-0" style={{ color: '#0f172a' }}>
                    2020–2022
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Software Skills */}
          <div>
            <h3 className="font-['Heebo',sans-serif] font-bold text-[30px] text-black mb-5">Software Skills</h3>
            <img src={imgGroup142} alt="Software skill icons" className="w-[430px] object-contain" />
          </div>
        </div>

        {/* Bottom row: Education (left) + Expertise (right) + planet decoration */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Education */}
          <div>
            <h3 className="font-['Heebo',sans-serif] font-bold text-[30px] text-black mb-5">Education</h3>
            <div
              className="border-l-[3px] pl-8"
              style={{ borderColor: '#787cde' }}
            >
              <div className="mb-6">
                <p className="font-['Heebo',sans-serif] font-medium text-[16px]" style={{ color: 'rgba(15,23,42,0.5)' }}>2016–2019</p>
                <p className="font-['Heebo',sans-serif] font-semibold text-[20px] leading-[24px] mt-1" style={{ color: '#0f172a' }}>
                  Bachelor of Design in Animation
                </p>
                <p className="font-['Heebo',sans-serif] font-semibold text-[16px] mt-1" style={{ color: 'rgba(15,23,42,0.5)' }}>
                  University Technology of Sydney
                </p>
              </div>
              <div>
                <p className="font-['Heebo',sans-serif] font-medium text-[16px]" style={{ color: 'rgba(15,23,42,0.5)' }}>2014–2015</p>
                <p className="font-['Heebo',sans-serif] font-semibold text-[20px] leading-[24px] mt-1" style={{ color: '#0f172a' }}>
                  Diploma of Design &amp; Architecture
                </p>
                <p className="font-['Heebo',sans-serif] font-semibold text-[16px] mt-1" style={{ color: 'rgba(15,23,42,0.5)' }}>
                  UTS College
                </p>
              </div>
            </div>
          </div>

          {/* Expertise tags */}
          <div>
            <h3 className="font-['Heebo',sans-serif] font-bold text-[30px] mb-5" style={{ color: '#0f172a' }}>Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((item) => <Tag key={item} label={item} />)}
            </div>
          </div>

          {/* Pink planet decoration */}
          <img
            src={imgPinkPlanet2}
            alt=""
            className="absolute pointer-events-none"
            style={{ right: '-300px', bottom: '140px', width: '420px', opacity: 0.85 }}
          />
        </div>
      </div>
    </section>
  )
}
