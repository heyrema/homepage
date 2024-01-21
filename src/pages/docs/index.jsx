import { useEffect } from 'react';

import * as styles from './style.module.scss';
import vectorLogo from '../../assets/logo.svg';

import Header from "../../components/header";
import Footer from '../../components/footer';
import getMessage from '../../data/messages';

const url = 'https://rema.js.org';

function Docs() {
	useEffect(() => {
		window.location.replace(url);
	});

	return <>
		<Header/>
		<div className={`${styles.container}`}>
			<h1>Documentation</h1>
			<h2>
				Redirecting...
			</h2>
			<img src={vectorLogo} className={styles.logo} />
			<i className={`${styles.msg}`}>
				{getMessage('fun')}
			</i>
		</div>
		<Footer/>
	</>;
}

export default Docs;