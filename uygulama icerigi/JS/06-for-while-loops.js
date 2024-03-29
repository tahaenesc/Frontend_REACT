// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

let sayiBaslangic = Number(prompt("Başlangıç sayısı giriniz:"));
let sayiBitis = Number(prompt("Bitiş sayısı giriniz:"));
let toplam = 0;

for(let i=sayiBaslangic; i<=sayiBitis; i++){
    toplam= toplam +i
}
alert(`${sayiBaslangic} ile ${sayiBitis} kadar olan sayılar toplamı = ${toplam}`)

// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

let toplamNot = 0;
let gecenOgrenciSayisi = 0;

for (let ogrenci = 1; ogrenci <= 5; ogrenci++) {
  let not = Number(prompt("Öğrenci " + ogrenci + " notunu girin:"));
  toplamNot += not;

  if (not >= 60) {
    gecenOgrenciSayisi++;
  }
}

let sinifOrtalamasi = toplamNot / 5;

console.log("Sınıf ortalaması: " + sinifOrtalamasi);
console.log("Geçen öğrenci sayısı: " + gecenOgrenciSayisi);





// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

const sayi = Math.ceil(Math.random() * 10);
console.log(sayi);

let tahmin = Number(prompt("Lütfen 1-10 arası bir sayı giriniz..."));
let hak = 3;
let deneme = 1;

while (sayi !== tahmin && hak > 1) {
  if (tahmin > sayi) {
    tahmin = Number(prompt(`Yanlış tahmin! Sayıyı azaltın! Kalan hakkınız ${--hak}`));
  } else {
    tahmin = Number(prompt(`Yanlış tahmin! Sayıyı arttırın! Kalan hakkınız ${--hak}`));
  }
  deneme++;
}

if (sayi === tahmin) {
  alert(`Tebrikler ${deneme}. denemede bildiniz!`);
} else {
  alert("Hakkınız bitti, kaybettiniz!");
}

// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

let toplamFiyat = 0;
let urun = "";

while (urun !== "onayla") {
    urun = prompt("Sepete ürün eklemek için 'ürün adı' veya bitirmek için 'onayla' yazın:");

  if (urun !== "onayla") {
    let fiyat = Number(prompt(urun + " ürününün fiyatını girin:"));
    toplamFiyat += fiyat;
  }
}

alert("Toplam fiyat: " + toplamFiyat + " TL");