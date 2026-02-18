import { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";


const url="https://script.google.com/macros/s/AKfycbycTyqy1pC-x6dvRUfzB_tf6dBGpv7SSAYuZmMXqYB2OsSj4SXdy8FWxBB81cRApbznZw/exec";


const ApplyForm = () => {
  const [activeForm, setActiveForm] = useState("eventapply");
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    instagram: "",
    iphone: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

  // Email → always lowercase
  if (name === "email") {
    setFormData({ ...formData, email: value.toLowerCase() });
    return;
  }

  // Phone → numbers only, first digit not 0
  if (name === "phone") {
    const v = value.replace(/\D/g, "");
    if (v.length === 1 && v === "0") return;
    setFormData({ ...formData, phone: v });
    return;
  }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        type: activeForm,
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone,
        city: formData.city,
        instagram: formData.instagram,
        iphone: activeForm === "proshootapply" ? formData.iphone : "",
        reason: formData.reason,
      }),
    });

    setShowPopup(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      instagram: "",
      iphone: "",
      reason: "",
    });

    setTimeout(() => setShowPopup(false), 3000);

  } catch (err) {
    console.error("Submit failed", err);
  }
};

  return (
    <section className="min-h-screen px-4 py-24 text-white bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* Heading */}
      <h1 className="text-center text-[32px] sm:text-[40px] font-bold">
        Ready to Start?
      </h1>

      <p className="text-center mt-3 text-sm sm:text-base opacity-80 max-w-[700px] mx-auto">
        Join the world's fastest-growing creator network. Shoot. Edit. Deliver.
        Earn. All through your iPhone.
      </p>

     {/* Toggle buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setActiveForm("eventapply")}
          className={`px-8 py-3 rounded-full font-semibold border transition
            ${
              activeForm === "eventapply"
                ? "bg-gradient-to-r from-red-500 to-red-400"
                : "bg-white/5 border-white/10"
            }`}
        >
          Event Apply
        </button>

        <button
          onClick={() => setActiveForm("proshootapply")}
          className={`px-8 py-3 rounded-full font-semibold border transition
            ${
              activeForm === "proshootapply"
                ? "bg-gradient-to-r from-red-500 to-red-400"
                : "bg-white/5 border-white/10"
            }`}
        >
          Proshoot Apply
        </button>
      </div>

      {/* Form Box */}
      <div className="max-w-[750px] mx-auto mt-14 bg-white/10 backdrop-blur-lg p-10 rounded-[28px] border border-white/10">
        <h2 className="text-center text-[22px] mb-8">
          {activeForm === "eventapply" && "Apply for Event Creator"}
          {activeForm === "proshootapply" && "Apply to Become a ProShoot"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <LabeledInput
            label="Full Name"
            icon={<PersonOutlineOutlinedIcon />}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your Full Name"
          />

          <LabeledInput
            label="Email Address"
            icon={<EmailOutlinedIcon />}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />

          <LabeledInput
            label="WhatsApp Number"
            prefix="+91"
            name="phone"
            value={formData.phone}
             maxLength={10}
            inputMode="numeric"
            onChange={handleChange}
            placeholder="Enter phone number"
          />

          <LabeledInput
            label="City & Area"
            icon={<LocationOnOutlinedIcon />}
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City & Area"
          />

          <LabeledInput
            label="Instagram Profile"
            icon={<InstagramIcon />}
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/username"
          />

          {activeForm === "proshootapply" && (
            <div>
              <label className="text-sm mb-2 block opacity-80">
                iPhone Model
              </label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <PhoneIphoneOutlinedIcon className="text-red-500" />
                <select
                  name="iphone"
                  value={formData.iphone}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none"
                >
                  <option value=""className="bg-white text-gray-400">Select iPhone</option>
                  <option value="iPhone 13Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 13Pro</option>
                  <option value="iPhone 13Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 13Pro Max</option>
                  <option value="iPhone 14Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 14Pro</option>
                  <option value="iPhone 14Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 14Pro Max</option>
                  <option value="iPhone 15" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15</option>
                  <option value="iPhone 15Plus" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15Plus</option>
                  <option value="iPhone 15Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15Pro</option>
                  <option value="iPhone 15Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15Pro Max</option>
                  <option value="iPhone 16" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16</option>
                  <option value="iPhone 16Plus" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16Plus</option>
                  <option value="iPhone 16Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16Pro</option>
                  <option value="iPhone 16Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16Pro Max</option>
                  <option value="iPhone 17" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 17</option>
                  <option value="iPhone 17Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 17Pro</option>
                  <option value="iPhone 17Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 17Pro Max</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="text-sm mb-2 block opacity-80">
              Why do you want to join?
            </label>
            <div className="flex gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
              <AutoAwesomeOutlinedIcon className="text-red-500 mt-1" />
              <textarea
                name="reason"
                rows="4"
                placeholder="Tell us in 1-2 lines why do you want to join"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none resize-none"
              />
            </div>
          </div>

          <button className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-red-400">
            Apply Now
          </button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl text-center">
            <h2 className="font-bold mb-2">Success </h2>
            <p className="mb-4 text-sm">
              Application submitted successfully!.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

/* Reusable Input */
const LabeledInput = ({ label, icon, prefix, ...props }) => (
  <div>
    <label className="text-lg mb-2 block opacity-80">{label}</label>
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
      {icon && <span className="text-red-500">{icon}</span>}
      {prefix && <span className="text-white/70">{prefix}</span>}
      <input
        {...props}
        className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
      />
    </div>
  </div>
);

export default ApplyForm;




// import { useState } from "react";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

// const ApplyForm = () => {
//   const [active, setActive] = useState("events");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const initialForm = {
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     insta: "",
//     reason: "",
//   };

//   const [form, setForm] = useState(initialForm);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (Object.values(form).some((v) => v.trim() === "")) {
//       setError("Please fill all fields ❌");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:8080/api/apply", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...form, type: active }),
//       });

//       if (!res.ok) throw new Error("Failed");

//       setSuccess(true);
//       setForm(initialForm);
//       setTimeout(() => setSuccess(false), 3000);
//     } catch {
//       setError("Something went wrong ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="min-h-screen px-4 sm:px-6 py-20 text-white bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
//       {/* Heading */}
//       <h1 className="text-center text-[26px] sm:text-[32px] md:text-[42px] font-bold">
//         Ready to Start?
//       </h1>

//       <p className="text-center mt-3 text-sm sm:text-base opacity-80 max-w-[700px] mx-auto">
//         Join the world's fastest-growing creator network. Shoot. Edit. Deliver.
//         Earn. All through your iPhone.
//       </p>

//       {/* Toggle */}
//       <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
//         {["events", "flashoot"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setActive(type)}
//             className={`px-6 py-3 rounded-full font-semibold border transition-all text-sm sm:text-base
//               ${
//                 active === type
//                   ? "bg-gradient-to-r from-red-500 to-red-400 border-transparent"
//                   : "bg-[#120806] border-[#3a1a16]"
//               }`}
//           >
//             {type === "events" ? "Events Apply" : "Flashoot Apply"}
//           </button>
//         ))}
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-[520px] mx-auto mt-12"
//       >
//         <h2 className="text-center text-[18px] sm:text-[22px] mb-6">
//           {active === "events"
//             ? "Apply for Events Creator"
//             : "Apply for Flashoot Creator"}
//         </h2>

//         {/* Inputs */}
//         {[
//           {
//             label: "Full Name",
//             icon: <PersonOutlineOutlinedIcon />,
//             name: "name",
//             type: "text",
//             placeholder: "Your full name",
//           },
//           {
//             label: "Email",
//             icon: <EmailOutlinedIcon />,
//             name: "email",
//             type: "email",
//             placeholder: "your@email.com",
//           },
//           {
//             label: "WhatsApp Number",
//             icon: <PhoneOutlinedIcon />,
//             name: "phone",
//             type: "tel",
//             placeholder: "WhatsApp number",
//           },
//           {
//             label: "City & Area",
//             icon: <LocationOnOutlinedIcon />,
//             name: "city",
//             type: "text",
//             placeholder: "City / Area",
//           },
//           {
//             label: "Instagram Profile (Public)",
//             icon: <InstagramIcon />,
//             name: "insta",
//             type: "url",
//             placeholder: "https://instagram.com/username",
//           },
//         ].map((field) => (
//           <div key={field.name} className="mt-6">
//             <label className="block mb-2 text-xs sm:text-sm opacity-85">
//               {field.label}
//             </label>

//             <div className="flex items-center gap-3 bg-[#120806] border border-[#3a1a16] px-4 py-3 rounded-xl">
//               <span className="text-red-400">{field.icon}</span>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 value={form[field.name]}
//                 onChange={handleChange}
//                 className="w-full bg-transparent outline-none text-sm sm:text-base placeholder:text-[#8a6d68]"
//               />
//             </div>
//           </div>
//         ))}

//         {/* Textarea */}
//         <label className="block mt-6 mb-2 text-xs sm:text-sm opacity-85">
//           {active === "events"
//             ? "Why do you want to work on Events?"
//             : "Why do you want to work with Flashoot?"}
//         </label>

//         <div className="flex gap-3 bg-[#120806] border border-[#3a1a16] px-4 py-3 rounded-xl">
//           <AutoAwesomeOutlinedIcon className="text-red-400 mt-1" />
//           <textarea
//             name="reason"
//             rows="4"
//             placeholder="Write briefly..."
//             value={form.reason}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none resize-none text-sm sm:text-base placeholder:text-[#8a6d68]"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full mt-10 py-4 rounded-xl font-semibold text-sm sm:text-base
//             bg-gradient-to-r from-red-500 to-red-400
//             transition hover:-translate-y-1
//             hover:shadow-[0_10px_30px_rgba(255,60,60,0.35)]
//             disabled:opacity-60"
//         >
//           {loading ? "Submitting..." : "🚀 Apply Now to Become a Flashooter→"}
//         </button>

//         {success && (
//           <p className="text-green-400 text-center mt-4 text-sm">
//             ✅ Application submitted
//           </p>
//         )}
//         {error && (
//           <p className="text-red-400 text-center mt-4 text-sm">
//             {error}
//           </p>
//         )}
//       </form>
//     </section>
//   );
// };

// export default ApplyForm;
