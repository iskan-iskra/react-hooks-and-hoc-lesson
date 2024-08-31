import { memo } from "react";
import PropTypes from "prop-types";

const AppCounterCore = ({
  counterState,
  incrementHandler,
  decrementHandler,
}) => (
  <>
    <div>
      <span>Counter:</span>
      <span>{counterState}</span>
    </div>
    <div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  </>
);

const AppCounter = memo(AppCounterCore);

AppCounter.displayName = "AppCounter";

AppCounter.propTypes = {
  counterState: PropTypes.number.isRequired,
  incrementHandler: PropTypes.func.isRequired,
  decrementHandler: PropTypes.func.isRequired,
};

export default AppCounter;
