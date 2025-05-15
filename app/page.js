"use client";
import Matrix from '../components/Matrix';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';



export default function LandingPage() {
  return (
    <div> {}
      <Matrix/>
      <Hero/>

      {}
      
        <section className="py-16  bg-center "> {} 
        <div className="container mx-auto px-4 "> {}
        
          <h2 className="text-3xl font-bold text-center mb-12 text-red-400 ">
            Zukunft neu gestalten!
          </h2>
          

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 "> {}

            {}
            <FeatureCard
              title="Smart Speaker"
              description="Vergiss den langweiligen Sound aus random Lautsprechern. Hier ist die wahre magie! "
            />
            <FeatureCard
              title="Smart Hubs"
              description="Gib deinem Zuhause Leben!"
            />
            <FeatureCard
              title="Smart Lights"
              description="Lass deiner Fantasie freien Lauf!"
            />
            
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}