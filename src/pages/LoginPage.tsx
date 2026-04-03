import { useState } from 'react';
import { GraduationCap, Lock, User } from 'lucide-react';

type Role = 'admin' | 'staff' | 'student' | 'alumni';

interface LoginPageProps {
  defaultRole?: Role;
  onLogin: (role: Role) => void;
  onBack: () => void;
}

const CREDENTIALS: Record<Role, { username: string; password: string; label: string }> = {
  admin:   { username: 'admin',   password: 'admin123',   label: 'Admin' },
  staff:   { username: 'staff',   password: 'staff123',   label: 'Staff' },
  student: { username: 'student', password: 'student123', label: 'Student' },
  alumni:  { username: 'alumni',  password: 'alumni123',  label: 'Alumni' },
};

export function LoginPage({ defaultRole = 'admin', onLogin, onBack }: LoginPageProps) {
  const [role, setRole] = useState<Role>(defaultRole);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cred = CREDENTIALS[role];
    if (username === cred.username && password === cred.password) {
      onLogin(role);
    } else {
      setError(`Invalid credentials. Demo: ${cred.username} / ${cred.password}`);
    }
  };

  const roles: Role[] = ['admin', 'staff', 'student', 'alumni'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c2340] via-[#1a3a5c] to-[#0c2340] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-[#0c2340] rounded-full flex items-center justify-center mb-4">
            <GraduationCap className="w-10 h-10 text-[#c9a962]" />
          </div>
          <h1 className="text-2xl font-serif font-semibold text-[#0c2340]">Portal Login</h1>
          <p className="text-gray-500 mt-1 text-sm">St. Augustine's College</p>
        </div>

        {/* Role Tabs */}
        <div className="grid grid-cols-4 gap-1 bg-gray-100 rounded-lg p-1 mb-8">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => { setRole(r); setError(''); setUsername(''); setPassword(''); }}
              className={`py-2 rounded-md text-xs font-semibold capitalize transition-all ${
                role === r ? 'bg-[#0c2340] text-white shadow' : 'text-gray-500 hover:text-[#0c2340]'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(''); }}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a962] transition-colors"
                placeholder={`Enter ${role} username`}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9a962] transition-colors"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

          <button
            type="submit"
            className="w-full py-3.5 bg-[#0c2340] text-white rounded-lg font-medium hover:bg-[#1a3a5c] transition-colors"
          >
            Sign In as {CREDENTIALS[role].label}
          </button>
        </form>

        <div className="mt-6 p-4 bg-[#fafaf8] rounded-lg border border-gray-100 text-xs text-gray-500 space-y-1">
          <p className="font-semibold text-gray-600 mb-2">Demo Credentials</p>
          {roles.map((r) => (
            <p key={r}><span className="capitalize font-medium">{r}:</span> {CREDENTIALS[r].username} / {CREDENTIALS[r].password}</p>
          ))}
        </div>

        <button onClick={onBack} className="mt-6 w-full text-center text-sm text-gray-400 hover:text-[#0c2340] transition-colors">
          ← Back to Website
        </button>
      </div>
    </div>
  );
}
