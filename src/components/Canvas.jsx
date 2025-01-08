import React, { useState, useRef, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { BiEraser } from "react-icons/bi";
import { FaUndo, FaRedo, FaTrash, FaSync } from "react-icons/fa";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import DrawIcon from "@mui/icons-material/Draw";
import Lottie from "react-lottie";
import anim5 from "./lottie/anim.json";

const anim5o = {
  loop: true,
  autoplay: true,
  animationData: anim5,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Canvas() {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [mode, setMode] = useState("black");
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col p-4 w-full h-full text-white">
      {showAnimation && (
        <div className="w-[50vh] right-0 bottom-0 z-50 absolute flex justify-center items-center">
          <div className="min-w-[240px]">
            <Lottie options={anim5o} />
          </div>
        </div>
      )}
      <div className="flex xs:flex-wrap gap-4 items-center mb-4">
        <div
          onClick={() => {
            setEraseMode(false);
            if (canvasRef.current) {
              canvasRef.current.eraseMode(false);
            }
          }}
          className={
            "p-1 transition-all flex justify-center items-center duration-300 rounded-full hover:cursor-pointer  " +
            (eraseMode === false ? " text-black bg-white " : "")
          }
        >
          <DrawIcon />
        </div>
        <div
          onClick={() => {
            setEraseMode(true);
            if (canvasRef.current) {
              canvasRef.current.eraseMode(true);
            }
          }}
          className={
            "p-1 transition-all flex justify-center items-center duration-300 rounded-full  text-2xl hover:cursor-pointer " +
            (eraseMode === true ? " text-black bg-white " : " ")
          }
        >
          <BiEraser />
        </div>
        <div
          onClick={() => canvasRef.current && canvasRef.current.undo()}
          className="p-2 text-2xl hover:cursor-pointer"
        >
          <FaUndo />
        </div>
        <div
          onClick={() => canvasRef.current && canvasRef.current.redo()}
          className="p-2 text-2xl hover:cursor-pointer"
        >
          <FaRedo />
        </div>
        <div
          onClick={() => canvasRef.current && canvasRef.current.clearCanvas()}
          className="p-2 text-2xl hover:cursor-pointer"
        >
          <FaTrash />
        </div>
        <div
          onClick={() => canvasRef.current && canvasRef.current.resetCanvas()}
          className="p-2 text-2xl hover:cursor-pointer"
        >
          <FaSync />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="border transition-all duration-300 w-fit border-white rounded-3xl p-2 flex justify-center items-center">
          <div
            onClick={() => {
              if (mode === "black") return;
              canvasRef.current && canvasRef.current.resetCanvas();
              setMode("black");
            }}
            className={
              "p-1 transition-all duration-300 rounded-full flex justify-center items-center hover:cursor-pointer  " +
              (mode === "black" ? " text-black bg-white " : "")
            }
          >
            <LightModeIcon />
          </div>
          <div
            onClick={() => {
              if (mode === "white") return;
              canvasRef.current && canvasRef.current.resetCanvas();
              setMode("white");
            }}
            className={
              "p-1 transition-all duration-300 rounded-full flex justify-center items-center  text-2xl hover:cursor-pointer " +
              (mode === "white" ? " text-black bg-white " : " ")
            }
          >
            <NightlightRoundIcon />
          </div>
        </div>
      </div>
      <div className="border hover:cursor-pointer mt-2 rounded-lg overflow-hidden w-full h-full">
        <ReactSketchCanvas
          ref={canvasRef}
          strokeWidth={1}
          strokeColor={mode}
          canvasColor={mode === "white" ? "black" : "white"}
        />
      </div>
    </div>
  );
}

export default Canvas;
