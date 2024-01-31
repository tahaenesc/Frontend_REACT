// Async Await

// Promise'ların yazım şeklinin yerine getirilmiş JS içerisindeki en son özelliktir.

// Fetch

function callAPIRequests () {
  fetch('https://dummyjson.com/products').then(response => {
    // Fetch isteklerden dönen response'u çekme süreci de vakit alacak olan bir asenkron işlemdir. Bu sebeple Promise döndürecektir.
    // console.log('res.json()', res.json())

    response.json().then(data => {
      console.log('data', data)
    })
  })

  // Yukarıdaki yazım şekli yerine Promise'ları zincirleyebiliriz:
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => console.log('gelen data', data))
    .catch(error => console.log('error', error))
}

// callAPIRequests()

async function asyncGetRequest (url) {
  try {
    const response = await fetch(url)
    const data = await response.json()

    console.log('get request data', data)

    return data
  } catch (error) {
    console.log('error', error)

    return error
  }
}

// asyncGetRequest('https://dummyjson.com/products')

async function asyncPostRequest (url, options) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()

    console.log('post request data', data)

  } catch (error) {
    console.log('error', error)
  }
}

const payload = { title: 'Bugunku derse calisin', completed: false, userId: 2 }

/*asyncPostRequest('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})*/

// Async/Await kullanarak aşağıdaki asenkron api isteklerini seri nasıl çalıştırabiliriz?

// GET https://jsonplaceholder.typicode.com/todos/1
// GET https://jsonplaceholder.typicode.com/todos/2
// GET https://jsonplaceholder.typicode.com/todos/3

async function runRequestsInSerial () {
  const responseOneData = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/1')
  const responseTwoData = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/2')
  const responseThreeData = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/3')

  console.log('responseOneData', responseOneData)
  console.log('responseTwoData', responseTwoData)
  console.log('responseThreeData', responseThreeData)
}

// runRequestsInSerial()

// İsteklerimizi paralel nasıl çalıştırabiliriz?

async function runRequestsInParallel() {
  const responseOne = asyncGetRequest('https://jsonplaceholder.typicode.com/todos/1') // 2 saniye
  const responseTwo = asyncGetRequest('https://jsonplaceholder.typicode.com/todos/2') // 5 saniye
  const responseThree = asyncGetRequest('https://jsonplaceholder.typicode.com/todos/3') // 3 saniye

  const responseOneData = await responseOne
  const responseTwoData = await responseTwo
  const responseThreeData = await responseThree

  // Program bu satıra geldiğinde 5 saniye totalde geçmiş olacaktır.
  console.log('responseOneData', responseOneData)
  console.log('responseTwoData', responseTwoData)
  console.log('responseThreeData', responseThreeData)
}

// runRequestsInParallel()

// İsteklerimizi hem seri hem de paralel nasıl çalıştırabiliriz?

// 1. ve 2. istek aynı anda atılacak. Bu ikisi bittikten sonra 3. istek atılacak:
async function runRequestsInBoth () {
  const res1= asyncGetRequest('https://jsonplaceholder.typicode.com/todos/1')
  const res2 = asyncGetRequest('https://jsonplaceholder.typicode.com/todos/2')

  const res1Data = await res1
  const res2Data = await res2

  const res3Data = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/3')

  console.log('Both res1Data', res1Data)
  console.log('Both res2Data', res2Data)
  console.log('Both res3Data', res3Data)
}

runRequestsInBoth()
