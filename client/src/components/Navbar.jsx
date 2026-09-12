import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../app/features/authSlice'
import { ChevronDown, LogOut, Moon, Search, Sun, UserCircle } from 'lucide-react'


const Navbar = ({ darkMode, onToggleTheme }) => {
    const {user} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const logoutUser = () => {
        navigate('/')
        dispatch(logout())

    }
  return (
    <div className='h-[62px] border-b border-[#d8eee3] bg-white'>
        <nav className='flex h-full items-center gap-4 px-5 text-[#10251b] sm:px-8'>
            <div className='relative hidden max-w-[490px] flex-1 md:block'>
                <Search size={18} className='absolute left-4 top-1/2 -translate-y-1/2 text-[#163c2d]' />
                <input aria-label='Search templates and features' placeholder='Search templates, features...' className='h-11 w-full rounded-full border border-transparent bg-[#f0f3ff] pl-11 pr-5 text-[12px] text-[#20334f] shadow-none focus:border-[#bde6cf] focus:ring-2 focus:ring-[#d9f4e6]' />
            </div>
            <div className='ml-auto flex items-center gap-4'>
            <button
                type="button"
                onClick={onToggleTheme}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className='rounded-full p-1.5 transition hover:bg-[#eef9f2] dark:hover:bg-[#17382a]'
            >
                {darkMode ? <Moon size={20} className='text-[#a8efc8]' /> : <Sun size={20} className=' text-black hover:text-white' />}
            </button>
            <div className='flex items-center gap-2 text-[12px] font-semibold'>
                <span>Hi, {user?.name || 'there'}</span>
                <UserCircle size={29} className='text-[#1c9d69]' />
                <ChevronDown size={15} className='hidden sm:block' />
            </div>
            <span className='h-7 w-px bg-[#d8eee3]' />
            <button onClick={logoutUser} className='flex items-center gap-2 rounded-full border border-[#1c9d69] px-4 py-1.5 text-[12px] font-medium text-[#12845b] transition hover:bg-[#eef9f2]'>
                <LogOut size={14} /> Logout
            </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar