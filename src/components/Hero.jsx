import { useEffect, useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1614850523234-3e7ad3c10c91?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1558944351-c8c39f6a1d54?auto=format&fit=crop&w=800&q=80'
]

function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="hero-carousel">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Mascota"
            className={`hero-slide ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="hero-text">
        <h1>Simo</h1>
        <p>El identificador QR inteligente para mascotas.</p>
      </div>
    </section>
  )
}

export default Hero
