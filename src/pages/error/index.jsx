import { Link } from 'react-router-dom';

import * as styles from './style.module.scss';
import vectorLogo from '../../assets/logo.svg';

import Header from "../../components/header";
import Footer from '../../components/footer';
import getErrorMessage from '../../data/messages';

function Error({ type = '404' }) {
	return <>
		<Header/>
		<div className={`${styles.container}`}>
			<h1>{type === '404' ? '404 - Not Found' : 'Error'}</h1>
			<h2>
				{type === '404' ? 'The page you are trying to access is invalid or has been moved/expired.' : 'An unknown mishap happened.'}
				{' '}Try going back to <Link to="/">home</Link>.
			</h2>
			<img src={vectorLogo} className={styles.logo} />
			<span className={styles.msg}>(???)</span>
			<span className={styles.msg}>
				{getErrorMessage()}
			</span>
		</div>
		<Footer/>
	</>;
}

export default Error;