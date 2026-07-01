'use client';

import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [industry, setIndustry] = useState('');
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setErrorMessage('Please verify that you are not a robot.');
      return;
    }
    if (!industry) {
      setErrorMessage('Please select an industry from the list.');
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organisation: 'Not Specified',
          phone: 'Not Specified',
          message: `Selected Industry: ${industry}\n\nEnquiry details:\n${formData.message || 'No custom message provided.'}`,
          captchaToken
        }),
      });

      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setIndustry('');
      } else {
        setErrorMessage(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setCaptchaToken(null);
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start pt-20 pb-16 px-6 relative">
        
        {/* Animated transparent heading banner */}
        <div className="text-center pt-10 pb-6 w-full max-w-4xl mx-auto z-10">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#000000] tracking-wide leading-tight animate-slide-fade-in-up">
            Thank You for Showing Your Interest
          </h1>
        </div>

        {/* Form panel container */}
        <div className="w-full max-w-5xl bg-white border border-[#000000]/10 p-6 md:p-12 shadow-lg rounded-[1px] relative z-10">
          {isSubmitted ? (
            <div className="text-center py-16 space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-[#000000]/5 border border-[#000000]/10 rounded-full flex items-center justify-center mx-auto text-[#000000] mb-4">
                <span className="text-2xl">&#10003;</span>
              </div>
              <h3 className="font-serif text-3xl font-light text-[#000000]">Thank You</h3>
              <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                We have received your request. Our team will review your enquiry and a partner will get in touch with you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 inline-flex justify-center bg-[#000000] hover:bg-[#fa0249] hover:text-white text-white font-bold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 rounded-[1px]"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              
              {/* Left Column: Industry selection */}
              <div className="flex flex-col justify-between">
                <div className="space-y-12">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-[#000000] tracking-tight leading-snug">
                      Ready to talk?
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <label htmlFor="industry" className="block font-sans text-base md:text-lg text-[#000000] font-light leading-relaxed">
                      I want to talk to your experts in:
                    </label>
                    <div className="relative border-b border-[#000000]/40 pb-2">
                      <select
                        id="industry"
                        required
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full bg-transparent border-none outline-none font-serif text-2xl font-light text-[#000000] cursor-pointer pr-8 appearance-none"
                      >
                        <option value="" disabled className="text-slate-400">Select an industry</option>
                        <option value="BFSI">BFSI</option>
                        <option value="Government & Public Sector">Government & Public Sector</option>
                        <option value="EdTech">EdTech</option>
                        <option value="Manufacturing & Specialty Chemicals">Manufacturing & Specialty Chemicals</option>
                        <option value="Consumer & D2C">Consumer & D2C</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-0 bottom-2 pointer-events-none text-slate-500">
                        <span className="text-xs">&#9662;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact form fields */}
              <div className="space-y-8">
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-light">
                  We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.
                </p>

                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-[1px] font-sans">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans rounded-[1px]"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                      Contact Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans rounded-[1px]"
                      placeholder="Your email address"
                    />
                  </div>

                  {/* Custom Message field */}
                  <div>
                    <label htmlFor="message" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                      Custom Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans resize-none rounded-[1px]"
                      placeholder="Please describe your parameters of enquiry"
                    />
                  </div>

                  {/* ReCAPTCHA */}
                  <div className="flex justify-start">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                      onChange={onCaptchaChange}
                      theme="light"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#fa0249] hover:bg-[#000000] disabled:bg-[#fa0249]/50 text-white text-xs font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 rounded-[1px] shadow-md flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <span>CONTACT US</span>
                    )}
                  </button>

                </form>
              </div>

            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
