// error hook (нарушение правил использования хуков)

export function getTest() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((v) => v + 1);
  const decrease = () => setCount((v) => v - 1);
  return {
    count,
    increase,
    decrease,
  };
}
