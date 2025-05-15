"use client"

import Button from './Button'; 
import Link from 'next/link';

export default function Hero() {
  const handleCTAClick = () => {
    alert('Bitte Einloggen für mehr Infos!');
    
  };

  return (

    <div  className="bg-gradient-to-r  text-blue-400 py-20 px-44 text-center  bg-center "> {}
      <h1 className="text-6xl md:text-7xl font-bold mb-4">Willkommen in deinem Smart-Home</h1> {}
      <Link className="hover:bg-blue-300 hover:-translate-y-1 hover:scale-110 mx-5 text-white font-bold bg-gray-600 rounded-full p-2" href="kontakt">Kontakt</Link>
      <Link className="hover:bg-blue-300 hover:-translate-y-1 hover:scale-110 mx-5 text-white font-bold bg-gray-600 rounded-full p-2" href="preise">Preise</Link>
      <Link className="hover:bg-blue-300 hover:-translate-y-1 hover:scale-110 mx-5 text-white font-bold bg-gray-600 rounded-full p-2" href="kundenzufriedenheit">Kundenzufriedenheit</Link>
      <Link className="hover:bg-blue-300 hover:-translate-y-1 hover:scale-110 mx-5 text-white font-bold bg-gray-600 rounded-full p-2" href="https://www.youtube.com/watch?v=mhOM_TA6DG8&list=PLSJs89g3q6svgJsiynlSW_jnIIvwwnaxH">Über Uns</Link>
      <p className="text-lg md:text-xl mb-8 font-bold max-w-2xl mx-auto text-white-400 "> {}
        Hier zeige ich euch, wie man aus einem langweiligen Zuhause, ein Zuhause der Zukunft erstellt!
      </p>
      <Button
        buttonText="Rundgang"
        onClickHandler={handleCTAClick}
        
      />
    </div>
  );
}