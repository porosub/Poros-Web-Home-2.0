import s from './About.module.css';

const About = () => {
  return (
    <section id='about'>
      <div className={s.containerAbout}>
        <div className={s.wrapperContent}>
          <div className={s.curtain}>
            <div className={s.wrapperTitle}>
              <h1 className={s.title}>ABOUT US</h1>
              <h1 className={`${s.title} ${s.layeredTitle}`}>ABOUT US</h1>
            </div>
            <div className={s.test}>
              <h5>POROS Organization of Open Source merupakan sebuah lembaga semi otonom yang berfokus di bidang open source yang bertempat di Fakultas Ilmu Komputer Universitas Brawijaya.</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;