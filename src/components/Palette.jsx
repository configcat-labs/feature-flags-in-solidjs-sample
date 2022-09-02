import HexCard from "./HexCard";

export default function Palette(props) {
  return (
    <div>
      <h2>Trending Hex Colors</h2>
      <div className="palette">
        <div className="paletteGridWrapper">
          <div className="paletteGrid">
            <For each={props.hexColors}>
              {(hexColor) => {
                return (
                  <HexCard color={hexColor} />
                )
              }}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}