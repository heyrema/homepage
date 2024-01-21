import { Helmet } from 'react-helmet-async';

import * as styles from './style.module.scss';
import vectorLogo from '../../assets/logo.svg';

import Header from "../../components/header";
import Footer from '../../components/footer';
import getMessage from '../../data/messages';

function About() {
	return <>
		<Header/>
		<div className={`${styles.container}`}>
			<Helmet>
				<title>Rema - About</title>
			</Helmet>
			<h1>About</h1>
			<h2>
				Managing and distributing certifications for all, since 2021.
			</h2>
			<div className={`${styles.desc} mt-3`}>
				<span className={styles.msg}>
					Made to be free and open-source software, Rema was built with the idea of simplifying certificate generation and distribution in mind.
					Using templates, almost all styles and formats of certifications can be achieved.
				</span>
			</div>
			<img src={vectorLogo} className={styles.logo} />
			<i className={`${styles.msg}`}>
				{getMessage('fun')}
			</i>
		</div>
		<Footer/>
	</>;
}

export default About;