// Promise'ler

// Promise'ların Callback'lere göre Artısı

// Callback Hell

// Greet metodunun asenkron callback ile çalışan bir fonksiyon olduğunu varsayalım:
function greet(name, callback) {
  callback(name)
}

greet('Peter', function (name) {
  console.log(`Hi, I am ${name} and also anonymous callback function`)

  greet('Peter', function (name) {
    console.log(`Hi, I am ${name} and also anonymous callback function`)

    greet('Peter', function (name) {
      console.log(`Hi, I am ${name} and also anonymous callback function`)

      greet('Peter', function (name) {
        console.log(`Hi, I am ${name} and also anonymous callback function`)

        greet('Peter', function (name) {
          console.log(`Hi, I am ${name} and also anonymous callback function`)

          greet('Peter', function (name) {
            console.log(`Hi, I am ${name} and also anonymous callback function`)
          })
        })
      })
    })
  })
})

// Promise'lar temelde asekron çalışan işlemlerdir. Kendileri bittiklerinde
// kesinlikle geri dönüş yapacağının sözünü verirler. Bizlerde Promise'ların
// geri dönüş yapıp yapmadığını yardmcı metodlar aracılığıyla takip ederiz.

// XHR Get isteğinin Promise'a dönüştürülmesi

function getRequest (url) {
  // Promise'ın çözülmesi demek, olumlu ve olumsuz (hata var veya yok) olarak bir sonuca erdirilmesine denir
  // Her Promise içerisine Resolve ve Reject adında iki metod kabul eder.
  // Resolve => Promise'ı olumlu olarak çözerken,
  // reject => Promise'ı olumsuz olarak çözecektir.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status < 300) { // eger istek basarili ise
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          })
        }
      }
    }

    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      })
    }

    xhr.open('GET', url)
    xhr.send()
  })
}


// Promise'ın olumlu çözüldüğü durumu yakayabilmek için .then metodu kullanılır.
// Bu metod içerisine gelen data, promise'ın resolve olurken gönderdiği datadır.

function runPromises() {
  // Olumlu dönüş yapacak olan Promise örneği:
  getRequest('https://jsonplaceholder.typicode.com/todos')
    .then(data => {
      // data bu noktadan işleme alınabilir
      console.log('[runPromises] data', data)
    })
    .catch(error => {
      // hata bu noktadan sonra işleme alınabilir
      console.log('[runPromises] error', error)
    })

  // Olumsuz dönüş yapacak olan Promise örneği:
  getRequest('https://jsonplaceholder.typicode.com/pathinvalid')
    .then(data => {
      // data bu noktadan işleme alınabilir
      console.log('[runPromises] data', data)
    })
    .catch(error => {
      // hata bu noktadan sonra işleme alınabilir
      console.log('[runPromises] error', error)
    })
}

// runPromises()


// Promiseları Seri Çalıştırma

// GET https://jsonplaceholder.typicode.com/todos/1
// GET https://jsonplaceholder.typicode.com/todos/2
// GET https://jsonplaceholder.typicode.com/todos/3

// İstiyoruz ki yukarıdaki herbir isteği birbiri ardına çağıralım. Nasıl yapabiliriz?
function runPromisesInSerial () {
  getRequest('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    console.log('[runPromisesInSerial] 1.promise =', data)

    return getRequest('https://jsonplaceholder.typicode.com/todos/2')
  }).then(data => {
    console.log('[runPromisesInSerial] 2. promise =', data)

    return getRequest('https://jsonplaceholder.typicode.com/todos/3')
  }).then(data => {
    console.log('[runPromisesInSerial] 3. promise =', data)
  }).catch(error => {
    console.log('[runPromisesInSerial] error', error)
  })
}

// runPromisesInSerial()

// Promiseları Paralel Çalıştırma

function runPromisesInParallel () {
  getRequest('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    console.log('[runPromisesInParallel] 1.promise =', data)
  }).catch(error => {
    console.log('[runPromisesInParallel] error', error)
  })

  getRequest('https://jsonplaceholder.typicode.com/todos/2').then(data => {
    console.log('[runPromisesInParallel] 2.promise =', data)
  }).catch(error => {
    console.log('[runPromisesInParallel] error', error)
  })

  getRequest('https://jsonplaceholder.typicode.com/todos/3').then(data => {
    console.log('[runPromisesInParallel] 3.promise =', data)
  }).catch(error => {
    console.log('[runPromisesInParallel] error', error)
  })
}

// runPromisesInParallel()


// Promiseları Hem Seri Hemde Paralel Çalıştıma

// 1. ve 2. isteğin aynı anda atılmasından sonra, bu istekler geri dönüş yaptıktan sonra 3. isteğin atılmasını nasıl yapabiliriz?



function runPromisesInBoth () {
  Promise.all([
    getRequest('https://jsonplaceholder.typicode.com/todos/1'),
    getRequest('https://jsonplaceholder.typicode.com/todos/2')
  ]).then(dataArr => {
    const [promise1Data, promise2Data] = dataArr

    console.log('[runPromisesInBoth] 1. promise', promise1Data)
    console.log('[runPromisesInBoth] 2. promise', promise2Data)

    return getRequest('https://jsonplaceholder.typicode.com/todos/3')
  }).then(data => {
    console.log('[runPromisesInBoth] 3. promise', data)
  }).catch(error => {
    console.log('[runPromisesInBoth] error', error)
  })
}

runPromisesInBoth()


// SORU:

// Ürünleri çekebileceğiniz URL: https://dummyjson.com/products

// Dummy Products API'na asenkron olarak bir istek gönderilecek. Bu istek sonucunda ürünler listesi geliyor olacak. Aynı zamanda sayfada bir INPUT ve buton olacak. 

// Butona tıklandığında bu input içerisine yazılan string'i ürünler listesi içerisinde title değerinde arayacak. Arama sonuçları üzerinden sıralama algoritması çalıştırılacak. Önce kategoriye göre sıralayıp eğer aynı kategoriden ürünler varsa rating'e göre sıralayacak.

const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

let products = []

getRequest('https://dummyjson.com/products').then(res => {
  products = res.products
}).catch(error => {
  console.log('error', error)
})

searchButton.addEventListener('click', () => {
  const searchText = searchInput.value.toLowerCase()
  const filteredProducts = products
    .filter(product => {
      const productTitle = product.title.toLowerCase()
      return productTitle.includes(searchText)
    })
    .sort((firstProduct, secondProduct) =>
      firstProduct.category.localeCompare(secondProduct.category) || secondProduct.rating - firstProduct.rating)

  console.log('filteredProducts', filteredProducts)
})
