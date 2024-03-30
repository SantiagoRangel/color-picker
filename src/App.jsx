import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const button = document.getElementById("colorPicker-button");

    const result = document.getElementById("colorPicker-result");

    const hexCode = document.getElementById("colorPicker-hex");

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
      <div
        className="picker"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="/eyedropper.svg"
            style={{ width: "100px", marginBottom: "2rem" }}
          />
        </div>
        <button id="colorPicker-button" style={{ marginBottom: "2rem" }}>
          Pick a Color
        </button>
        <div
          id="colorPicker-result"
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <span id="colorPicker-hex">transparent</span>
        </div>
      </div>
    </>
  );
}

export default App;
