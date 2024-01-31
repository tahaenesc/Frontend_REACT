// Stringler

const firstName = 'John'
const lastName = 'Wick'
const age = 38

const fullName = firstName + ' ' + lastName + ', at ' + age // buradaki tip dönüşümü otomatik olarak yapılacaktır

// String metodları

console.log('fullName =', fullName)

// string ifadenin uzunluğu alma
console.log('fullName.length =', fullName.length)

// string'in bütün harflerini büyük hale getirmek
console.log('fullName.toUpperCase() = ', fullName.toUpperCase())

// string'in bütün harflerini küçük hale getirmek
console.log('fullName.toLowerCase() =', fullName.toLowerCase())

// string'i belirli bir alt string ile bölmek için
console.log("fullName.split('at')", fullName.split('at'))
console.log("fullName.split(' ')", fullName.split(' '))
console.log("fullName.split('')", fullName.split(''))
console.log("fullName.split()", fullName.split())

// TEMPLATE LITERAL: string ifade içerisinde herhangi bir javascript ifade yazmak istiyorsak

function getUserName() {
  return 'Tom'
}

console.log('template literal = ', `Hello ${getUserName()}, how are you today?`)
// Yukarıdakinin + kullanarak yazımı: 'Hello ' + getUserName() + ', how are you today?'

/*
  ÖDEV: toUpperCase kullanırken İngilizceye göre büyük harfe çevrilmesi sürecini nasıl düzeltebilirdik?
  console.log('Emir'.toUpperCase()) // EMIR yerine EMİR yazmasını bekliyoruz
*/

/*
  Lokal bölgeye göre upper case veya lower case'e çevirmek istiyorsak
  toLocaleUpperCase() veya toLocaleLowerCase() kullanabiliriz. Aynı zamanda istediğimiz "locale" değerini de belirtebiliriz:
  Yani toLocaleUpperCase('es-AR') veya toLocaleLowerCase('tr-TR') gibi.
*/


// string'in 3. indeksindeki harfi alma
console.log('fullName.charAt(3) =', fullName.charAt(3))
console.log('fullName[3] =', fullName[3])

// string'in içerisinden 2. indeksle başlayıp 10. indeksle biten parçayı alma
console.log('fullName.substring(2, 11) =', fullName.substring(2, 11))

console.log('')
console.log('')


// Numberlar

const PI = 3.141592

// sayının noktadan sonraki 2 basamağını alma
console.log('PI.toFixed(2) =', PI.toFixed(2))

// sayının noktadan sonraki 3 basamağını alma
// dikkat edelim ki "5" ten ötürü sayı yuvarlanacaktır:
console.log('PI.toFixed(3) =', PI.toFixed(3))


// Math kütüphanesi

// bir sayının karesini alma
console.log('Math.pow(PI, 2) =', Math.pow(PI, 2))

// sayıyı her koşulda yukarı yuvarlama
console.log('Math.ceil(3.1) =', Math.ceil(3.1))
console.log('Math.ceil(3.9) =', Math.ceil(3.9))


// bir sayıyı her koşulda aşağı yuvarlama
console.log('Math.floor(3.9) =', Math.floor(3.9))
console.log('Math.floor(3.9) =', Math.floor(3.1))

// bir sayıyı 5 e göre yuvarlama
console.log('Math.round(3.9) =', Math.round(3.9))
console.log('Math.round(3.1) =', Math.round(3.1))

// bir sayının mutlağını alma
console.log('Math.abs(-2.19) =', Math.abs(-2.19))

// rastgele bir sayı alma (0 dahil, 1 dahil değil)
console.log('Math.random() =', Math.random())

// 5 ile 15 arasında bir sayı döndüren expression (ifade) yazın
const randomNum = Math.floor(Math.random() * 11) + 5

console.log('5 ile 15 arasında bir sayı (randomNum) =', randomNum)

/*
  ileride yukarıdaki kod parçasını fonksiyon içerisine alıp kullanacağız:

  function getRandomNum () {
    return Math.floor(Math.random() * 11) + 5
  }
*/



// ALERT VE PROMPT

// alert('Bu bir mesaj kutusudur!') // Alert sayfada mesaj kutusu çıkartacaktır
// const gelenDeger = prompt('Yine mesaj kutusu ama senden bir input bekliyorum:') // Prompt ise kullanıcıdan bir input almayı bekler

console.log('')
console.log('')

// Boolean

const isPlayer = true
const isNPC = !isPlayer // not operatörü (boolean değerin değilini alacaktır)

console.log('isPlayer =', isPlayer)
console.log('isNPC =', isNPC)

console.log('')
console.log('')

// Koşullar (Conditions)

// isPlayer değişkeni true mu? kontrolü
if (isPlayer) {

}

// isNPC değişkeni false mu? kontrolü
if (isNPC === false) {

}


// Loosly equality (Gevşekçe eşitlik kontrolü) ile Strict equality (Katı eşitlik kontrolü)
// 3 eşittir operatörü sektor standardı kabul edilir ve kullanılır

console.log("10 == '10' >", 10 == '10')
console.log("10 === '10' >", 10 === '10')

// iki eşittir operatörü için bir istisna bulunur:
console.log('null == undefined >', null == undefined)


// eğer bir değişkenin null ve undefined olup olmadığını aynı anda kontrol etmek istiyorsak
if (isPlayer === null || isPlayer === undefined) {

}

// bunun yerine

if (isPlayer == null) { // aynı anda hem null hemde undefined olup olmadığını kontrol edebiliyorum

}

// ÖDEV: Bir stringin ilk harfini büyük geri kalanını küçük hale getirmek istiyorsak ne yazabiliriz?

// eMİn => Emin
// JoHN => John gibi


/* Cevap:
  let ifade = 'eMİn'

  console.log(ifade.substring(0,1).toLocaleUpperCase('tr-TR').concat(ifade.substring(1).toLocaleLowerCase('tr-TR')))
  
  console.log(ifade.charAt(0).toLocaleUpperCase('tr-TR') + ifade.slice(1).toLocaleLowerCase('tr-TR'));
*/