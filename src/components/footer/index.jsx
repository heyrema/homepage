import * as styles from './style.module.scss';
import './style.scss';

const Footer = () => {
	return <>
		<footer className={styles.footer}>
			<div className={styles.links}>
				<a href="/about" className={styles.link}>
					About
				</a>
				<a href="/contact" className={styles.link}>
					Contact
				</a>
				<a href="/github" className={styles.link}>
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