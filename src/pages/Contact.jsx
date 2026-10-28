import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Send, Phone, MessageSquare, Mail, MapPin, CheckCircle, 
  Sparkles, Calendar, Clock, Star, ShieldCheck, Heart 
} from 'lucide-react';
import SEOBadge from '../components/SEOBadge';

export default function Contact() {
  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'wedding',
    shootLocation: 'Dehradun',
    eventDate: '',
    budget: '₹50,000 - ₹1,00,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pre-fill from query params if redirected from Estimator or Services
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    const estimateParam = params.get('estimate');

    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
    if (estimateParam) {
      setFormData(prev => ({
        ...prev,
        message: `Estimated Project Quote: ₹${estimateParam}. `
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#fbbf24', '#ffffff', '#10b981']
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  // WhatsApp Pre-filled link generator
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Rohit! My name is ${formData.name || 'a client'}.\n` +
      `I would like to hire you for: ${formData.service}\n` +
      `Location: ${formData.shootLocation}\n` +
      `Event Date: ${formData.eventDate || 'TBD'}\n` +
      `Budget Range: ${formData.budget}\n` +
      `Note: ${formData.message || 'Looking forward to hearing from you!'}`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex justify-center">
            <SEOBadge />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            Hire Rohit Upreti <span className="text-gold-gradient">• Book a Shoot</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Ready to secure your wedding dates, schedule a 4K commercial video shoot, or order studio photo/video color grading? Fill out the inquiry form below for a rapid response within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Uttarakhand Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-display text-white pb-3 border-b border-white/10 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Direct Studio Contact</span>
              </h3>

              {/* Contact item: Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp</p>
                  <a
                    href="tel:+919876543210"
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-[11px] text-emerald-400 font-mono mt-0.5">● Available 8:00 AM - 10:00 PM IST</p>
                </div>
              </div>

              {/* Contact item: Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">Official Email</p>
                  <a
                    href="mailto:contact@rohitupreti.com"
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    contact@rohitupreti.com
                  </a>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">Replies typically in 2 hours</p>
                </div>
              </div>

              {/* Contact item: Studio Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase">Studio Location</p>
                  <p className="text-sm font-bold text-white">
                    Rajpur Road, Near Jakhan
                  </p>
                  <p className="text-xs text-slate-400">
                    Dehradun, Uttarakhand - 248001, India
                  </p>
                </div>
              </div>

              {/* Quick WhatsApp Action Banner */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Rohit!%20I%20am%20looking%20to%20hire%20you%20for%20a%20shoot%20in%20Uttarakhand."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>INSTANT CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Uttarakhand Service Guarantee Box */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3 text-xs text-slate-300">
              <h4 className="font-bold text-white font-mono uppercase tracking-wider flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>The Rohit Upreti Guarantee</span>
              </h4>
              <ul className="space-y-2 font-sans">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Locked-in dates with formal signed contract</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dual camera-card RAW backups immediately after shoot</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Free cloud gallery hosting for 1 full year</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Hire Me Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative">
              
              {submitted ? (
                /* Submission Confirmation View */
                <div className="py-12 text-center space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="text-amber-400 font-bold">{formData.name}</span>. Rohit Upreti has received your booking details and will review his calendar shortly.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-dark-800/90 p-4 rounded-xl border border-white/10 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-slate-300">
                    <p><span className="text-slate-500">Service:</span> {formData.service}</p>
                    <p><span className="text-slate-500">Location:</span> {formData.shootLocation}</p>
                    <p><span className="text-slate-500">Target Date:</span> {formData.eventDate || 'Pending Discussion'}</p>
                    <p><span className="text-slate-500">Budget Range:</span> {formData.budget}</p>
                  </div>

                  {/* WhatsApp Push Action */}
                  <div className="pt-2 space-y-3">
                    <p className="text-xs text-slate-400">
                      Want an immediate response? Forward your details directly to Rohit's WhatsApp:
                    </p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-500/25 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>FORWARD INQUIRY ON WHATSAPP</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-slate-400 hover:text-white underline"
                    >
                      Fill another request
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Hire Me Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-black font-display text-white">
                      Hire Me / Booking Application
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Please provide details about your wedding, shoot, or editing requirements.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 XXXXX"
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                      >
                        <option value="Destination Wedding Photography & Films">Destination Wedding (Photo + Cinema)</option>
                        <option value="4K Video Shooting & Direction">4K Video Shooting & Direction</option>
                        <option value="Pre-Wedding Shoot & Film">Pre-Wedding Shoot & Film</option>
                        <option value="Commercial & Resort Ad Film">Commercial & Resort Ad Shoot</option>
                        <option value="Photo Retouching & Color Grading">Photo Retouching / Color Grading</option>
                        <option value="Video Editing & Colorist Suite">Video Editing & Colorist Studio</option>
                        <option value="5.1K Drone Aerial Cinematography">5.1K Drone Aerial Cinematography</option>
                      </select>
                    </div>
                  </div>

                  {/* Shoot Location & Event Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                        Shoot Location *
                      </label>
                      <select
                        name="shootLocation"
                        value={formData.shootLocation}
                        onChange={handleChange}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                      >
                        <option value="Dehradun">Dehradun, Uttarakhand</option>
                        <option value="Rishikesh">Rishikesh, Uttarakhand</option>
                        <option value="Mussoorie">Mussoorie, Uttarakhand</option>
                        <option value="Nainital / Bhimtal">Nainital & Bhimtal, Uttarakhand</option>
                        <option value="Jim Corbett">Jim Corbett, Uttarakhand</option>
                        <option value="Haldwani / Almora">Haldwani & Almora, Uttarakhand</option>
                        <option value="Haridwar">Haridwar, Uttarakhand</option>
                        <option value="High Himalayas (Chopta/Auli)">Chopta / Auli, Uttarakhand</option>
                        <option value="Outside Uttarakhand (Pan-India)">Outside Uttarakhand / All India</option>
                        <option value="Remote Cloud Editing Only">Remote Cloud Editing Only (No shoot)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                        Target Date of Shoot
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                      Estimated Budget Range (INR)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['₹25K - ₹50K', '₹50K - ₹1 Lakh', '₹1 - ₹2.5 Lakhs', '₹2.5 Lakhs+'].map((range) => {
                        const isSelected = formData.budget === range;
                        return (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                            className={`py-2 px-3 rounded-lg text-xs font-mono transition-all border ${
                              isSelected
                                ? 'bg-amber-500 text-black border-amber-400 font-bold'
                                : 'bg-dark-800 text-slate-300 border-white/10 hover:border-amber-400/40'
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-mono text-slate-300 uppercase block mb-1.5 font-bold">
                      Project Vision / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Rohit about your venue, number of guests, key moments, or reference film styles..."
                      className="w-full bg-dark-800 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-amber-400 font-sans"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black font-black font-mono text-sm py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>TRANSMITTING INQUIRY...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-black" />
                        <span>SUBMIT HIRE ME APPLICATION</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-slate-400">
                    🔒 No spam. Your phone and email remain 100% confidential.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

