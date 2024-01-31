import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Posts.module.css'

export function Posts () {
  const [posts, setPosts] = useState([])
  const [jokeId, setJokeId] = useState(1)
  const [jokeData, setJokeData] = useState({})

  // Yan etki nedir?

  // 1. İçinde bulunduğu context'in dışında gerçekleşmesi gerekir (external system)
  // 2. Gerçekleştiği external system (dış sistemde) bir durum değişikliğine sebebiyet vermeli.

  // Side effect örnekleri neler olabilir:
  // 1. API istekleri
  // 2. Diğer componenetlerdeki durum değişikliğine sebebiyet veren işlemler
  // 3. Dosya işlemleri
  // 4. Olay dinleyiciler / timerlar

  // Bağımlılığı olmayan bir useEffect:
  useEffect(() => {
    async function fetchData() {
      const response = await axios('https://jsonplaceholder.typicode.com/posts')
      const data = response.data
  
      setPosts(data)
    }
  
    fetchData()

    // İkinci parametre olarak dependency array (bağımlılık dizisi) gönderilir.
    // Bu dizi içerisine, useEffect'e göndermiş olduğunuz callback'inizin hangi bağımlılıkları varsa onları belirtmeniz gerekir.
    // Böylelikle React bu bağımlılıkların değerlerinde herhangi bir değişiklik olursa useEffect'i tekrar çalıştıracaktır.

    // Üç farklı durumu vardır:
    // 1. Diziyi dolu bir şekilde göndermiş olmanız: Bağımlılık dizinizdeki elemanların herhangi birinin değerinde değişiklik meydana gelirse useEffect tekrar çalışacaktır.
    // 2. Diziyi boş bir şekilde göndermiş olmanız: React'a, useEffect'in hiçbir bağımlılığı olmadığını söylüyorsunuz. Bu yüzden useEffect sadece componentin ilk renderında çalışacaktır.
    // 3. Diziyi hiçbir şekilde göndermemiş olmanız: Bu seferde React'a bağımlılıkları hiç hesaba katmadan her renderda useEffect'i çalıştırması gerektiğini söylüyorsunuz. 
  }, [])

  // Bağımlılığı olan useEffect:
  useEffect(() => {
    async function fetchData() {
      const response = await axios(`https://official-joke-api.appspot.com/jokes/${jokeId}`)
      const data = response.data

      setJokeData(data)
    }

    fetchData()
  }, [jokeId])

  const handleJokeMeButtonClick = () => {
    const randNum = Math.floor(Math.random() * 10) + 1 // 1 ila 10 arasında rastgele bir sayı

    setJokeId(randNum)
  }

  return <>
    <h1>Gönderiler</h1>
    <button onClick={handleJokeMeButtonClick}>Şakala Beni</button>
    <div className={styles.joke}>
      <div>
        <span>Joke ID:</span><span>{jokeData.id}</span>
      </div>
      <div>
        <span>Joke Setup:</span><span>{jokeData.setup}</span>
      </div>
      <div>
        <span>Joke Punchline:</span><span>{jokeData.punchline}</span>
      </div>
    </div>
    <ul>{
      posts.map(post => <li>{post.body}</li>)
    }</ul>
  </>
}
