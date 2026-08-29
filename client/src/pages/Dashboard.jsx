import { useState, useEffect } from 'react'
import { Plus, UploadCloud, FilePenLine, Trash2, Pencil, X } from 'lucide-react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  // Using Hex codes is required here so appending opacity ('10', '40', '90') creates valid CSS
  const colors = ['#6366f1', '#a855f7', '#ec4899', '#3b82f6', '#22c55e', '#eab308', '#f97316', '#ef4444']
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const navigate = useNavigate()

  const loadAllResumes = async () => {
    // Loaded 3 instances of dummy data temporarily so you can see the grid layout working
    setAllResumes([dummyResumeData, dummyResumeData, dummyResumeData])
  }

  const createResume = async (event) => {
    event.preventDefault()
    setShowCreateResume(false)
    navigate(`/app/builder/res123`)
  } 
  const uploadResume = async (event) => {
    event.preventDefault()
    setShowUploadResume(false)
    navigate(`/app/builder/res123`)
  }  


  useEffect(() => {
    const initResumes = async () => {
      await loadAllResumes()
    }
    initResumes()
  }, [])
  
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        
        {/* Mobile Welcome Text */}
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>
          Welcome, John Doe
        </p>
        
        {/* Action Buttons */}
        <div className='flex gap-4'>
          <button 
            onClick={() => setShowCreateResume(true)} 
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'
          >
            <Plus className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>
              Create Resume
            </p>
          </button>
          
          <button onClick={() => setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <UploadCloud className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>
              Upload Existing
            </p>
          </button>
        </div>

        {/* Divider */}
        <hr className='border-slate-200 my-8' />
      
        {/* Resumes Grid */}
        <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            
            // Safe Date Parsing to prevent "Invalid Date" UI bug
            let formattedDate = new Date().toLocaleDateString();
            if (resume.updatedAt) {
               const parsedDate = new Date(resume.updatedAt);
               if (!isNaN(parsedDate.getTime())) {
                   formattedDate = parsedDate.toLocaleDateString();
               }
            }

            return (
              <button 
                key={index} onClick ={() => navigate(`/app/builder/${resume._id}`)}
                className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' 
                style={{ 
                    background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, 
                    borderColor: `${baseColor}40` 
                }}
              >
                <FilePenLine className='size-7 group-hover:scale-105 transition-all' style={{ color: baseColor }} />
                
                <p className='text-sm group-hover:scale-105 transition-all px-2 text-center font-medium' style={{ color: baseColor }}>
                  {resume.title || `Resume ${index + 1}`}
                </p>
                
                <p className='absolute bottom-1 text-xs text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{ color: `${baseColor}90` }}>
                  Updated on {formattedDate}
                </p>
                
                {/* Hover Action Buttons */}
                <div className='absolute top-1 right-1 group-hover:flex items-center hidden gap-1'>
                  <Trash2 
                    className="size-7 p-1 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer" 
                    onClick={(e) => { 
                        e.stopPropagation(); 
                        // TODO: Hook up delete functionality
                    }} 
                  />
                  <Pencil 
                    className="size-7 p-1 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer" 
                    onClick={(e) => { 
                        e.stopPropagation(); 
                        // TODO: Hook up title edit functionality
                    }} 
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Create Resume Modal */}
        {showCreateResume && (
          <form 
            onSubmit={createResume} 
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center' 
            onClick={() => setShowCreateResume(false)}
          >
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
              
              <input onChange={(e) => setTitle(e.target.value)} value={title}
                type="text" 
                placeholder='Enter resume title' 
                className='w-full px-4 py-2 mb-4 outline-none rounded border border-slate-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all' 
                required
              />
              
              <button 
                type="submit" 
                className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium'
              >
                Create Resume
              </button>
              
              <X 
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors size-5' 
                onClick={() => setShowCreateResume(false)} 
              />
            </div>
          </form>
        )}

        {showUploadResume && (
          <form 
            onSubmit={uploadResume} 
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center' 
            onClick={() => setShowUploadResume(false)}
          >
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Upload a Resume</h2>
              
              <input onChange={(e) => setTitle(e.target.value)} value={title}
                type="text" 
                placeholder='Enter resume title' 
                className='w-full px-4 py-2 mb-4 outline-none rounded border border-slate-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all' 
                required
              />
              <div>
                <label htmlFor="resume-input" className="block text-sm text-slate-700">
                Select resume file
                  <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors'>
                    {resume ? (
                      <p className='text-green-700'>{resume.name}</p>
                    ) : (
                      <>
                        <UploadCloud className='size-14 stroke-1' />
                        <p> Upload resume</p>
                      </>
                    )
                    }
                  </div>
                </label>
                <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])}/>
                
              </div>

              <button 
                type="submit" 
                className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium'
              >
                Upload Resume
              </button>
              
              <X 
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors size-5' 
                onClick={() => {setShowUploadResume(false); setTitle('')}}
              />
            </div>
          </form>

        )
        }
      </div>
    </div>
  )
}

export default Dashboard