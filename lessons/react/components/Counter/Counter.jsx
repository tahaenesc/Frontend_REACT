import { useState } from "react"

import styles from './Counter.module.css'

console.log('styles', styles)

export function Counter() {
  // Component içerisinde birden fazla state tanımlanabilir
  // State içerisinde tutulan data herhangi bir veri tipinde olabilir.
  const [counter, setCounter] = useState(0) // useState'in return ettiği: [oluşturulan state'in readonly değişkeni, state'in güncellenebileceği set metodu]
  const [boxes, setBoxes] = useState([])

  const handleCounterIncrease = () => {
    setCounter(counter + 1)
  }

  const handleCounterDecrease = () => {
    setCounter(counter - 1)
  }

  const handleCounterReset = () => {
    setCounter(0)
  }

  const handleBoxAdd = () => {
    setBoxes([
      ...boxes,
      new Date()
    ])
  }

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={handleCounterIncrease}>Arttır</button>
      <button onClick={handleCounterDecrease}>Azalt</button>
      <button onClick={handleCounterReset}>Sıfırla</button>
      <br />
      <br />
      <hr />
      <br />
      <div>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
        <div>Child 4</div>
        <div>Child 5</div>
      </div>
      <br />
      <button onClick={handleBoxAdd}>Kutu Ekle</button>
      <br />
      <br />
      {/* Conditional Rendering (Koşullu Render) */}
      {
        boxes.length > 0
          ? <div className={styles['box-wrapper']}>
            {
              boxes.map((box, index) => (
                <div className={styles.box} key={`benbenzersizim${index}`}>{
                    box.toString()
                  }</div>
              ))
            }
          </div>
          : <span>Lütfen bir kutu ekleyin!</span>
      }
    </>
  );
}
