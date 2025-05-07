import React from 'react'
import styles from './ReadPoem.module.scss'

interface ReadPoemProps {
  title: string;
  author: string;
  line1: string;
  line2: string;
  line3: string;
}

const ReadPoem = ({ title, author, line1, line2, line3 }: ReadPoemProps) => {
  return (
    <div className={styles.readPoem}>
    <h2>{author} "{title}"</h2>

    <div className={styles.haiku}>
    <p>{line1}</p>
    <p>{line2}</p>
    <p>{line3}</p>
    </div>
  </div>
  )
}

export default ReadPoem

