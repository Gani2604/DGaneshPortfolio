import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Image as ImageIcon, Layout } from 'lucide-react';

export default function ProjectsSection() {
    type Project = {
        title: string;
        tech: string[];
        description: string[];
        github: string;
        image: string;
        badge: string;
    };

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showAll, setShowAll] = useState(false);

    const projects: Project[] = [
        {
            title: "TeleCare: AI-Assisted System to Connect Rural Patients to Urban Doctors",
            tech: ["React.js", "TypeScript", "Node.js", "Prompt Engineering","Gemini API"],
            description: [
                "Built a responsive web platform to connect rural patients with urban doctors, reducing travel needs by 80% through secure video consultations.",
                "Integrated an AI-assisted chatbot using rule-based logic and controlled response generation, leveraging prompt engineering and the Gemini API for accurate responses.",
                "Implemented backend logic for symptom analysis and consultation mapping with fallback handling and multi-language support."
            ],
            github: "https://github.com/Gani2604/TeleCare-AI-Assisted-System-to-Connect-Rural-Patients-to-Urban-Doctors",
            image: "/Telecare.png",
            badge: "WEB · HEALTHCARE"
        },
        {
            title: "Face Recognition System",
            tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
            description: [
                "Developed a real-time face recognition system achieving 96% face detection accuracy with standard webcam input.",
                "Enabled classification of emotions, head orientation and spectacles identification, enhancing context-awareness.",
                "Achieved real-time performance with multi-feature analysis, improving system interactivity and responsiveness by 40%."
            ],
            github: "https://github.com/Gani2604/Face-Recognition-System-Using-Neural-Networks",
            image: "/Face Recognition System.png",
            badge: "COMPUTER VISION"
        },
        {
            title: "Real Estate Management System",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
            description: [
                "Developed a MERN based web application to automate real estate listings and secure user interactions.",
                "Implemented secure user authentication and property browsing using RESTful APIs.",
                "Designed a responsive frontend using React.js and Tailwind CSS, improving user navigation and accessibility."
            ],
            github: "https://github.com/Gani2604/Real_Estate_Management",
            image: "/Real Estate Management System.png",
            badge: "WEB · FULL STACK"
        },
        {
            title: "Train Food Delivery System",
            tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
            description: [
                "Implemented a web-based platform enabling over 500+ train passengers to pre-order meals during journeys.",
                "Integrated real-time order tracking and advance booking, achieving 95% on-time deliveries.",
                "Offered diverse meal options, increasing user engagement and repeat orders by 35%."
            ],
            github: "https://github.com/Gani2604/Train_Food_Delivey_System",
            image: "/Train Food Delivery System.png",
            badge: "WEB · SERVICES"
        }
    ];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="section-dark py-32 relative">
            {/* ── Project Details Modal ── */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white z-[110] hover:text-[color:var(--neon)] transition-colors bg-black/40 hover:bg-black/80 p-3 rounded-full backdrop-blur-md cursor-pointer border border-white/10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl border"
                            style={{ 
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--border-base)',
                                borderRadius: '1.25rem' 
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left side: Image */}
                            <motion.div 
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="w-full md:w-3/5 md:h-auto overflow-hidden bg-[#0c0d10] border-b md:border-b-0 md:border-r flex items-center justify-center relative p-6 cursor-default transform-gpu" 
                                style={{ borderColor: 'var(--border-base)' }}
                            >
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto max-h-full object-contain rounded-md shadow-2xl"
                                />
                            </motion.div>

                            {/* Right side: Content */}
                            <motion.div 
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                                className="w-full md:w-2/5 flex flex-col overflow-y-auto cursor-default transform-gpu" 
                                style={{ backgroundColor: 'var(--bg-card)', backdropFilter: 'blur(12px)' }}
                            >
                                <div className="p-8 md:p-10 flex flex-col flex-1">
                                    <div className="inline-block px-3 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] mb-6 uppercase w-fit" style={{ color: 'var(--neon)', backgroundColor: 'var(--neon-dim)' }}>
                                        {selectedProject.badge}
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                                        {selectedProject.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="text-xs font-bold px-3 py-1.5 tracking-wider uppercase rounded" style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-base)' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-4 mb-10 list-disc ml-4 marker:text-gray-600 flex-1 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                        {selectedProject.description.map((bullet, i) => (
                                            <li key={i} className="pl-2">{bullet}</li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-6 border-t flex items-center justify-end" style={{ borderColor: 'var(--border-base)' }}>
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="uppercase font-bold tracking-widest flex items-center gap-2 transition-all duration-200 px-6 py-3 rounded-full border"
                                            style={{ 
                                                color: 'var(--neon)', 
                                                borderColor: 'var(--neon)',
                                                backgroundColor: 'transparent'
                                            }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--neon)';
                                                (e.currentTarget as HTMLElement).style.color = '#000';
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                                (e.currentTarget as HTMLElement).style.color = 'var(--neon)';
                                            }}
                                        >
                                            SOURCE
                                            <ArrowUpRight size={18} />
                                        </a>
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
                        <Layout size={14} style={{ color: 'var(--neon)' }} />
                        Work Showcase
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4" style={{ color: 'var(--text-primary)', letterSpacing: '-0.025em' }}>
                        Featured Projects
                        <div className="mono-divider" />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
                    {(showAll ? projects : projects.slice(0, 2)).map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col rounded-2xl overflow-hidden group border"
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
                            >
                                {/* Img container */}
                                <div 
                                    className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer bg-neutral-900 border-b flex items-center justify-center"
                                    style={{ borderColor: 'var(--border-base)' }}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="fallback-icon hidden text-neutral-600">
                                        <ImageIcon size={48} />
                                    </div>
                                    
                                    {/* Monogram style internal badge */}
                                    <div className="absolute left-4 bottom-4 px-3 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-md bg-black/60 shadow-lg border border-white/10 uppercase">
                                        {project.badge}
                                    </div>
                                    
                                    {/* Overlay that shows "View" */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
                                        <div className="bg-black/90 backdrop-blur-md px-6 py-2.5 rounded-full text-white text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl border border-white/10 uppercase tracking-widest">
                                            <span>View</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <h3
                                        className="text-2xl font-bold leading-snug mb-3 tracking-tight"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t" style={{ borderColor: 'var(--border-base)' }}>
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[11px] uppercase font-bold px-3 py-1 tracking-wider" style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Projects Button */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="btn-primary flex items-center gap-2"
                    >
                        {showAll ? 'Show Less' : 'View All Projects'}
                    </button>
                </div>
            </div>
        </section>
    );
}
