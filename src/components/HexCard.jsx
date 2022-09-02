import { createSignal } from "solid-js";
import CopyIcon from "./icons/CopyIcon";
export default function HexCard(props) {
  const [copyButtonText, setCopyButtonText] = createSignal("Click to copy");

  function handleCopy(color) {
    navigator.clipboard.writeText(color).then(
      () => {
        /* Resolved - text copied to clipboard */
        setCopyButtonText("Color copied 😀");
        setTimeout(() => {
          setCopyButtonText("Click to copy");
        }, 3000);
      },
      () => {
        /* Rejected - clipboard failed */
      }
    );
  }
  return (
    <div
      style={{
        background: props.color,
        "&:hover": {
          background: "red",
        },
      }}
      className="hexCard"
    >
      <div className="hexCardInternalContainer">
        <div className="colorLabel">{props.color}</div>
        <button onClick={() => handleCopy(props.color)} className="copyLabel">
          <span>{copyButtonText()}</span>
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}
