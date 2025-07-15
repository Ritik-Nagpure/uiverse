import React from 'react';
import { useNavigate } from "react-router-dom";


interface CardProps {
  title: string;
  description?: string;
  imageUrl: string;
  showDescription: boolean;
  siteurl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, siteurl, showDescription }) => {
  const nav = useNavigate()
  const load_app = (applink: string) => {
    nav(applink)
  }

  return (
    // <div
    //   className="relative w-80 h-60 shrink-0 rounded-lg overflow-hidden mx-4"
    //   style={{
    //     backgroundImage: `url(${imageUrl})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'top',
    //   }}
    //   onClick={() => { load_app(siteurl) }}
    // >
    //   <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm text-white p-4">
    //     <h2 className="text-lg font-semibold">{title}</h2>
    //     {showDescription && <p className="text-sm">{description}</p>}
    //   </div>
    // </div>

    <div
      className="relative w-80 sm:w-100 lg:w-120 h-60 sm:h-80 lg:h-80 shrink-0 rounded-lg overflow-hidden mx-4 group"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
      onClick={() => load_app(siteurl)}
    >
      <div className="absolute bottom-0 w-full sm:h-1/2 bg-black/30 group-hover:backdrop-blur-sm transition duration-300 text-white p-4 flex flex-col justify-end ">
        <h2 className="text-xl font-semibold">{title}</h2>
        {showDescription && <p className="text-sm overflow-hidden">{description}</p>}
      </div>
    </div>

  );
};

export default Card;
