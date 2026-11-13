import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface ContactProps {
  onOpenLinkedInModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenLinkedInModal }) => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleCopy = (type: 'email' | 'phone', text: string) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in your name, email address, and message.');
      return;
    }

    const accessKey = personal.contactFormConfig.web3FormsAccessKey;

    // If Web3Forms API key is provided, execute direct backend submission
    if (accessKey && accessKey.trim() !== '') {
      setFormStatus('submitting');
      setStatusMessage('Delivering message through Web3Forms API...');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Contact from ${formData.name}`,
            message: formData.message,
            from_name: 'Palak Pathan Portfolio Website',
          }),
        });

        const result = await response.json();
        if (result.success) {
          setFormStatus('success');
          setStatusMessage('Your message was successfully delivered directly to Palak’s inbox!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        setFormStatus('error');
        setStatusMessage('Submission error. Opening your default mail client as reliable fallback...');
        triggerMailtoFallback();
      }
    } else {
      // Direct, honest fallback using native mailto client
      triggerMailtoFallback();
      setFormStatus('success');
      setStatusMessage('Default email client triggered with your pre-filled inquiry.');
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from Portfolio - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/30 text-xs font-mono text-brand-purple">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Communication</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Get in <span className="text-gradient-purple-blue">Touch</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Open to discuss full-time roles, software developer trainee opportunities, technical interviews, and collaborative engineering initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Details & Links (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="glow-card rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
              Contact Information
            </h3>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-navy-850/80 border border-slate-800 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-semibold text-white hover:text-brand-purple transition-colors truncate"
                  title="Click to email Palak Pathan"
                >
                  {personal.email}
                </a>
                <button
                  onClick={() => handleCopy('email', personal.email)}
                  className="p-1.5 rounded-lg bg-navy-800 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              {copiedEmail && (
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Copied to clipboard!
                </span>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-navy-850/80 border border-slate-800 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Phone Number
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-blue transition-colors font-mono"
                  title="Click to call Palak Pathan"
                >
                  <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>{personal.phone}</span>
                </a>
                <button
                  onClick={() => handleCopy('phone', personal.phone)}
                  className="p-1.5 rounded-lg bg-navy-800 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              {copiedPhone && (
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Copied to clipboard!
                </span>
              )}
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-navy-850/80 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Work & Residence Location
              </span>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="font-medium">{personal.location}</span>
              </div>
            </div>

            {/* Direct Email Me Action Button */}
            <div className="pt-2">
              <a
                href={`mailto:${personal.email}?subject=Opportunity%20Inquiry%20-%20Palak%20Pathan`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-violet to-brand-blue hover:from-brand-purple hover:to-brand-cyan shadow-glow-purple transition-all active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly via Client</span>
              </a>
            </div>

            {/* Social & Professional Links */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Connected Profiles
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-800 text-slate-200 hover:text-white text-xs transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-brand-purple" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white" />
                </a>

                {personal.linkedinUrl ? (
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-800 text-slate-200 hover:text-brand-blue text-xs transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-brand-blue" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white" />
                  </a>
                ) : (
                  <button
                    onClick={onOpenLinkedInModal}
                    className="flex items-center justify-between p-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-slate-800 text-slate-200 hover:text-brand-blue text-xs transition-colors group text-left"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-brand-blue" />
                      <span>LinkedIn</span>
                    </span>
                    <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">
                      Info
                    </span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Functional Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glow-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-brand-purple" />
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below. Messages are processed cleanly with zero simulated delivery tricks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300 block">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-850 border border-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs placeholder:text-slate-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300 block">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-850 border border-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs placeholder:text-slate-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300 block">
                  Subject / Position
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Developer Trainee Interview"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-850 border border-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs placeholder:text-slate-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300 block">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding job opening, interview schedule, or project inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-850 border border-slate-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs placeholder:text-slate-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Status Alert */}
              {formStatus === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-blue hover:from-brand-purple hover:to-brand-cyan shadow-glow-purple disabled:opacity-50 transition-all active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{formStatus === 'submitting' ? 'Transmitting Message...' : 'Submit Message'}</span>
              </button>
            </form>

            {/* Honest Backend Configuration Disclosure */}
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
                <span>Form Service Architecture:</span>
              </div>
              <p className="leading-relaxed">
                By default, this form launches your native email client with pre-filled parameters. To enable direct serverless email forwarding, obtain a free access key from <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand-purple underline">Web3Forms</a> or Formspree and set <code className="text-white font-mono">web3FormsAccessKey</code> in <code className="text-white font-mono">src/config/portfolioData.ts</code>.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
