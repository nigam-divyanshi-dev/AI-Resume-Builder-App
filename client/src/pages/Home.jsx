import { useEffect, useState } from 'react'
import { ArrowRight, Check, Download, FileText, Menu, Moon, Palette, Play, Share2, Sparkles, Sun, UserRound, X, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const { user } = useSelector(state => state.auth)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')
  const [selectedFeature, setSelectedFeature] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const benefits = [
    { title: 'AI Suggestions', text: 'Improve your resume with AI-powered tips.', icon: Sparkles, className: 'border-[#9beabd] bg-[#f0fff4] text-[#079653]' },
    { title: 'ATS Friendly', text: 'Get resumes optimized for ATS systems.', icon: FileText, className: 'border-[#a9dcfb] bg-[#eff9ff] text-[#155cca]' },
    { title: 'Download & Share', text: 'Get your resume in PDF or DOCX format.', icon: Download, className: 'border-[#dcb9f5] bg-[#fbf3ff] text-[#6030ca]' },
  ]

  const processFeatures = [
    { title: 'AI-Powered Writing', text: 'Instantly enhance your professional summary and job descriptions with Google Gemini AI.', icon: Sparkles, color: '#08a957', active: true },
    { title: 'Smart Resume Parsing', text: 'Upload a PDF resume and let the AI extract and organize your data automatically.', icon: FileText, color: '#1767e8' },
    { title: 'Dynamic Customization', text: 'Choose from modern templates, customize accent colors, and automatically remove image backgrounds.', icon: Palette, color: '#8b31ef' },
    { title: 'Live Preview & Export', text: 'See changes in real-time. Download as PDF or share a live public link instantly.', icon: Share2, color: '#f15b23' },
  ]

  return (
    <div className={`home-page ${darkMode ? 'theme-dark' : ''} min-h-screen overflow-hidden bg-[#f8fff9] text-[#10182c]`}>
      <header className='relative z-10 mx-auto mt-4 flex max-w-[1510px] items-center justify-between rounded-full border border-[#e0efe5] bg-white/90 px-7 py-3 shadow-[0_7px_28px_rgba(24,121,70,0.08)] backdrop-blur sm:px-10'>
        <Link to='/'><img src='/logo.svg' alt='resume.' className='h-10 w-auto' /></Link>
        <nav className='hidden items-center gap-9 text-[15px] font-semibold md:flex'>
          <a className='rounded-full bg-[#ddf8e7] px-5 py-2 text-[#087f4b]' href='#home'>Home</a>
          <a href='#features' className='hover:text-[#079653]'>Features</a>
          <a href='#testimonials' className='hover:text-[#079653]'>Testimonials</a>
          <a href='#contact' className='hover:text-[#079653]'>Contact</a>
        </nav>
        <div className='hidden items-center gap-5 md:flex'>
          <button aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDarkMode(current => !current)} className='theme-toggle text-[#10182c]'>{darkMode ? <Moon size={23} /> : <Sun size={23} />}</button>
          <span className='h-7 w-px bg-[#dce9e1]' />
          {user ? <Link to='/app' className='flex items-center gap-2 rounded-full bg-[#05a652] px-6 py-2.5 text-[14px] font-semibold text-white'><UserRound size={17} /> Dashboard</Link> : <Link to='/app?state=register' className='flex items-center gap-2 rounded-full bg-[#05a652] px-6 py-2.5 text-[14px] font-semibold text-white'>Get started <ArrowRight size={16} /></Link>}
        </div>
        <button className='md:hidden' onClick={() => setMenuOpen(true)} aria-label='Open menu'><Menu size={25} /></button>
      </header>

      {menuOpen && <div className='fixed inset-0 z-50 flex flex-col gap-7 bg-white p-8 text-lg md:hidden'><button className='self-end' onClick={() => setMenuOpen(false)}><X /></button><a href='#home' onClick={() => setMenuOpen(false)}>Home</a><a href='#features' onClick={() => setMenuOpen(false)}>Features</a><a href='#testimonials' onClick={() => setMenuOpen(false)}>Testimonials</a><a href='#contact' onClick={() => setMenuOpen(false)}>Contact</a><Link to='/app' className='rounded-full bg-[#05a652] px-5 py-3 text-center text-white'>Dashboard</Link></div>}

      <main id='home' className='relative mx-auto max-w-[1510px] px-6 pt-16 sm:px-12 lg:px-11'>
        <span className='absolute -left-24 top-16 size-80 rounded-full bg-[#d9f9e5] blur-3xl' />
        <span className='absolute -right-28 top-[430px] size-96 rounded-full bg-[#def8e8] blur-3xl' />
        <section className='relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]'>
          <div className='relative z-[2]'>
            <span className='inline-flex items-center gap-2 rounded-full border border-[#9beabd] bg-[#edfff3] px-4 py-1.5 text-[14px] font-medium text-[#087f4b]'><Sparkles size={16} /> AI Powered Resume Builder</span>
            <h1 className='mt-7 max-w-[760px] text-[52px] font-bold leading-[1.02] tracking-[-0.055em] sm:text-[64px]'>Land your dream job with <span className='text-[#079b55]'>AI-powered</span> resumes.</h1>
            <p className='mt-7 max-w-[570px] text-[20px] leading-relaxed text-[#152e50]'>Create, edit and download professional resumes with AI-powered assistance.</p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <Link to='/app?state=register' className='flex items-center gap-3 rounded-full bg-[#08a957] px-7 py-3.5 text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(8,169,87,0.25)]'><span className='text-lg'>✈</span> Get started <ArrowRight size={19} /></Link>
              <button className='flex items-center gap-3 rounded-full border border-[#30986a] bg-white px-7 py-3.5 text-[16px] font-semibold text-[#17283c]'><span className='flex size-7 items-center justify-center rounded-full bg-[#d9f9e5] text-[#08a957]'><Play size={14} fill='currentColor' /></span> Try demo</button>
            </div>
            <div className='mt-8 flex items-center gap-4'><div className='flex -space-x-2'>{['1438761681033-6461ffad8d80','1633332755192-727a05c4013d','1535713875002-d1d0cf377fde','randomuser.me/api/portraits/men/75'].map((image, index) => <img key={image} src={image.startsWith('random') ? `https://${image}.jpg` : `https://images.unsplash.com/photo-${image}?auto=format&fit=crop&w=80&q=70`} alt='' className='size-9 rounded-full border-2 border-white object-cover' style={{ zIndex: 4 - index }} />)}</div><div><div className='flex text-[#079653]'>{[1, 2, 3, 4, 5].map(star => <span key={star}>★</span>)}</div><p className='text-[13px] font-medium text-[#182c4c]'>Used by 100+ users</p></div></div>
          </div>

          <div className='relative min-h-[510px]'>
            <div className='absolute left-[12%] top-[6%] size-[360px] rounded-full bg-[#c6f5d3] opacity-80 blur-[1px]' />
            <div className='relative z-[2] mx-auto mt-4 w-[315px] rotate-[-5deg] rounded-xl border border-[#9edac7] bg-white p-6 shadow-[0_20px_40px_rgba(36,112,75,0.18)] sm:w-[360px]'>
              <div className='flex items-center gap-3 border-b border-[#dbe6f2] pb-4'><span className='flex size-12 items-center justify-center rounded-full bg-[#e6eefb]'><UserRound className='text-[#6682b5]' size={29} /></span><div><b className='block text-[14px]'>Professional Summary</b><div className='mt-1 h-2 w-36 rounded bg-[#cedbf4]' /></div></div>
              <div className='mt-4 space-y-3 text-[11px]'><p className='font-bold'>▣ Experience</p>{[1, 2, 3].map(line => <div key={line} className='flex gap-2'><span className='text-[#0cab5d]'>•</span><div className='h-2 flex-1 rounded bg-[#ccdafa]' /></div>)}<hr className='border-[#e1e9f3]' /><p className='font-bold'>◉ Education</p>{[1, 2].map(line => <div key={line} className='flex gap-2'><span className='text-[#0cab5d]'>•</span><div className='h-2 w-4/5 rounded bg-[#ccdafa]' /></div>)}<hr className='border-[#e1e9f3]' /><p className='font-bold'>‹› Skills</p><div className='flex flex-wrap gap-1'><span className='rounded-full bg-[#e2f6f5] px-2 py-1 text-[9px]'>Python</span><span className='rounded-full bg-[#e2f6f5] px-2 py-1 text-[9px]'>Java</span><span className='rounded-full bg-[#e2f6f5] px-2 py-1 text-[9px]'>React</span><span className='rounded-full bg-[#e2f6f5] px-2 py-1 text-[9px]'>MongoDB</span></div></div>
            </div>
            <div className='absolute right-0 top-16 z-[3] hidden w-[290px] space-y-4 lg:block'>{benefits.map(({ title, text, icon: Icon, className }) => <div key={title} className={`flex items-center gap-3 rounded-xl border px-5 py-4 shadow-sm ${className}`}><span className='flex size-11 shrink-0 items-center justify-center rounded-full bg-white/80'><Icon size={23} /></span><span className='flex-1'><b className='block text-[14px] text-[#10182c]'>{title}</b><small className='mt-1 block text-[12px] leading-snug text-[#1e2d48]'>{text}</small></span><ArrowRight size={18} /></div>)}</div>
          </div>
        </section>

        <section id='features' className='relative mt-4 pb-10 pt-5'>
          <div className='mx-auto flex max-w-[820px] items-center gap-5'><span className='h-px flex-1 bg-[#bdd8ce]' /><h2 className='whitespace-nowrap text-[18px] font-bold'>AI Features Included</h2><span className='h-px flex-1 bg-[#bdd8ce]' /></div>
          <div className='mt-5 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[16px] text-[#152c4c]'>{['React', 'Node.js', 'MongoDB', 'API routing', 'Authentication'].map(item => <span key={item} className='flex items-center gap-2'><span className='flex size-7 items-center justify-center rounded-full bg-[#a9f2bd] text-[#078c4c]'><Check size={17} strokeWidth={3} /></span>{item}</span>)}</div>
        </section>

        <section id='testimonials' className='relative mx-auto max-w-[1100px] scroll-mt-8 pb-20 pt-12'>
          <div className='text-center'>
            <span className='inline-flex items-center gap-2 rounded-full bg-[#e4faee] px-5 py-2 text-[13px] font-medium text-[#079653]'><Zap size={15} /> Simple Process</span>
            <h2 className='mt-5 text-[35px] font-medium tracking-[-0.04em] text-[#203657] sm:text-[42px]'>Build your resume</h2>
            <p className='mx-auto mt-3 max-w-[620px] text-[16px] leading-relaxed text-[#607692]'>Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.</p>
          </div>
          <div className='mt-12 grid items-center gap-12 md:grid-cols-[1fr_1fr]'>
            <div className='relative mx-auto h-[390px] w-[330px]'>
              <div className='absolute left-0 top-0 h-[300px] w-[240px] overflow-hidden rounded-[18px] shadow-[0_20px_40px_rgba(80,79,145,0.16)]'><img src='/photos/image%201.jpeg' alt='Professional profile portrait' className='h-full w-full object-cover object-[center_30%]' /></div>
              <div className='absolute bottom-0 right-0 h-[285px] w-[240px] overflow-hidden rounded-[18px] border-8 border-white shadow-[0_20px_40px_rgba(80,79,145,0.18)]'><img src='/photos/images%20(2).jpg' alt='Professionals collaborating in an office' className='h-full w-full object-cover object-[center_42%]' /></div>
              <span className='absolute -left-20 top-24 -z-10 size-64 rounded-full bg-[#e5dcff]/70 blur-3xl' />
            </div>
            <div className='space-y-3'>
              {processFeatures.map(({ title, text, icon: Icon, color }, index) => <button type='button' onClick={() => setSelectedFeature(index)} key={title} className={`home-process-feature group flex w-full gap-5 rounded-xl px-6 py-5 text-left transition ${selectedFeature === index ? 'is-selected bg-[#d9f9e5]' : ''}`}><Icon size={23} style={{ color }} className='home-process-icon mt-1 shrink-0' /><div><h3 className='text-[16px] font-semibold text-[#203657]'>{title}</h3><p className='mt-2 max-w-[390px] text-[14px] leading-relaxed text-[#607692]'>{text}</p></div></button>)}
            </div>
          </div>
        </section>
      </main>

      <footer id='contact' className='home-footer border-t border-[#dbf0e2] bg-gradient-to-r from-white via-[#f1fcf5] to-white px-6 py-20 text-center'>
        <img src='/logo.svg' alt='resume.' className='mx-auto h-11 w-auto' />
        <p className='mx-auto mt-8 max-w-[650px] text-[17px] leading-relaxed text-[#24486f]'>Empowering job seekers worldwide to land their dream roles.<br />Build, customize, and download professional, AI-optimized resumes in minutes.</p>
        <p className='mt-8 text-[12px] text-[#688272]'>© {new Date().getFullYear()} resume. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
