import styles from './VideoPlayer.module.css'

import { useState, useRef, useEffect } from 'react'

export function VideoPlayer () {
  /*
    1. Video oynatıcının sağ altında bulunacak olan bir buton ekle. Buton içerisinde Play yazıyor olacak. Butona tıklanıldığında Pause yazmaya başlayacak. Tekrar tıklanırsa tekrar Play yazacak. Toggle mekanizması.
    2. Mouse, video player'in üzerine gelirse buton gözükecek. Eğer mouse video playerdan çıkacak olursa buton kaybolacak.
    3. Play butonuna tıklanıldığında videonun başlatılması, tekrar tıklanıldığında durdurulması. useRef hooku
  */

  const [isPlaying, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleOnClick = () => {
    setPlaying(!isPlaying)
  }

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }, [isPlaying])

  return <>
    <h1>Video Oynatıcı</h1>
    <div className={styles['video-wrapper']}>
      <video className={styles['video-player']} ref={videoRef}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className={styles['play-button']} onClick={handleOnClick}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  </>
}
