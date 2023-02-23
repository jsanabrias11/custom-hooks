import { useState } from "react"

export const useCounter = (inicialCounter = 10) => {

    const [counter, setCounter] = useState(inicialCounter);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        setCounter(counter - value);
    }

    const resetCounter = () => {
        setCounter(inicialCounter);
    }

  return {
    counter,
    increment,
    decrement,
    resetCounter
  }
}
