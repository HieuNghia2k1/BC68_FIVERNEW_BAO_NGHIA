import React from "react";
// import "./FreelanceService.css"; // Import your custom styles
import bg_1 from "../../assets/img/bg_1.png";
//
const FindTheRight = () => {
  return (
    <div className="container m-10 relative bg-no-repeat bg-[url('/public/bg_1.png')] text-white h-screen flex flex-col justify-center items-center">
      {/* Floating Profile Images */}
      {/* <div className="absolute top-10 left-10 transform -rotate-6">
        <div className="bg-green-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-24 h-24 rounded-lg"
            src="https://via.placeholder.com/150"
            alt="Jenny"
          />
          <h3 className="text-white mt-2">Jenny</h3>
          <p className="text-gray-300">Voiceover & Singer</p>
        </div>
      </div>

      <div className="absolute top-32 right-10 transform rotate-6">
        <div className="bg-green-800 p-4 rounded-lg shadow-lg">
          <img
            className="w-24 h-24 rounded-lg"
            src="https://via.placeholder.com/150"
            alt="Jordan"
          />
          <h3 className="text-white mt-2">Jordan</h3>
          <p className="text-gray-300">Production Assistant</p>
        </div>
      </div> */}

      {/* Hero Headline */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find the right <span className="text-green-400">freelance</span>{" "}
          <br />
          service, right away
        </h1>
      </div>

      {/* Search Bar */}
      <div className="mt-8 w-full max-w-md">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search for any service..."
            className="w-full px-4 py-3 rounded-full shadow focus:outline-none text-gray-800"
          />
          <button className="absolute right-2 px-4 py-2 bg-green-600 text-white rounded-full">
            🔍
          </button>
        </div>
      </div>

      {/* Trusted by Brands */}
      <div className="mt-10 text-gray-400">
        <p>Trusted by:</p>
        <div className="flex space-x-4 mt-2">
          <img
            className="w-20"
            src="https://via.placeholder.com/50"
            alt="Meta"
          />
          <img
            className="w-20"
            src="https://via.placeholder.com/50"
            alt="Google"
          />
          <img
            className="w-20"
            src="https://via.placeholder.com/50"
            alt="Netflix"
          />
          <img
            className="w-20"
            src="https://via.placeholder.com/50"
            alt="PayPal"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-8 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          "Programming & Tech",
          "Graphics & Design",
          "Digital Marketing",
          "Writing & Translation",
          "Video & Animation",
          "AI Services",
          "Music & Audio",
          "Business",
          "Consulting",
        ].map((category) => (
          <div
            key={category}
            className="p-4 bg-white text-gray-800 rounded-lg shadow-md"
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <footer>
        <p>Trusted by:</p>
        <div className="trusted-logos">
          <img src="meta.png" alt="Meta" />
          <img src="google.png" alt="Google" />
          <img src="netflix.png" alt="Netflix" />
          <img src="pg.png" alt="P&G" />
          <img src="paypal.png" alt="PayPal" />
          <img src="payoneer.png" alt="Payoneer" />
        </div>
      </footer> */
}
//     </div>
//   );
// };

export default FindTheRight;
