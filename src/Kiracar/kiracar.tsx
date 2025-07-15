import Layout from './Layout/Layout'
import { useEffect } from 'react';

function Kiracar() {
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

export default Kiracar