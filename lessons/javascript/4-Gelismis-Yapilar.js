// Closures

function init () {
  let name = 'Mozilla'

  function displayName() {
    console.log(name) // dış scopedaki name değişkenine ulaşılabiliyor olmasına closure özelliği adını veriyoruz
  }

  displayName()
}

init()

// Spread / Rest Operator

// ... (üç nokta) operatörüdür.




// REST

// Rest parametresi olarak yaptığı iş, fonksiyonda dinamik sayıda parametre alınabilmesini sağlar.

// Normalde belirli sayıda parametre alıp toplama işlemi yapabilirken:
function sum(a, b) {
  return a + b
}

// Eğer n sayıda parametre alıp toplama işleme gerçekleştirmek istiyorsak:
function sum (...params) {
  console.log('params =', params)
}

function sumv2 (firstParam, secondParam, thirdParam, ...rest) {
  console.log('firstParam =', firstParam)
  console.log('secondParam =', secondParam)
  console.log('thirdParam =', thirdParam)
  console.log('params =', rest)
}

function sumv3 (firstParam, ...rest/*,  gercektenKesinlikleSonParametreBenim // bu yapılamaz */) {
  console.log('firstParam =', firstParam)
  console.log('params =', rest)
}

sum('string', 2, ['Ocak', 'Şubat', 'Mart'], { firstName: 'John', lastName: 'Wick' }, 5, true, 7, 'string', function () { })

sumv2('string', 2, ['Ocak', 'Şubat', 'Mart'], { firstName: 'John', lastName: 'Wick' }, 5, true, 7, 'string', function () { })


// SPREAD

// Spread operatör, ilgili arrayin veya objenin elemanlarının dağıtılmasını (yayılmasını, saçılmasını) sağlar. Bu özellik ise arrayin veya objelerin birleştirilmesinde kullanılır.

// Array'lerin birleştirilmesi

const numbersOne = [1, 2, 3]
const numbersTwo = [4, 5, 6]

const arrayOfArrays = [
  numbersOne,
  numbersTwo
]

const combinedNumbers = [
  ...numbersOne,
  ...numbersTwo
]

console.log('arrayOfArrays =', arrayOfArrays)
console.log('combinedNumbers =', combinedNumbers)

// Objelerin birleştirilmesi

const personOne = {
  name: 'Jack',
  country: 'Ireland',
  lang: 'English'
}

const personTwo = {
  name: 'Albert',
  age: 35,
  profession: {
    name: 'Butler',
    experience: 15,
    isSearchingForWork: true
  }
}

const combinedPerson = {
  ...personOne,
  ...personTwo
}

console.log('combinedPerson =', combinedPerson)

console.log('')
console.log('')


// OBJECT DESTRUCTURING (Obje Yıkımı / Parçalama)
// Obje yıkımı syntax'ı değişken tanımlamak için kullanılır.

const name = 'Tom'

// Obje yıkımıyla değişken tanımlaması yaparken eğer isim çakışması gerçekleşecek olursa
// ilgili property'nin devamında ": yeniDegiskenIsmi" yazım şekliyle 
// istediğiniz ismi verebilirsiniz.

const { name: personName, lang } = personOne

console.log('personName =', personName)
console.log('lang =', lang)
console.log('personOne =', personOne)

// Eğerki obje yıkımı yazım şekliyle içiçe geçmiş yapılardan data çekmek istiyorsak:
// personTwo -> profession -> experience

const { profession: { experience } } = personTwo

console.log('experience =', experience)


// Collatz Conjecture algoritması:

// eger sayı cift ise sayi = sayi / 2
// eger sayi tek ise sayi = (sayi * 3) + 1

// Bu algoritma günün sonunda 1 değerini vermektedir.

// Bir fonksiyon yazın. Parametre olarak gelen sayının yukarıdaki algoritmayı kullanarak 1 değerine kaç iterasyonla geldiğinin çıktısını verecek olan bir method olsun.

// Girdi: 5
// Surec: 5 -> 16 -> 8 -> 4 -> 2 -> 1
// Cikti: 5

// Girdi: 6 -> Cikti: 8
// Girdi: 10 -> Cikti: 6
// Girdi: 23 -> Cikti: 15

function calcCollatzConjecture(num) {
  let count = 0

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = (num * 3) + 1
    }

    count++
  }

  return count
}

console.log('')

// Array'lerde de obje yıkımı syntax'ı kullanılarak değişken tanımlamaları yapılabilir:

const nums = [50, 28, 17, 54, 82, 90, 12, 44]

const [ firstNum, secondNum ,,, fifthNum ] = nums

console.log('firstNum =', firstNum)
console.log('secondNum =', secondNum)
console.log('fifthNum =', fifthNum)


// Pass by Data vs Pass by Reference

// Memory, Stack ve Heap'ten oluşur.

// Aşağıdaki anlatılanlar Stack üzerinde gerçekleşenlerdir:

// JS'de bazı veri tipleri direkt data olarak tutulup aktarılırken (Pass by Data),
// bazıları referans olarak tutulup aktarılmaktadır (Pass By Reference).

// Örnek:
// İlkel tipler (string, number, boolean) => Pass by Data
// Dinamik tipler (array, object, function) => Pass by Reference

// Bir veri tipinin Pass by Data olması, bu veri tipini ne kadar çok kopyalasakta
// her bir kopyanın kendi değerini tutmasını sağlar.

let ilkVeriTipi = 'Okan bugun cok enerjik'

let ilkelVeriTipiKopyasi1 = ilkVeriTipi
let ilkelVeriTipiKopyasi2 = ilkVeriTipi

ilkelVeriTipiKopyasi1 = ilkelVeriTipiKopyasi1.replace('bugun', 'dun')

console.log("ilkVeriTipi =>", ilkVeriTipi)
console.log("ilkelVeriTipiKopyasi1 =>", ilkelVeriTipiKopyasi1)
console.log("ilkelVeriTipiKopyasi2 =>", ilkelVeriTipiKopyasi2)

// Bir veri tipinin Pass By Reference olması, bu veri tipi kopyalandigi zaman
// kendi değerini tutmak yerine ortak bir değer tutuyor olmasına sebebiyet verir.

let dinamikVeriTipi = [1, 2, 3, 4, 5]

let dinamikVeriTipiKopyasi1 = dinamikVeriTipi
let dinamikVeriTipiKopyasi2 = dinamikVeriTipi

dinamikVeriTipiKopyasi2[3] = function () {}

console.log("dinamikVeriTipi =>", dinamikVeriTipi)
console.log("dinamikVeriTipiKopyasi1 =>", dinamikVeriTipiKopyasi1)
console.log("dinamikVeriTipiKopyasi2 =>", dinamikVeriTipiKopyasi2)
