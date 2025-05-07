import React from 'react'
import styles from './TopNav.module.scss'
import { CircleUserRound, CirclePlus  } from 'lucide-react';

const TopNav = () => {
  return (
    <div className={styles.topNav}>
        <CircleUserRound />
        <p>Haiku River</p>
        <CirclePlus />
    </div>
  )
}

export default TopNav