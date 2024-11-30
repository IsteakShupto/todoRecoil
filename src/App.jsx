import { RecoilRoot } from "recoil";
import "./App.css";
import Inputs from "./Inputs";
import Todos from "./Todos";

function App() {
  return (
    <>
      <RecoilRoot>
        <Inputs />
        <Todos />
      </RecoilRoot>
    </>
  );
}

export default App;
