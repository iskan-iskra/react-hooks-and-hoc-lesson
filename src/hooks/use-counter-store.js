import { counterStore } from "../store";
import useStore from "../hooks/use-store";

export default function useCounterStore() {
  const count = useStore(counterStore);

  const increaseHandler = () => counterStore.setState(count + 1);

  const decreaseHandler = () => counterStore.setState(count - 1);

  return [count, increaseHandler, decreaseHandler];
}
