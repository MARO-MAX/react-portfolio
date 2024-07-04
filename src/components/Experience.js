import React from 'react'
import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id="experience">
      <div className={styles.wrapper}>
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ListEntry title={"Composer"} date={"2000 - Present"}>
            <li>Composer for multiple Movies, TV-Shows, TV-adds and Documentaries with titles including “As White As in Snow” by “Jan Troell”, “Lilla Spöket Laban” and adds for TOYOTA, Marabou and Danish Lotto</li>
            <li>Clients include Nordisk Film, Nimbus Film, Penn Film, SVT and more</li>
          </ListEntry>
          <ListEntry title={"Soy Pinamar"} date={"2009 - 2018"}>
            <li>Web developer, Editor and Content Creator for “Soy Pinamar” in charge of both Front-End and Back-End development.</li>
          </ListEntry>
          <ListEntry title={"COO Apollo Music Latin America"} date={"2014 - 2016"}>
            <li>In charge of operations for Apollo Music Latin America. Responsibilities included marketing, sales and distribution.</li>
          </ListEntry>
        </div>

      </div>
    </section>
  )
}
