import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, PlusCircle, Layers, Paintbrush, Gamepad2, FolderOpen, Box, Zap, Settings } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/account', icon: User, label: 'Account' },
    { path: '/create-instance', icon: PlusCircle, label: 'Create Instance' },
    { path: '/instances', icon: Layers, label: 'Instances' },
    { path: '/skins', icon: Paintbrush, label: 'Skins' },
    { path: '/controls', icon: Gamepad2, label: 'Controls' },
    { path: '/files', icon: FolderOpen, label: 'Files' },
    { path: '/mods', icon: Box, label: 'Mods' },
    { path: '/performance', icon: Zap, label: 'Performance' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <nav className="w-full md:w-64 bg-gray-950 p-4 border-b md:border-b-0 md:border-r border-gray-800">
        <h1 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Flick Launcher V1</h1>
        <div className="space-y-1 overflow-y-auto max-h-[calc(100vh-100px)]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-purple-900/30 text-purple-300 border-l-4 border-purple-500' : 'text-gray-400 hover:bg-gray-800'}`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <main className="flex-1 p-6 bg-black">
        {children}
      </main>
    </div>
  );
}
