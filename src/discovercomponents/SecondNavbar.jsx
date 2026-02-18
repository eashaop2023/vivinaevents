import { NavLink } from "react-router-dom";

const SecondNavbar = () => {
  const navLinks = [
    { path: "", label: "All", exact: true },
    { path: "eventandwedding", label: "Wedding" },
    { path: "prewedding", label: "Pre-Wedding" },
    { path:"proshoot", label :"ProShoot"},
    { path: "parties1", label: "Parties" },
    { path: "corporation", label: "CorporationEvents" },
    { path: "anniversarycle", label: "Anniversary" },
    { path: "birthdays", label: "Birthday Parties" },
    { path: "decorandinteriors", label: "Decor & Interiors" },
  ];

  return (
    <section className=" bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] mt-5 sm:mt-10 overflow-hidden">
      
      {/* TITLE */}
      <div className="text-center px-6 pt-10 pb-6">
        <h1 className="text-white font-semibold mb-1 mt-14 text-[40px] lg:text-[32px] sm:text-[24px]">
          Discover with <span className="text-red-500">Vibe</span>
        </h1>
        <p className="text-gray-400 text-[18px]">
          Explore trending reels from our creators
        </p>
      </div>

      {/* NAV BUTTONS */}
      <div className="overflow-x-auto scrollbar-hide">
        <nav
          className="
            flex gap-5 sm:gap-3
            min-w-max
            justify-center md:justify-start
            px-5 md:px-[60px] lg:px-[150px]
            py-2
          "
        >
          {navLinks.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `
                whitespace-nowrap flex-shrink-0
                px-4 py-2 text-[18px]
                rounded-full border
                transition-all duration-300
                ${
                  isActive
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

    </section>
  );
};

export default SecondNavbar;


// import { NavLink } from "react-router-dom";
// import "./buttonsall.css"
// import VideoSlider from "./VideoSlider";

// const SecondNavbar = () => {
//   const navLinks = [
//     { path: "", label: "All" , exact:true},
//     { path: "eventandweddings", label: "Event & Weddings" },
//     { path: "prewedding", label: "PreWedding" },
//     { path: "clebraties", label: "Celebraties" },
//     { path: "outfitshoots", label: "Outfit Shoots" },
//     { path: "reception", label: "Reception" },
//     { path: "birthdays", label: "Birthday Parties" },
//     { path: "decorandinteriors", label: "Decor & Interiors" }
//   ];

//   return (
//     <section className="second-navbar">
//       <div className="navbar-title">
//         <h1>Discover with <span className="vibe-red">Vibe</span></h1>
//         <p>Explore trending reels from our creators</p>
//       </div>

//       {/* Navigation Buttons */}
//       <nav className="navbar-links">
//         {navLinks.map(item => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             end={item.exact}
//             className={({ isActive }) =>
//               isActive ? "nav-btn active" : "nav-btn"
//             }
//           >
//             {item.label}
//           </NavLink>
//         ))}
//       </nav>
//     </section>
//   );
// };
// export default SecondNavbar;







// import React from 'react'
// import { Link } from 'react-router-dom'
// import './buttonsall.css'

// const SecondNavbar = () => {
//   return (
//     <section className="bg-[#0b0b0b] text-white px-6 py-8">
//        <nav className="flex flex-col gap-6">
//             <div >
//                 <h1 className="text-2xl font-semibold">Discover with Vibe</h1>
//                 <p className="text-sm text-gray-400 mt-1">Explore trending reels from our creators</p>
//             </div>
//             <div className="nav-btn flex gap-3 flex-wrap">
//                 <Link to="/"  className="px-4 py-2 rounded-full bg-[#ff4d2d] text-white text-sm">All</Link>
//                 <Link to="/eventandweddings" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]">Event & Weddings</Link>
//                 <Link to="/cardelivery" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]">Car Delivery</Link>
//                 <Link to="/clebraties" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]">Celebraties</Link>
//                 <Link to="/outfitshoots" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]">Outfit Shoots</Link>
//                 <Link to="/conceets" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]"></Link>
//                 <Link to="/collaborations" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]">Collaborations</Link>
//                 <Link to="/decorandinteriors" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]">Decor & Interiors</Link>
//                 <Link to="/caterers" className="px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-300 text-sm hover:bg-[#2a2a2a]">Caterers</Link>
//             </div>
//         </nav>
//     </section>
//   )
// }

// export default SecondNavbar

// import { Link, NavLink } from "react-router-dom";


// const SecondNavbar = () => {
//   /* Navigation Data */
//     const navLinks = [
//       { path: "/", label: "All" },
//       { path: "/eventandweddings", label: "Event & Weddings" },
//       { path: "/clebraties", label: "Celebraties" },
//       { path: "/outfitshoots", label: "Outfit Shoots" },
//       { path: "/conceets", label: "Concerts" },
//       { path: "/collaborations", label: "Collaborations" },
//       { path: "/decorandinteriors", label: "Decor & Interiors" },
//       { path: "/caterers", label: "Caterers" }
//     ];

//   return (
//     <section className="bg-[#000000] text-white px-6 py-8">
//       {/* Title */}
//       <div className="text-center mb-6">
//         <h1 className="text-2xl font-semibold">Discover with Vibe</h1>
//         <p className="text-sm text-gray-400 mt-1">
//           Explore trending reels from our creators
//         </p>
//       </div>

//       {/* Navigation Buttons */}
//       <nav className="flex justify-center">
//         <div className="flex gap-3 flex-wrap justify-center">
//           {navLinks.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `px-4 py-2 rounded-full text-sm transition-all
//                 ${
//                   isActive
//                     ? "bg-orange-500 text-white"
//                     : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
//                 }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default SecondNavbar;



