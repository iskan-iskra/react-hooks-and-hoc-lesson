import AppCounter from "./components/AppCounter";
import AppCounterWithStore from "./components/AppCounterWithStore";
import withLogger from "./hocs/WithLogger";
import useCounter from "./hooks/use-counter";

const AppCounterWithLogger = withLogger(AppCounter);

export default function App() {
  const [count, increase, decrease] = useCounter(10);

  return (
    <>
      <h1>test</h1>
      <AppCounterWithLogger
        counterState={count}
        decrementHandler={decrease}
        incrementHandler={increase}
      />
      <hr />
      <AppCounterWithStore />
      <hr />
      <AppCounterWithStore />
      <hr />
      <AppCounterWithStore />
      <hr />
      <AppCounterWithStore />
      <hr />
      <AppCounterWithStore />
    </>
  );
}
