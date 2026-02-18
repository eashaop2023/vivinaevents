import React from "react";

/* images */
import pro from "../assets/photos/pro.jpg";
import pro1 from "../assets/photos/pro1.jpg";
import catering2 from "../assets/photos/catering2.jpg";
import locationshoot from "../assets/photos/locationshoot.jpg";
import founder from "../assets/photos/Founder.png";
import logo from "../assets/photos/logo.png";

const AboutVivina = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white">

      {/* ================= OUR STORY ================= */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">
              Our Story
            </h2>

            <p className="text-lg uppercase tracking-wider text-gray-400 mb-4">
              Where Every Event Becomes a Masterpiece
            </p>

            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Vivina Events was founded with a simple yet powerful vision — to
              transform ordinary occasions into extraordinary experiences.
              What began as a passion for celebrations has grown into a premium
              event management brand known for elegance, creativity, and
              flawless execution.
            </p>

            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              We believe every event tells a story. At Vivina Events, we listen
              carefully, design thoughtfully, and execute passionately to ensure
              each celebration reflects our client’s personality and purpose.
            </p>

            {/* Quote */}
            <p className="mt-6 text-lg italic text-red-400">
              “Celebrate Life’s Moments in Style”
            </p>
          </div>

          {/* RIGHT – 2x2 IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            {[pro, pro1, catering2, locationshoot].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-white/10 group"
              >
                <img
                  src={img}
                  alt="Vivina Event"
                  className="h-40 sm:h-48 w-full object-cover
                             group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <p className="mt-10 text-lg text-center text-gray-400 italic">
          Luxury Events. Flawless Execution. Unforgettable Memories.
        </p>
      </div>

      {/* ================= OUR VISION ================= */}
      <div className=" py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – Founder Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-2xl"></div>
            <img
              src={founder}
              alt="Founder"
              className="relative rounded-2xl w-[450px] h-[450px] object-cover"
            />
          </div>

          {/* RIGHT – Vision Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-3">
              Our Vision
            </h2>

            <p className="italic text-lg text-red-400 mb-4">
              “Your Vision. Our Expertise. Perfectly Delivered.”
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              The vision behind Vivina Events is to redefine event planning by
              blending luxury, innovation, and personalized service. Our goal
              is not just to organize events, but to create memorable
              experiences that leave a lasting impression.
            </p>

            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              With attention to detail, transparent communication, and a
              client-first approach, Vivina Events strives to become a trusted
              name in premium event management.
            </p>
          </div>
        </div>
      </div>

     {/* our promises */}
     <div className="max-w-6xl mx-auto px-4 py-18">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT – PROMISE BOX */}
    <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-6">
        Our Promise
      </h2>

      <ul className="space-y-4 text-gray-300 text-sm sm:text-base list-disc list-inside ">
        <li className="mb-2 text-gray-300 marker:text-red-500"> Personalized planning tailored to your vision</li>
        <li className="mb-2 text-gray-300 marker:text-red-500"> Premium-quality vendors and services</li>
        <li className="mb-2 text-gray-300 marker:text-red-500"> Seamless coordination and timely execution</li>
        <li className="mb-2 text-gray-300 marker:text-red-500"> Unforgettable experiences, every time</li>
      </ul>
    </div>

    {/* RIGHT – LOGO + QUOTE  */}
    <div className="flex flex-col items-center lg:items-start">
      <div className="relative ml-36 lg:ml-40"> 
        <div className="absolute inset-0 bg-red-600/30 blur-2xl rounded-full"></div>

        {/* LOGO (WHITE COLOR) */}
        <img
          src={logo}
          alt="Vivina Events Logo"
          className="relative w-62 sm:w-70 object-contain"
          style={{ filter: "brightness(0) invert(1)" }}  // logo white
        />
      </div>

      {/* Quote BELOW LOGO */}
      <p className="mt-6 text-sm sm:text-base text-red-400 italic text-right lg:text-right max-w-lg">
        “Luxury Events. Flawless Execution. Unforgettable Memories.”
      </p>
    </div>
  </div>
</div>


    </section>
  );
};

export default AboutVivina;



// import React from "react";

// const AboutVivina = () => {
//   return (
//     <section className="w-full bg-black text-white">

//       {/* HERO / BANNER */}
//       <div className="relative min-h-[60vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-black">
//         <div className="max-w-4xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-500">
//             About Vivina Events
//           </h1>
//           <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
//             Where Every Event Becomes a Masterpiece
//           </p>
//         </div>
//       </div>

//       {/* OUR STORY */}
//       <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-2xl sm:text-3xl font-bold text-red-500">
//             Our Story
//           </h2>
//           <p className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base">
//             Vivina Events was founded with a simple yet powerful vision — to
//             transform ordinary occasions into extraordinary experiences. What
//             began as a passion for celebrations has grown into a premium event
//             management brand known for elegance, creativity, and flawless
//             execution.
//           </p>

//           <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
//             We believe every event tells a story. At Vivina Events, we listen
//             carefully, design thoughtfully, and execute passionately to ensure
//             each celebration reflects our client’s personality and purpose.
//           </p>
//         </div>

//         {/* Story Card */}
//         <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-lg">
//           <p className="text-lg sm:text-xl font-semibold text-white">
//             “Your Vision. Our Expertise. Perfectly Delivered.”
//           </p>
//         </div>
//       </div>

//       {/* FOUNDER VISION */}
//       <div className="bg-gradient-to-br from-[#1a0003] via-[#2b0006] to-black py-16">
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="order-2 lg:order-1">
//             <h2 className="text-2xl sm:text-3xl font-bold text-red-500">
//               Founder’s Vision
//             </h2>
//             <p className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base">
//               The vision behind Vivina Events is to redefine event planning by
//               blending luxury, innovation, and personalized service. Our goal is
//               not just to organize events, but to create memorable experiences
//               that leave a lasting impression.
//             </p>

//             <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
//               With attention to detail, transparent communication, and a
//               client-first approach, Vivina Events strives to become a trusted
//               name in premium event management.
//             </p>
//           </div>

//           <div className="order-1 lg:order-2 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
//             <p className="text-lg font-medium text-white">
//               Luxury Events. Flawless Execution. Unforgettable Memories.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* OUR PROMISE */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-2xl sm:text-3xl font-bold text-red-500 text-center">
//           Our Promise
//         </h2>

//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             "Personalized planning tailored to your vision",
//             "Premium-quality vendors and services",
//             "Seamless coordination and timely execution",
//             "Unforgettable experiences, every time",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-red-500 transition"
//             >
//               <p className="text-gray-200 text-sm sm:text-base">
//                 {item}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* SECONDARY BANNER LINES */}
//       <div className="bg-red-700 py-12">
//         <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
//           <p className="text-white text-sm sm:text-base">
//             Where Every Event Becomes a Masterpiece
//           </p>
//           <p className="text-white text-sm sm:text-base">
//             Celebrate Life’s Moments in Style
//           </p>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default AboutVivina;
