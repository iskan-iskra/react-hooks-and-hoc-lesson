import { getTest } from "./tools/test-func";

export default function App() {
  const { count, increase, decrease } = getTest();
  return (
    <>
      <h1>test</h1>
    </>
  );
}
