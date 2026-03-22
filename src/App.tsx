import { motion } from "motion/react";
import { Play, Film, Video, Scissors, Palette, Volume2, Mail, Github, Twitter, Linkedin, Instagram, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          Tejas<span className="text-brand-accent">.</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {['Home', 'Collaborations', 'Portfolio'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-brand-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-gradient">Tejas</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-brand-accent mb-0">
            Professional Video Editor
          </h2>
          
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedCollaborations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const collaborators = [
    {
      name: "Keerti Purswani",
      url: "https://www.youtube.com/@KeertiPurswani",
      img: "https://www.tantrafiesta.in/assets/Keerti_Purswani-KgnrU3lK.webp"
    },
    {
      name: "G2M Nation",
      url: "https://www.youtube.com/@G2M_Nation",
     img: "https://yt3.googleusercontent.com/viA9Th3hq3R44uPhs-eDh7vOaOTWk6Bt6Ordme81_vVrnyMNNqsJyvkPJmhv2q0T0HgKZDEZ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Ishan Sharma",
      url: "https://www.youtube.com/@IshanSharma7390",
      img: "https://yt3.googleusercontent.com/XfVYXUxqtn3KYNa47anz9Uu7wC7n2KnxMJuEA2VW4qNdTQ0HqfUfV0oRL_7CbHw5Fbw1dcCA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Shrutika Kapoor",
      url: "https://www.youtube.com/@shrutikapoor08",
      img: "https://yt3.googleusercontent.com/2LAtIja8L95vJ8BOMVpqFDbbDfH7SSKXKnV9w2NmeZMltS9ahmlmh7TiR9pL-L8U5-37oLLGRw=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Lyno Furo",
      url: "https://www.youtube.com/@lynofuro",
      img: "https://pbs.twimg.com/profile_images/1779098313905876992/9CBBZnJa_400x400.jpg"
    },
    {
      name: "theMVP",
      url: "https://www.youtube.com/@themvp_in",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZTP1x0YBKm5l7Nwh9TKuOe1gdai3DO-qgw&s"
    },
    {
      name: "CodeWithMrunmai",
      url: "https://www.youtube.com/@CodeWithMrunmai",
      img: "https://yt3.ggpht.com/BCrXzRjFdYy4TF9bB2JjuxcSsO0qb6rj9UGjLUDX3f7cN9SSgL7Ihg3o6iym2LobnTYFdDbD7g=s800-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "The Outlier Podcast",
      url: "https://www.youtube.com/@TheOutlierPodcastHQ",
      img: "https://yt3.ggpht.com/GvwGBREMiExHOWxy_VhMrvGb5ppdnMY0nl9u6yAAV_pGx4snUV4Ps26pttWlCjm0DNQiV0rp=s800-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Amit-Educosys",
      url: "https://www.youtube.com/@Amit-Educosys",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFO4xMmhP5cTQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693072790385?e=2147483647&v=beta&t=8mhxTtX-YXXl2v2EIPjcU83lZKtHu4hbzCH-bwYKaxY"
    },
    {
      name: "Niraj Duggar",
      url: "https://www.youtube.com/@dugarniraj",
      img: "https://yt3.googleusercontent.com/OUk-9ZgW1ggr9Apl5odBt7nlhTu9e3vzDoL2XMIUZjx8yGhfqzi7bSHGKKlNoxKU5OHgaHew4g=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "The Game Dev Guide",
      url: "https://www.youtube.com/@thegamedevguide",
      img: "https://yt3.ggpht.com/cGm8PMrz0TuVU-G-MJ6pNoZ592GmdQxLHmAoS8-jIMEgL68xLChLx5A6b6JlLIL55FTeop2k=s800-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Dealfixkaro",
      url: "https://www.youtube.com/@Dealfixkaro",
      img: "https://yt3.googleusercontent.com/ytc/AIdro_mt5WXkM19vdzIg4LrP2pAIBZgSjwCNHr-OedTdDelXrA=s900-c-k-c0x00ffffff-no-rj"
    }
  ];

  return (
    <section id="collaborations" className="pt-4 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-6 text-center">Trusted By Top Creators</h2>
        
        <div className="relative group px-4">
          {/* Manual Controls */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-brand-bg transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-brand-bg transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollRef}
            onMouseDown={(e) => {
              const el = scrollRef.current;
              if (!el) return;
              el.style.scrollBehavior = 'auto';
              el.style.scrollSnapType = 'none';
              const startX = e.pageX - el.offsetLeft;
              const scrollLeft = el.scrollLeft;
              const onMouseMove = (moveEvent: MouseEvent) => {
                const x = moveEvent.pageX - el.offsetLeft;
                const walk = (x - startX) * 1.5;
                el.scrollLeft = scrollLeft - walk;
              };
              const onMouseUp = () => {
                el.style.scrollBehavior = 'smooth';
                el.style.scrollSnapType = '';
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
              };
              window.addEventListener('mousemove', onMouseMove);
              window.addEventListener('mouseup', onMouseUp);
            }}
            className="flex overflow-x-auto gap-12 pb-8 scrollbar-hide no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {collaborators.map((collab, i) => (
              <motion.a 
                key={i}
                href={collab.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 flex flex-col items-center group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-brand-accent/30 p-2 group-hover:border-brand-accent transition-colors">
                  <img 
                    src={collab.img} 
                    alt={collab.name}
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="mt-6 text-xl font-bold text-white group-hover:text-brand-accent transition-colors text-center">{collab.name}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Gradient Overlays for Slider Feel */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

interface VideoSliderProps {
  title: string;
  projects: any[];
  variant?: 'short' | 'long';
}

const VideoSlider = ({ title, projects, variant = 'long' }: VideoSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-8 h-[2px] bg-brand-accent"></span>
          {title}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-bg transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-bg transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative group">
        <div 
          ref={scrollRef}
          onMouseDown={(e) => {
            const el = scrollRef.current;
            if (!el) return;
            el.style.scrollBehavior = 'auto';
            el.style.scrollSnapType = 'none';
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMouseMove = (moveEvent: MouseEvent) => {
              const x = moveEvent.pageX - el.offsetLeft;
              const walk = (x - startX) * 1.5;
              el.scrollLeft = scrollLeft - walk;
            };
            const onMouseUp = () => {
              el.style.scrollBehavior = 'smooth';
              el.style.scrollSnapType = '';
              window.removeEventListener('mousemove', onMouseMove);
              window.removeEventListener('mouseup', onMouseUp);
            };
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
          }}
          className="flex overflow-x-auto gap-6 pb-4 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
        >
          {projects.map((p) => (
            <motion.a 
              key={p.id}
              href={p.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className={`flex-shrink-0 group relative rounded-2xl overflow-hidden cursor-pointer ${
                variant === 'short' 
                  ? 'w-[200px] md:w-[280px] aspect-[9/16]' 
                  : 'w-[300px] md:w-[450px] aspect-video'
              }`}
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-6 ${(!p.title && !p.category) ? 'items-center justify-center' : 'justify-end'}`}>
                {p.category && <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{p.category}</span>}
                {p.title && <h4 className="text-lg font-bold text-white mb-3">{p.title}</h4>}
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Video</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    { 
      id: 1, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/bQIPwkSfGZM/maxresdefault.jpg',
      url: 'https://youtu.be/bQIPwkSfGZM?si=0Xc0fhLw3VOQQeHr'
    },
    { 
      id: 9, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/er_Wpxyl4v4/maxresdefault.jpg',
      url: 'https://youtu.be/er_Wpxyl4v4?si=XjZxsrO9DRT1w1Cs'
    },
    { 
      id: 10, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/oqxHM7xOEYE/maxresdefault.jpg',
      url: 'https://youtu.be/oqxHM7xOEYE?si=Q5kLTYaETDRcdbFS'
    },
    { 
      id: 11, 
      type: 'long', 
       img: 'https://img.youtube.com/vi/AZ9i3eoyrnE/maxresdefault.jpg',
      url: 'https://youtu.be/AZ9i3eoyrnE?si=8O1LgTYL8g5tPPJV'
    },
    { 
      id: 12, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/KuKKOR_k_UM/maxresdefault.jpg',
      url: 'https://youtu.be/KuKKOR_k_UM?si=tD-l3usgK03T1ft5'
    },
    { 
      id: 13, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/zJJ1CGpQU4c/maxresdefault.jpg',
      url: 'https://youtu.be/zJJ1CGpQU4c?si=gCjCEZfYUq0pcYvC'
    },
    { 
      id: 14, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/1B2AtDtfWdw/maxresdefault.jpg',
      url: 'https://youtu.be/1B2AtDtfWdw?si=brJ2T9N6kSctYujQ'
    },
    { 
      id: 15, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/beLy6sLO_hU/maxresdefault.jpg',
      url: 'https://youtu.be/beLy6sLO_hU?si=4If7UXe3ygbHNUsp'
    },
    { 
      id: 16, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/1IAy3DtXr-4/maxresdefault.jpg',
      url: 'https://youtu.be/1IAy3DtXr-4?si=N3KEaGGV2HwSHgCN'
    },
    { 
      id: 17, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/d_nOkdBAcpM/maxresdefault.jpg',
      url: 'https://youtu.be/d_nOkdBAcpM?si=9_z-YPRK3-g_fH2v'
    },
    { 
      id: 18, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/DTzVS1yd-3k/maxresdefault.jpg',
      url: 'https://youtu.be/DTzVS1yd-3k?si=ZSn6cPzzZQ5r-0_q'
    },
    { 
      id: 19, 
      type: 'long', 
      img: 'https://img.youtube.com/vi/57tLrcsdi0A/maxresdefault.jpg',
      url: 'https://youtu.be/57tLrcsdi0A?si=Ja0SLyx9JXXQTiTW'
    },
    { 
      id: 20, 
      type: 'short', 
      title: 'Urban Cinematic Reel', 
      category: 'Instagram Reel', 
      img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop',
      url: 'https://www.instagram.com/reel/DV8g6eVEnMS/?hl=en'
    },
    { 
      id: 21, 
      type: 'short', 
      title: 'Cinematic Lifestyle Reel', 
      category: 'Instagram Reel', 
      img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
      url: 'https://www.instagram.com/reel/DJ9H3_MPxI_/?hl=en'
    },
    { 
      id: 22, 
      type: 'short', 
      title: 'Aesthetic Travel Reel', 
      category: 'Instagram Reel', 
      img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop',
      url: 'https://www.instagram.com/reel/DVx2oGbjEdW/'
    },
    { 
      id: 23, 
      type: 'short', 
      title: 'Creative Showcase Post', 
      category: 'Instagram Post', 
      img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop',
      url: 'https://www.instagram.com/p/DQ-746WFTaV/'
    },
    { 
      id: 24, 
      type: 'short', 
      title: 'Visual Storytelling Post', 
      category: 'Instagram Post', 
      img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
      url: 'https://www.instagram.com/p/DLZMegVJm2o/'
    },
    { 
      id: 25, 
      type: 'short', 
      title: 'Cinematic YouTube Short', 
      category: 'YouTube Short', 
      img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop',
      url: 'https://youtube.com/shorts/DBnF5-YQA5c?si=fpZN2X9666rQwWas'
    },
    { 
      id: 26, 
      type: 'short', 
      title: 'Creative YouTube Short', 
      category: 'YouTube Short', 
      img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop', 
      url: 'https://youtube.com/shorts/S2KiRqVbiXk?si=J7XCsQfB_0g8UeK_' 
    }
  ];

  const longForm = projects.filter(p => p.type === 'long');
  const shortForm = projects.filter(p => p.type === 'short');

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold">Featured Works</h3>
        </div>

        <VideoSlider title="Long Form Videos" projects={longForm} variant="long" />
        <VideoSlider title="Short Form Videos" projects={shortForm} variant="short" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            I am a professional video editor with over 4 years of experience, having worked with many creators in both freelance and full-time roles. I have helped generate millions of views through high-quality content editing.
            <br /><br />
            I specialize in both long-form and short-form videos, as well as creating engaging thumbnails that boost click-through rates. My focus is on delivering content that not only looks great but also performs well.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">© 2026 Tejas. All rights reserved.</p>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-2 text-gray-400 hover:text-brand-accent transition-colors">
            <Mail className="w-4 h-4" />
            <a href="mailto:jaintejas6304@gmail.com" className="text-sm">jaintejas6304@gmail.com</a>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/tejas-jain-419076299/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ansh_jain.gg/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollaborations />
      <Portfolio />
      <Footer />
    </div>
  );
}
