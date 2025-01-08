import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import penAnimation from "./penAnim.json";
import { ReactTyped } from "react-typed";

const Intro = () => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [animationFinished2, setAnimationFinished2] = useState(false);

  useEffect(() => {
    const timeout2 = setTimeout(() => setAnimationFinished2(false), 10);
    const timeout = setTimeout(() => setAnimationFinished(true), 4000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);
  const penAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: penAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen bg-gradient-to-br from-black via-stone-800 to-stone-900 flex flex-col justify-center items-center ${
        animationFinished
          ? "opacity-0 transition-all duration-500 -z-10"
          : "z-50"
      }`}
    >
      <div
        className={`max-w-[30%] min-w-[280px] duration-[1100ms] flex flex-col justify-center items-center transition-all transform-gpu ${
          animationFinished2
            ? "scale-[1.1] rotate-45 -translate-x-[20vw]"
            : "scale-100 translate-x-0"
        } ${
          animationFinished
            ? "opacity-0 rotate-45 scale-[1.1] translate-x-[20vw]"
            : "opacity-100"
        }`}
      >
        <Lottie options={penAnimationOptions} />
      </div>
      <div
        className={`max-w-[70%] min-w-[280px] duration-[1100ms] flex flex-col justify-center items-center transition-all transform-gpu ${
          animationFinished2
            ? "scale-[1.1] -translate-x-[20vw]"
            : "scale-100 translate-x-0"
        } ${
          animationFinished
            ? "opacity-0 scale-[1.1] translate-x-[20vw]"
            : "opacity-100"
        }`}
      >
        <ReactTyped
          className="text-white text-center text-5xl xs:text-xl w-full font-poppins"
          strings={["Draw the world as u like"]}
          typeSpeed={50}
          backSpeed={50}
        />
      </div>
    </div>
  );
};

export default Intro;
