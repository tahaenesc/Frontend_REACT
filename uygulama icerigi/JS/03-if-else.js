let myName = "Mert";

if (myName === "Cem") {
  console.log("Hoşgeldin Cem");
} else if (myName === "Mert") {
  console.log(`Hoşgeldin ${myName}`);
} else {
  console.log("Hoşbulduk");
}


// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

let sayi = 7;
if (sayi > 0) {
  console.log("Sayı pozitiftir.");
} else if (sayi < 0) {
  console.log("Sayı negatiftir.");
} else {
  console.log("Sayı sıfırdır.");
}

// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

let sayi1 = 15;
let sayi2 = 10;
if (sayi1 > sayi2) {
  console.log("Birinci sayı ikinci sayıdan büyüktür.");
} else if (sayi1 < sayi2) {
  console.log("Birinci sayı ikinci sayıdan küçüktür.");
} else {
  console.log("Sayılar eşittir.");
}



// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

const kelime = "kayak"
const tersKelime = kelime.split('').reverse().join('');
if(kelime === tersKelime){
    console.log(`${kelime} kelimesi bir palindromdur`);
} else {
    console.log(`${kelime} kelimesi bir palindrom değildir.`);
}


// 4- Kullanıcıdan temsili bir oy verme ve aday olma durum sorgusu yapmak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.
// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.
// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir. 

// let yas = parseInt(prompt("Yaşınızı girin:")) 
// let uyruk = prompt("Uyruğunuzu girin:").trim().toLowerCase()

if(uyruk !== "türk"){
  console.log("Aday olamazsınız.");
  if(yas >= 18){
    console.log("Oy verebilirsiniz.");s
  } else{
    console.log("Oy veremezsiniz.");
  }
} else if(yas >= 30){
  console.log("Aday olabilir, Oy kullanabilirsiniz.");
} else if (yas>=18 && yas<30){
  console.log("Aday olamazsınız, Oy kullanabilirsiniz.");
} else {
  console.log("Aday olamazsınız, Oy kullanamazsınız");
}
