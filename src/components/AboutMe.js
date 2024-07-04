import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
    return (
        <section id="about-me" className={styles.aboutMe}>
            <div className={styles.wrapper}>
                <SectionIntroduction>ABOUT ME</SectionIntroduction>
                <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>I am a <strong>Composer</strong> who wanted to broaden my horizons and started programming, designing and also creating games in Unity.</p>
                    
                    <p className={styles.paragraph}>I love to create and I have always been a dreamer so software development is excellent for allowing me to express my creativity</p>
                    <p className={styles.paragraph}>Like a <strong>dog</strong>, I enjoy long walks on the beach, eating lots of food, and I'll chase a tennis ball around a court until I can't move.</p>
                </div>
                <div className={styles.icons}>
                    <i className="fa-solid fa-dragon"></i>
                    <i className="fa-solid fa-jedi"></i>
                    <i className="fa-solid fa-chess"></i>
                    <i className="fa-solid fa-atom"></i>
                </div>
            </div>
        </section>
    )
}