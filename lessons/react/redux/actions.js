// Actions

// Redux store içerisinde gerçekleşebilecek durumlar (eylemler) için aksiyonlar tanımlamımız gerekir.

export const increaseCounter = (payload) => ({
  type: 'INCREASE_COUNTER', // SCREAMING_SNAKE_CASE
  payload
})

export const decreaseCounter = (payload) => ({
  type: 'DECREASE_COUNTER',
  payload
})

export const resetCounter = () => ({
  type: 'RESET_COUNTER'
})
