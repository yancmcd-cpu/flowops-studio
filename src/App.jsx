import { useEffect, useState } from 'react';
import PrototypeA from './PrototypeA';
import PrototypeB from './PrototypeB';
import PrototypeC from './PrototypeC';
import PrototypeD from './PrototypeD';
import PrototypeE from './PrototypeE';
import PrototypeF from './PrototypeF';
import PrototypeG from './PrototypeG';
import PrototypeH from './PrototypeH';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  if (currentPath === '/prototype-a') return <PrototypeA onBack={() => navigate('/')} />;
  if (currentPath === '/prototype-b') return <PrototypeB onBack={() => navigate('/')} />;
  if (currentPath === '/prototype-c') return <PrototypeC onBack={() => navigate('/')} />;
  if (currentPath === '/prototype-d') return <PrototypeD onBack={() => navigate('/')} />;
  if (currentPath === '/prototype-h') return <PrototypeH onBack={() => navigate('/')} />;
  if (currentPath === '/prototype-f') return <PrototypeF onBack={() => navigate('/')} />;
  if (currentPath === '/prototype-g') return <PrototypeG onBack={() => navigate('/')} />;

  return <PrototypeE onBack={() => navigate('/')} />;
}
