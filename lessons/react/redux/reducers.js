// Reducers


// Tanımlanan aksiyonlar meydana geldiğinde Redux store üzerinde gerçekleşmesi gereken değişimleri içeren ara katman (middleware) fonksiyonlar.

// Reducer'ların içerisinde gerçekleşen aksiyona bağlı olarak BÜTÜN STATE'İ yenilenmiş olarak dönmeniz gerekir.

export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'DECREASE_COUNTER':
      return {
        ...state,
        counter: state.counter - action.payload
      }
    case 'RESET_COUNTER':
      return {
        ...state,
        counter: 0
      }
    default:
      return state
  }
}
