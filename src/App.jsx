import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FeaturedProjects from './components/FeaturedProjects'
import AllWorks from './components/AllWorks'
import OtherWorks from './components/OtherWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import AutomataPage from './components/AutomataPage'
import NuggetPage from './components/NuggetPage'
import MemeDiscoPage from './components/MemeDiscoPage'
import XiuxianPage from './components/XiuxianPage'
import ZKwasmExplorePage from './components/ZKwasmExplorePage'
import ZKwasmHubPage from './components/ZKwasmHubPage'
import LogoDetailPage from './components/LogoDetailPage'

const LOGO_SLUGS = {
  '#kawa-ramen': 'kawa-ramen',
  '#ming-wei': 'ming-wei',
  '#better-lending': 'better-lending',
  '#delphinus-lab': 'delphinus-lab',
  '#cereals-cat': 'cereals-cat',
  '#leuphorie': 'leuphorie',
}

function getPage() {
  const hash = window.location.hash
  if (hash === '#privacy-policy') return 'privacy'
  if (hash === '#terms-of-service') return 'terms'
  if (hash === '#automata') return 'automata'
  if (hash === '#nugget') return 'nugget'
  if (hash === '#meme-disco') return 'meme-disco'
  if (hash === '#xiuxian') return 'xiuxian'
  if (hash === '#zkwasm-explore') return 'zkwasm-explore'
  if (hash === '#zkwasm-hub') return 'zkwasm-hub'
  if (LOGO_SLUGS[hash]) return hash
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    function onHashChange() {
      const next = getPage()
      setPage(next)
      if (next !== 'home') {
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        const anchor = window.location.hash.replace('#', '')
        if (anchor) {
          setTimeout(() => {
            const el = document.getElementById(anchor)
            if (el) el.scrollIntoView({ behavior: 'instant' })
          }, 50)
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (page === 'privacy') return <PrivacyPolicy />
  if (page === 'terms') return <TermsOfService />
  if (page === 'automata') return <AutomataPage />
  if (page === 'nugget') return <NuggetPage />
  if (page === 'meme-disco') return <MemeDiscoPage />
  if (page === 'xiuxian') return <XiuxianPage />
  if (page === 'zkwasm-explore') return <ZKwasmExplorePage />
  if (page === 'zkwasm-hub') return <ZKwasmHubPage />
  if (LOGO_SLUGS[page]) return <LogoDetailPage projectSlug={LOGO_SLUGS[page]} />

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <AllWorks />
      <OtherWorks />
      <CTA />
      <Footer />
    </div>
  )
}
