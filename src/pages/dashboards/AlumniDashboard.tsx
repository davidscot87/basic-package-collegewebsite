import { useState } from 'react';
import {
  LayoutDashboard, Users, Briefcase, LogOut,
  Eye, GraduationCap, Bell, Award, MapPin,
  Calendar, BookOpen, Heart, ExternalLink
} from 'lucide-react';

interface Props { onLogout: () => void; onBack: () => void; }

export function AlumniDashboard({ onLogout, onBack }: Props) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const alumni = [
    { name: 'Priya Sharma', batch: '2018', role: 'Software Engineer', company: 'Google', location: 'Bangalore', avatar: 'PS' },
    { name: 'Rahul Mehta', batch: '2019', role: 'Data Analyst', company: 'Microsoft', location: 'Hyderabad', avatar: 'RM' },
    { name: 'Ananya Roy', batch: '2017', role: 'Product Manager', company: 'Amazon', location: 'Mumbai', avatar: 'AR' },
    { name: 'Vikram Singh', batch: '2020', role: 'Research Scientist', company: 'ISRO', location: 'Ahmedabad', avatar: 'VS' },
  ];

  const events = [
    { title: 'Annual Alumni Meet 2025', date: 'Feb 15, 2025', location: 'Main Auditorium', type: 'Reunion' },
    { title: 'Career Mentorship Drive', date: 'Jan 28, 2025', location: 'Online', type: 'Mentorship' },
    { title: 'Batch of 2018 Reunion', date: 'Mar 5, 2025', location: 'Campus', type: 'Reunion' },
  ];

  const jobs = [
    { title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', posted: '2 days ago' },
    { title: 'Data Scientist', company: 'Analytics Co.', location: 'Bangalore', posted: '5 days ago' },
    { title: 'Product Designer', company: 'StartupXYZ', location: 'Mumbai', posted: '1 week ago' },
  ];

  const sidebar = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'network', label: 'Alumni Network', icon: Users },
    { id: 'jobs', label: 'Job Board', icon: Briefcase },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'give', label: 'Give Back', icon: Heart },
  ];

  const typeColor: Record<string, string> = {
    Reunion: 'bg-purple-100 text-purple-700',
    Mentorship: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      <aside className="w-64 bg-[#0c2340] text-white fixed h-full flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c9a962] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-serif font-semibold text-sm">Alumni Portal</h2>
              <p className="text-xs text-gray-400">St. Augustine's</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebar.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm ${
                activeTab === item.id ? 'bg-[#c9a962] text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />{item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-1">
          <button onClick={onBack} className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-all text-sm">
            <Eye className="w-5 h-5" /><span>View Website</span>
          </button>
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-all text-sm">
            <LogOut className="w-5 h-5" /><span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="ml-64 flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-serif font-semibold text-[#0c2340]">Welcome Back, James</h1>
            <p className="text-gray-500 text-sm mt-1">B.Sc. Computer Science · Batch of 2018 · Alumni Portal</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#c9a962] transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
            </button>
            <div className="w-10 h-10 bg-[#0c2340] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JA</span>
            </div>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <>
            {/* Profile card */}
            <div className="bg-gradient-to-r from-[#0c2340] to-[#1a3a5c] rounded-2xl p-8 mb-8 text-white flex items-center gap-8">
              <div className="w-20 h-20 bg-[#c9a962] rounded-full flex items-center justify-center text-2xl font-serif font-bold text-white shrink-0">JA</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-semibold">James Anderson</h2>
                <p className="text-gray-300 text-sm mt-1">Software Engineer at Google · Batch of 2018</p>
                <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" /> San Francisco, CA
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[{ v: '6', l: 'Years Since\nGraduation' }, { v: '12', l: 'Alumni\nConnections' }, { v: '3', l: 'Events\nAttended' }].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-serif font-bold text-[#c9a962]">{s.v}</div>
                    <div className="text-xs text-gray-400 mt-1 whitespace-pre-line">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Alumni Network */}
              <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-semibold text-[#0c2340]">Alumni You May Know</h3>
                  <button className="text-[#c9a962] text-sm hover:underline">View all</button>
                </div>
                <div className="space-y-4">
                  {alumni.map((a, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-[#0c2340] rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0">{a.avatar}</div>
                      <div className="flex-1">
                        <p className="font-medium text-[#0c2340] text-sm">{a.name}</p>
                        <p className="text-gray-400 text-xs">{a.role} at {a.company} · Batch {a.batch}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin className="w-3 h-3" />{a.location}
                      </div>
                      <button className="px-3 py-1.5 border border-[#0c2340] text-[#0c2340] rounded-lg text-xs font-medium hover:bg-[#0c2340] hover:text-white transition-colors">Connect</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-semibold text-[#0c2340] mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    {events.map((e, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-[#0c2340]">{e.title}</p>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${typeColor[e.type] ?? 'bg-gray-100 text-gray-600'}`}>{e.type}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" />{e.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-semibold text-[#0c2340] mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Update Profile', icon: Users },
                      { label: 'Job Board', icon: Briefcase },
                      { label: 'Donate to College', icon: Heart },
                      { label: 'Transcripts', icon: BookOpen },
                    ].map((l, i) => (
                      <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#0c2340]">
                        <l.icon className="w-4 h-4 text-[#c9a962]" />{l.label}
                        <ExternalLink className="w-3 h-3 text-gray-300 ml-auto" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Job Board preview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-[#0c2340]">Latest Job Postings</h3>
                <button className="text-[#c9a962] text-sm hover:underline">View all</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {jobs.map((j, i) => (
                  <div key={i} className="p-4 border border-gray-100 rounded-xl hover:border-[#c9a962] transition-colors">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="font-medium text-[#0c2340] text-sm">{j.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{j.company}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" />{j.location}</span>
                      <span className="text-xs text-gray-400">{j.posted}</span>
                    </div>
                    <button className="mt-3 w-full py-1.5 bg-[#0c2340] text-white rounded-lg text-xs font-medium hover:bg-[#1a3a5c] transition-colors">Apply</button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab !== 'dashboard' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <Award className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 font-medium capitalize">{activeTab} section coming soon</p>
          </div>
        )}
      </main>
    </div>
  );
}
