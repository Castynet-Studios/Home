import Intro from "./Components/Intro/Intro";
import TrustedBy from "./Components/TrustedBy/TrustedBy";

export default function App() {
  return (
    <>
      <div data-testid="app">
        <Intro />
        <TrustedBy />
      </div>
    </>
  );
}
