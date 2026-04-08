import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiC, SiJavascript, SiTypescript, SiR, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiTableau, SiDocker, SiJenkins } from 'react-icons/si';
import { FaGitAlt, FaGithub, FaJava } from 'react-icons/fa';
import { Lightbulb, Users, MessageSquare, RefreshCw, Code2 } from 'lucide-react';

const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
    "Java": { icon: <FaJava className="w-7 h-7" />, color: "#f89820" },
    "Python": { icon: <SiPython className="w-7 h-7" />, color: "#3776AB" },
    "C": { icon: <SiC className="w-7 h-7" />, color: "#659bd3" },
    "JavaScript": { icon: <SiJavascript className="w-7 h-7" />, color: "#c7a800" },
    "TypeScript": { icon: <SiTypescript className="w-7 h-7" />, color: "#3178C6" },
    "R": { icon: <SiR className="w-7 h-7" />, color: "#276DC3" },
    "HTML": { icon: <SiHtml5 className="w-7 h-7" />, color: "#E34F26" },
    "CSS": { icon: <SiCss3 className="w-7 h-7" />, color: "#1572B6" },
    "React": { icon: <SiReact className="w-7 h-7" />, color: "#0ea5e9" },
    "Node.js": { icon: <SiNodedotjs className="w-7 h-7" />, color: "#339933" },
    "Express.js": { icon: <SiExpress className="w-7 h-7" />, color: "#555555" },
    "MySQL": { icon: <SiMysql className="w-7 h-7" />, color: "#4479A1" },
    "MongoDB": { icon: <SiMongodb className="w-7 h-7" />, color: "#47A248" },
    "Git": { icon: <FaGitAlt className="w-7 h-7" />, color: "#F05032" },
    "GitHub": { icon: <FaGithub className="w-7 h-7" />, color: "#1a1a2e" },
    "VS Code": { icon: <Code2 className="w-7 h-7" />, color: "#007ACC" },
    "Tableau": { icon: <SiTableau className="w-7 h-7" />, color: "#E97627" },
    "Docker": { icon: <SiDocker className="w-7 h-7" />, color: "#2496ED" },
    "Jenkins": { icon: <SiJenkins className="w-7 h-7" />, color: "#D33833" },
    "Problem-solving": { icon: <Lightbulb className="w-7 h-7" />, color: "#d97706" },
    "Teamwork": { icon: <Users className="w-7 h-7" />, color: "#0ea5e9" },
    "Communication": { icon: <MessageSquare className="w-7 h-7" />, color: "#059669" },
    "Adaptability": { icon: <RefreshCw className="w-7 h-7" />, color: "#7c3aed" },
};

function SkillChip({ skill }: { skill: string }) {
    const [hovered, setHovered] = useState(false);
    const entry = iconMap[skill];

    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="relative flex items-center justify-center rounded-xl cursor-default overflow-hidden"
            style={{
                width: 68,
                height: 68,
                /* Monogram: transparent → white-inverted on hover */
                backgroundColor: hovered ? '#FFFFFF' : 'transparent',
                border: `1px solid ${hovered ? '#FFFFFF' : '#32373C'}`,
                boxShadow: hovered ? '0 2px 12px rgba(255,255,255,0.12)' : 'none',
                transition: 'all 0.18s ease',
            }}
            title={skill}
        >
            {/* Brand icon — shown when NOT hovered */}
            <span style={{
                color: entry?.color ?? '#ABB8C3',
                opacity: hovered ? 0 : 1,
                transform: hovered ? 'scale(0.6)' : 'scale(1)',
                transition: 'opacity 0.15s, transform 0.15s',
                position: 'absolute',
            }}>
                {entry?.icon}
            </span>
            {/* Skill name — shown ON hover, black on white */}
            <span style={{
                color: '#000000',
                fontSize: '0.60rem',
                fontWeight: 700,
                textAlign: 'center',
                lineHeight: 1.2,
                padding: '0 4px',
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'scale(1)' : 'scale(0.75)',
                transition: 'opacity 0.15s, transform 0.15s',
                position: 'absolute',
            }}>
                {skill}
            </span>
        </motion.div>
    );
}

export default function SkillsSection() {
    const skillCategories = [
        { title: "Programming", skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "R"] },
        { title: "Web Development", skills: ["HTML", "CSS", "React", "Node.js", "Express.js"] },
        { title: "Databases", skills: ["MySQL", "MongoDB"] },
        { title: "Dev Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Tableau", "Docker", "Jenkins"] },
        { title: "Behavioural Skills", skills: ["Problem-solving", "Teamwork", "Communication", "Adaptability"] },
    ];

    return (
        /* ── WHITE section ── */
        <section id="skills" className="section-dark py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-label mb-3">
                        <Code2 size={14} style={{ color: 'var(--neon)' }} />
                        Tech Stack
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4" style={{ color: 'var(--text-primary)', letterSpacing: '-0.025em' }}>
                        Skills &amp; Expertise
                        <div className="mono-divider" />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glow-box flex flex-col"
                        >
                            <h3
                                className="text-sm font-bold mb-4 tracking-widest uppercase"
                                style={{ color: 'var(--neon)' }}
                            >
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map(skill => (
                                    <SkillChip key={skill} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
