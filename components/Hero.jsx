import Image from 'next/image';
import heroBg from '@/assets/images/hero-bg.png';
import heroLogo from '@/assets/images/VAV-Customs-Logo-Hero.png';

const Hero = () => {
  return (
    <section className="w-full bg-center bg-cover bg-fixed" style={{ backgroundImage: `url(${heroBg.src})` }}>
      <div className="flex items-center justify-center w-full h-screen bg-zinc-900 bg-opacity-50">
        <div className="text-center">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <Image className="w-auto" src={ heroLogo } alt="VAV Customs" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;