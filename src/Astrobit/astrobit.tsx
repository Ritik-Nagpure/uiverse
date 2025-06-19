import Layout from "./Layout/Layout"
import './astrocs.css'
import { useEffect } from "react";

function astrobit() {
     useEffect(() => {
        document.title = 'AstroBit';
    
        const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
        if (favicon) {
          favicon.href = '/icons/astrobiticon.png'; 
        }
      }, []);

    return (
        <div>
            <Layout />
        </div>
    )
}

export default astrobit