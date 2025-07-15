import Layout from './GUI/Layout/Layout.tsx'
import { useEffect } from 'react';

function Codegears() {
     useEffect(() => {
        document.title = 'CodeGears';
    
        const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
        if (favicon) {
          favicon.href = '/icons/codegearsicon.png'; 
        }
      }, []);
    return (
        <div>
            <Layout />
        </div>
    )
}

export default Codegears