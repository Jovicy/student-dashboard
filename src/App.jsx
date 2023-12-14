// // import React from "react";
// import Sidebar from "./components/sidebar.jsx/Sidebar";
// import Content from "./components/contents/Content";
// import "./index.css";
// import Navbar from "./components/navbar/Navbar";

// const App = () => {
//  return (
//     <div className="app flex w-full h-full">
//       <div className="fixed">
//         <Sidebar />
//       </div>
      
//       <div className="flex flex-col ml-64 w-full bg-content-bg gap-2 p-2">
//         <Navbar />
//         <Content />
//       </div>
//     </div>
//  );
// };

// export default App;

import Sidebar from "./components/sidebar.jsx/Sidebar";
import Content from "./components/contents/Content";
import "./index.css";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <div className="app flex w-full">
      <div className="w-1/5">
        <Sidebar/>
      </div>
      <div className="flex flex-col w-4/5 bg-content-bg gap-2 p-2">
        <Navbar/>
        <Content/>
      </div>
    </div>
  );
};

export default App;