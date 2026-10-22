import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, Copy, Check, Send, FileDown, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

interface ContactProps {
  onResumeClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onResumeClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please add a subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);

    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Manasi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${profileData.socials.email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B1324]/60">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-sky-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Have an Idea?"
          highlight="Let's Build It."
          subtitle={profileData.contactText}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto mt-12">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0F1A30]/80 border border-sky-500/20 shadow-card-glow">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-1">
                Primary Contact
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
                Open for full-time software engineering roles, collaborations, and AI automation projects.
              </p>

              {/* Copy Email Box */}
              <div className="p-3.5 rounded-2xl bg-[#0B1324] border border-sky-500/20 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-sky-200 truncate">
                    {profileData.socials.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-sky-600/30 hover:bg-sky-600/50 text-white text-xs font-medium border border-sky-400/30 transition-all flex items-center gap-1.5 shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#94A3B8] block">Connect Across Platforms:</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#0B1324] border border-sky-500/20 hover:border-sky-400/40 text-sky-200 hover:text-white transition-colors text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#0B1324] border border-sky-500/20 hover:border-sky-400/40 text-sky-200 hover:text-white transition-colors text-xs font-medium"
                  >
                    <Github className="w-4 h-4 text-sky-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#0B1324] border border-sky-500/20 hover:border-sky-400/40 text-sky-200 hover:text-white transition-colors text-xs font-medium"
                  >
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

              {/* Resume Download Action */}
              <div className="mt-6 pt-5 border-t border-sky-500/15">
                <button
                  onClick={onResumeClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0B1324] hover:bg-[#162544] border border-sky-500/30 text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Download Complete Resume (PDF)</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Client-Side Validation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0F1A30]/80 border border-sky-500/25 shadow-card-glow"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Fill in your note below to compose directly in your email client.
                </p>
              </div>

              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-sky-950/50 text-sky-300 border border-sky-500/20">
                Direct Dispatch
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-sky-200 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1324] border ${
                      formErrors.name ? 'border-rose-500' : 'border-sky-500/20 focus:border-sky-400'
                    } text-white text-sm focus:outline-none transition-colors`}
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-sky-200 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1324] border ${
                      formErrors.email ? 'border-rose-500' : 'border-sky-500/20 focus:border-sky-400'
                    } text-white text-sm focus:outline-none transition-colors`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-sky-200 mb-1">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Developer Role / Project Collaboration"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1324] border ${
                    formErrors.subject ? 'border-rose-500' : 'border-sky-500/20 focus:border-sky-400'
                  } text-white text-sm focus:outline-none transition-colors`}
                />
                {formErrors.subject && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-sky-200 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your opportunity or collaboration..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1324] border ${
                    formErrors.message ? 'border-rose-500' : 'border-sky-500/20 focus:border-sky-400'
                  } text-white text-sm focus:outline-none transition-colors resize-none`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Notice explaining client-side mail action */}
              <div className="p-3 rounded-xl bg-[#0B1324] border border-sky-500/15 text-[11px] text-[#94A3B8] leading-relaxed flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Client-Side Dispatch:</strong> Clicking below will launch your default email app with this message formatted and ready to send to <code className="text-sky-300">{profileData.socials.email}</code>.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 border border-sky-400/40"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App & Send</span>
              </button>

              {formSubmitted && (
                <p className="text-xs text-center text-emerald-400 font-medium pt-1">
                  ✓ Prepared email draft. If your mail client did not open, please copy {profileData.socials.email} directly!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
