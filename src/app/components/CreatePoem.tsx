import React from 'react'
import styles from './CreatePoem.module.scss'

const CreatePoem = () => {
  return (
    <div className={styles.createPoem}>
        <h2>Create a Haiku</h2>
        <form className={styles.form}>
            <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" className={styles.input} required />
            </div>

            <div>
            <label htmlFor="line1">Line 1 (5 syllables):</label>
            <input type="text" id="line1" name="line1" className={styles.input} required />
            </div>

            <div>
            <label htmlFor="line2">Line 2 (7 syllables):</label>
            <input type="text" id="line2" name="line2" className={styles.input} required />
            </div>

            <div>
            <label htmlFor="line3">Line 3 (5 syllables):</label>
            <input type="text" id="line3" name="line3" className={styles.input} required />
            </div>

            <div>
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" className={styles.input} required />
            </div>

            <button type="submit">Create Poem</button>
        </form>
    </div>
  )
}

export default CreatePoem