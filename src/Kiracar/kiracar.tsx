import Layout from './Layout/Layout'
import { useEffect } from 'react';

function kiracar() {
   useEffect(() => {
      document.title = 'Kiracar';
  
      const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
      if (favicon) {
        favicon.href = '/icons/kiracaricon.png'; 
      }
    }, []);

  return (
    <div>
      <Layout />
    </div>
  )
}

export default kiracar