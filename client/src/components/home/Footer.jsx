import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="w-full bg-gradient-to-r from-white via-green-50 to-white text-slate-800 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
                
                {/* Logo Section */}
                <div className="flex items-center space-x-3 mb-6">
                    <img 
                        alt="Resume Builder Logo" 
                        className="h-11 w-auto"
                        src="/logo.svg" 
                    />
                </div>
                
                {/* Project Description */}
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-slate-600">
                    Empowering job seekers worldwide to land their dream roles. Build, customize, and download professional, AI-optimized resumes in minutes.
                </p>
                
            </div>
            
            {/* Copyright Section */}
            <div className="border-t border-green-200/60">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-medium text-slate-500">
                    Divyanshi © {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer