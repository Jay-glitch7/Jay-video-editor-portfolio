/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Play, X, ExternalLink, Instagram, Film, Smartphone, MessageSquare, Star, Send, Phone, User } from 'lucide-react';
import { VIDEOS, STATS, CONTACT, REVIEWS } from './constants';
import { Video } from './types';
import { LaserCursor } from './components/LaserCursor';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-12 self-start">
      <Link 
        to="/" 
        className={`px-6 py-2 rounded-full text-sm font-bold skew-x-[-15deg] transition-all flex items-center gap-2 ${
          location.pathname === '/' 
            ? 'bg-f1-red text-white shadow-[0_0_15px_rgba(225,6,0,0.4)]' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <div className="skew-x-[15deg] flex items-center gap-2">
          <Film size={16} />
          FILMS
        </div>
      </Link>
      <Link 
        to="/reels" 
        className={`px-6 py-2 rounded-full text-sm font-bold skew-x-[-15deg] transition-all flex items-center gap-2 ${
          location.pathname === '/reels' 
            ? 'bg-f1-red text-white shadow-[0_0_15px_rgba(225,6,0,0.4)]' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <div className="skew-x-[15deg] flex items-center gap-2">
          <Smartphone size={16} />
          REELS
        </div>
      </Link>
      <Link 
        to="/reviews" 
        className={`px-6 py-2 rounded-full text-sm font-bold skew-x-[-15deg] transition-all flex items-center gap-2 ${
          location.pathname === '/reviews' 
            ? 'bg-f1-red text-white shadow-[0_0_15px_rgba(225,6,0,0.4)]' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <div className="skew-x-[15deg] flex items-center gap-2">
          <MessageSquare size={16} />
          REVIEWS
        </div>
      </Link>
      <Link 
        to="/contact" 
        className={`px-6 py-2 rounded-full text-sm font-bold skew-x-[-15deg] transition-all flex items-center gap-2 ${
          location.pathname === '/contact' 
            ? 'bg-f1-red text-white shadow-[0_0_15px_rgba(225,6,0,0.4)]' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <div className="skew-x-[15deg] flex items-center gap-2">
          <Mail size={16} />
          CONTACT
        </div>
      </Link>
    </nav>
  );
}

function VideoGrid({ videos, onVideoSelect }: { videos: Video[], onVideoSelect: (v: Video) => void }) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, zIndex: 10 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            scale: { type: "spring", stiffness: 400, damping: 17 }
          }}
          className="glass-card group cursor-pointer flex flex-col transition-colors duration-300"
          onClick={() => onVideoSelect(video)}
        >
            <div className={`relative ${video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? 'aspect-video' : 'aspect-[9/16]'} bg-[#1a1a1a] flex items-center justify-center overflow-hidden`}>
            {/* Thumbnail Image */}
            {video.thumbnailUrl && (
              <img 
                src={video.thumbnailUrl} 
                alt={video.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            )}
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-red-900/20 transition-colors" />
            
            {/* Speed Streaks (Boost Animation) */}
            <div className="speed-streak top-[25%] left-0" style={{ animationDelay: '0s' }} />
            <div className="speed-streak top-[50%] left-0" style={{ animationDelay: '0.1s', height: '3px' }} />
            <div className="speed-streak top-[75%] left-0" style={{ animationDelay: '0.2s' }} />
            
            {/* Telemetry Corner Accents */}
            <div className="telemetry-dot top-2 right-2" />
            <div className="telemetry-dot bottom-2 left-2" />

            <div className="relative z-10 w-14 h-14 bg-f1-red/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/10">
              <div className="play-icon group-hover:rotate-[360deg] transition-transform duration-700" />
            </div>
            
            {/* Tag */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-f1-red text-white text-[10px] font-black uppercase tracking-widest skew-x-[-15deg]">
                <span className="inline-block skew-x-[15deg]">{video.tag}</span>
              </span>
            </div>
          </div>

          <div className="p-6 border-b-2 border-transparent group-hover:border-f1-red transition-all">
            <h3 className="text-xl font-black italic uppercase tracking-tighter text-gray-100 mb-2 group-hover:text-f1-red transition-colors">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 font-mono uppercase text-[10px] tracking-wider">
              {video.description}
            </p>
          </div>
        </motion.div>
      ))}
    </main>
  );
}

function ReviewGrid() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
      {REVIEWS.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            scale: { type: "spring", stiffness: 400, damping: 17 }
          }}
          className="glass-card p-8 flex flex-col gap-6"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < review.rating ? "text-f1-red fill-f1-red" : "text-white/10"} 
              />
            ))}
          </div>
          
          <p className="text-gray-300 italic leading-relaxed font-mono text-sm">
            "{review.content}"
          </p>
          
          <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
            <div className="w-12 h-12 rounded-none border border-f1-red/30 p-0.5 skew-x-[-10deg] overflow-hidden bg-f1-red/10">
              <img 
                src={review.avatarUrl} 
                alt={review.name} 
                className="w-full h-full object-cover skew-x-[10deg] scale-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-white font-black italic uppercase tracking-tighter leading-tight">
                {review.name}
              </h4>
              <p className="text-[10px] text-f1-red uppercase font-black tracking-widest">
                {review.role}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </main>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a server.
    // We'll simulate a mailto for the "message by mail" requirement
    const mailtoContent = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=New Inquiry from ${formData.name}&body=${mailtoContent}`;
  };

  return (
    <main className="max-w-xl mx-auto w-full glass-card p-8 md:p-12 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-f1-red/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-f1-red/10 blur-3xl -z-10" />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-f1-red flex items-center justify-center skew-x-[-10deg]">
          <Mail className="text-white skew-x-[10deg]" size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Get in <span className="text-f1-red">Touch</span>
          </h2>
          <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">
            Telemetry // Contact // Support
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-f1-red block ml-1">
            Name // Driver ID
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-f1-red transition-colors" size={18} />
            <input 
              required
              type="text" 
              placeholder="Enter your name"
              className="w-full bg-white/5 border border-white/10 rounded-none px-12 py-4 text-white font-mono focus:outline-none focus:border-f1-red transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-f1-red block ml-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-f1-red transition-colors" size={18} />
              <input 
                required
                type="email" 
                placeholder="driver@track.com"
                className="w-full bg-white/5 border border-white/10 rounded-none px-12 py-4 text-white font-mono focus:outline-none focus:border-f1-red transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black tracking-widest text-f1-red block ml-1">
              Phone Number
            </label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-f1-red transition-colors" size={18} />
              <input 
                required
                type="tel" 
                placeholder="+1 (555) 000-0000"
                className="w-full bg-white/5 border border-white/10 rounded-none px-12 py-4 text-white font-mono focus:outline-none focus:border-f1-red transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-black tracking-widest text-f1-red block ml-1">
            Radio Message // Details
          </label>
          <textarea 
            required
            placeholder="Describe your vision or inquiry..."
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 text-white font-mono focus:outline-none focus:border-f1-red transition-all resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-f1-red py-6 text-white font-black italic uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:shadow-[0_0_40px_rgba(225,6,0,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          Send Transmission
          <Send size={20} />
        </button>

        <p className="text-center text-[10px] text-gray-500 uppercase font-black tracking-widest pt-4">
          For urgent support message directly to <br />
          <a href={`mailto:${CONTACT.email}`} className="text-f1-red hover:underline">{CONTACT.email}</a>
        </p>
      </form>
    </main>
  );
}

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const youtubeVideos = VIDEOS.filter(v => v.videoUrl.includes('youtube.com') || v.videoUrl.includes('youtu.be'));
  const instagramVideos = VIDEOS.filter(v => v.videoUrl.includes('instagram.com'));

  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-screen flex flex-col">
        <LaserCursor />
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="branding"
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-f1-red font-black italic mb-2">
              {CONTACT.tagline}
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none italic uppercase">
              {CONTACT.name.split(' ')[0]}<span className="text-f1-red">.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass px-8 py-5 rounded-none text-left md:text-right border-l-4 border-l-f1-red"
          >
            <span className="block text-[10px] uppercase tracking-widest text-f1-red font-black mb-1">
              Data // Inquiries
            </span>
            <a 
              href={`mailto:${CONTACT.email}`} 
              className="text-lg md:text-xl font-mono text-white hover:text-f1-red transition-colors flex items-center gap-2 md:justify-end"
            >
              {CONTACT.email}
              <Mail size={18} />
            </a>
          </motion.div>
        </header>

        <Navbar />

        <Routes>
          <Route path="/" element={<VideoGrid videos={youtubeVideos} onVideoSelect={setSelectedVideo} />} />
          <Route path="/reels" element={<VideoGrid videos={instagramVideos} onVideoSelect={setSelectedVideo} />} />
          <Route path="/reviews" element={<ReviewGrid />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer Stats */}
        <footer className="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-12 md:gap-20">
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="stat-item"
            >
              <div className="text-4xl font-black italic text-white mb-1 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-f1-red font-black">
                {stat.label}
              </div>
            </motion.div>
          ))}
          
          {/* Social Links */}
          <div className="ml-auto flex items-center gap-6">
            <a href="https://www.instagram.com/notog.jay" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-f1-red transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </footer>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`relative w-full glass rounded-3xl overflow-hidden shadow-2xl ${
                  selectedVideo.videoUrl.includes('instagram.com') 
                    ? 'max-w-md aspect-[9/16]' 
                    : 'max-w-5xl aspect-video'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a]">
                  {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
                    <iframe
                      className="w-full h-full border-4 border-f1-red shadow-[0_0_30px_rgba(225,6,0,0.3)]"
                      src={`https://www.youtube.com/embed/${
                        selectedVideo.videoUrl.includes('v=') 
                          ? selectedVideo.videoUrl.split('v=')[1].split('&')[0] 
                          : selectedVideo.videoUrl.split('/').pop()
                      }?autoplay=1`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : selectedVideo.videoUrl.includes('instagram.com') ? (
                    <div className="w-full h-full flex flex-col bg-black border-4 border-f1-red shadow-[0_0_30px_rgba(225,6,0,0.3)]">
                      <iframe
                        className="flex-grow w-full h-full"
                        src={`https://www.instagram.com/p/${
                          selectedVideo.videoUrl.match(/(?:reel|p)\/([^/?#&]+)/)?.[1]
                        }/embed`}
                        title={selectedVideo.title}
                        allowtransparency="true"
                        frameBorder="0"
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                      <div className="p-4 bg-black/50 text-center border-t border-white/10">
                        <a 
                          href={selectedVideo.videoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-f1-red hover:text-white uppercase font-black tracking-widest flex items-center justify-center gap-2"
                        >
                          View Telemetry on Instagram <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 border-2 border-f1-red bg-black/50">
                      <Play size={64} className="text-f1-red mb-4 opacity-50 mx-auto" />
                      <p className="text-gray-400 mb-6 px-10 text-center font-mono uppercase text-xs">
                        External Signal Required: <br/>
                        <span className="text-f1-red break-all">{selectedVideo.videoUrl}</span>
                      </p>
                      <a 
                        href={selectedVideo.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-f1-red text-white font-black uppercase tracking-widest hover:bg-white hover:text-f1-red transition-all shadow-[0_0_20px_rgba(225,6,0,0.4)]"
                      >
                        Launch Sequence
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}
