import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase } from 'lucide-react';

export default function ExperienceSection() {
    type Experience = {
        title: string;
        company: string;
        location: string;
        date: string;
        domain: string;
        logoPath: string;
        bgLogo: string;
        points: string[];
    };

    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

    const experiences: Experience[] = [
        {
            title: "Intern",
            company: "RiseUp with ServiceNow Program",
            location: "Remote",
            date: "Jun 2025 – Sep 2025",
            domain: "IT Service Management (ITSM) & ServiceNow Platform Administration",
            logoPath: "/ServiceNow.png",
            bgLogo: 'linear-gradient(135deg, #FFFFFF 0%, #F4F7F9 100%)',
            points: [
                "Configured and customized IT Service Management (ITSM) modules such as Incident, Problem, and Change Management.",
                "Developed workflows, Business Rules, Client Scripts and UI Policies to automate repetitive processes.",
                "Implemented data management practices using CMDB, Import Sets, and Transform Maps.",
                "Applied core administration concepts from ServiceNow Fundamentals in lab environments."
            ]
        },
        {
            title: "Intern",
            company: "Salesforce Developer Virtual Internship",
            location: "Remote",
            date: "Jul 2024 – Aug 2024",
            domain: "CRM & Cloud Application Development",
            logoPath: "/Salesforce.png",
            bgLogo: 'linear-gradient(135deg, #0A2235 0%, #061521 100%)',
            points: [
                "Completed training in Salesforce Fundamentals, Org Setup, Apex, Flows, and LWC using Salesforce CLI.",
                "Earned 3 Super Badges: Apex Specialist, Process Automation Specialist, and Developer Super Set.",
                "Built and deployed scalable business logic and UI components using LWC aligned with cloud best practices."
            ]
        }
    ];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedExperience) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedExperience]);

    return (
        <section id="experience" className="py-32 section-white relative">
            
            {/* ── Experience Details Modal ── */}
            <AnimatePresence>
                {selectedExperience && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setSelectedExperience(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white z-[110] hover:text-[color:var(--neon)] transition-colors bg-black/40 hover:bg-black/80 p-3 rounded-full backdrop-blur-md cursor-pointer border border-white/10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedExperience(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl border"
                            style={{ 
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--border-base)',
                                borderRadius: '1.25rem' 
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left side: Logo */}
                            <motion.div 
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r flex items-center justify-center p-8 relative cursor-default transform-gpu" 
                                style={{ 
                                    background: selectedExperience.bgLogo,
                                    borderColor: 'var(--border-base)' 
                                }}
                            >
                                {/* subtle decorative background grid lines */}
                                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                                
                                <img
                                    src={selectedExperience.logoPath}
                                    alt={selectedExperience.company}
                                    className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl relative z-10"
                                />
                            </motion.div>

                            {/* Right side: Content */}
                            <motion.div 
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                                className="w-full md:w-3/5 flex flex-col overflow-y-auto cursor-default transform-gpu" 
                                style={{ backgroundColor: 'var(--bg-card)', backdropFilter: 'blur(12px)' }}
                            >
                                <div className="p-8 md:p-10 flex flex-col flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                        <div className="inline-block px-3 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--neon)', backgroundColor: 'var(--neon-dim)' }}>
                                            {selectedExperience.title}
                                        </div>
                                        <div className="text-xs font-mono tracking-widest text-[color:var(--text-muted)]">
                                            {selectedExperience.date}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold leading-tight mb-2" style={{ color: 'var(--text-primary)' }}>
                                        {selectedExperience.company}
                                    </h3>
                                    
                                    <p className="text-sm italic mb-8" style={{ color: 'var(--text-secondary)' }}>
                                        {selectedExperience.domain}
                                    </p>

                                    <div className="h-px w-full mb-8" style={{ backgroundColor: 'var(--border-base)' }} />

                                    <ul className="space-y-4 mb-10 list-disc ml-4 marker:text-[color:var(--neon)] flex-1 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                        {selectedExperience.points.map((bullet, i) => (
                                            <li key={i} className="pl-2">{bullet}</li>
                                        ))}
                                    </ul>
                                    
                                    <div className="mt-4 flex items-center justify-start text-sm font-bold tracking-widest uppercase font-mono" style={{ color: 'var(--text-primary)' }}>
                                        Location: {selectedExperience.location}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-label mb-3">
                        <Briefcase size={14} style={{ color: 'var(--neon)' }} />
                        Work History
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4" style={{ color: 'var(--text-primary)', letterSpacing: '-0.025em' }}>
                        Experience
                        <div className="mono-divider" />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {experiences.map((exp, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col rounded-2xl overflow-hidden group border cursor-pointer"
                                style={{
                                    backgroundColor: 'var(--bg-card)',
                                    borderColor: 'var(--border-base)',
                                    boxShadow: '0 4px 20px var(--shadow-soft)',
                                    transition: 'border-color 0.3s, box-shadow 0.3s',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--neon)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 36px var(--shadow-soft), 0 0 24px var(--neon-dim)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-base)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px var(--shadow-soft)';
                                }}
                                onClick={() => setSelectedExperience(exp)}
                            >
                                {/* Logo Hero block */}
                                <div 
                                    className="relative h-64 sm:h-72 w-full flex items-center justify-center border-b overflow-hidden"
                                    style={{ 
                                        background: exp.bgLogo,
                                        borderColor: 'var(--border-base)' 
                                    }}
                                >
                                    {/* subtle decorative background grid lines */}
                                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                    
                                    <motion.div
                                        className="relative z-10"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                         <img src={exp.logoPath} alt={exp.company} className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl" />
                                    </motion.div>
                                    
                                    {/* Monogram style internal badge */}
                                    <div 
                                        className="absolute left-4 bottom-4 px-3 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg border"
                                        style={{
                                            backgroundColor: exp.bgLogo.includes('#FFFFFF') ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.4)',
                                            color: exp.bgLogo.includes('#FFFFFF') ? '#000' : '#fff',
                                            borderColor: exp.bgLogo.includes('#FFFFFF') ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        {exp.date}
                                    </div>

                                    {/* Overlay that shows "View Details" */}
                                    <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/30 transition-colors flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
                                        <div className="bg-black/90 backdrop-blur-md px-6 py-2.5 rounded-full text-white text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl border border-white/10 uppercase tracking-widest">
                                            <span>View</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-1 text-center justify-center">
                                    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--neon)' }}>
                                        {exp.title}
                                    </p>
                                    <h3
                                        className="text-2xl font-bold leading-snug tracking-tight"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {exp.company}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
