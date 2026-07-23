import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitBranch, Link2, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { personalInfo, socialLinks, contactConfig } from '../../config/portfolio.config';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      if (contactConfig.formspreeEndpoint) {
        const res = await fetch(contactConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error();
      } else {
        // Mailto fallback
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      }
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: socialLinks.email },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: socialLinks.phone },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
    { icon: GitBranch, label: 'GitHub', value: 'ashfeerka007-netizen', href: socialLinks.github },
    { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/ashfeerka', href: socialLinks.linkedin },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 tag mb-4"
        >
          Contact
        </motion.div>
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-5">
          <h3 className="text-lg font-bold text-white">Contact Information</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Whether you need a custom management system, want to discuss a project, or just want to connect — feel free to reach out.
          </p>

          <div className="space-y-3">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center gap-3 card p-3 hover:border-blue-500/30 transition-all group"
                id={`contact-${label.toLowerCase()}`}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/15 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/25 transition-colors">
                  <Icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{label}</div>
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors truncate max-w-[180px]">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-5">Send a Message</h3>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h4 className="text-white font-bold">Message Sent!</h4>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="btn-ghost text-sm">Send another →</button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-name">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${errors.name ? 'border-red-500/50' : 'border-slate-700/60 hover:border-slate-600'}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-email">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${errors.email ? 'border-red-500/50' : 'border-slate-700/60 hover:border-slate-600'}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-subject">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${errors.subject ? 'border-red-500/50' : 'border-slate-700/60 hover:border-slate-600'}`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-slate-700/60 hover:border-slate-600'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-lg bg-red-900/20 border border-red-500/20">
                    <AlertCircle size={15} />
                    Failed to send message. Please try emailing directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60"
                  id="contact-submit"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
