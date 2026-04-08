import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    { icon: <Github size={16} />, href: 'https://github.com/Gani2604', label: 'GitHub' },
    { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/devulapelli-ganesh-435a88280', label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: 'mailto:devulapelliganesh62@gmail.com', label: 'Email' },
];

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer
            className="section-dark border-t py-14"
            style={{ borderColor: 'var(--border-base)' }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* Top row: wordmark + nav */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                    <div>
                        <a
                            href="#home"
                            className="font-bold block mb-1"
                            style={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}
                        >
                            &lt;ganesh <span style={{ color: 'var(--neon)' }}>/&gt;</span>
                        </a>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            Full Stack Developer · Hyderabad, India
                        </p>
                    </div>

                    <nav className="flex flex-col gap-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-primary)' }}>Quick Links</p>
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-medium transition-colors duration-200 uppercase tracking-widest w-fit"
                                style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Thin divider */}
                <div className="h-px mb-8" style={{ backgroundColor: 'var(--border-base)' }} />

                {/* Bottom row: copyright + socials */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                        © {new Date().getFullYear()} Ganesh Devulapelli · All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="transition-colors duration-200"
                                style={{ color: 'var(--text-muted)' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
