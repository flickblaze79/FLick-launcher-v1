import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import AccountManager from './screens/AccountManager';
import InstanceCreator from './screens/InstanceCreator';
import VersionManager from './screens/VersionManager';
import SkinManager from './screens/SkinManager';
import CustomControls from './screens/CustomControls';
import FileManager from './screens/FileManager';
import ModsManager from './screens/ModsManager';
import PerformanceSettings from './screens/PerformanceSettings';
import GeneralSettings from './screens/GeneralSettings';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<AccountManager />} />
          <Route path="/create-instance" element={<InstanceCreator />} />
          <Route path="/instances" element={<VersionManager />} />
          <Route path="/skins" element={<SkinManager />} />
          <Route path="/controls" element={<CustomControls />} />
          <Route path="/files" element={<FileManager />} />
          <Route path="/mods" element={<ModsManager />} />
          <Route path="/performance" element={<PerformanceSettings />} />
          <Route path="/settings" element={<GeneralSettings />} />
        </Routes>
      </Layout>
    </Router>
  );
}
