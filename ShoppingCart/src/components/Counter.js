import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <div>{count}</div>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
};

export default Counter;
