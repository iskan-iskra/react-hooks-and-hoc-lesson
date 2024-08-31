import { useCallback, useDebugValue, useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const incrementHandler = useCallback(() => {
    setCount((v) => v + 1);
  }, [setCount]);

  const decrementHandler = useCallback(() => {
    setCount((v) => v - 1);
  }, [setCount]);

  useDebugValue("custom counter hook");

  return [count, incrementHandler, decrementHandler];
}
