// Callback'ler

// JS içerisinde asenkron metodlar, son parametre olarak callback alırlar.
// Callback, dümdüz bir fonksiyondur. Bu asenkron metodlar çalışmayı bitirdiğinde
// callback olarak yollamış olduğunuz fonksiyonu çalıştıracaktır.

// Senkron Callback Örneği

function greet(name, callback) {
  console.log('Hi' + ' ' + name)
  callback(name)
}

// callback fonksiyonunu harici tanımlayabilirken,
function callMe() {
  console.log('I am callback function')
}

greet('Peter', callMe)

// direkt callback bekleyen metodu çağırırken de tanımlayabilirsiniz:
greet('Peter', function (name) {
  console.log(`Hi, I am ${name} and also anonymous callback function`)
})

console.log('')


// Asenkron Callback Örneği

// setTimeout, asenkron bir metoddur. Bu yüzden içerisine callback bekler.
// Bu callback'i, kendi süreci bittiğinde çalıştırır.

setTimeout(function () {
  console.log('Bu asenkron bir callbacktir.')
}, 1000)

console.log('Çünkü bu satır setTimeout bitmeden önce çalıştırılır.')


// Event Listeners (Olay Dinleyicileri)

// Neredeyse bütün app'lerde, uygulamalarda son kullanıcının hareketleri doğrultusunda bir takım olaylar meydana gelir.
// Biz geliştiriciler olarak bu olayları dinlemek için event listener oluştururuz.
// Callback'lere benzer bir mantıkla çalışır.

const button = document.getElementById("my-super-uber-button")

// Event listener atamasını, dinlemek istediğimiz eventin adının önüne "on" ekleyerek ve bir metoda eşitleyerek gerçekleştirebiliriz:
button.onclick = (event) => {
  console.log('My Super Uber Button is clicked!')
}

// ya da "addEventListener" yardımcı metodu (utility metodu) kullanabiliriz:

button.addEventListener("click", (event) => {
  console.log('Herhangi bir elemente birden fazla kez aynı event için dinleyici (listener) ataması yapabilirsiniz')

  // bütün event listener, en az bir tane olmak şartıyla içlerine parametre alır. Kabul ettikleri ilk parametre "event" parametresidir.
  // Bu parametre, gerçekleşen event ile alakalı bir takım bilgileri tutan objedir.
  // Bu obje, event'in kendisine özgü datalar barındırır. Bu sebeple farklı tipte event'lerde içeriği başkalaşacaktır.
  console.log('event', event)
})

// XHR (XmlHttpRequest)

// XHR, HTTP istekleri göndermek için kullanılır.

const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  console.log('xhr.readyState', xhr.readyState)

  if (xhr.readyState === 4 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText))
  }
})

// GET isteği

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', false)
xhr.send()

// POST isteği

xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos', false)
xhr.setRequestHeader('Content-Type', 'application/json')

const data = { title: 'Bugunku derse calisin', completed: false, userId: 1 }
xhr.send(JSON.stringify(data))
