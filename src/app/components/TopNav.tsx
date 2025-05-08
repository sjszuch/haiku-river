import React from 'react'
import styles from './TopNav.module.scss'
import { CircleUserRound, CircleHelp   } from 'lucide-react';
import Link from 'next/link';

const TopNav = () => {
  return (
    <div className={styles.topNav}>
        <CircleUserRound />
        <Link href="/stream"><h1 className={styles.title}>Haiku River</h1></Link>
        <Link href="/about"><CircleHelp /></Link>
    </div>
  )
}

export default TopNav