import Image from "next/image";
import galleryData from "@/utils/galleryData";

const Gallery = () => {
  return (
    <div className="mt-28 py-28 px-8 bg-fixed" style={{ backgroundColor: '#f4f4f5', backgroundImage: `url('https://www.transparenttextures.com/patterns/retina-wood.png')` }}>
      <h2 className="text-center text-4xl text-zinc-800 font-bold">Project Gallery</h2>
      <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-8">
        {galleryData.map((image) => (
          <div className="relative">
            <Image className="w-full mb-8 h-auto" src={image.src} alt={image.alt} priority={false} width={500} height={500} />
            <p className="text-zinc-100 text-lg font-semibold bg-zinc-800 px-4 py-2 absolute bottom-0 left-0">Kitchen Shelf</p>
           </div>
        ))}
      </div>
    </div>
  )
};

export default Gallery;