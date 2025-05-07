'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CreatePoem.module.scss';

const CreatePoem: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <motion.div
      className={styles.expandContainer}
      animate={{
        margin: '1rem',
        padding: isExpanded ? '1rem' : '0.5rem',
      }}
      
      transition={{ type: 'spring', duration: 1 }}
      style={{
        overflow: 'hidden',
        borderRadius: '8px',
        color: 'white',
      }}
    >
      {!isExpanded ? (
        <button
          className={styles.writePoemButton}
          onClick={toggleExpand}
          style={{
            background: '#11385b',
            padding: '0.5rem 1rem',
            borderRadius: '15px',
            border: 'none',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Write Poem
        </button>
      ) : (
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

            <button type="submit" className={styles.submitButton}>Create Poem</button>
            <button
              type="button"
              onClick={toggleExpand}
              className={styles.closeButton}
              style={{ marginTop: '0.5rem' }}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default CreatePoem;
