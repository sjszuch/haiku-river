import React from 'react'
import TopNav from '../components/TopNav'
import styles from './page.module.scss'

const About = () => {
  return (
    
    <div>
        <TopNav />
        <div className={styles.aboutContainer}>

        <h1>About</h1>
        <p>Haiku River is a poetry portal developed by Sebastian Szuch with NextJS. It was initially created to showcase my expertise
            in the framework, displaying my skills in React, TypeScript, and Firebase.</p>

        <p>During it's creation, I was able to stumble upon many unique and beautiful pieces created by authors from around the world.
            This inspired me to build upon my idea and expand the project into a platform for artists to share their work publicly and anonymously.
            While the project is in its early stages, I plan to add more features and poetic form options in the future.</p>

        <p>For now, I encourage users to be inspired by what they see on the platform and share their own work with others.
            I hope you enjoy your time here and are able to create something beautiful.</p>

        <h1>What is a Haiku?</h1>
        <p>Whether you are a new author or have been writing poetry for years, it may come as a suprise that the haiku form does
            not have a strict definition. In fact, the 'traditional' three line, 5/7/5 17 syllable structure is a Western interpretation of the form.
            Because of this, I allowed for some flexibility in syllable count and line length in the poem creation process. Users can still see
            a count of the syllables in each line, but there is no requirement to follow the 5/7/5 structure. Instead, I encourage users 
            to write from their heart, with a focus on the imagery and emotion of the piece rather than the syllable count.</p>


        </div>

    </div>
  )
}

export default About