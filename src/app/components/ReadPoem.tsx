import React from 'react'
import styles from './ReadPoem.module.scss'

const ReadPoem = () => {
  return (
    <div className={styles.readPoem}>
        <h2>Title by Author</h2>

        <div className={styles.haiku}>
        <p>A world of dew,</p>
        <p>And within every dewdrop</p>
        <p>A world of struggle.</p>
        </div>

        <div className={styles.actions}>
            <p>Like</p>
            <p>Dislike</p>
            <p>Share</p>
            <p>Save</p>
        </div>
    </div>
  )
}

export default ReadPoem