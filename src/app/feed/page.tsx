'use client';
import React, { useEffect } from 'react';
import CreatePoem from '../components/CreatePoem';
import ReadPoem from '../components/ReadPoem';
import { useCollection } from 'react-firebase-hooks/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Feed = () => {
  // Query poems collection ordered by createdAt desc
  const poemsQuery = query(collection(db, 'poems'), orderBy('createdAt', 'desc'));

  // Load poems from the database
  const [poems, loading, error] = useCollection(poemsQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  // Log data to the console on load
  useEffect(() => {
    if (poems) {
      poems.docs.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    }
  }, [poems]);

  return (
    <div>
      <div className="creation">
        <p>Send a poem to the river</p>
        <CreatePoem />
      </div>

      <div className="feed">
        <p>Read a poem from the river</p>
      </div>
    </div>
  );
};

export default Feed;
