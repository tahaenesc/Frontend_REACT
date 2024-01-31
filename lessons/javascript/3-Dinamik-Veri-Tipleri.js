// Mutate Eden ve Etmeyen Metodlar:

// Dinamik veri tiplerinde kullandığımız metodların bazıları orijinal değişkeni mutate ederken (değiştirirken),
// bazı metodları yeni bir değer döndürecektir.

// Arrays (Diziler)

// Javascriptte neredeyse her şey bir OBJE'dir.

const arr = [
  'string',
  25,
  false,
  function () {
    // fonksiyon işlemleri...
  },
  null,
  undefined,
  [1, 2, 3, [true, 20, 'türkiye']],
  {name: 'John', country: 'England', isRich: true}
]

// Dizinin içerisinden herhangi tipte bir elemanı çekip kullanabilirsiniz:
arr[3]() // method
arr[1].toFixed(2) // number


// Array Metodları

const months = ['Ocak', 'Şubat', 'Mart', 'Nisan']

console.log('months =', months)

// Iteration (İterasyon) Metodları

// .map metodu
// Dipnot: map metodu orijinal değiştirmez. Yeni bir array döndürür.

const mappedMonths = months.map(function (item, index, array) {
  console.log('months =', months)
  console.log('months =', array)
  console.log('item =', item)
  return `${index + 1}. ay ${item}`
})

console.log('mappedMonths =', mappedMonths)

// .sort metodu
// Dipnot: Sort metodu orijinal arrayi değiştirir.

months.sort((a, b) => a.length - b.length)

console.log('(sorted) months =', months)

// Diziyi filtreleme

const filteredMonths = months.filter((item) => {
  return item.length > 4
})

console.log('filteredMonths =', filteredMonths)

console.log('')
console.log('')

// Objeler

const person = {
  'full name': 'Desmond',
  country: 'Sweden', // property (key, value) (anahtar, değer)
  age: 34,
  hasCar: true,
  func: function () {

  },
  study: null,
  workplace: undefined,
  langs: ['English', 'German'],
  childs: [
    {
      name: 'Ahmet'
    },
    {
      name: 'Mehmet'
    }
  ],
  obj: {
    a: 4,
    b: 2
  }
}

// Objenin Property'lerine Ulaşmak

// Eğerki property isminde syntax olarak geçersiz karakterler varsa:

// console.log('person.full name', person.full name) // gibi, HATA VERECEKTİR. Property'ye ulaşmak için aşağıdaki şekilde yazmamız gerekir:
console.log("person['full name']", person['full name'])

// Ama property isminde gerçeksiz karkater yoksa her iki şekilde de erişilebilir:
person['age']
person.age

// Obje metodları

// keys & values metodları

console.log('Object.keys(person) =', Object.keys(person))

console.log('Object.values(person) =', Object.values(person))

console.log('Object.entries(person) =', Object.entries(person))

Object.entries(person).map((entry) => {
  console.log('entry =', entry)
})

console.log('')
console.log('')

// Loops

// For döngüsü

for (let i = 0; i < months.length; i++) {
  console.log(months[i])
}

// While
// Önce koşula bakılır sonra işlemler yapılır
let i = 0

while (i < months.length) {
  console.log(months[i])

  i++
}

// Do while
// Önce işlemler yapılır sonra koşula bakılır
let j = 0

do {
  console.log(months[j])

  j++
} while (j < months.length)


// for in vs for of döngüleri

// for of döngüsü, dizileri dönmek için kullanılır:

for (const month of months) {
  console.log('month =', month)
}

console.log('')

// for in döngüsü, objeleri dönmek için kullanılır

for (const key in person) {
  console.log('key =', key)
  console.log('deger =', person[key])
}

console.log('')
console.log('')

// SORU: Bir cümledeki kelimelerin harflerini ters çevirecek JS ifadesi nasıl yazabiliriz?

// Örnek: Bugün hava bulutlu => nügub avah ultulub gibi...

let cumle = "Bugun hava bulutlu"

let yeniCumle = cumle.split(' ').map((item) => {
  return item.split('').reverse().join('')
}).join(' ')

console.log(yeniCumle)


// Fonksiyonlar

// Function declaration (Fonksiyon tanımı)

function getProductList (countryId) {
  // bir takım işlemler

  return []
}


// Function expression (Fonksiyon ifadesi)

const getProductList = function (countryId) {
  // bir takım işlemler

  return []
}

// Arrow function

const getProductList = (countryId) => {
  // bir takım işlemler

  return []
}
