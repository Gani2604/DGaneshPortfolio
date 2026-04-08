import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const OPEN_FOR = [
    'new opportunities',
    'freelance projects',
    'tech collaboration',
    'full-time roles',
];

export default function HeroSection() {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const cycle = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIdx(i => (i + 1) % OPEN_FOR.length);
                setVisible(true);
            }, 300);
        }, 2800);
        return () => clearInterval(cycle);
    }, []);

    return (
        <section
            id="home"
            className="section-dark relative min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* ── Gradient blobs (emerald/mint) ── */}
            <div
                className="gradient-blob"
                style={{
                    width: 700,
                    height: 700,
                    background: 'radial-gradient(circle, var(--neon-dim) 0%, transparent 60%)',
                    top: '-20%',
                    right: '-10%',
                }}
            />
            <div
                className="gradient-blob"
                style={{
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, var(--neon-dim) 0%, transparent 65%)',
                    bottom: '0%',
                    left: '-5%',
                }}
            />

            {/* ── Fixed side social rail ── */}
            <div className="hidden xl:flex flex-col items-center gap-6 fixed right-7 top-1/2 -translate-y-1/2 z-40">
                {[
                    { href: 'https://github.com/Gani2604', icon: <Github size={20} />, label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/devulapelli-ganesh-435a88280', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                    { href: 'mailto:devulapelliganesh62@gmail.com', icon: <Mail size={20} />, label: 'Email' },
                ].map(s => (
                    <a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        style={{ color: 'var(--text-primary)', transition: 'color 0.2s', opacity: 0.9 }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon)'; e.currentTarget.style.opacity = '1'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.opacity = '0.9'; }}
                    >
                        {s.icon}
                    </a>
                ))}
                <div style={{ width: 1, height: 60, background: 'linear-gradient(180deg, var(--border-base) 0%, transparent 100%)' }} />
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-28 pb-32">

                {/* Status badge with neon green dot + cycling text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="status-badge">
                        <span className="status-dot" />
                        <span>Open for:&nbsp;</span>
                        <span
                            style={{
                                color: 'var(--neon)',
                                display: 'inline-block',
                                transition: 'opacity 0.3s, transform 0.3s',
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(4px)',
                                fontWeight: 600,
                            }}
                        >
                            {OPEN_FOR[idx]}
                        </span>
                    </div>
                </motion.div>

                {/* ── Split-weight heading: white bold + muted thin ── */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-hero mb-8"
                    style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                >
                    {/* Line 1 */}
                    <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Building practical software</span>
                    <br />
                    {/* Line 2 */}
                    <span style={{ color: '#FFFFFF', fontWeight: 700 }}>solutions </span>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>that solve real-world</span>
                    <br />
                    {/* Line 3 */}
                    <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>problems.</span>
                </motion.h1>

                {/* Sub-line */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-xl text-base mb-12 leading-relaxed"
                    style={{ color: 'var(--text-muted)', fontWeight: 400 }}
                >
                    Full Stack Developer · Java & AI Enthusiast · B.Tech CSE @ MGIT, Hyderabad
                </motion.p>

                {/* CTA buttons — neon primary + outline secondary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="flex flex-wrap gap-4"
                >
                    <a href="#projects" className="btn-primary">
                        View My Work
                        <ArrowUpRight size={16} />
                    </a>
                    <a href="#contact" className="btn-outline">
                        Get in Touch
                    </a>
                    <a
                        href="https://github.com/Gani2604"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        <Github size={16} />
                        GitHub
                    </a>
                </motion.div>

                {/* Bottom meta bar & Mobile Socials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-10 inset-x-6 sm:inset-x-10 lg:inset-x-16 flex flex-col md:flex-row justify-between items-center gap-6"
                    style={{ color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}
                >
                    <div className="flex items-center gap-6">
                        <span className="uppercase">Hyderabad, India</span>
                        <span style={{ width: 1, height: 14, backgroundColor: 'var(--border-base)', display: 'inline-block' }} />
                        <span>CSE @ MGIT</span>
                        <span style={{ width: 1, height: 14, backgroundColor: 'var(--border-base)', display: 'inline-block' }} />
                        <span className="hidden sm:inline">© 2026 Ganesh Devulapelli</span>
                    </div>

                    {/* Mobile only horizontal socials */}
                    <div className="flex xl:hidden items-center gap-6 pt-2 md:pt-0">
                        {[
                            { href: 'https://github.com/Gani2604', icon: <Github size={20} />, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/devulapelli-ganesh-435a88280', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                            { href: 'mailto:devulapelliganesh62@gmail.com', icon: <Mail size={20} />, label: 'Email' },
                        ].map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="transition-colors duration-200"
                                style={{ color: 'var(--text-primary)' }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon)'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
