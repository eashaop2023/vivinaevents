import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3b0000",
        color: "#fff",
        py: 3,
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} <strong>Vivina Event’s</strong>. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <span onClick={() => navigate("/pressandblog")} className="cursor-pointer">
            Press & Blog
          </span>

          <span onClick={() => navigate("/patent")} className="cursor-pointer">
            Patent
          </span>

          <span onClick={() => navigate("/privacy")} className="cursor-pointer">
            Privacy
          </span>

          <span onClick={() => navigate("/terms")} className="cursor-pointer">
            Terms
          </span>

          <span onClick={() => navigate("/cookies")} className="cursor-pointer">
            Cookies
          </span>

          {/* SAME ContactUs page */}
          <span onClick={() => navigate("/contactus")} className="cursor-pointer">
            Contact
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;



// import React from "react";
// import { Box, Typography, Link } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: "#3b0000",
//         color: "#fff",
//         py: 3,
//         // mt: 6,
//          width: "100%",
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: "1200px",
//           mx: "auto",
//           px: 2,
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         <Typography variant="body2">
//           © {new Date().getFullYear()} <strong>Vivina Event’s</strong>. All rights reserved.
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           {[
//             "Press & Blog",
//             "Patent",
//             "Privacy",
//             "Terms",
//             "Cookies",
//             "Contact",
//           ].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               underline="none"
//               sx={{
//                 color: "#fff",
//                 fontSize: "14px",
//                 "&:hover": {
//                   textDecoration: "underline",
//                 },
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;