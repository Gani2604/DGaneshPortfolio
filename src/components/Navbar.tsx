import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
];

const mobileSocials = [
    { icon: <Github size={20} />, href: 'https://github.com/Gani2604', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/devulapelli-ganesh-435a88280', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:devulapelliganesh62@gmail.com', label: 'Email' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            const sections = document.querySelectorAll('section[id]');
            let current = 'home';
            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id') || 'home';
                }
            });
            setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 pointer-events-none pb-2 pt-6">
            
            {/* Top Left Logo (Pinned) */}
            <div className="absolute top-6 left-6 sm:left-10 lg:left-16 pointer-events-auto">
                <a
                    href="#home"
                    className="font-bold tracking-tight"
                    style={{ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}
                >
                    &lt;ganesh <span style={{ color: 'var(--neon)' }}>/&gt;</span>
                </a>
            </div>

            {/* Top Right Mobile Menu Toggle (Pinned) */}
            <div className="absolute top-6 right-6 pointer-events-auto md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-full border transition-all duration-300"
                    style={{ 
                        backgroundColor: 'rgba(20, 21, 22, 0.8)', 
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-primary)'
                    }}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Floating Pill Center Nav (Desktop Only) */}
            <nav
                className={`relative mx-auto w-fit pointer-events-auto transition-all duration-300 rounded-full border hidden md:flex items-center px-6 shadow-2xl ${scrolled ? 'py-3' : 'py-4'}`}
                style={{ 
                    backgroundColor: 'rgba(20, 21, 22, 0.65)', 
                    backdropFilter: 'blur(16px)', 
                    borderColor: 'rgba(255, 255, 255, 0.08)' 
                }}
            >
                <div className="flex items-center gap-7">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-medium text-[0.8rem] transition-colors duration-200"
                                style={{ 
                                    color: isActive ? 'var(--neon)' : 'var(--text-secondary)', 
                                    letterSpacing: '0.02em',
                                    textShadow: isActive ? '0 0 10px rgba(0, 255, 133, 0.3)' : 'none'
                                }}
                                onMouseEnter={e => (!isActive && (e.currentTarget.style.color = 'var(--neon)'))}
                                onMouseLeave={e => (!isActive && (e.currentTarget.style.color = 'var(--text-secondary)'))}
                            >
                                {link.name}
                            </a>
                        );
                    })}

                    <div className="h-5 w-px bg-white/10 mx-2" />

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 font-bold transition-all duration-300 uppercase tracking-widest text-[10px]"
                        style={{ color: '#fff', backgroundColor: 'var(--neon-dim)', padding: '6px 12px', borderRadius: '999px', border: '1px solid var(--neon)' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--neon)'; e.currentTarget.style.color = '#000'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--neon-dim)'; e.currentTarget.style.color = '#fff'; }}
                    >
                        Hire me
                        <ArrowUpRight size={13} />
                    </a>
                </div>
            </nav>

            {/* Mobile menu (Floating dropdown) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="md:hidden fixed top-[5.5rem] inset-x-4 max-w-sm mx-auto rounded-2xl border overflow-hidden shadow-2xl pointer-events-auto z-[60]"
                        style={{ backgroundColor: 'rgba(15, 16, 18, 0.98)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                        <div className="px-5 py-6 flex flex-col items-center">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-3 py-3 text-sm font-medium transition-colors"
                                        style={{ 
                                            color: isActive ? 'var(--neon)' : 'var(--text-secondary)',
                                            textShadow: isActive ? '0 0 10px rgba(0, 255, 133, 0.3)' : 'none'
                                        }}
                                        onMouseEnter={e => (!isActive && (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'))}
                                        onMouseLeave={e => (!isActive && (e.currentTarget.style.backgroundColor = 'transparent'))}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center mt-3 px-3 py-4 text-sm font-bold uppercase tracking-widest rounded-xl border transition-all duration-300"
                                style={{ color: '#fff', backgroundColor: 'var(--neon-dim)', borderColor: 'var(--neon)' }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--neon)'; e.currentTarget.style.color = '#000'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--neon-dim)'; e.currentTarget.style.color = '#fff'; }}
                            >
                                Hire me
                            </a>

                            {/* Mobile Socials */}
                            <div className="mt-8 pt-6 border-t w-full flex justify-center gap-6" style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}>
                                {mobileSocials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--text-muted)' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon)')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
