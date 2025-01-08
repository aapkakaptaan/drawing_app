import React from "react";

import anim5 from "./lottie/anim.json";
import Canvas from "./Canvas";

const anim5o = {
  loop: true,
  autoplay: true,
  animationData: anim5,
  renderSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Home = () => {
  return (
    <div className="bg-stone-900 flex justify-center items-center w-full h-screen overflow-hidden">
      <Canvas />
    </div>
  );
};
export default Home;
