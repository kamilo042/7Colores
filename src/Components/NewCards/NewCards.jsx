import { Carousel } from "flowbite-react";
import image6 from "../../assets/imagen_13.jpg";
import image8 from "../../assets/imagen_11.jpg";
import image9 from "../../assets/imagen_15.jpg";
import image1 from "../../assets/imagen_3.jpg";
import image2 from "../../assets/imagen_7.jpg";
import image3 from "../../assets/card9.png";

// Function to create image groups with 3 images each
const createImageGroups = (imageData) => {
  const imageGroups = [];
  for (let i = 0; i < imageData.length; i += 3) {
    const group = imageData.slice(i, i + 3);
    imageGroups.push(group);
  }
  return imageGroups;
};

const imageData = [
  { id: 1, imageUrl: image6 },
  { id: 2, imageUrl: image8 },
  { id: 3, imageUrl: image9 },
  { id: 3, imageUrl: image1 },
  { id: 3, imageUrl: image2 },
  { id: 3, imageUrl: image3 },
  // Add more images here if you have more than 3
];

const NewCards = () => {
  const imageGroups = createImageGroups(imageData);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicators={false} arrows={true}>
        {imageGroups.map((group, index) => (
          <div key={index} className="carousel-item flex justify-center"> {/* Center images */}
            <div className="flex gap-4 px-4 py-2"> {/* Add padding and gap between images */}
              {group.map((item) => (
                <img
                  key={item.id}
                  src={item.imageUrl}
                  alt={`Image ${item.id}`}
                  className="w-1/3 object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewCards;
