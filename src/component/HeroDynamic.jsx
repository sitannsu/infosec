// import React from "react";
// import PropTypes from "prop-types";
// import { Typography } from "@material-tailwind/react";

// function HeroDynamic({ heading, subheading, headingClass, subheadingClass }) {
//   return (
//     <div className="flex-grow flex items-center  ">
//       <div className="w-full text-left lg:w-1/2 ml-10 ">
//         {/* Dynamic Heading */}
//         <Typography variant="h1" color="white" className={`mb-6 font-black ${headingClass}`}>
//           {heading}
//         </Typography>

//         {/* Dynamic Subheading */}
//         <Typography variant="lead" color="white" className={`opacity-80  ${subheadingClass}`}>
//           {subheading}
//         </Typography>
//       </div>
//     </div>
//   );
// }

// HeroDynamic.propTypes = {
//   heading: PropTypes.string.isRequired,
//   subheading: PropTypes.string.isRequired,
//   headingClass: PropTypes.string,
//   subheadingClass: PropTypes.string,
// };

// HeroDynamic.defaultProps = {
//   headingClass: "",
//   subheadingClass: "",
// };

// export default HeroDynamic;


import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

function HeroDynamic({ heading, subheading, headingClass, subheadingClass }) {
  return (
    <div className="flex-grow flex items-center over">
      <div className="w-full text-left lg:w-full ml-10">
        {/* Dynamic Heading */}
        <Typography
          variant="h1"
          color="white"
          className={`mt-20 font-black text-4xl md:text-6xl lg:text-4xl xl:text-6xl ${headingClass}`}
        >
          {heading}
        </Typography>

        {/* Dynamic Subheading */}
        <Typography
          variant="lead"
          color="white"
          className={`opacity-80 text-lg md:text-xl lg:text-2xl ${subheadingClass}`}
        >
          {subheading}
        </Typography>
      </div>
    </div>
  );
}

HeroDynamic.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  headingClass: PropTypes.string,
  subheadingClass: PropTypes.string,
};

HeroDynamic.defaultProps = {
  headingClass: "",
  subheadingClass: "",
};

export default HeroDynamic;

