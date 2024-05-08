
import image5 from "../../assets/imagen_1.jpg";
import image6 from "../../assets/imagen_10.jpg";
import image7 from "../../assets/imagen_11.jpg";
import image8 from "../../assets/imagen_2.jpg";
import image9 from "../../assets/imagen_3.jpg";
import image10 from "../../assets/imagen_5.jpg";
import image11 from "../../assets/imagen_6.jpg";
import image12 from "../../assets/imagen_7.jpg";
import image13 from "../../assets/imagen_8.jpg";
import image14 from "../../assets/imagen_9.jpg";
import image15 from "../../assets/card6.png";
import image16 from "../../assets/imagen_20.jpg";
// ... other image imports

const Gallery = () => {
  const imageData = [
    { id: 5, path: image5, alt: "Image 5" },
    { id: 6, path: image6, alt: "Image 6" },
    { id: 7, path: image7, alt: "Image 7" },
    { id: 8, path: image8, alt: "Image 8" },
    { id: 9, path: image9, alt: "Image 9" },
    { id: 10, path: image10, alt: "Image 10" },
    { id: 11, path: image11, alt: "Image 11" },
    { id: 12, path: image12, alt: "Image 12" },
    { id: 13, path: image13, alt: "Image 13" },
    { id: 14, path: image14, alt: "Image 14" },
    { id: 15, path: image15, alt: "Image 15" },
    { id: 15, path: image16, alt: "Image 16" },
    // ... other image data
  ];

  return (
    <div className="px-4"> {/* Adding padding to the left and right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageData.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.path}
              alt={image.alt}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-70 transition duration-300">
              <h3 className="text-white text-center text-lg font-semibold p-4">
                {image.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
