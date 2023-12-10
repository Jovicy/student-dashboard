// // SkillBar.js
// import React from 'react';
// import PropTypes from 'prop-types';
// import { courses } from "../../data/database";

// const SkillBar = ({ percentage }) => {
//   return (
//     <div className="rounded-full h-2 bg-gray-300 w-full">
//       {courses.map((course, index) => (
//         <div
//           key={index}
//           className={`rounded-full h-full ${course.boxColor}`}
//           style={{ width: `${percentage}%` }}
//         >
//       ))}
//     </div>
//   );
// };

// SkillBar.propTypes = {
//   percentage: PropTypes.number.isRequired,
// };

// export default SkillBar;
