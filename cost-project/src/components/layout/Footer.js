import { FaFacebook, FaInstagram } from 'react-icon/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <Footer>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook  />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p>Footer part</p>
        </Footer>
    )
}

export default Footer