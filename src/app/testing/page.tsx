'use client';

import { useEffect, useState } from 'react';
import { db } from '../../../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';
import ReadPoem from '../components/ReadPoem';
import CreatePoem from '../components/CreatePoem';

interface Poem {
  id: string;
  title: string;
  author: string;
  line1: string;
  line2: string;
  line3: string;
}

const HomePage = () => {
    // Poems get stored in an array of objects
  const [poems, setPoems] = useState<Poem[]>([]);

    // Loading state to show loading message while fetching data
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testpoems'));

        const fetchedPoems: Poem[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Poem[];

        setPoems(fetchedPoems); // <== update state
      } catch (error) {
        console.error('Error reading collection:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>Create a Poem</h1>
        <CreatePoem />

      <h1>Read Poems</h1>

      {loading ? (
        <p>Loading poems...</p>
      ) : poems.length === 0 ? (
        <p>No poems found.</p>
      ) : (
        <div>
          {poems.map((poem) => (
            <ReadPoem
              key={poem.id}
              title={poem.title}
              author={poem.author}
              line1={poem.line1}
              line2={poem.line2}
              line3={poem.line3}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
