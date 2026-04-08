import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, User2 } from 'lucide-react';

export default function AboutSection() {
    const infoCards = [
        {
            icon: <GraduationCap size={24} className="mb-4" style={{ color: 'var(--neon)' }} />,
            title: "Education",
            description: "B.Tech in CSE 2026",
            subtext: "Mahatma Gandhi Institute of Technology | CGPA: 9.3"
        },
        {
            icon: <MapPin size={24} className="mb-4" style={{ color: 'var(--neon)' }} />,
            title: "Location",
            description: "Hyderabad, Telangana",
            subtext: "Open to Relocation & Remote"
        },
        {
            icon: <Award size={24} className="mb-4" style={{ color: 'var(--neon)' }} />,
            title: "Certifications",
            description: "6+ Technical Certifications",
            subtext: "ServiceNow, Salesforce, Oracle, Cisco"
        }
    ];

    return (
        /* ── DARK NAVY section ── */
        <section id="about" className="section-white py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-label mb-3">
                        <User2 size={14} style={{ color: 'var(--neon)' }} />
                        About Me
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4" style={{ color: 'var(--text-primary)', letterSpacing: '-0.025em' }}>
                        Who I Am
                        <div className="mono-divider" />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-8 space-y-6 text-lg leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <p>
                            I am a motivated student with a strong interest in building practical software solutions.
                            I enjoy working in teams, learning new technologies, and applying my skills to solve real-world problems.
                        </p>
                        <p>
                            My focus is on developing robust web applications and integrating advanced systems like AI and machine learning
                            into functional user experiences. I am looking for an opportunity where I can grow professionally and contribute meaningful work.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                            {infoCards.map((card, index) => {
                                const isCert = card.title === 'Certifications';
                                const Wrapper = isCert ? 'a' : 'div';
                                return (
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        key={index}
                                        className="cursor-default"
                                    >
                                        <Wrapper
                                            {...(isCert ? { href: '#resume' } : {})}
                                            className="glow-box block h-full"
                                            style={isCert ? { textDecoration: 'none' } : {}}
                                        >
                                            {card.icon}
                                            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
                                            <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{card.description}</p>
                                            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{card.subtext}</p>
                                            {isCert && (
                                                <p className="text-xs mt-2 font-semibold" style={{ color: 'var(--accent)' }}>View all →</p>
                                            )}
                                        </Wrapper>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="md:col-span-4 flex justify-center"
                    >
                        <motion.div className="relative group max-w-sm" whileHover={{ scale: 1.02 }} transition={{ ease: "easeOut" }}>
                            <div className="absolute inset-0 rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" style={{ backgroundColor: '#32373C' }} />
                            <img
                                src="/profile.png"
                                alt="Ganesh Devulapelli"
                                className="relative rounded-2xl object-cover aspect-[3/4] transition-all duration-300 transform group-hover:-translate-y-1"
                                style={{ width: '100%', maxWidth: '300px', border: '1px solid #32373C' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
