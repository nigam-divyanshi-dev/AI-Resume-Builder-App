import { useState, useEffect } from 'react'
import { UploadCloud, FilePenLine, Trash2, Pencil, X, ArrowRight, Download, Bot, CheckCircle2, FilePlus2, Play, Rocket, Sparkles, WandSparkles, MoreHorizontal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import { toast } from 'react-hot-toast';
import pdfToText from 'react-pdftotext';
import LoaderCircleIcon from "../components/Loader";

const Dashboard = () => {

  const {token} = useSelector(state => state.auth)



  // Using Hex codes is required here so appending opacity ('10', '40', '90') creates valid CSS
  const colors = ['#169c69', '#1d9b70', '#39a96b', '#278b68', '#2f9e75', '#5b9d55', '#0f8f67', '#3caa72']
  
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [editResumeId, setEditResumeId] = useState('')
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = async () =>{
    try {
      const { data } = await api.get('/api/users/resumes', {headers: { Authorization: token }})
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
   try {
    event.preventDefault()
    const { data } = await api.post('/api/resumes/create', {title}, {headers: { Authorization: token }})
    setAllResumes([...allResumes, data.resume])
    setTitle('')
    setShowCreateResume(false)
    navigate(`/app/builder/${data.resume._id}`)
   } catch (error) {
    toast.error(error?.response?.data?.message || error.message)
   }
  } 

  const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', {title, resumeText}, {headers: { Authorization: token }})
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const {data} = await api.put(`/api/resumes/update`, {resumeId: editResumeId, resumeData: { title }}, {headers: { Authorization: token }})
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
     if(confirm){
      const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers: { Authorization: token }})
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
      toast.success(data.message)
     }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  useEffect(() => {
    const initResumes = async () => {
      await loadAllResumes()
    }
    initResumes()
  }, [])
  
  return (
    <div className='app-dashboard w-full'>
      <div className='mx-auto max-w-[1220px] px-5 py-6 sm:px-8 lg:px-8'>
        <section className='dashboard-hero relative mb-5 min-h-[306px] overflow-hidden rounded-xl border border-[#d7e8fb] bg-gradient-to-r from-[#eaf6ff] via-[#eef7ff] to-[#e7f7f1] px-7 py-6 sm:px-8'>
          <div className='relative z-[2] max-w-[560px]'>
            <span className='inline-flex items-center gap-1 rounded-full bg-[#baf3d0] px-3 py-1 text-[12px] font-semibold text-[#08784b]'><Sparkles size={13} /> AI Powered</span>
            <h1 className='mt-3 text-[34px] font-bold leading-[1.08] tracking-[-0.04em] text-[#101827] sm:text-[40px]'>Land your dream job with <span className='text-[#079b55]'>AI-powered</span> resumes.</h1>
            <p className='mt-3 max-w-[390px] text-[15px] leading-relaxed text-[#173251]'>Create, edit and download professional resumes with AI-powered assistance.</p>
            <div className='mt-5 flex flex-wrap gap-3'>
              <button onClick={() => setShowCreateResume(true)} className='flex items-center gap-2 rounded-full bg-[#08a957] px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#078e49]'><Rocket size={16} /> Get started <ArrowRight size={16} /></button>
              <button className='flex items-center gap-2 rounded-full border border-[#52759b] bg-white/80 px-5 py-2.5 text-[13px] font-semibold text-[#172b46] transition hover:bg-white'><Play size={15} fill='currentColor' /> Watch demo</button>
            </div>
          </div>
          <div className='pointer-events-none absolute bottom-[-32px] right-[20%] hidden h-[220px] w-[210px] rotate-[-6deg] rounded-[16px] border border-[#83d6c4] bg-white p-5 shadow-xl lg:block'>
            <div className='flex items-center gap-2'><span className='size-9 rounded-full bg-[#dbe9ff]'><span className='mx-auto mt-1 block size-7 rounded-full bg-[#2464cc]' /></span><span><b className='block text-[11px]'>Your Name</b><small className='text-[8px]'>Software Developer</small></span></div>
            <div className='mt-4 space-y-2'>{[1, 2, 3, 4, 5].map((line) => <div key={line} className='h-2 rounded-full bg-[#dbe5fb]' style={{ width: `${62 + line * 5}%` }} />)}</div>
          </div>
          <div className='absolute bottom-6 right-7 hidden w-[215px] space-y-2 lg:block'>
            <div className='flex items-center gap-3 rounded-xl border border-[#a9e9c2] bg-white/90 px-4 py-3'><span className='flex size-10 items-center justify-center rounded-full bg-[#cdf8d8] text-[#049653]'><WandSparkles size={20} /></span><span><b className='block text-[12px]'>AI Suggestions</b><small className='text-[10px]'>Improve your resume with smart tips</small></span></div>
            <div className='flex items-center gap-3 rounded-xl border border-[#b3e1fa] bg-white/90 px-4 py-3'><span className='flex size-10 items-center justify-center rounded-full bg-[#dcecff] text-[#1762d0]'><FilePlus2 size={20} /></span><span><b className='block text-[12px]'>ATS Friendly</b><small className='text-[10px]'>Get resumes optimized for ATS systems</small></span></div>
            <div className='flex items-center gap-3 rounded-xl border border-[#e2c9f7] bg-white/90 px-4 py-3'><span className='flex size-10 items-center justify-center rounded-full bg-[#e6d9ff] text-[#6330d6]'><Download size={20} /></span><span><b className='block text-[12px]'>Download & Share</b><small className='text-[10px]'>Get your resume in PDF or DOCX format</small></span></div>
          </div>
          <span className='absolute -bottom-16 left-[52%] size-44 rounded-full bg-[#b5f1cf]/70' />
        </section>

        <div className='grid gap-5 lg:grid-cols-[1fr_1.02fr]'>
          <section>
            <div className='mb-3 flex items-center gap-3'><Rocket size={25} /><div><h2 className='text-[18px] font-bold'>Quick Actions</h2><p className='text-[12px] text-[#315945]'>Start building your professional identity</p></div></div>
            <div className='grid gap-4 sm:grid-cols-2'>
              <button onClick={() => setShowCreateResume(true)} className='dashboard-action group relative flex h-[165px] flex-col items-start justify-center overflow-hidden rounded-xl border border-[#bfe4cd] bg-gradient-to-br from-[#effcf3] to-[#e2f8e9] px-6 text-left transition hover:shadow-lg'>
                <div className='mb-3 flex size-12 items-center justify-center rounded-full bg-[#b9f4c9] text-[#0a9a54]'><FilePlus2 size={25} /></div><p className='text-[15px] font-bold text-[#10251b]'>Create Resume</p><p className='mt-1 max-w-[190px] text-[11px] leading-relaxed text-[#315945]'>Build a professional resume from scratch with AI templates.</p><span className='absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-[#b7d5c5] bg-white text-[#166b4b]'><ArrowRight size={17} /></span>
              </button>
              <button onClick={() => setShowUploadResume(true)} className='dashboard-action upload-action group relative flex h-[165px] flex-col items-start justify-center overflow-hidden rounded-xl border border-[#e0caf4] bg-gradient-to-br from-[#fbf3ff] to-[#f4eaff] px-6 text-left transition hover:shadow-lg'>
                <div className='mb-3 flex size-12 items-center justify-center rounded-full bg-[#dbc8ff] text-[#5830cc]'><UploadCloud size={25} /></div><p className='text-[15px] font-bold text-[#10251b]'>Upload Existing</p><p className='mt-1 max-w-[200px] text-[11px] leading-relaxed text-[#453b68]'>Upload your current resume (PDF/DOC/DOCX) and we'll help you improve it.</p><span className='absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-[#d8c9ed] bg-white text-[#5830cc]'><ArrowRight size={17} /></span>
              </button>
            </div>
          </section>

          <section className='rounded-xl border border-[#dce7f6] bg-white p-4 shadow-[0_5px_20px_rgba(40,86,130,0.06)]'>
            <div className='mb-4 flex items-start justify-between'><div><h2 className='text-[18px] font-bold'>Your Resumes</h2><p className='mt-1 text-[12px] text-[#315945]'>Manage and access your saved resumes anytime.</p></div><button className='flex items-center gap-1 pt-1 text-[12px] font-semibold text-[#12845b]'>View all <ArrowRight size={14} /></button></div>
            <div className='grid gap-4 sm:grid-cols-2'>
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
                className='resume-card group relative flex h-[151px] w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg' 
                style={{ 
                    background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}35)`, 
                    borderColor: `${baseColor}40` 
                }}
              >
                <FilePenLine className='size-10 rounded-full bg-[#dcecff] p-2 shadow-sm group-hover:scale-105 transition-all' style={{ color: baseColor }} />
                
                <p className='px-2 text-center text-[15px] font-bold group-hover:scale-105 transition-all' style={{ color: '#10251b' }}>
                  {resume.title || `Resume ${index + 1}`}
                </p>
                
                <div className='resume-card-footer absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/70 bg-transparent px-4 py-3 text-[10px] text-[#315945]'><span>Updated on<br />{formattedDate}</span><span className='flex gap-2'><MoreHorizontal size={17} /></span></div>
                
                {/* Hover Action Buttons */}
                <div onClick={(e) => e.stopPropagation()} className='absolute right-2 top-2 hidden items-center gap-1 group-hover:flex'>
                  <Trash2 onClick={() => deleteResume(resume._id)} 
                    className="size-7 p-1 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer" 
                     
                  />
                  <Pencil onClick={(e) => {
                    e.stopPropagation();
                    setEditResumeId(resume._id);
                    setTitle(resume.title);
                  }}
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer" 
                  />
                </div>
              </button>
            )
          })}
            </div>
          </section>
        </div>

        <section className='mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#dedcff] bg-gradient-to-r from-[#f3f0ff] to-[#f7f5ff] px-6 py-4'>
          <div className='flex items-center gap-3'><span className='flex size-10 items-center justify-center rounded-full bg-[#e4dcff] text-[#5b39d4]'><Bot size={22} /></span><div><h3 className='text-[14px] font-bold'>AI Resume Builder</h3><p className='text-[11px] text-[#41506d]'>Save time and get better results with our AI-powered tools.</p></div></div>
          <div className='flex flex-wrap gap-3 text-[11px]'><span className='flex items-center gap-2 rounded-full bg-white px-4 py-2'><CheckCircle2 size={15} className='text-[#0ca65a]' /> Modern Templates</span><span className='flex items-center gap-2 rounded-full bg-white px-4 py-2'><CheckCircle2 size={15} className='text-[#0ca65a]' /> ATS Optimized</span><span className='flex items-center gap-2 rounded-full bg-white px-4 py-2'><CheckCircle2 size={15} className='text-[#0ca65a]' /> Smart Suggestions</span></div>
        </section>

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

              <button  disabled={isLoading}
                type="submit" 
                className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2'
              >
                {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white'/>}
                {isLoading ? 'Uploading...' : 'Upload Resume'}
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

        {editResumeId && (
          <form 
            onSubmit={editTitle} 
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center' 
            onClick={() => setEditResumeId('')}
          >
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
              
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
                Update
              </button>
              
              <X 
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors size-5' 
                onClick={() => setEditResumeId('')} 
              />
            </div>
          </form>
        )}

      </div>
    </div>
  )
}

export default Dashboard