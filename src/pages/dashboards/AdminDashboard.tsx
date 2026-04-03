import { useState } from 'react';
import {
  LayoutDashboard, Users, BookOpen, MessageSquare, Settings, LogOut,
  Bell, Search, Eye, Edit, Trash2, Plus, TrendingUp,
  GraduationCap, BarChart3, UserCheck, Clock, Mail
} from 'lucide-react';

interface Props { onLogout: () => void; onBack: () => void; }

export function AdminDashboard({ onLogout, onBack }: Props) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Total Students', value: '1,247', change: '+12%', icon: Users, color: 'bg-blue-600' },
    { title: 'Active Programs', value: '25', change: '+3', icon: BookOpen, color: 'bg-emerald-600' },
    { title: 'New Inquiries', value: '48', change: '+8', icon: MessageSquare, color: 'bg-amber-600' },
    { title: 'Faculty Members', value: '52', change: '+2', icon: GraduationCap, color: 'bg-purple-600' },
  ];

  const inquiries = [
    { id: 1, name: 'John Smith', subject: 'Admission Inquiry', date: '2 hours ago', status: 'New' },
    { id: 2, name: 'Sarah Johnson', subject: 'Program Details', date: '5 hours ago', status: 'Replied' },
    { id: 3, name: 'Michael Brown', subject: 'Fee Structure', date: '1 day ago', status: 'Pending' },
    { id: 4, name: 'Emily Davis', subject: 'Scholarship Info', date: '1 day ago', status: 'New' },
  ];

  const courses = [
    { name: 'Bachelor of Science', students: 350, status: 'Active', duration: '3 Years' },
    { name: 'Bachelor of Commerce', students: 400, status: 'Active', duration: '3 Years' },
    { name: 'Bachelor of Computer Applications', students: 300, status: 'Active', duration: '3 Years' },
    { name: 'Master of Science', students: 150, status: 'Active', duration: '2 Years' },
  ];

  const sidebar = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'courses', label: 'Programs', icon: BookOpen },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const statusColor: Record<string, string> = {
    New: 'bg-blue-100 text-blue-700',
    Replied: 'bg-green-100 text-green-700',
    Pending: 'bg-amber-100 text-amber-700',
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
              <h2 className="font-serif font-semibold text-sm">Admin Panel</h2>
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
              <item.icon className="w-5 h-5" />
              {item.label}
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-serif font-semibold text-[#0c2340] capitalize">{activeTab}</h1>
            <p className="text-gray-500 text-sm mt-1">Administrator Portal</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c9a962] w-64" placeholder="Search..." />
            </div>
            <button className="relative w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#c9a962] transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
            </button>
            <div className="w-10 h-10 bg-[#0c2340] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <>
            <div className="grid grid-cols-4 gap-6 mb-8">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center`}>
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-emerald-600 text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />{s.change}
                    </span>
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#0c2340]">{s.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{s.title}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[#0c2340]">Recent Inquiries</h3>
                  <button className="text-[#c9a962] text-sm hover:underline">View all</button>
                </div>
                <div className="space-y-4">
                  {inquiries.map((q) => (
                    <div key={q.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="font-medium text-[#0c2340] text-sm">{q.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{q.subject} · {q.date}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[q.status]}`}>{q.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[#0c2340]">Quick Actions</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Add Student', icon: UserCheck, color: 'bg-blue-50 text-blue-600' },
                    { label: 'New Program', icon: BookOpen, color: 'bg-emerald-50 text-emerald-600' },
                    { label: 'Send Notice', icon: Mail, color: 'bg-amber-50 text-amber-600' },
                    { label: 'View Reports', icon: BarChart3, color: 'bg-purple-50 text-purple-600' },
                  ].map((a, i) => (
                    <button key={i} className={`flex items-center gap-3 p-4 rounded-xl ${a.color} hover:opacity-80 transition-opacity text-sm font-medium`}>
                      <a.icon className="w-5 h-5" />{a.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'courses' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="font-semibold text-[#0c2340]">All Programs</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0c2340] text-white rounded-lg text-sm hover:bg-[#1a3a5c] transition-colors">
                <Plus className="w-4 h-4" /> Add Program
              </button>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>{['Program', 'Students', 'Duration', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                ))}</tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {courses.map((c, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#0c2340] text-sm">{c.name}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{c.students}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{c.duration}</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">{c.status}</span></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                        <button className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-semibold text-[#0c2340]">All Inquiries</h3>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>{['Name', 'Subject', 'Received', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                ))}</tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {inquiries.map((q) => (
                  <tr key={q.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#0c2340] text-sm">{q.name}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{q.subject}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm flex items-center gap-1"><Clock className="w-3 h-3" />{q.date}</td>
                    <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[q.status]}`}>{q.status}</span></td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                        <button className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {(activeTab === 'students' || activeTab === 'settings') && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 font-medium capitalize">{activeTab} management coming soon</p>
          </div>
        )}
      </main>
    </div>
  );
}
