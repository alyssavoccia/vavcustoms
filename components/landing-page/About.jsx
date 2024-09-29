import Image from "next/image";
import aboutMe from "@/public/assets/images/about-me.jpg";
import aboutMe2 from "@/public/assets/images/about-me2.jpg";

const About = () => {
  return (
    <section className="pt-28 px-10 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="grid grid-cols-4 grid-rows-1 relative">
          <Image className="w-full col-[1/4] row-[1]" src={aboutMe} alt="" />
          <Image className="col-[3/-1] row-[1] w-full z-[1] pt-16" src={aboutMe2} alt="" />
        </div>
        <div>
          <h2 className="text-4xl text-zinc-800 font-bold">Hey, I'm Vince</h2>
          <p className="text-xl text-stone-700 leading-relaxed mt-3">Meet Vince, a skilled woodworker with over 20 years of experience in the trade. When not bringing his creative visions to life through woodworking, he can be found out on the boat, enjoying a peaceful day of fishing. With a passion for both the art of woodworking and the great outdoors, Vince brings a unique perspective to each of his projects.</p>
          <a className="inline-block text-lg font-semibold mt-6 px-10 py-3 border-2 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-100 rounded-sm transition-all duration-200" href="the-shop.html">Read More</a>
        </div>
      </div>
    </section>
  )
};

export default About;