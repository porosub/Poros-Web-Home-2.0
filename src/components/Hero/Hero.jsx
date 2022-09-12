import style from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.textBox}>
        <h1>poros</h1>
        <h2>open source</h2>
        <h2>lead to future</h2>
      </div>
      <img src="./assets/hero-image.png" alt="ilustrasi poros" className={style.heroImage} />
    </section>
  )
}

export default Hero