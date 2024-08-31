import useCounterStore from "../hooks/use-counter-store";
import AppCounter from "./AppCounter";

export default function AppCounterWithStore() {
  const [count, increaseHandler, decreaseHandler] = useCounterStore();
  return (
    <>
      <AppCounter
        counterState={count}
        decrementHandler={decreaseHandler}
        incrementHandler={increaseHandler}
      />
    </>
  );
}
