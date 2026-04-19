export default function CTA() {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="section-container">
        <div
          className="flex items-center justify-between px-[41px]"
          style={{
            height: '154px',
            background: 'rgba(151,162,235,0.2)',
            border: '1px solid #97a2eb',
            borderRadius: '16px',
          }}
        >
          <div>
            <h2 className="font-['Inter',sans-serif] font-bold text-[24px] leading-[32px]" style={{ color: '#0f172a' }}>
              Have a project in mind?
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] mt-2" style={{ color: '#475569' }}>
              Let&apos;s build something extraordinary together.
            </p>
          </div>

          <a
            href="mailto:kyralee0212@gmail.com"
            className="flex items-center justify-center h-[43px] px-[40px] rounded-[59px] text-white font-['Heebo',sans-serif] font-medium text-[18px] whitespace-nowrap flex-shrink-0"
            style={{ background: 'linear-gradient(11deg, rgb(120,124,222) 20%, rgb(169,203,255) 80%)' }}
          >
            Work with me
          </a>
        </div>
      </div>
    </section>
  )
}
