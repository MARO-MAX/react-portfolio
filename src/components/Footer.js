import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <a href="https://github.com/MARO-MAX" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/magnusdahlberg/" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.imdb.com/name/nm0197015/?ref_=fn_al_nm_1" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-imdb"></i>
      </a>
    </div>
  )
}
