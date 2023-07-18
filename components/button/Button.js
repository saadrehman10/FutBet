import styles from './buttonscss.module.css'
import Bulb from '../bulbs/Bulb';
import { useState } from 'react';

export default function Button({ButtonText}) {
    let [whichBulbhold, setwhichBulb] = useState(false);
    const changeBulb = () => {
        setwhichBulb(true);
        global= document.querySelector('html')
        global.style.colorScheme = "light";
       
    }

    return (
        <>
        <button  className={styles.button}  onClick={changeBulb}>
            <span className={styles.actualtext}>&nbsp;{ButtonText}&nbsp;</span>
            <span className={styles.hovertext}>&nbsp;{ButtonText}&nbsp;</span>
        </button>
        <Bulb whichBulb={whichBulbhold}/> 
        </>
    )
}
