import Button from './Button'; 

export default function Hero() {
  const handleCTAClick = () => {
    alert('Bitte Einloggen für mehr Infos!');
    
  };

  return (
    <div className="bg-gradient-to-r  text-yellow-600 py-20 px-44 text-center  bg-center bg-[url('/dark2.jpg')]"> {}
      <h1 className="text-6xl md:text-7xl font-bold mb-4">Willkommen in deinem Smart-Home</h1> {}
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white-400 "> {}
        Hier zeige ich euch, wie man aus einem langweiligen Zuhause, ein Zuhause der Zukunft erstellt!
      </p>
      <Button
        buttonText="Rundgang"
        onClickHandler={handleCTAClick}
        
      />
    </div>
  );
}