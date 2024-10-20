import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="hero bg-base-200 h-80 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="md:max-w-xl">
            <h1 className="text-5xl font-bold">
              <span className="text-cyan-600">O</span>pen
              <span className="text-cyan-600">Shop</span>
            </h1>
            <p className="py-6">
              Welcome to OpenShop, your one-stop destination for all your online
              shopping needs. Discover a wide range of products, enjoy
              competitive prices, and experience seamless transactions. Start
              your shopping journey with us today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
