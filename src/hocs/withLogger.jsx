import { useEffect } from "react";

export default function withLogger(Component) {
  return function WithLoggerComponent({ ...props }) {
    useEffect(() => {
      console.log(`render component ${Component.displayName}`);
    });
    return <Component {...props} />;
  };
}
