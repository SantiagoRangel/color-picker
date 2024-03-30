import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /* ------------------------ */
    /*         Elements         */
    /* ------------------------ */
    const button = document.getElementById("colorPicker-button");

    const result = document.getElementById("colorPicker-result");

    const hexCode = document.getElementById("colorPicker-hex");

    /* ------------------------ */
    /*        Eye Dropper       */
    /* ------------------------ */
    // Check for Browser's support
    if (typeof EyeDropper !== "undefined") {
      button.addEventListener("click", async () => {
        try {
          // Create a new EyeDropper instance
          const eyeDropper = new EyeDropper();

          // Open the EyeDropper
          const selectedColor = await eyeDropper.open();

          // Set the background color
          result.style.backgroundColor = selectedColor.sRGBHex;

          // Display the selected hex color
          hexCode.textContent = selectedColor.sRGBHex;
        } catch (error) {
          console.error(error);
        }
      });
    } else {
      console.error("EyeDropper API is not supported in this browser.");
    }
  }, []);
  return (
    <>
      <div className="picker">
        <div
          className="color-circles"
          // style="margin-bottom: 15px"
        >
          <div
            className="color-circle"
            //  style="background-color: #aa8d00"
          ></div>
          <div
            className="color-circle"
            //  style="background-color: #fd0a5b"
          ></div>
          <div
            className="color-circle"
            //  style="background-color: #328f00"
          ></div>
          <div
            className="color-circle"
            // style="background-color: #004da5"
          ></div>
        </div>

        <button id="colorPicker-button">Pick a Color</button>
        <div id="colorPicker-result"></div>
        <span id="colorPicker-hex">transparent</span>
      </div>
    </>
  );
}

export default App;
