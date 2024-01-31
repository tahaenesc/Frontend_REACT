import { useSelector, useDispatch } from 'react-redux'

import { increaseCounter, decreaseCounter, resetCounter } from '../../redux/actions'


import styles from './ReduxCounter.module.css'

export function ReduxCounter () {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const handleCounterIncrease = () => {
    dispatch(increaseCounter(5))
  }

  const handleCounterDecrease = () => {
    dispatch(decreaseCounter(5))
  }
  const handleCounterReset = () => {
    dispatch(resetCounter())
  }

  return <div className={styles['wrapper']}>
    <p>Counter: {counter}</p>
    <button onClick={handleCounterIncrease}>Increase</button>
    <button onClick={handleCounterDecrease}>Decrease</button>
    <button onClick={handleCounterReset}>Reset</button>
  </div>
}
