import { createSignal, Show } from "solid-js";
import RandomColor from "./assets/RandomColor";
import Palette from "./components/Palette";
import FeatureNotAvailable from "./components/FeatureNotAvailable";
import * as configcat from "configcat-js";

function App() {
  const hexColors = ["#34568B", "#FF6F61", "#6B5B95", "#88B04B"];
  const [canShowRandomColorGenerator, setCanShowRandomColorGenerator] =
    createSignal(true);

  let configCatClient = configcat.createClient("6YzaCJW7q0WIJf6W33dEdg/UQcozJmaIkKYF55SxChDFw")

  configCatClient.getValueAsync("canshowrandomcolorgenerator",  false)
.then( value => {
  setCanShowRandomColorGenerator(value);
});

  return (
    <div className="app">
      <h1>Welcome to Hex Color Palette</h1>
      <Palette hexColors={hexColors} />
      <Show
        when={canShowRandomColorGenerator()}
        fallback={<FeatureNotAvailable />}
      >
        <RandomColor />
      </Show>
    </div>
  );
}

export default App;
