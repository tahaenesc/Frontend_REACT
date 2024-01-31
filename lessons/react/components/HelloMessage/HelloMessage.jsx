/* React componentlerinde gelen props'ları direkt obje yıkımı syntax'ı ile çekebiliriz */
export function HelloMessage ({ name, lastName, date, lastLoginDate, children }) {
  console.log('children', children)
  console.log('date', date)
  console.log('lastLoginDate', lastLoginDate)

  /*  JSX'in HTML'den farklı olduğu noktalar: */

  /* Her komponentteki return kısmı render edilmesi istenilen yapıları içerir */
  return <> {/* Birden fazla elementi render etmek istiyorsanız bu elementleri div veya Fragment içine alabilirsiniz. Fragment'ın kısa hali ise "<> </>" dir.*/}
    {/*  */}
    {children}
    <h1>React</h1>
    <span className="welcome-message">Merhaba {name} {lastName}, bugün nasılsın?</span> {/* class verirken "className" props'unu kullanmanız gerekir */}
  </>
}
