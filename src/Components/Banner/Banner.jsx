import image from '../../assets/imagen_22.jpg';

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center py-8 px-16 text-white min-h-[200px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${image})`, minHeight: '200px' }}
    >
      {/* Add content inside the banner if needed */}
    </div>
  );
};

export default Banner;