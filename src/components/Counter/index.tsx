import React, {useState} from 'react';
import styles from "./Counter.module.scss"


const Index = () => {
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter(value => ++value)
    }

    return (
        <div className="app">
            <h1>{counter}</h1>
            <button className={styles.button} onClick={() => increment()}>Increment</button>
        </div>
    );
};

export default Index;