import React, {useReducer} from "react";

function CounterReducer() {
    const intialState = {
        firstCounter: 0,
    }
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "increment":
                return {firstCounter: state.firstCounter + 1 }
            case "incrementFive":
                return {firstCounter: state.firstCounter + 5 }
            case "decrement":
                return {firstCounter: state.firstCounter - 1 }
            case "reset":
                return intialState;
            default:
                throw new Error("Unknown action type");
        }
    }, 0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            <button onClick={() => dispatch({type: "incrementFive"})}>Increment by 5</button>
        </div>
    );
}

export default CounterReducer;