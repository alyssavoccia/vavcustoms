import Hero from '@/components/landing-page/Hero';
import OurWork from '@/components/landing-page/OurWork';
import About from '@/components/landing-page/About';
import Services from '@/components/landing-page/Services';
import TheShop from '@/components/landing-page/TheShop';
import Gallery from '@/components/landing-page/Gallery';
import CustomBuild from '@/components/landing-page/CustomBuild';

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurWork />
      <About />
      <Services />
      <TheShop />
      <Gallery />
      <CustomBuild />
    </>
  )
};

export default HomePage;