import Bulb from '@/components/bulbs/Bulb';
import Button from '../components/button/Button';
import styles from '../styles/Home.module.css';
import { useState } from 'react';



export default function Home() {
  return (
    
    <>
      <div className={styles.containerBulb}>
       <Button ButtonText="Litup" />
      </div>
    </>
  )
}
