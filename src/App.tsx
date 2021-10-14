import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h1>useState</h1>
      <hr />

      <Counter />

      <Usuario />
      <br />
      <hr />
      <h1>useEffect - useRef</h1>
      <hr />

      <TimerPadre />
    </>
  );
}

export default App;
