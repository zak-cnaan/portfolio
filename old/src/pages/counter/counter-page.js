import { useSelector, useDispatch } from "react-redux";
import { couterActions as counterActions } from "../../store/slices/couter";

const CounterPage = () => {
  const dispacth = useDispatch();
  const {counter, isVisible} = useSelector((state) => state.counterReducer);

  const plusCouter = () => {
    dispacth(counterActions.increce());
  };

  const minusCouter = () => {
    dispacth(counterActions.decrece());

  };

  const addSumCouter = () => {
    dispacth(counterActions.addSum(5));
  };

  const toggleCounter = () => {
    dispacth(counterActions.toggle());
  }
  return (
    <div className="container">
      <h1>Counter</h1>
      {isVisible &&<div>Counter: {counter}</div>}
      <button onClick={plusCouter}>Increce +1</button>
      <button onClick={addSumCouter}>Increce +5</button>
      <button onClick={minusCouter}>Decrece -1</button><br />
      <button onClick={toggleCounter}>Toggle</button>
    </div>
  );
};

export default CounterPage;
