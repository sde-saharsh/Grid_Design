import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Animated counter for ratings
const AnimatedNumber = ({ target, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target);
    if (isNaN(num)) return;
    let start = 0;
    const increment = num / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

// Progress Ring SVG
const ProgressRing = ({ percentage, color, size = 60, strokeWidth = 4 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg ref={ref} width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={isInView ? { strokeDashoffset: circumference - (percentage / 100) * circumference } : {}}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
    </svg>
  );
};

const profiles = [
  {
    platform: 'LeetCode',
    username: 'SAHARSH_14',
    url: 'https://leetcode.com/u/SAHARSH_14/',
    color: '#FFA116',
    percentile: 87,
    stats: {
      rating: '1698',
      problems: '680+',
      badge: 'Top 13.47%',
      contests: '32',
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    platform: 'Codeforces',
    username: 'saharshx',
    url: 'https://codeforces.com/profile/saharshx',
    color: '#1F8ACB',
    percentile: 45,
    stats: {
      rating: '1069',
      problems: '165+',
      badge: 'Newbie',
      contests: '',
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
  {
    platform: 'CodeChef',
    username: 'sde_saharsh',
    url: 'https://www.codechef.com/users/sde_saharsh',
    color: '#5B4638',
    percentile: 70,
    stats: {
      rating: '1627',
      problems: '',
      badge: '3★ Coder',
      contests: '',
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.007 0c-.787.031-1.515.37-2.222.685a10.959 10.959 0 0 0-1.727 1.073C5.876 2.702 4.974 3.78 4.254 4.944c-.72 1.163-1.253 2.426-1.61 3.74-.358 1.314-.544 2.677-.505 4.039.019.672.07 1.345.178 2.01.107.666.274 1.32.502 1.95.229.63.518 1.235.863 1.804.345.57.742 1.108 1.19 1.596.449.489.947.93 1.488 1.308.277.194.564.374.861.535l.143.066c.044.018.087.037.131.054.09.034.179.07.27.1.177.065.358.115.539.157.363.082.731.12 1.1.116.185-.002.37-.014.553-.037.182-.023.363-.057.54-.103.176-.045.35-.102.518-.17.168-.068.332-.148.49-.238a5.476 5.476 0 0 0 .945-.67 8.687 8.687 0 0 0 1.586-2.014 13.4 13.4 0 0 0 1.348-3.148c.292-1.048.475-2.133.535-3.226.061-1.093.001-2.198-.186-3.274A12.078 12.078 0 0 0 13.25.926c-.373-.18-.76-.322-1.158-.418A4.482 4.482 0 0 0 11.007 0z" />
      </svg>
    ),
  },
  {
    platform: 'GeeksforGeeks',
    username: 'sde_saharsh',
    url: 'https://www.geeksforgeeks.org/user/sde_saharsh/',
    color: '#2F8D46',
    percentile: 60,
    stats: {
      rating: '',
      problems: '150+',
      badge: 'Campus Ambassador',
      contests: '',
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.156-.677h1.737c.078.283.207.545.383.775.31.405.753.685 1.249.786a2.756 2.756 0 0 0 1.478-.056c.394-.131.72-.378.93-.71a1.789 1.789 0 0 0 .147-1.46c-.16-.465-.516-.839-.97-1.024a3.417 3.417 0 0 0-1.31-.243H16.54l-.147-.773h1.396c.39-.004.774-.086 1.13-.243.329-.144.604-.371.792-.656a1.558 1.558 0 0 0 .198-.915 1.457 1.457 0 0 0-.478-1.023 1.87 1.87 0 0 0-1.06-.478 2.456 2.456 0 0 0-1.322.145 1.777 1.777 0 0 0-.867.78c-.146.263-.22.565-.204.87h-1.71a3.215 3.215 0 0 1 .527-1.676 3.537 3.537 0 0 1 1.547-1.248 5.108 5.108 0 0 1 2.3-.453 4.35 4.35 0 0 1 1.757.388c.535.244.985.622 1.302 1.09.312.474.464 1.017.44 1.566a2.29 2.29 0 0 1-.393 1.236 2.632 2.632 0 0 1-1.072.91v.052a2.694 2.694 0 0 1 1.312.906c.35.448.527.993.5 1.548a2.63 2.63 0 0 1-.305 1.17zM2.552 14.315c.143.28.334.532.565.745.239.22.52.393.823.515a3.692 3.692 0 0 0 2.493.181c.443-.129.83-.375 1.122-.7.266-.298.443-.66.508-1.051.06-.365.01-.74-.146-1.085-.16-.465-.516-.839-.97-1.024a3.42 3.42 0 0 0-1.31-.243H4.241l-.146-.773H5.49c.39-.004.774-.086 1.13-.243.329-.144.604-.371.792-.656a1.558 1.558 0 0 0 .198-.915 1.458 1.458 0 0 0-.478-1.023 1.87 1.87 0 0 0-1.06-.478 2.455 2.455 0 0 0-1.322.145 1.778 1.778 0 0 0-.867.78c-.146.262-.22.564-.204.87H1.968a3.216 3.216 0 0 1 .527-1.676 3.537 3.537 0 0 1 1.547-1.248 5.107 5.107 0 0 1 2.299-.453 4.35 4.35 0 0 1 1.757.388c.535.244.985.622 1.302 1.09.312.474.465 1.017.44 1.566a2.288 2.288 0 0 1-.392 1.236 2.63 2.63 0 0 1-1.073.91v.052c.542.17 1.013.49 1.312.906.35.447.527.993.5 1.548a2.624 2.624 0 0 1-.305 1.17 2.835 2.835 0 0 1-.565.744c-.24.22-.52.393-.823.515a4.507 4.507 0 0 1-3.116-.016A3.79 3.79 0 0 1 3.08 13.64a3.572 3.572 0 0 1-.155-.677h1.737c.078.283.207.545.383.775.31.405.753.685 1.248.786a2.755 2.755 0 0 0 1.478-.056c.394-.131.72-.378.93-.71a1.788 1.788 0 0 0 .147-1.46z" />
      </svg>
    ),
  },
];

const achievements = [
  { text: '1000+ DSA Problems solved across LeetCode, Codeforces, CodeChef, and GFG', icon: '🏆' },
  { text: 'Top 13.47% on LeetCode — Contest rating of 1698 over 32 rated contests', icon: '🥇' },
  { text: 'Ranked 395 globally in CodeChef Starters 227 and 734 globally in Starters 232', icon: '🌍' },
  { text: 'Winner, Walchand Imagine Cup — Annual tech competition by MLSC', icon: '🏅' },
  { text: 'GFG Campus Ambassador — Selected as GeeksforGeeks Campus Ambassador (2026)', icon: '🎓' },
  { text: 'Technical Lead, MLSC — Managed technical operations for Microsoft Learn Students\' Club at WCE', icon: '💼' },
];

const CodingProfiles = () => {
  const { isDark } = useTheme();
  return (
    <section className="py-20 px-4 md:px-10 relative overflow-hidden theme-transition" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/[0.02] to-purple-500/[0.02] rounded-full blur-[100px]" />

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-3">Competitive Programming</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Coding{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Profiles
          </span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-4" />
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          My competitive programming journey across various platforms.
        </p>
      </motion.div>

      {/* Total Problems Solved Counter */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
          <AnimatedNumber target="1000" duration={2} />+
        </p>
        <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">Total Problems Solved</p>
      </motion.div>

      {/* Profile Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative z-10">
        {profiles.map((profile, idx) => (
          <motion.a
            key={profile.platform}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{
              scale: 1.05,
              borderColor: profile.color,
              boxShadow: `0 0 40px ${profile.color}20`,
            }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.04] transition-all duration-300 block group relative overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${profile.color}08 0%, transparent 100%)`,
              }}
            />

            <div className="relative z-10">
              {/* Platform header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${profile.color}15`, color: profile.color }}
                  >
                    {profile.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{profile.platform}</h3>
                    <p className="text-xs text-gray-500">@{profile.username}</p>
                  </div>
                </div>
              </div>

              {/* Progress Ring + Rating */}
              {profile.stats.rating && (
                <div className="flex items-center gap-3 mb-3">
                  <ProgressRing percentage={profile.percentile} color={profile.color} size={50} strokeWidth={3} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Rating</p>
                    <p className="text-2xl font-bold" style={{ color: profile.color }}>
                      <AnimatedNumber target={profile.stats.rating} />
                    </p>
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  {profile.stats.problems && (
                    <div>
                      <p className="text-xs text-gray-500">Problems</p>
                      <p className="text-sm font-semibold text-white">{profile.stats.problems}</p>
                    </div>
                  )}
                  {profile.stats.badge && (
                    <div className="text-right">
                      <motion.p
                        className="text-xs font-medium px-2 py-0.5 rounded-full border"
                        whileHover={{ scale: 1.1 }}
                        style={{ borderColor: `${profile.color}40`, color: profile.color }}
                      >
                        {profile.stats.badge}
                      </motion.p>
                    </div>
                  )}
                </div>

                {profile.stats.contests && (
                  <div>
                    <p className="text-xs text-gray-500">Contests</p>
                    <p className="text-sm font-semibold text-white">{profile.stats.contests}</p>
                  </div>
                )}
              </div>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-1 text-xs text-gray-600 group-hover:text-gray-300 transition-colors">
                <span>View Profile</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Achievements Section */}
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-center mb-8">
          Achievements &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Extracurricular
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3.5 flex items-start gap-3 hover:bg-white/[0.04] transition-all duration-300"
            >
              <span className="text-lg mt-0.5">{item.icon}</span>
              <p className="text-sm text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CodingProfiles;
