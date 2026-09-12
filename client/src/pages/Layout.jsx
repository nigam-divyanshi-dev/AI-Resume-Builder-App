import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Login from './Login'
import { Home, FileText, CloudUpload, Settings, Sparkles } from 'lucide-react'

const Layout = () => {

  const {user, loading} = useSelector(state => state.auth)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  if(loading){
    return <Loader />
  }

  return (
    <div>
      {
        user ? (
        <div className='app-shell min-h-screen bg-[#f4fbf7] text-[#10251b]'>
          <div className='flex min-h-screen'>
            <aside className='hidden w-[250px] shrink-0 border-r border-[#d8eee3] bg-white md:flex md:flex-col'>
              <div className='flex h-[62px] items-center border-b border-[#edf4ee] px-8'>
                <img src="/logo.svg" alt="Resume" className='h-9 w-auto' />
              </div>
              <nav className='flex flex-1 flex-col gap-2 px-5 py-5'>
                <a href='/app' className='flex items-center gap-3 rounded-lg bg-[#d9f4e6] px-3 py-2.5 text-[14px] font-semibold text-[#12845b]'>
                  <Home size={20} strokeWidth={2.2} /> Home
                </a>
                <a href='/app' className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#244e3b] hover:bg-[#eef9f2]'>
                  <FileText size={20} /> Resumes
                </a>
                <a href='/app' className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#244e3b] hover:bg-[#eef9f2]'>
                  <CloudUpload size={20} /> Uploads
                </a>
                <a href='/app' className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#244e3b] hover:bg-[#eef9f2]'>
                  <Settings size={20} /> Settings
                </a>
                <div className='mt-auto rounded-xl border border-[#cdebdc] bg-gradient-to-br from-[#effaf3] to-[#f7fcf9] p-5'>
                  <Sparkles className='mb-4 text-[#20a16c]' size={30} />
                  <h3 className='text-[16px] font-bold leading-tight'>Build your<br />best resume</h3>
                  <p className='mt-3 text-[12px] leading-relaxed text-[#315945]'>Create, manage and track all your resumes in one place.</p>
                </div>
              </nav>
            </aside>
            <div className='min-w-0 flex-1'>
              <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
              <Outlet />
            </div>
          </div>
        </div>
      ) 
      : <Login />
      }
      
    </div>
  )
}

export default Layout
