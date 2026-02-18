import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Reusable Feature Card
const FeatureCard = ({ title, description }) => (
  <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
    <h4 className="font-bold">{title}</h4>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

const ProShootPage = () => {
  // Set dynamic page title
  useEffect(() => {
    document.title = "ProShoot by Vivina Events | 10-Minute Instant Event Videos";
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-500">
            ProShoot by Vivina Events
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Professionally shot and edited videos delivered within just 10 minutes.
          </p>
        </div>

        {/* Hero Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Instant Video Delivery</h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              ProShoot gives you a professional event video in just 10 minutes.
              Perfect for weddings, parties, and highlights.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/proshootbooking"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-center"
              >
                Book Now
              </Link>
              <Link
                to="/contactus"
                className="px-8 py-3 border border-white/40 hover:bg-white hover:text-black rounded-full font-semibold text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right - Highlights Card */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-4">Highlights</h3>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li className="marker:text-red-500">10-minute professional video</li>
              <li className="marker:text-red-500">Shoot + editing completed in 10 minutes</li>
              <li className="marker:text-red-500">High-quality output</li>
              <li className="marker:text-red-500">Ideal for weddings, parties & event highlights</li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-red-500 text-center">Why ProShoot?</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Fast Delivery"
              description="Get your edited video in just 10 minutes after shooting."
            />
            <FeatureCard
              title="Professional Quality"
              description="High-resolution output with expert editing."
            />
            <FeatureCard
              title="Perfect for Events"
              description="Weddings, parties, corporate events, and more."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProShootPage;
