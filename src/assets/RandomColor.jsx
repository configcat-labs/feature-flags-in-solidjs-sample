import { createSignal } from "solid-js";
import HexCard from "../components/HexCard";
import randomColor from "randomcolor";

export default function RandomColor() {
  const [randomHexColor, setRandomHexColor] = createSignal("#047a7c");

  function handleGenerateRandomHexColor() {
    const color = randomColor({luminosity: 'dark'});
    setRandomHexColor(color);
  }

  return (
    <div>
      <h2>Random Hex Color Generator</h2>
      <div className="randomColorWrapper">
        <HexCard color={randomHexColor()} />
      </div>
      <button
        onClick={() => handleGenerateRandomHexColor()}
        className="generateButton"
      >
        Generate
      </button>
    </div>
  );
}
