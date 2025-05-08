'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CreatePoem.module.scss';
import { db } from '../../../firebase/clientApp';
import { collection, addDoc } from 'firebase/firestore';
import { syllable } from 'syllable'; 

const CreatePoem: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Track the input values and syllable counts
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');

  const toggleExpand = () => setIsExpanded(prev => !prev);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const author = (form.elements.namedItem('author') as HTMLInputElement).value;

    const poemsCollection = collection(db, 'testpoems');
    const poemData = { title, line1, line2, line3, author };

    try {
      await addDoc(poemsCollection, poemData);
      alert('Poem created successfully!');
    } catch (error) {
      console.error('Error creating poem:', error);
      alert('Failed to create poem. Please try again.');
    }
    setLine1('');
    setLine2('');
    setLine3('');
    form.reset();
    toggleExpand();
  };

  return (
    <motion.div
      layout
      className={styles.expandContainer}
      transition={{ type: 'spring', duration: 0.5 }}
      style={{
        width: '100%',
        overflow: 'hidden',
        borderRadius: '8px',
        color: 'white',
        padding: '1rem',
      }}
    >
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
          width: '100%',
        }}
      >
        {isExpanded ? 'Cancel' : 'Write Poem'}
      </button>

      {isExpanded && (
        <div className={styles.createPoem} style={{ marginTop: '1rem' }}>
          <h2>Create a Haiku</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" className={styles.input} required />
            </div>

            <div>
              <label htmlFor="line1">
                Line 1 — Syllable count: {syllable(line1)}
              </label>
              <input
                type="text"
                id="line1"
                name="line1"
                className={styles.input}
                value={line1}
                onChange={e => setLine1(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="line2">
                Line 2 — Syllable count: {syllable(line2)}
              </label>
              <input
                type="text"
                id="line2"
                name="line2"
                className={styles.input}
                value={line2}
                onChange={e => setLine2(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="line3">
                Line 3 — Syllable count: {syllable(line3)}
              </label>
              <input
                type="text"
                id="line3"
                name="line3"
                className={styles.input}
                value={line3}
                onChange={e => setLine3(e.target.value)}
                required
              />
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
