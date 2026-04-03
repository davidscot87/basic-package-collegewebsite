import { useState, useEffect } from 'react';
import { Trophy, Medal, Star, Award, GraduationCap, TrendingUp } from 'lucide-react';

interface AchievementsPageProps {
  setCurrentPage: (page: string) => void;
}

export function AchievementsPage({ setCurrentPage }: AchievementsPageProps) {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toppers = [
    {
      name: 'Priya Sharma',
      batch: '2024',
      course: 'B.Sc Physics',
      percentage: '98.5%',
      rank: 'University Gold Medalist',
      achievement: 'Chancellor\'s Award for Academic Excellence',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
    },
    {
      name: 'Rahul Verma',
      batch: '2024',
      course: 'BCA',
      percentage: '97.8%',
      rank: '2nd in University',
      achievement: 'Best Final Year Project Award',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'
    },
    {
      name: 'Ananya Singh',
      batch: '2024',
      course: 'B.Com Honours',
      percentage: '96.9%',
      rank: '3rd in University',
      achievement: 'Commerce Excellence Award',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
    },
    {
      name: 'Vikram Patel',
      batch: '2023',
      course: 'M.Sc Chemistry',
      percentage: '98.2%',
      rank: 'University Topper',
      achievement: 'Best Research Publication Award',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
    },
    {
      name: 'Sneha Reddy',
      batch: '2023',
      course: 'BBA',
      percentage: '95.7%',
      rank: 'College Topper',
      achievement: 'Young Entrepreneur Award',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80'
    },
    {
      name: 'Arjun Kumar',
      batch: '2023',
      course: 'B.A English',
      percentage: '94.5%',
      rank: 'College Topper',
      achievement: 'Best Literary Contribution Award',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&q=80'
    },
  ];

  const institutionalAchievements = [
    {
      year: '2024',
      title: 'Best College Award',
      organization: 'State Higher Education Council',
      description: 'Recognized as the leading institution in the state for academic excellence and holistic education.'
    },
    {
      year: '2023',
      title: 'NAAC A+ Accreditation',
      organization: 'National Assessment and Accreditation Council',
      description: 'Awarded the highest accreditation grade for our commitment to quality education and institutional standards.'
    },
    {
      year: '2023',
      title: 'Green Campus Certification',
      organization: 'Ministry of Environment',
      description: 'Certified for sustainable practices, eco-friendly initiatives, and environmental responsibility.'
    },
    {
      year: '2022',
      title: 'Excellence in Digital Education',
      organization: 'National Education Technology Forum',
      description: 'Recognized for innovative implementation of digital learning solutions and smart classroom technology.'
    },
    {
      year: '2022',
      title: 'Inter-University Sports Championship',
      organization: 'University Sports Federation',
      description: 'Overall champions in the regional inter-university sports competition.'
    },
    {
      year: '2021',
      title: 'Research Excellence Award',
      organization: 'National Research Council',
      description: 'Honored for outstanding contributions to academic research and scholarly publications.'
    },
  ];

  const notableAlumni = [
    {
      name: 'Dr. Meera Krishnan',
      batch: '1995',
      role: 'Chief Scientific Officer, NASA',
      achievement: 'Leading space research initiatives',
      image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&q=80'
    },
    {
      name: 'Rajesh Malhotra',
      batch: '2000',
      role: 'CEO, Fortune 500 Technology Company',
      achievement: 'Pioneer in AI-driven enterprise solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    {
      name: 'Dr. Sunita Rao',
      batch: '2005',
      role: 'Award-winning Author & Professor',
      achievement: 'Booker Prize nominee',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80'
    },
    {
      name: 'Amit Sharma',
      batch: '2008',
      role: 'Olympic Medalist - Athletics',
      achievement: 'National sports icon',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80'
    },
  ];

  const records = [
    { value: '15', label: 'University Toppers', icon: Trophy, color: 'bg-[#c9a962]' },
    { value: '150+', label: 'Awards & Honors', icon: Medal, color: 'bg-[#0c2340]' },
    { value: '95%', label: 'Placement Rate', icon: TrendingUp, color: 'bg-[#8b7355]' },
    { value: '500+', label: 'Research Papers', icon: Star, color: 'bg-[#0c2340]' },
  ];

  return (
    <div className="bg-[#fafaf8]">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1920&q=75" 
            alt="Achievements and Recognition"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340]/95 via-[#0c2340]/85 to-[#0c2340]/70" />
        </div>
        <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/20 border border-[#c9a962]/30 rounded-full text-[#c9a962] text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              Our Pride
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight animate-slide-up">
              Achievements & Recognition
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-up delay-100">
              Celebrating excellence—our students and institution continue to set new benchmarks 
              in academic, research, and extracurricular achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {records.map((record, index) => (
              <div 
                key={index}
                className="card p-8 text-center hover-lift"
              >
                <div className={`w-16 h-16 mx-auto ${record.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <record.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-serif font-semibold text-[#0c2340] mb-2">{record.value}</div>
                <div className="text-[#8b7355] text-sm font-medium">{record.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Toppers */}
      <section id="toppers" data-animate className="py-24 bg-[#fafaf8]">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible['toppers'] ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="inline-block text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4">
              Academic Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#0c2340] mb-6">
              Our Distinguished Toppers
            </h2>
            <div className="w-16 h-1 bg-[#c9a962] rounded mx-auto mb-6" />
            <p className="text-gray-600 text-lg">
              Students who have achieved remarkable academic success and brought honor to our institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <div 
                key={index}
                className={`card overflow-hidden hover-lift ${isVisible['toppers'] ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0c2340] to-[#1a3a5c]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={topper.image} 
                      alt={topper.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-[#c9a962] shadow-xl"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#c9a962] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {topper.percentage}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#0c2340] text-white text-xs font-medium rounded-full -mt-10 mb-4 relative z-10">
                    <Trophy className="w-3 h-3" />
                    {topper.rank}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#0c2340]">{topper.name}</h3>
                  <p className="text-[#c9a962] font-medium">{topper.course}</p>
                  <p className="text-gray-500 text-sm mb-4">Class of {topper.batch}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-[#8b7355] text-sm">
                      <Award className="w-4 h-4" />
                      {topper.achievement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Achievements */}
      <section id="institutional" data-animate className="py-24 bg-[#0c2340]">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible['institutional'] ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="inline-block text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4">
              Institutional Glory
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              College Achievements
            </h2>
            <div className="w-16 h-1 bg-[#c9a962] rounded mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutionalAchievements.map((achievement, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 group ${isVisible['institutional'] ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#c9a962] rounded-xl flex items-center justify-center shrink-0">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-[#c9a962] text-sm font-medium">{achievement.year}</span>
                    <h3 className="text-xl font-serif font-semibold text-white mb-1">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{achievement.organization}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section id="alumni" data-animate className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible['alumni'] ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="inline-block text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4">
              Our Pride
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#0c2340] mb-6">
              Distinguished Alumni
            </h2>
            <div className="w-16 h-1 bg-[#c9a962] rounded mx-auto mb-6" />
            <p className="text-gray-600 text-lg">
              Graduates who have achieved remarkable success and continue to inspire current students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {notableAlumni.map((alumni, index) => (
              <div 
                key={index}
                className={`text-center group ${isVisible['alumni'] ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name}
                    className="w-full h-full rounded-full object-cover border-4 border-[#c9a962] shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0c2340] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    Class of {alumni.batch}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#0c2340]">{alumni.name}</h3>
                <p className="text-[#c9a962] font-medium text-sm mb-2">{alumni.role}</p>
                <p className="text-gray-500 text-sm">{alumni.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Records */}
      <section id="milestones" data-animate className="py-24 bg-[#fafaf8]">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible['milestones'] ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="inline-block text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4">
              Hall of Records
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#0c2340] mb-6">
              Historic Milestones
            </h2>
            <div className="w-16 h-1 bg-[#c9a962] rounded mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { year: '2024', record: 'Three students ranked in University Top 5 - Unprecedented achievement' },
              { year: '2023', record: '100% pass result across all postgraduate programs' },
              { year: '2022', record: 'Record 25 research papers published in international journals' },
              { year: '2021', record: 'First institution in the region to achieve Green Campus Certification' },
              { year: '2020', record: 'Highest placement package of ₹28 LPA secured by Computer Science graduate' },
            ].map((item, index) => (
              <div 
                key={index}
                className={`card flex items-center gap-6 p-6 hover-lift ${isVisible['milestones'] ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="w-20 h-20 bg-[#0c2340] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-[#c9a962] font-serif font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <Star className="w-5 h-5 text-[#c9a962] fill-[#c9a962] shrink-0" />
                  <p className="text-[#0c2340] font-medium">{item.record}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#c9a962] to-[#8b7355]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-semibold text-white mb-6">
            Write Your Own Success Story
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Join St. Augustine's College and become part of our legacy of excellence.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-10 py-4 bg-[#0c2340] text-white rounded-lg font-medium hover:bg-[#0a1c30] transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
          >
            <GraduationCap className="w-5 h-5" />
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
