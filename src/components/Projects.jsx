import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import ToDo from '../assets/ToDo.png'
import Munamii from '../assets/Munamii.png'
import RollABall from '../assets/RollABall.png'
import Laban from '../assets/Laban.png'
import ImgOverlay from './ImgOverlay'

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <SectionIntroduction >PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ImgOverlay
            imgSrc={RollABall}
            title={"Roll A Ball"}
            projectLink={'https://learn.unity.com/submission/664b5740edbc2a01b0933850'}
            githubLink={'http://www.moongladeapparel.com'}>
            A small game created with Unity and C#
          </ImgOverlay>
          <ImgOverlay
            imgSrc={Munamii}
            title={"Munamii Cakery"}
            projectLink={'https://maro-max.github.io/Munamii2/'}
            githubLink={'https://github.com/MARO-MAX/Munamii2'}>
            Webshop selling Cakes and Cupcakes. Created with HTML and CSS.
          </ImgOverlay>
          <ImgOverlay
            imgSrc={ToDo}
            title={"ToDo App"}
            projectLink={'https://github.com/MARO-MAX/todolist-react'}
            githubLink={'https://github.com/MARO-MAX/todolist-react'}>
            A To Do List App created with React.
          </ImgOverlay>
          <ImgOverlay
            imgSrc={Laban}
            title={"Lilla Spöket Laban"}
            projectLink={'https://magnusdahlberg.com/showreel.htm'}>
            Composer for numerous movies and TV shows, and also TV-adds and Documentaries.
          </ImgOverlay>
        </div>
      </div>
    </section>
  )
}