import Layout from './Layout/Layout.tsx';
import '../Habla/hablacs.css';
import { useEffect } from 'react';

function Habla() {
  useEffect(() => {
    document.title = 'Habla';

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = '/icons/hablaicon1.png';
    }
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default Habla;
