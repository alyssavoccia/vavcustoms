import Image from "next/image";

const OurWorkBox = ({ image, heading }) => {
  return (
    <div className="relative">
      <Image className="h-full" src={ image.src } alt={ image.alt } priority={false} />
      <h3 className="text-zinc-100 text-xl font-semibold bg-zinc-800 px-4 py-2 absolute bottom-0 left-0">{ heading }</h3>
    </div>
  )
};

export default OurWorkBox;