// Scope & Context

// Süslü parentezlerin içerisinde kalan kod parçası scope'u oluşturur.
// Her scope kendi context'ine otomatik olarak sahiptir

// global scope (outer scope, dış scope)

const counter = 0

function sum (a, b) { // function scope / fonksiyon scope (inner scope / iç scope, local scope / yerel scope)
  if (a < 0 ) { // block scope
    a = 0
  }

  return a + b
}


// Functional Programming (Fonksiyonel Programlama)

// OOP (Object Oriented Programming)'den farkları:
// 1. Her şeyin bir fonksiyon içerisinde olduğu
// 2. Aynı mantıkla JavaScript motoru global scope'daki bir kod parçasını bile "main" metodu içerisinde (wrap'layarak) çalıştıracaktır



// Var, Let vs Const

// Var => Fonksiyona dayalı (Function-scoped) değişken tanımlası
// Hatalara çok müsait bir çalışma mantığı olduğundan dolayı kullanmamayı tercih ederiz

function increaseCounter (delta) {
  // javascriptte hiçbir keyword belirtten değişken tanımlamak da geçerli bir syntaxtır
  // ama global olarak tanımlama yapacaktır
  // bu sebepten ötürü bu yazım şeklini kesinlikle tercih etmiyoruz
  // counter = 20

  if (delta < 0) {
    var counter = 1
  }

  counter = (counter + 1) * delta

  console.log(counter)
}

// Let => Blok'a dayalı (Block-scoped) değişken tanumlaması
// Frontend ekosistemi içerisinde "let" keyword'ünü kullanarak değişken tanımlayı tercih ederiz

function increaseCounter (delta) {
  // javascriptte hiçbir keyword belirtten değişken tanımlamak da geçerli bir syntaxtır
  // ama global olarak tanımlama yapacaktır
  // bu sebepten ötürü bu yazım şeklini kesinlikle tercih etmiyoruz
  // counter = 20

  if (delta < 0) {
    let counter = 1
  }

  counter = (counter + 1) * delta // aynı şekilde hataya sebebiyet verecektir

  console.log(counter)
}






// CONST => blok'a dayalı (block-scoped) değişmeyen (sabit) değişken tanımlaması
// javascript ekosistemi icerisinde sabit tanımlamasını const ile gerçekleştiririz

const age = 20
const isPlayer = true
const surName // sabit değişken tanımlamasında ilk değerin verilmesi zorunludur

isPlayer = false // sabit değişken tanımlaması yapıldığından dolayı bu yapılamaz
age = 21

// normalde ilkel veri tiplerini hiçbir şekilde değiştirmek mümkün değil iken
// doğası itibariyle dinamik olan veri tiplerini (diziler, objeler) manüpüle edebilmek (değiştirebilmek) mümkün olur
const langs = ['turkce', 'ingilizce', 'ispanyolca']

langs.push('german') // arrayin içerisine item ekleyebiliyorum
langs.pop() // arrayin son iteminı silebiliyorum




// Değişken İsimlendirmesi

// Bu tarz kısa ve genel ifadeler ne yapılmaya çalışıldığını başka developer'a anlatamaz
const attrs = ['passion', 'curosity', 'openness', 'creativity']


// Bu tarz uzun ve gereksiz komplike olan değişken isimlendirmeleri aynı şekilde developer'ın anlamasını zorlaştıracaktır
// Sonu çoğul ekiyle bitmediği için ilk bakışta değişkenin array olduğunu anlamak güç
const traitsTheOneHas = ['passion', 'curosity', 'openness', 'creativity']


// Değişken isimlendirmelerini yaparken her zaman için en optimum uzunlu ve açıklayıcı bir ifade bulmamaız gerekiyor
const personalTraits = ['passion', 'curosity', 'openness', 'creativity']

