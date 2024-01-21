import { Link } from 'react-router-dom';

import * as styles from './style.module.scss';
import './style.scss';

const Footer = () => {
	return <>
		<footer className={styles.footer}>
			<div className={styles.links}>
				<Link to="/about" className={styles.link}>
					About
				</Link>
				<Link to="/contact" className={styles.link}>
					Contact
				</Link>
				<a target="_blank" href="https://github.com/heyrema" className={styles.link}>
					GitHub
				</a>
			</div>
			<div className={styles.copyright}>
				&copy; Rema 2021-{new Date().getFullYear()}
			</div>
		</footer>
	</>;
};

export default Footer;