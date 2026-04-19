import {
  imgImage1, imgImage3, imgImage4,
  imgImage5, imgImage6, imgImage7, imgImage8, imgImage9,
  imgGo
} from '../assets/figmaAssets'

const projects = [
  {
    title: 'Xiuxian',
    subtitle: 'Game UI / Illustration / Animation',
    images: [imgImage1, imgImage3, imgImage4],
    href: '#',
  },
  {
    title: 'Nugget',
    subtitle: 'Game UI / System Design',
    images: [imgImage5],
    href: '#',
  },
  {
    title: 'Chi Palace',
    subtitle: 'App UI Design / Game Illustration',
    images: [imgImage9],
    href: '#',
  },
  {
    title: 'Memedisco',
    subtitle: 'Interactive UI / Experience Design',
    images: [imgImage6],
    href: '#',
  },
  {
    title: 'ZKwasm Explore',
    subtitle: 'Product UI / Dashboard',
    images: [imgImage7],
    href: '#',
  },
  {
    title: 'ZKwasmHub',
    subtitle: 'Web Platform / Visual System',
    images: [imgImage8],
    href: '#',
  },
]

function ProjectCard({ title, subtitle, images, href }) {
  return (
    <a
      href={href}
      className="relative block rounded-[40px] overflow-hidden bg-white flex-shrink-0 cursor-pointer group"
      style={{ width: '350px', height: '270px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
    >
      {/* Image layer */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        {images[0] && (
          <img src={images[0]} alt={title} className="absolute w-full h-full object-cover" />
        )}
        {images[1] && (
          <img src={images[1]} alt="" className="absolute object-cover pointer-events-none" style={{ left: '8.61%', top: '-5.77%', width: '41.5%', height: '76.56%' }} />
        )}
        {images[2] && (
          <img src={images[2]} alt="" className="absolute object-cover pointer-events-none mix-blend-darken" style={{ left: '23.86%', top: '31.95%', width: '32.53%', height: '56.35%' }} />
        )}
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col gap-[10px] items-start justify-end pb-6 px-7"
        style={{
          height: '136px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
          borderRadius: '0 0 20px 20px',
        }}
      >
        <p className="font-['Inter',sans-serif] font-bold text-[24px] leading-[28px] text-white">{title}</p>
        <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[28px] text-white">{subtitle}</p>
      </div>

      {/* Go button */}
      <img
        src={imgGo}
        alt="View"
        className="absolute"
        style={{ right: '16px', bottom: '16px', width: '43px', height: '43px' }}
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
          className="grid gap-x-[13px] gap-y-4"
          style={{ gridTemplateColumns: 'repeat(3, 350px)' }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
