import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Image, Building2, Users, Trophy, PartyPopper, Camera } from 'lucide-react';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const categories = [
    { name: 'All', icon: Image },
    { name: 'Campus', icon: Building2 },
    { name: 'Events', icon: PartyPopper },
    { name: 'Academics', icon: Users },
    { name: 'Achievements', icon: Trophy },
  ];

  const galleryItems = [
    { id: 1, category: 'Campus', title: 'Main Academic Block', description: 'The iconic main building housing administrative offices and lecture halls', image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b38?w=800&q=80' },
    { id: 2, category: 'Campus', title: 'Central Library', description: 'Our state-of-the-art library with over 50,000 volumes', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80' },
    { id: 3, category: 'Campus', title: 'Computer Center', description: 'Modern computing facilities for students', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' },
    { id: 4, category: 'Campus', title: 'Science Laboratory', description: 'Well-equipped labs for practical learning', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80' },
    { id: 5, category: 'Campus', title: 'Sports Complex', description: 'Multi-sport facilities for athletics and recreation', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
    { id: 6, category: 'Campus', title: 'Auditorium', description: 'State-of-the-art venue for events and conferences', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
    { id: 7, category: 'Events', title: 'Annual Convocation 2024', description: 'Celebrating the achievements of our graduating class', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80' },
    { id: 8, category: 'Events', title: 'Science Exhibition', description: 'Students showcasing innovative research projects', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80' },
    { id: 9, category: 'Events', title: 'Cultural Festival', description: 'Annual celebration of arts and heritage', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
    { id: 10, category: 'Events', title: 'Guest Lecture Series', description: 'Distinguished speakers sharing insights with students', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80' },
    { id: 11, category: 'Academics', title: 'Classroom Learning', description: 'Interactive sessions in our smart classrooms', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80' },
    { id: 12, category: 'Academics', title: 'Collaborative Study', description: 'Students engaged in group discussions', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80' },
    { id: 13, category: 'Academics', title: 'Laboratory Practice', description: 'Hands-on learning in our research labs', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80' },
    { id: 14, category: 'Academics', title: 'Faculty Interaction', description: 'Personalized guidance from expert educators', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80' },
    { id: 15, category: 'Achievements', title: 'Award Ceremony', description: 'Recognizing academic and extracurricular excellence', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80' },
    { id: 16, category: 'Achievements', title: 'Sports Champions', description: 'Our athletes celebrating victory', image: 'https://images.unsplash.com/photo-1461896836934- voices?w=800&q=80' },
    { id: 17, category: 'Achievements', title: 'Academic Excellence', description: 'Toppers receiving recognition for their achievements', image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&q=80' },
    { id: 18, category: 'Campus', title: 'Green Campus', description: 'Our eco-friendly and sustainable environment', image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80' },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const currentImage = galleryItems.find(item => item.id === selectedImage);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  return (
    <div className="bg-[#fafaf8]">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80" 
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340]/95 via-[#0c2340]/85 to-[#0c2340]/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/20 border border-[#c9a962]/30 rounded-full text-[#c9a962] text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight animate-slide-up">
              Campus Gallery
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-up delay-100">
              Explore the vibrant life at St. Augustine's through our collection of memorable 
              moments, campus views, and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-[72px] z-30 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-[#0c2340] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" data-animate className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3] ${isVisible['gallery'] ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/90 via-[#0c2340]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#c9a962] text-xs font-medium tracking-wider uppercase">{item.category}</span>
                  <h3 className="text-white font-serif font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1920&q=80" 
              alt="Virtual Tour"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340]/90 to-[#0c2340]/50 flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-2xl">
                  <span className="inline-block text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4">
                    Experience Our Campus
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
                    Take a Virtual Tour
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Unable to visit in person? Experience our 50-acre campus through our immersive 360° virtual tour. 
                    Explore academic buildings, laboratories, library, sports facilities, and more.
                  </p>
                  <button className="px-8 py-4 bg-[#c9a962] hover:bg-[#b8941f] text-white rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 fill-white" />
                    </div>
                    Start Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Stats */}
      <section className="py-16 bg-[#0c2340]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '50', suffix: ' Acres', label: 'Campus Area' },
              { value: '15', suffix: '+', label: 'Academic Buildings' },
              { value: '100', suffix: '+', label: 'Annual Events' },
              { value: '5,000', suffix: '+', label: 'Photo Archive' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-serif font-semibold text-[#c9a962] mb-2">
                  {stat.value}<span className="text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="animate-scale-in">
              <img 
                src={currentImage.image} 
                alt={currentImage.title}
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="text-center mt-6">
                <span className="text-[#c9a962] text-sm font-medium tracking-wider uppercase">{currentImage.category}</span>
                <h3 className="text-white font-serif font-semibold text-2xl mt-1">{currentImage.title}</h3>
                <p className="text-gray-400 mt-2">{currentImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
