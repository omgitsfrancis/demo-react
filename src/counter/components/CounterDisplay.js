import React from "react";

const CounterDisplay = (props) => {
    const { count } = props;

    return <span>
        Counter: {count}
    </span>
}

export default CounterDisplay