import React, { useState, useEffect } from "react";
import banner1 from "./../assets/userhome/banner1.jpg";
import banner2 from "./../assets/userhome/banner2.jpg";
import banner3 from "./../assets/userhome/banner3.jpg";
import banner4 from "./../assets/userhome/banner4.jpg";
import banner5 from "./../assets/userhome/banner5.jpg";
import banner7 from "./../assets/userhome/banner7.jpg";
import farmer1 from "./../assets/userhome/farmer1.jpg";
import farmer2 from "./../assets/userhome/farmer2.jpg";
import farmer3 from "./../assets/userhome/farmer3.jpg";
import farmer4 from "./../assets/userhome/farmer4.jpg";
import farmer5 from "./../assets/userhome/farmer5.jpg";
import farmer6 from "./../assets/userhome/farmer6.jpg";


const bannerarray = [banner1, banner2, banner3, banner4, banner5, banner7];
const farmers = [
  { name: "John Doe", story: "I doubled my crop yield thanks to AgroHub!", image: farmer1 },
  { name: "Jane Smith", story: "AgroHub helped me connect with experts and improve my farming techniques.", image: farmer2 },
  { name: "Michael Johnson", story: "With AgroHub, I overcame challenges and achieved success in my farming journey.", image: farmer4 },
  { name: "Emily Brown", story: "AgroHub's community support guided me through tough times and boosted my farm's productivity.", image: farmer3},
  { name: "David Wilson", story: "I discovered innovative farming methods on AgroHub that revolutionized my approach.", image: farmer5 },
  { name: "Sophia Clark", story: "Thanks to AgroHub, I found a market for my produce and expanded my business.", image: farmer6 }
];

const getRandomTransform = () => {
  const randomRotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
  const randomTranslateX = Math.random() * 20 - 10; // Random translation on X axis between -10px and 10px
  const randomTranslateY = Math.random() * 20 - 10; // Random translation on Y axis between -10px and 10px

  return `rotate(${randomRotation}deg) translate(${randomTranslateX}px, ${randomTranslateY}px)`;
};

function UserhomeLayout() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isScattered, setIsScattered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerarray.length);
    }, 7000);

    const toggleScattered = setInterval(() => {
      setIsScattered((prev) => !prev);
    }, 1000); // Toggle scatter every 14 seconds

    return () => {
      clearInterval(intervalId);
      clearInterval(toggleScattered);
    };
  }, [bannerarray.length]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="relative w-full h-full mt-10 flex flex-col items-center">
      {/* Welcome Section */}
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-600">Welcome to AgroHub</h1>
        <p className="text-lg mb-8 text-gray-700">
          AgroHub is a vibrant community where farmers come together to connect, collaborate, and thrive. Our platform provides valuable resources, expert advice, and a supportive network to empower farmers in their journey towards success.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-full max-w-screen-xl mx-auto ">
        {bannerarray.map((banner, index) => (
          <div
            key={index}
            className={`relative transition-transform duration-500 ${
              bannerIndex === index ? "transform scale-105 z-10" : "opacity-75"
            } ${isScattered ? "scattered" : ""}`}
            style={{
              transform: isScattered
                ? getRandomTransform()
                : bannerIndex === index
                ? "scale(1.1)"
                : "",
              width: "100%",
              paddingBottom: "75%", // Aspect ratio 4:3
            }}
            onClick={() => handleImageClick(index)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg shadow-lg cursor-pointer ${
                selectedImage === index ? "ring-4 ring-blue-400" : ""
              }`}
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-transform duration-300 transform scale-100 hover:scale-110"
                src={banner}
                alt={`banner-${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Community Grid */}
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-6xl  mb-6 text-green-600 mt-10 text-center font-agrofont">How AgroHub Works</h2>
        
        <div className="mt-8">
  <h3 className="text-3xl font-bold mb-4  text-green-600 font-agrofont">Highlights</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg font-trial shadow-lg p-6">
      <h4 className="text-lg font-semibold font-trial mb-2">Farmer Community</h4>
      <p className="text-gray-700">
        Engage with a vibrant community of farmers, share experiences, and learn from each other's journeys.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6 font-trial">
      <h4 className="text-lg font-semibold  font-trial mb-2">Weather Updates</h4>
      <p className="text-gray-700">
        Stay updated with real-time weather information and forecasts tailored for your farming needs.
      </p>
    </div>
    <div className="bg-white rounded-lg font-trial shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Talk with Other Farmers</h4>
      <p className="text-gray-700">
        Connect with fellow farmers, exchange insights, and benefit from their expertise and experiences.
      </p>
    </div>
    <div className="bg-white rounded-lg font-trial shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Expert Advice</h4>
      <p className="text-gray-700">
        Access a wealth of knowledge from agricultural experts, get personalized guidance, and stay ahead of the curve.
      </p>
    </div>
    <div className="bg-white rounded-lg font-trial  shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Market Insights</h4>
      <p className="text-gray-700">
        Stay informed about market trends, pricing, and demand for various crops, helping you make informed decisions.
      </p>
    </div>
    <div className="bg-white rounded-lg font-trial shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Sustainable Practices</h4>
      <p className="text-gray-700">
        Discover eco-friendly farming techniques, learn about sustainable agriculture, and contribute to a greener future.
      </p>
    </div>
  </div>
</div>
        
      </div>

      {/* Success Stories */}
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 border">
        <h2 className="text-2xl font-semibold mb-6 text-green-600 font-agrofont">Our Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmers.map((farmer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={farmer.image} alt={`farmer-${index + 1}`} />
                <h3 className="text-lg font-semibold">{farmer.name}</h3>
              </div>
              <p className="text-gray-700">{farmer.story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserhomeLayout;
