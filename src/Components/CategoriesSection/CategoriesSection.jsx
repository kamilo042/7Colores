import { useState } from 'react';
import card6 from '../../assets/imagen_11.jpg';
import card8 from '../../assets/imagen_7.jpg';
import card9 from '../../assets/imagen_1.jpg';

const CategoriesSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const cardData = [
    { id: 1, imageUrl: card6, hoverText: 'Colección Invierno' },
    { id: 2, imageUrl: card8, hoverText: 'Colección Verano' },
    { id: 3, imageUrl: card9, hoverText: 'Colección Otoño' },
  ];

  return (
    <div className="flex justify-center gap-8 place-content-center pt-10 pb-10">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="max-w-sm relative"
          onMouseEnter={() => setHoveredItem(card)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            border: "none",
            borderRadius: "0",
            width: "290px",
            height: "260px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="transition-all duration-300 transform hover:scale-105"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${card.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }}
          />
          {hoveredItem?.id === card.id && (
            <h5
              className="absolute bottom-0 left-0 w-full p-2 text-lg font-bold text-white bg-black bg-opacity-75"
              style={{ zIndex: 2 }}
            >
              {card.hoverText}
            </h5>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
