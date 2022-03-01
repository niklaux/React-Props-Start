import React from "react";
import Card from "./Cards";

function App() {
  return (
    <div>
      <Card
        name="Mariah Carey"
        img="https://media.vanityfair.com/photos/60e741b5af85de24e5dd2ac7/master/pass/1180494999"
        tel="09123"
        email="mc@gmail.com"
      />

      <Card
        name="Whitney Houston"
        img="https://upload.wikimedia.org/wikipedia/commons/5/52/Whitney_Houston_%28cropped3%29.JPEG"
        tel="12344"
        email="WHIT@gmail.com"
      />

      <Card
        name="Celine Dion"
        img="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc0ODg2MzM0ODE4Mjkz/gettyimages-473806450.jpg"
        tel="5411423"
        email="CD@gmail.com"
      />
    </div>
  );
}

export default App;
