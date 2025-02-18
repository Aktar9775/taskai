import React from 'react';



const ImageCard = ({ src, alt }) => {
  return (
    <div className="border border-[#7687B5] bg-[#333B4F]/50 p-8 m-3 rounded-2xl">
      <img src={src} alt={alt} className="h-11 w-13" />
    </div>
  );
};

function Addtask() {
  
  const images = [
    { src: "Vector (4).png", alt: "Vector 4" },
    { src: "Vector (5).png", alt: "Vector 5" },
    { src: "Vector (6).png", alt: "Vector 6" },
    { src: "Vector (7).png", alt: "Vector 7" },
    { src: "Group.png", alt: "Group" },
    { src: "Vector (8).png", alt: "Vector 8" },
  ];

  return (
    <div className=" grid place-items-center p-4">
      <span className="text-lg font-medium">Adtask AI works with :</span>
      <div className="flex gap-8  mt-10">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default Addtask;
