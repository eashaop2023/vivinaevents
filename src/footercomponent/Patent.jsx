import React from "react";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Patent() {
  return (
    <section
      className="
        min-h-screen px-4 sm:px-6 lg:px-10 py-16
        bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white "
    >
      <div
        className="
          max-w-[1400px] mx-auto
          grid lg:grid-cols-[1.1fr_1fr] gap-12
          p-6 sm:p-10 lg:p-14
          rounded-[28px]
          bg-gradient-to-b from-black/55 to-black/75
          border border-white/10
          shadow-[0_0_80px_rgba(255,80,80,0.25),inset_0_0_60px_rgba(255,0,0,0.08)]
        "
      >
        {/* ================= LEFT ================= */}
        <div>
          <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs sm:text-sm">
            🛡 Patent Pending Technology
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-tight">
            Innovation in{" "}
            <span className="bg-gradient-to-r from-red-400 to-indigo-400 bg-clip-text text-transparent">
              Progress
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-white/80 leading-relaxed text-sm sm:text-base">
            Our latest technology is patent pending, showcasing our commitment
            to pioneering innovation in content creation and creator-business
            matchmaking.
          </p>

          {/* INNER CARD */}
          <div className="mt-8 p-6 rounded-xl bg-black/40 border border-white/10">
            <p className="text-white/60 text-sm">Indian Patent Application</p>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-red-400 font-semibold">
                IN 202341069420
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-red-400/20 text-red-300">
                Pending
              </span>
            </div>

            <p className="mt-4 text-white/60 text-sm">Filing Date</p>
            <p className="mt-1">December 15, 2023</p>

            <p className="mt-4 text-white/60 text-sm">Patent Title</p>
            <p className="mt-1">
              System and Method for Automated Content Creator-Business
              Matchmaking Using AI
            </p>

            <p className="mt-4 text-white/60 text-sm">Key Claims</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-gray-300">
              <li>AI-powered creator matching algorithm</li>
              <li>Automated scheduling and booking system</li>
              <li>Real-time content delivery platform</li>
              <li>Secure payment processing method</li>
            </ul>
          </div>

          <div className="inline-block mt-6 px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-300 text-sm">
            <AutoAwesomeOutlinedIcon/> Patent Application Under Review
          </div>

          <p className="mt-4 max-w-xl text-white/60 text-sm leading-relaxed">
            This patent application is currently under review by the Indian
            Patent Office. The technology described in this patent focuses on revolutionizing the content
            creation industry through AI-driven solutions.
          </p>
        </div>

        {/* ================= RIGHT ================= */}
        <div>
          {/* FEATURES */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <Feature
              icon={<FlashOnIcon fontSize="small" />}
              title="AI Platform"
              text="Next-gen content creation platform with intelligent matching algorithms"
            />
            <Feature
              icon={<LockOutlinedIcon fontSize="small" />}
              title="Security"
              text="Military-grade encryption with blockchain verification"
            />
            <Feature
              icon={<TrackChangesIcon fontSize="small" />}
              title="Smart Matching"
              text="Neural networks analyze data points for perfect creator-client fits"
            />
            <Feature
              icon={<CodeIcon fontSize="small" />}
              title="Automation"
              text="Self-learning algorithms optimize workflows in real-time"
            />
          </div>

          {/* PROGRESS */}
          <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-white/10">
            <h3 className="text-lg font-semibold mb-6">Patent Progress</h3>

            <Progress
              title="Initial Filing"
              date="Dec 2023"
              status="Completed"
              color="red"
            />
            <Progress
              title="Technical Review"
              date="Jan 2024"
              status="In Progress"
              color="red"
            />
            <Progress
              title="Final Examination"
              date="Q2 2024"
              status="Upcoming"
              color="gray"
            />

            <div className="mt-8 flex flex-col sm:flex-row justify-between gap-6 text-center">
              <Stat value="45 Days" label="Processing Time" />
              <Stat value="2 of 3" label="Review Phase" />
              <Stat value="60%" label="Completion" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

const Feature = ({ icon, title, text }) => (
  <div
    className="
      p-6 rounded-2xl bg-black/50 border border-white/10
      hover:bg-white/5
    "
  >
    <div
      className="
        w-12 h-12 mb-4 flex items-center justify-center rounded-xl
        bg-red-500/20 text-red-500 border border-red-500
      "
    >
      {icon}
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm text-white/80 leading-relaxed">{text}</p>
  </div>
);

const Progress = ({ title, date, status, color }) => {
  const colors = {
    red: "bg-red-500/20 text-red-500 border border-red-400",
    orange: "bg-orange-400 text-orange-300",
    gray: "bg-gray-500/10 text-gray-300 border border-gray-400",
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <span className={`w-2.5 h-2.5 rounded-full ${colors[color]}`} />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-white/60">{date}</p>
      </div>
      <span
        className={`ml-auto px-3 py-1 rounded-full text-xs ${colors[color]} bg-opacity-20`}
      >
        {status}
      </span>
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <h4 className="text-lg font-semibold">{value}</h4>
    <p className="text-sm text-white/60">{label}</p>
  </div>
);


// import React from 'react'
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';

// const Patent = () => {
//   return (
//     <section className="min-h-screen w-full bg-gradient-to-br from-black via-red-950 to-black text-white py-16 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Outer Glass Container */}
//         <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//             {/* LEFT COLUMN */}
//             <div className="lg:col-span-2 space-y-6">

//               {/* Badge */}
//               <span className="inline-flex items-center gap-2 text-2xs px-4 py-2 rounded-full bg-red-500/10 border border-white/10 text-white-500">
//                 <FiberManualRecordIcon/> Patent Pending Technology
//               </span>

//               {/* Heading */}
//               <h1 className="text-4xl md:text-5xl font-bold">
//                 Innovation in <span className="text-purple-400">Progress</span>
//               </h1>

//               <p className="text-gray-400 max-w-xl">
//                 Our latest technology is patent pending, showcasing our
//                 commitment to pioneering innovation in content creation and
//                 creator-business matchmaking.
//               </p>

//               {/* Patent Card */}
//               <div className="bg-black/40 rounded-2xl p-6 border border-white/10 space-y-4">

//                 <h3 className="text-lg font-semibold text-red-400">
//                   Indian Patent Application
//                 </h3>

//                 <p className="text-sm text-gray-300">
//                   <span className="font-semibold text-white">
//                     IN 202341069420
//                   </span>{" "}
//                   <span className="ml-2 text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">
//                     Pending
//                   </span>
//                 </p>

//                 <p className="text-sm text-gray-400">
//                   <strong>Filing Date:</strong> December 15, 2023
//                 </p>

//                 <p className="text-sm text-gray-400">
//                   <strong>Patent Title:</strong><br />
//                   System and Method for Automated Content Creator-Business
//                   Matchmaking Using AI
//                 </p>

//                 <div>
//                   <h4 className="font-semibold mb-2">Key Claims</h4>
//                   <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
//                     <li>AI-powered creator matching algorithm</li>
//                     <li>Automated scheduling & booking system</li>
//                     <li>Real-time content delivery platform</li>
//                     <li>Secure payment processing method</li>
//                   </ul>
//                 </div>

//               </div>

//               {/* Status */}
//               <div className="flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-2 py-2 rounded-xl text-sm">
//                 ⚡ Patent Application Under Review
//               </div>
//               <p>This patent application is currently under review by the Indian Patent Office. 
//                 The technology described in this patent focuses on revolutionizing the content creation 
//                 industry through innovative AI-driven solutions.
//               </p>
//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="space-y-6">

//               {/* Feature Cards */}
//               <div className="grid grid-cols-2 gap-4">

//                 <FeatureCard
//                   icon={<ElectricBoltOutlinedIcon fontSize="medium" />} 
//                   title="AI Platform"
//                   desc="Next-gen content creation platform with intelligent matching algorithms."
//                 />

//                 <FeatureCard
//                   icon={<LockOutlinedIcon />}
//                   title="Security"
//                   desc="Military-grade encryption with blockchain verification."
//                 />

//                 <FeatureCard
//                   icon={<AutoAwesomeOutlinedIcon />}
//                   title="Smart Matching"
//                   desc="Neural networks analyze data points for perfect creator-client fit."
//                 />

//                 <FeatureCard
//                   icon={<SettingsOutlinedIcon />}
//                   title="Automation"
//                   desc="Self-learning algorithms optimize workflows in real-time."
//                 />
//               </div>

//               {/* Progress Card */}
//               <div className="bg-black/40 rounded-2xl p-6 border border-white/10 space-y-4">

//                 <h3 className="font-semibold text-lg flex items-center gap-2">
//                   <SecurityOutlinedIcon className="text-red-500 text-2xl" />
//                   Patent Progress
//                 </h3>

//                 <ProgressItem
//                   title="Initial Filing"
//                   date="Dec 2023"
//                   status="Completed"
//                   color="green"
//                 />

//                 <ProgressItem
//                   title="Technical Review"
//                   date="Jan 2024"
//                   status="In Progress"
//                   color="yellow"
//                 />

//                 <ProgressItem
//                   title="Final Examination"
//                   date="Q2 2024"
//                   status="Upcoming"
//                   color="gray"
//                 />

//                 <div className="grid grid-cols-3 text-center mt-6">
//                   <Stat value="45 Days" label="Processing Time" />
//                   <Stat value="2 of 3" label="Review Phase" />
//                   <Stat value="60%" label="Completion" />
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Patent;

// /* 🔹 Sub Components */

// const FeatureCard = ({ icon, title, desc }) => (
//   <div className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-red-500 transition">
//     <div className="text-red-500 mb-3">{icon}</div>
//     <h4 className="font-semibold text-sm mb-1">{title}</h4>
//     <p className="text-xs text-gray-400">{desc}</p>
//   </div>
// );

// const ProgressItem = ({ title, date, status, color }) => {
//   const colors = {
//     green: "bg-green-500/20 text-green-400",
//     yellow: "bg-yellow-500/20 text-yellow-400",
//     gray: "bg-gray-500/20 text-gray-400",
//   };

//   return (
//     <div className="flex justify-between items-center text-sm">
//       <div>
//         <p className="font-medium">{title}</p>
//         <p className="text-gray-400 text-xs">{date}</p>
//       </div>
//       <span className={`px-3 py-1 rounded-full text-xs ${colors[color]}`}>
//         {status}
//       </span>
//     </div>
//   );
// };

// const Stat = ({ value, label }) => (
//   <div>
//     <p className="text-lg font-bold">{value}</p>
//     <p className="text-xs text-gray-400">{label}</p>
//   </div>
// );

