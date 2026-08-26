import React from 'react'
import { Zap, Sparkles, FileText, Palette, Share2 } from 'lucide-react'
import Title from './Title'

const Features = () => {
    const [isHover, setIsHover] = React.useState(false);

    const resumeFeatures = [
        {
            icon: <Sparkles className="size-6 text-green-600" />,
            title: "AI-Powered Writing",
            description: "Instantly enhance your professional summary and job descriptions with Google Gemini AI.",
            hoverBg: "group-hover:bg-green-100",
            hoverBorder: "group-hover:border-green-300",
            defaultActive: "border-green-300 bg-green-100"
        },
        {
            icon: <FileText className="size-6 text-blue-600" />,
            title: "Smart Resume Parsing",
            description: "Upload a PDF resume and let the AI extract and organize your data automatically.",
            hoverBg: "group-hover:bg-blue-100",
            hoverBorder: "group-hover:border-blue-300",
            defaultActive: "border-blue-300 bg-blue-100"
        },
        {
            icon: <Palette className="size-6 text-purple-600" />,
            title: "Dynamic Customization",
            description: "Choose from modern templates, customize accent colors, and automatically remove image backgrounds.",
            hoverBg: "group-hover:bg-purple-100",
            hoverBorder: "group-hover:border-purple-300",
            defaultActive: "border-purple-300 bg-purple-100"
        },
        {
            icon: <Share2 className="size-6 text-orange-600" />,
            title: "Live Preview & Export",
            description: "See changes in real-time. Download as PDF or share a live public link instantly.",
            hoverBg: "group-hover:bg-orange-100",
            hoverBorder: "group-hover:border-orange-300",
            defaultActive: "border-orange-300 bg-orange-100"
        }
    ];

    return (
        <div id='features' className="flex flex-col items-center my-10 scroll-mt-12">
            
            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
                <Zap width={14} />
                <span>Simple Process</span>
            </div>
            
            <Title title='Build your resume' description='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.' />

            <div className="flex flex-col md:flex-row items-center xl:-mt-10">
                
                {/* Left Side Image */}
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="Resume Building Interface" />
                
                {/* Right Side Features List */}
                <div 
                    className="px-4 md:px-0 flex flex-col gap-2" 
                    onMouseEnter={() => setIsHover(true)} 
                    onMouseLeave={() => setIsHover(false)}
                >
                    {resumeFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                            <div className={`p-6 ${feature.hoverBg} border border-transparent ${feature.hoverBorder} flex gap-4 rounded-xl transition-colors ${index === 0 && !isHover ? feature.defaultActive : ''}`}>
                                
                                {feature.icon}
                                
                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-slate-700">{feature.title}</h3>
                                    <p className="text-sm text-slate-600 max-w-xs">{feature.description}</p>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </div>
    )
}

export default Features