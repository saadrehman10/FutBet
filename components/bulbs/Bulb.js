import styles from './bulbcss.module.css'
import offBulb from '../images/offBulb.png';
import onBulb from '../images/onBulb.png';
import Image from 'next/image';
import { useState } from 'react';


export default function Bulb({whichBulb}) {
    
    if(whichBulb){
        return(
            <>
                <Image 
                src={onBulb}
                alt="lit-bulb" 
                className={styles.bulbnew}
                />
            </>
        )
    }
    else{
        return(
            <>
                <Image 
                src={offBulb}
                alt="bulb" 
                className={styles.bulbnew}
                />
            </>
        )
    }
    
}