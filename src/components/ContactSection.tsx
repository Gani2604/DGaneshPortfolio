import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MessageSquare } from 'lucide-react';

export default function ContactSection() {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "devulapelliganesh62@gmail.com",
            link: "mailto:devulapelliganesh62@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "+91 9100504508",
            link: "tel:+919100504508"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            title: "LinkedIn",
            value: "devulapelli-ganesh",
            link: "https://linkedin.com/in/devulapelli-ganesh-435a88280"
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            value: "Gani2604",
            link: "https://github.com/Gani2604"
        }
    ];

    return (
        <section id="contact" className="section-dark py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-label mb-3">
                        <MessageSquare size={14} style={{ color: 'var(--neon)' }} />
                        Say Hello
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-bold flex items-center gap-4 mb-4"
                        style={{ color: 'var(--text-primary)', letterSpacing: '-0.025em' }}
                    >
                        Get In Touch
                        <div className="mono-divider" />
                    </h2>
                    <p className="max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                    {contactInfo.map((info, idx) => (
                        <motion.a
                            key={idx}
                            href={info.link}
                            target={info.title !== "Email" && info.title !== "Phone" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 group"
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                borderColor: 'var(--border-base)',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,142,247,0.4)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(79,142,247,0.10)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-base)';
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                            }}
                        >
                            <div
                                className="p-4 rounded-full mb-6 transition-all duration-300 group-hover:scale-110"
                                style={{ backgroundColor: 'var(--neon-dim)', color: 'var(--neon)' }}
                            >
                                {info.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{info.title}</h3>
                            <p className="text-sm text-center break-all" style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <a
                        href="mailto:devulapelliganesh62@gmail.com"
                        className="btn-neon"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
