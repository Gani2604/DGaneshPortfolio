import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle } from 'lucide-react';

export default function ResumeSection() {
    // Place your PDF at: public/Devulapelli_Ganesh_Resume.pdf  → then set this to true
    const resumeAvailable = true;

    const certifications = [
        "ServiceNow Certified System Administrator (CSA): ServiceNow",
        "Salesforce Developer Virtual Internship: Salesforce",
        "Database Programming with SQL: Oracle Academy",
        "Certified in Python Essentials: Cisco Networking Academy",
        "CCNA: Introduction to Networks: Cisco Networking Academy",
        "Introduction to Data Science: Cisco Networking Academy"
    ];

    return (
        <section id="resume" className="section-white py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-label mb-3">
                        <FileText size={14} style={{ color: 'var(--neon)' }} />
                        Documents
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-bold flex items-center gap-4"
                        style={{ color: 'var(--text-primary)', letterSpacing: '-0.025em' }}
                    >
                        Resume &amp; Certifications
                        <div className="mono-divider" />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* ── Left: Certifications list ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <h3
                            className="text-2xl font-bold mb-8 flex items-center gap-3"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            <AwardIcon />
                            Key Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                                    className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300"
                                    style={{
                                        backgroundColor: 'var(--bg-card)',
                                        borderColor: 'var(--border-base)',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px var(--shadow-glow)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-base)';
                                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                    }}
                                >
                                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--neon)' }} />
                                    <span style={{ color: 'var(--text-secondary)' }}>{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: CV download card ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left"
                    >
                        <div className="glow-box w-full mb-8">
                            <FileText size={48} className="mb-6 mx-auto sm:mx-0" style={{ color: 'var(--accent)' }} />
                            <h3
                                className="text-2xl font-bold mb-4"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                Resume
                            </h3>
                            <p className="mb-8 max-w-md mx-auto sm:mx-0" style={{ color: 'var(--text-secondary)' }}>
                                A comprehensive overview of my academic background, technical skills, projects, and professional experience.
                            </p>

                            {resumeAvailable ? (
                                <a
                                    href="/Devulapelli_Ganesh_Resume.pdf"
                                    download
                                    className="btn-neon w-full sm:w-auto justify-center"
                                >
                                    <Download size={20} />
                                    Download PDF Resume
                                </a>
                            ) : (
                                <div
                                    className="inline-flex items-center gap-3 px-8 py-4 w-full sm:w-auto rounded-xl font-medium cursor-not-allowed border"
                                    style={{ borderColor: 'var(--border-base)', color: 'var(--text-muted)' }}
                                >
                                    <Download size={20} className="opacity-50" />
                                    <span>PDF Coming Soon</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function AwardIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--neon)' }}>
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    );
}
