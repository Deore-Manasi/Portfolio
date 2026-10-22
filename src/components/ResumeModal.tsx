import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileDown,
  ExternalLink,
  Eye,
  ListFilter,
  CheckCircle2,
  Mail,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'summary'>('preview');
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manasi_Deore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 500);
  };

  const handleOpenInNewTab = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.35 }}
          className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-[#0B1324] border border-sky-500/30 p-5 sm:p-7 shadow-2xl shadow-sky-950/60 z-10 flex flex-col text-left overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          {/* Top Bar: Title & Action Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-sky-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950/70 border border-sky-500/30 flex items-center justify-center text-sky-300 shrink-0">
                <FileDown className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 id="resume-title" className="text-lg sm:text-xl font-bold text-white">
                    Manasi Deore — Resume
                  </h3>
                  <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                    Latest PDF
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8] font-mono">
                  Software Developer · Full Stack · AI Automation
                </p>
              </div>
            </div>

            {/* Header Right Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={handleOpenInNewTab}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-sky-200 bg-[#0F1A30] hover:bg-sky-950/50 border border-sky-500/30 transition-colors shadow-sm"
                title="Open resume in full-screen browser tab"
              >
                <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Open in Tab</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </button>

              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 shadow-glow-sm transition-all border border-sky-400/40"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{downloading ? 'Downloading...' : 'Download PDF'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#0F1A30] text-[#94A3B8] hover:text-white border border-sky-500/20 hover:border-sky-400/50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub-header Tab Bar */}
          <div className="flex items-center gap-2 pt-3 pb-2 text-xs">
            <button
              onClick={() => setActiveTab('preview')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'bg-sky-600/30 text-sky-200 border border-sky-400/30'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Document Preview</span>
            </button>

            <button
              onClick={() => setActiveTab('summary')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
                activeTab === 'summary'
                  ? 'bg-sky-600/30 text-sky-200 border border-sky-400/30'
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Executive Highlights</span>
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="flex-1 overflow-y-auto py-2">
            {activeTab === 'preview' ? (
              <div className="relative w-full h-[58vh] sm:h-[62vh] rounded-2xl overflow-hidden border border-sky-500/25 bg-[#060B14]">
                {/* Embedded PDF Viewer */}
                <iframe
                  src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
                  className="w-full h-full rounded-2xl bg-slate-900"
                  title="Manasi Deore Resume PDF Viewer"
                />

                {/* Bottom Fallback Bar */}
                <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-[#0B1324]/90 backdrop-blur-md border border-sky-500/20 flex flex-wrap items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Viewing embedded PDF. You can also open the full document directly in your browser.</span>
                  <button
                    onClick={handleOpenInNewTab}
                    className="text-sky-300 hover:text-white font-medium underline flex items-center gap-1 ml-2"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 p-2 sm:p-4 text-sm text-[#94A3B8]">
                <div className="p-4 rounded-2xl bg-[#0F1A30] border border-sky-500/20">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Candidate Profile & Focus Areas</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F8FAFC]/90 leading-relaxed mb-4">
                    Software developer with practical experience in building full-stack web applications, REST API integrations, and AI workflow automations with n8n and LangChain.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span><strong>Frontend:</strong> React.js, Tailwind CSS, Vite, JavaScript</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span><strong>Backend:</strong> Node.js, Express.js, REST APIs, Python, FastAPI</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span><strong>AI & Automation:</strong> RAG, n8n, LangChain, Webhooks, Vector DB</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span><strong>Problem Solving:</strong> 100+ LeetCode problems in Java & C++</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F1A30] border border-sky-500/15">
                  <h4 className="text-sm font-semibold text-sky-300 mb-2">Education & Milestones</h4>
                  <p className="text-xs text-[#94A3B8]">
                    B.E. in Computer Engineering (2022–2026), CGPA: 8.72/10.0. Co-inventor on smart milk testing patent and author of published research paper on interactive web systems.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Notification */}
          {downloadSuccess && (
            <div className="mt-2 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Resume download initiated as <strong>Manasi_Deore_Resume.pdf</strong>!</span>
            </div>
          )}

          {/* Bottom Bar */}
          <div className="pt-3 mt-2 border-t border-sky-500/15 flex flex-wrap items-center justify-between text-xs text-[#94A3B8] gap-2">
            <span>Direct contact: <code className="text-sky-300 font-mono">{profileData.socials.email}</code></span>
            <a
              href={`mailto:${profileData.socials.email}?subject=Interview Inquiry - Manasi Deore`}
              className="text-sky-300 hover:text-white flex items-center gap-1 font-mono"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Schedule an Interview</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
