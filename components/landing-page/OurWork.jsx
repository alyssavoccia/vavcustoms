import OurWorkBox from './OurWorkBox';
import tableImage from '@/public/assets/images/grid-images/table1.jpg';
import cuttingImage from '@/public/assets/images/grid-images/cutting1.jpg';
import vanityImage from '@/public/assets/images/grid-images/vanity1.jpg';

const OurWork = () => {
  return (
    <section className="pt-28 px-10 max-w-screen-2xl mx-auto z-0">
      <h2 className="text-center text-4xl text-zinc-800 font-bold">Custom Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <OurWorkBox image={{ src: tableImage, alt: "Table" }} heading="Tables" />
        <OurWorkBox image={{ src: cuttingImage, alt: "Cutting Board" }} heading="CNC Projects" />
        <OurWorkBox image={{ src: vanityImage, alt: "Vanity" }} heading="Cabinets/Vanity" />
      </div>
    </section>
  )
};

export default OurWork;