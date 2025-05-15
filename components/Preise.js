import Image from "next/image";
import Link from "next/link";

export default function Preise() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-softWhite bg-[url('/technic.jpg')]">
      {}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-yellow-600 mb-6 font-accent">
          Unsere Preise
        </h1>
        <p className="text-lg text-yellow-400 mb-4">
          natürlich sind unsere preise abhängig davon, was Sie in Ihrem Zukunftszuhause anstellen wollen,
          wir bieten eine vielzahl von diversen SmartHome-geräten an exklusive Installation und einweisung.
          Unser Sortiment geht über:
          Smarte Überwachungseinrichhtung, Alarmanlagen fürs Auto oder Zuhause oder Verschiedene Lichtquellen, Soundquellen bis hin zu Ihrem eigenen Reinigungsroboter.
          Ja Sie lesen RICHTIG...REINIGUNGSROBOTER!! 
          {" "}
        </p>
      </section>

      {}
      <section className="mb-12 ">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition bg-[url('/world.jpg')]">
            <h2 className="text-xl font-semibold text-[#f77f00] mb-2 flex items-center ">
            <i className="bx bxs-fist mr-2 text-xl text-yellow-300 "></i>              Installation ab 150€
            </h2>

            <p className="text-blue-500">
            Wir helfen bei der Installation und geben Ihnen eine kostenfreie Einweisung in Ihre neuen Geräte
            </p>
          </div>

          

          

          
        </div>
      </section>

      {}
      <section className="mb-12">
      <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition bg-[url('/world.jpg')]">
            <h2 className="text-xl font-semibold text-[#f77f00] mb-2 flex items-center ">
            <i className="bx bxs-fist mr-2 text-xl text-yellow-300 "></i>              Smart Speaker ab 50€ !
            </h2>

            <p className="text-blue-500">
            Göttlicher Sound aus futuristischen Speakern!
            </p>
          </div>

      </div>
      </section>

      {}
      <section className="mb-12">
      <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition bg-[url('/world.jpg')]">
            <h2 className="text-xl font-semibold text-[#f77f00] mb-2 flex items-center ">
            <i className="bx bxs-fist mr-2 text-xl text-yellow-300 "></i>              Smart Hubs ab 70€ !
            </h2>

            <p className="text-blue-500">
            Ob eigene Stimme oder die Ihres Lieblingscharakters aus Film und TV, mit diesen Hibs ist alles möglich!
            </p>
          </div>

      </div>
        
      </section>
    

      {}
    <section className="mb-12">
      <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition bg-[url('/world.jpg')]">
      <h2 className="text-xl font-semibold text-[#f77f00] mb-2 flex items-center ">
      <i className="bx bxs-fist mr-2 text-xl text-yellow-300 "></i>              Smart Lights ab 40€ !
      </h2>

      <p className="text-blue-500">
      Sonnenaufgang/Untergang oder Lasershow wie im Science Fiction, unsere Smart Lights ermöglichen alles!
      </p>
    </div>

    </div>
  
    </section>

    {}
    <section className="mb-12">
      <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition bg-[url('/world.jpg')]">
      <h2 className="text-xl font-semibold text-[#f77f00] mb-2 flex items-center ">
      <i className="bx bxs-fist mr-2 text-xl text-yellow-300 "></i>              Robotics !
      </h2>

      <p className="text-blue-500">
      Kein Scherz, mit Ihnen zusammen visualisieren wir Ihren Traum vom eigenen, auf Sie abgestimmten Roboter.
      Ob Butler, guter Freund/in oder Gesundsheitshilfe, wir realisieren Träume!
      </p>
    </div>

    </div>
  
    </section>
  </div>

  );
}