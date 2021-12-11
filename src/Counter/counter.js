// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Controls from "./controls";
import * as actions from "./actions";
// import "./Counter.css";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);

  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>
      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   console.log(state.counter.value);
//   console.log(state.counter.step);
//   return {
//     value: state.counter.value,
//     step: state.counter.step,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: (value) => dispatch(actions.increment(value)),
//   onDecrement: (value) => dispatch(actions.decrement(value)),
// });

export default Counter;
