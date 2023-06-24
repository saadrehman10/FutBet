import styles from './bulbcss.module.css'
import offBulb from '../images/offBulb.png';
import onBulb from '../images/onBulb.png';
import Image from 'next/image';
export default function Bulb() {
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