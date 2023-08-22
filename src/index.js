import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App_v2 from "./App_v2";
// import StarRating from "./StarRating";
import { useState } from "react";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} times.</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App_v2 />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "good", "very good", "excellent"]}
    />
    <StarRating size="24" color="red" />
    <Test /> */}
  </React.StrictMode>
);
