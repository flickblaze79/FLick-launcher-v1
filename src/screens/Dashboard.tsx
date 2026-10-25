import { Play } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-gray-400">Welcome back, Steve!</p>
        </div>
        <div className="flex items-center gap-4 bg-gray-900 p-2 rounded-full px-4 border border-gray-800">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">S</div>
          <span>Steve</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 flex flex-col items-center justify-center space-y-6 shadow-2xl">
          <h3 className="text-xl text-gray-300">Selected Instance</h3>
          <div className="text-4xl font-bold text-blue-400">Fabric 1.21.1</div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 w-full py-4 rounded-xl text-xl font-bold hover:opacity-90 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            <Play className="w-6 h-6" /> PLAY
          </button>
        </div>
        <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
                {['Mods', 'Skins', 'Controls', 'Settings'].map(action => (
                    <button key={action} className="bg-gray-900 p-4 rounded-xl hover:bg-gray-800 transition-colors text-left">
                        {action}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
