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
				<Link to="/github" className={styles.link}>
					GitHub
				</Link>
			</div>
			<div className={styles.copyright}>
				&copy; Rema 2021-{new Date().getFullYear()}
			</div>
		</footer>
	</>;
};

export default Footer;