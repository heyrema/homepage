import * as styles from './style.module.scss';

import homeLogo from '../../assets/home-logo.png';
import ganesh from '../../assets/ganesh.png';

import Header from "../../components/header";

function Home() {
	return <>
		<Header/>
		<div className={styles.container}>
			<img src={ganesh} className={styles.ganesh} />
			<img src={homeLogo} className={styles.logo} />
			<div>
				<div className={styles.desc}>
					Managing and distributing
					<br/>
					certifications for all, since 2021.
				</div>
				<button data-bs-theme="dark" className={`btn ${styles.button}`}>
					Request a Quote
				</button>
			</div>
		</div>
	</>;
}

export default Home;